import React, { useEffect, useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./News.css";
import Loader from "../Loader/Loader";
const News = (props) => {
  const [NewsData, setNewsData] = useState("");
  const [page, setpage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [totalResult, settotalResult] = useState(0);
  const [FilterArticles, setFilterArticles] = useState([]);
  const [notFound, setnotFound] = useState(false);
  let res = Math.ceil(NewsData?.totalResults / 20);

  const addFilterData = () => {
    setFilterArticles(
      articles
        ?.map((e) => {
          if (e.title.toLowerCase().includes(props?.SearchData)) {
            return e;
          } else {
            return "";
          }
        })
        .filter((e) => e !== "")
    );
  };

  // ------------------------not for infiniteScroll------------------
  // const handlePreview = async () => {
  //   props?.setSpinLoader(true);
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     props?.category
  //   }&apiKey=f56b2c4970814ba4bf8f6cc7496e57c6&pageSize=20&page=${page - 1}`;
  //   let data = await fetch(url);
  //   let response = await data.json();
  //   props?.setSpinLoader(false);

  //   setNewsData(response);
  //   setpage(page - 1);
  // };
  // const handleNext = async () => {
  //   props?.setSpinLoader(true);
  //   let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
  //     props?.category
  //   }&apiKey=f56b2c4970814ba4bf8f6cc7496e57c6&pageSize=20&page=${page + 1}`;
  //   let data = await fetch(url);
  //   let response = await data.json();
  //   props?.setSpinLoader(false);
  //   setNewsData(response);
  //   setpage(page + 1);
  // };
  // ------------------------------------------------------------------------------------
  const fetchData = async (page) => {
    props?.setSpinLoader(true);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props?.category}&apiKey=f56b2c4970814ba4bf8f6cc7496e57c6&pageSize=20&page=${page}`;
    let data = await fetch(url);
    let response = await data.json();
    console.log(response);
    props?.setSpinLoader(false);
    setNewsData(response);
    setArticles(response?.articles);
    settotalResult(response?.totalResults);
  };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      props?.category
    }&apiKey=f56b2c4970814ba4bf8f6cc7496e57c6&pageSize=20&page=${page + 1}`;
    let data = await fetch(url);
    let response = await data.json();
    // setNewsData(NewsData?.articles?.concat(response?.articles));
    setArticles(articles.concat(response?.articles));
    setpage(page + 1);
  };

  const checknotFound = () => {
    if (FilterArticles.length === 0 && props?.SearchData?.length > 0) {
      setnotFound(true);
    } else if (FilterArticles.length > 0) {
      setnotFound(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    addFilterData();
  }, [props?.SearchData]);
  useEffect(() => {
    checknotFound();
  }, [notFound,FilterArticles.length]);
  let articleslength=articles?.length
  return (
    <div className="container my-3">
      <InfiniteScroll
        dataLength={articleslength} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={articleslength !== totalResult}
        loader={<Loader />}
      >
        <div className="row">
          {FilterArticles.length > 0 &&
            FilterArticles?.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    publishedAt={e.publishedAt}
                    title={e.title ? e.title.slice(0, 40) : ""}
                    description={
                      e.description ? e.description.slice(0, 40) : ""
                    }
                    url={e.url}
                    urlToImage={e.urlToImage}
                  />
                </div>
              );
            })}
          {FilterArticles.length === 0 &&
            !notFound &&
            articles?.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    publishedAt={e.publishedAt}
                    title={e.title ? e.title.slice(0, 40) : ""}
                    description={
                      e.description ? e.description.slice(0, 40) : ""
                    }
                    url={e.url}
                    urlToImage={e.urlToImage}
                    />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
            {notFound && <div>Result Not Found</div>}

      {/* Not for infiniteScroll */}
      {/* {!props?.SpinLoader && (
        <div className="button d-flex justify-content-between">
          <button
            disabled={page === 1}
            className="btn btn-sm btn-primary"
            onClick={handlePreview}
          >
            Preview
          </button>
          <button
            disabled={page === res}
            className="btn btn-sm btn-primary"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )} */}
    </div>
  );
};

export default News;
