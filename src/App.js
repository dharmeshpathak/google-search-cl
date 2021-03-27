import "./App.css";
import {recognition} from './api/voiceRecognation'

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
import VoiceSearch from "./components/voice/VoiceSearch"

function App() {
  const [SearchTerm, setSearchTerm] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [voiceSearch, setvoiceSearch] = useState(false);
  const [voiceText, setvoiceText] = useState("")

    const setSearch = async (term) => {
    setSearchTerm(term);
    
  };
  const setData = async (term) => {
    // console.log("in set data of app,js");
    const searched = await SearchData(term);
    await  setsearchData(searched);
    // console.log(searchData)
  };

  const openVoiceSearch = () => {
    setvoiceSearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      // const {transcript} = event.results[0][0];
      // if(transcript !== null || transcript !== "" || transcript !== " "){
        // setvoiceSearch(false)
        // setvoiceText(transcript)
        // setSearchTerm(transcript)
        // setSearch(transcript)
        var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      setvoiceText( transcript);
      setSearchTerm( transcript);
      setSearch( transcript);

      // }
      
    };
  };
const closeVoiceSearch=()=>{
  setvoiceSearch(false);
}

  return (
    <>
    {voiceSearch?(  <VoiceSearch closeVoiceSearch={closeVoiceSearch} voiceText= {voiceText}   />):null}
  
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Navbar />
              <MainSearchScreen
                SearchTerm={SearchTerm}
                setSearch={setSearch}
                setData={setData}
                openVoiceSearch = {openVoiceSearch}
                voiceText= {voiceText}
                voiceSearch = {voiceSearch}
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
                  openVoiceSearch = {openVoiceSearch}
                />
                
              )}
            />
          ) : null}
          <Redirect to="/" />
        </Switch>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
