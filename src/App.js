import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import { useState } from "react";

function App() {
  const [SpinLoader, setSpinLoader] = useState(false);
  const [SearchData, setSearchData] = useState(null);
  return (
    <Router basename="/base">
      <div className="App">
        <Navbar SearchData={SearchData} setSearchData={setSearchData} />
        {SpinLoader && <Loader />}
        <Switch>
          <Route exact path="/base">
            <News
              key="general"
              category="general"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              category="business"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              category="entertainment"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/general">
            <News
              key="general"
              category="general"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/health">
            <News
              key="health"
              category="health"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/science">
            <News
              key="science"
              category="science"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/sports">
            <News
              key="sports"
              category="sports"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              category="technology"
              setSpinLoader={setSpinLoader}
              SpinLoader={SpinLoader}
              SearchData={SearchData}
              setSearchData={setSearchData}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
