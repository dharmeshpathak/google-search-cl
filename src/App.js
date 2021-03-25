import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainSearchScreen from "./components/MainSearchScreen";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchScreen from "./components/SearchScreen";
import { SearchData } from "./api/GoogleSearch";
import Footer from "./components/Footer";

function App() {
  const [SearchTerm, setSearchTerm] = useState("");
  const [searchData, setsearchData] = useState([]);
  const setSearch = async (term) => {
    setSearchTerm(term);
    
  };
  const setData = async (term) => {
    console.log("in set data of app,js");
    const searched = await SearchData(term);
    await  setsearchData(searched);
    // console.log(searchData)
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Navbar />
              <MainSearchScreen
                SearchTerm={SearchTerm}
                setSearch={setSearch}
                setData={setData}
              />
            </div>
          </Route>

          {SearchTerm !== "" ? (
            <Route
              exact
              path={"/search"}
              component={() => (
                <SearchScreen
                  searchData={searchData}
                  setSearch={setSearch}
                  SearchTerm={SearchTerm}
                  setData={setData}
                />
              )}
            />
          ) : null}
          <Redirect to="/" />
        </Switch>
       
      </Router>
      
    </>
  );
}

export default App;
