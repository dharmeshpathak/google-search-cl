import React,{useState} from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";

import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";
const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      width: "20% !important ",
    },
  },
  main1: {
    [theme.breakpoints.down("sm")]: {
      width: "100%  !important ",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    display: "flex",
    position: "relative",
    borderRadius: "40px",
    border: "1px solid lightgrey",

    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      border: "none",
      boxShadow: "0px 0px 2px 2px lightgrey",
    },
    marginRight: theme.spacing(2),
    marginLeft: "10px",
    width: "40%",
    marginTop: "5px",

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "40%",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "20%",
  },
  iconButton: {
    padding: 10,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "relative",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "95%",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function SearchHeader({ SearchTerm, setSearch,setData }) {
  const classes = useStyles();
  const [inputValue, setinputValue] = useState(SearchTerm);
  const handleOnChange = (e) => {
    setinputValue(e.target.value);
    //  setSearch(inputValue.trim());
  };
  const handleOnSubmit = (term)=>{
    // e.preventDefault();
    
     setSearch(term.trim());
     console.log(SearchTerm)
    //  setData(term);

  }
  const handleOnClick= (term)=>{
     handleOnSubmit(term)
     console.log("log from onclick",SearchTerm);
    const term1 = SearchTerm
     setData(term1)

  }
  
  // useEffect(() => {
  //   setSearch(inputValue.trim());
  // }, [inputValue, setSearch]);
  
  
  return (
    <div className={classes.grow} display="flex">
      <AppBar
        position="fixed"
        top="0"
        style={{ background: "#ffff", color: "black", boxShadow: "none" }}
      >
        <Toolbar>
          <Link to="/" style={{ width: "10%" }} className={classes.main}>
            <img
              className={classes.main1}
              component={Box}
              style={{ width: "90%" }}
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
          </Link>

          <Box
            component="form"
            className={classes.search}
            justifyContent="flex-end"
            alignItems="center"
          >
            <InputBase
              style={{ width: "100%", paddingRight: "0" }}
              
              onChange={handleOnChange}
              value = {inputValue}
              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />

            <IconButton
            
            onClick={() => handleOnClick(inputValue)}

              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >{
              (inputValue.trim() !== ""?true:false) && <SearchIcon
                style={{ color: "grey", marginRight: "4px", cursor: "pointer" }}
              />
            }
              
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <MicIcon style={{ color: "blue" }} />
            </IconButton>
          </Box>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <AppsIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchHeader;
