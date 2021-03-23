import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import RoomIcon from "@material-ui/icons/Room";
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./header.css";
import { Link } from "@material-ui/core";
import DataShow from "./DataShow";
import { Redirect } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function SearchSubHeader({SearchTerm ,searchData ,setData}) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  // const Data = searchData.data.items

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // if (!searchData) {
  //   return <Redirect to='/'/>;
  // }

  return (
    
    <div className={classes.root} style={{paddingLeft:"30px",paddingRight:"10px"}}>
      <AppBar
        position="static"
        color="default"
        style={{
          boxShadow: "none",
          backgroundColor: "white",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <Tabs
          style={{ fontSize: "0.5rem" }}
          alignItems="center"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            label="All"
            // alignItems="center"
            icon={<SearchIcon  />}
            {...a11yProps(0)}
          />

          <Tab
            label="Vedio"
            icon={<OndemandVideoIcon  />}
            {...a11yProps(1)}
          />
          <Tab label="News" icon={<AnnouncementIcon />} {...a11yProps(2)} />
          <Tab label="Maps" icon={<RoomIcon />} {...a11yProps(3)} />
          <Tab label="Images" icon={<ImageIcon />} {...a11yProps(4)} />
          <Tab label="Shopping" icon={<ShoppingCartIcon />} {...a11yProps(5)} />
          <Tab label="" icon={<MoreVertIcon />} {...a11yProps(6)} />

          <div display="inline-block" style={{fontSize:".85rem"}} >
        <ul >
          <Link style={{marginRight :"5px",color:"grey"}}>Setting</Link>
          <Link style={{marginLeft :"5px",color:"grey"}}>Tools</Link>
        </ul>
      </div>
        </Tabs>
        
      </AppBar>

      <TabPanel value={value} index={0}>
        
        {console.log(searchData)} 
        
          { <p className="small font-weight-light">
            About {searchData.searchInformation.formattedTotalResults} results (
            {searchData.searchInformation.formattedSearchTime}
            seconds){' '}
          </p>}
        {(searchData.items).map((value,index)=>{
            return(
                <DataShow key = {value.htmlTitle + value.displayLink} displayLink={value.displayLink} formattedUrl = {value.formattedUrl}
                htmlTitle={value.htmlTitle} htmlSnippet={value.htmlSnippet} />)
        })}   
       
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      
    </div>
    );
}

export default SearchSubHeader;
