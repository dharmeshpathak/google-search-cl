import React from "react";
import Loader from "react-loader-spinner";

import SearchHeader from "./searchComponents/SearchHeader";
import SearchSubHeader from "./searchComponents/SearchSubHeader";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function SearchScreen({ SearchTerm, searchData, setData, setSearch,openVoiceSearch }) {
  return (
    <div>
      <SearchHeader
        setSearch={setSearch}
        SearchTerm={SearchTerm}
        setData={setData}
        openVoiceSearch = {openVoiceSearch}
      />

      {searchData.length !== 0 ? (
        <SearchSubHeader
          SearchTerm={SearchTerm}
          searchData={searchData}
          setData={setData}
        />
      ) : (
        console.log(" ")
      )}
      {searchData.length !== 0 ? null : (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <Loader type="Circles" color="blue" height={200} width={200} />
        </div>
      )}

      {/* {console.log(searchData)} */}
    </div>
  );
}

export default SearchScreen;
