import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import MicIcon from "@material-ui/icons/Mic";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const useStyless = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "20%",
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
function MainSearchScreen({ setSearch, SearchTerm, setData ,openVoiceSearch,voiceText,voiceSearch }) {
  const classess = useStyless();

  const [inputValue, setinputValue] = useState(voiceText);

  const handleOnChange = (e) => {
    // e.preventDefault();
    setinputValue(e.target.value);
    // setSearch(inputValue.trim());
  };
  // const handleOnSubmit =  ({SearchTerm}) => {
  //   console.log("submit fired");
  //   setData(SearchTerm);
  // };
  useEffect(() => {
    setSearch(inputValue.trim());
  }, [inputValue, setSearch]);

  return (
    <div className="container" display="flex" justifycontent="center">
      <div className="row">
        <Box mt={4} p={4}>
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
          />
        </Box>

        <Box component="form">
          <IconButton className={classess.iconButton} aria-label="menu">
           
          </IconButton>
          <InputBase
            value={voiceSearch?voiceText: inputValue }
            onChange={handleOnChange}
            className={classess.input}
            placeholder="Search Google "
            inputProps={{ "aria-label": "search google maps" }}
            style={{ borderBottom: "1px solid lightgrey" }}
          />

          <IconButton
            component={Link}
            to="/search"
            type="submit"
            className={classess.iconButton}
            aria-label="search"
            onClick={() => setData(SearchTerm)}
          >
            {(SearchTerm === "" && voiceText ==="" ? false : true) && <SearchIcon />}
          </IconButton>

          <IconButton
            color="primary"
            className={classess.iconButton}
            aria-label="directions"
            onClick={()=>openVoiceSearch()}
          >
            <MicIcon />
          </IconButton>
        </Box>

        <Box>
          <Button style={{ margin: "5px" }} variant="contained" href="https://www.google.com/">
            Google Search
          </Button>
          <Button variant="contained" style={{ margin: "5px" }} href="https://www.google.com/doodles">
            I'm Feeling Lucky
          </Button>
        </Box>
      </div>
     
       </div>
     
    
  );
}

export default MainSearchScreen;
