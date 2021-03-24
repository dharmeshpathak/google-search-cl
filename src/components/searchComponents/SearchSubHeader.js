import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./header.css";
import { Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import RoomIcon from "@material-ui/icons/Room";
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from "react-router-dom"
import DataShow from "./DataShow";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="MuiTabs-fixed"
      role="tabpanel"
      hidden={value !== index}
      id={`fixed-auto-tabpanel-${index}`}
      aria-labelledby={`fixed-auto-tab-${index}`}
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

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid none",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    paddingLeft:'10%'
  },
  padding: {
    padding: theme.spacing(0.1),
  },
  demo1: {
    backgroundColor: "white",
    color: "grey",
    // scrollBehavior:"smooth",
     overflow:"hidden",
  },
  demo2: {
    backgroundColor: "white",
  },
}));

export default function SearchSubHeader({SearchTerm ,searchData ,setData}) {
  const {items,searchInformation}=searchData
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs
          className="MuiTabs-fixed"
          value={value}
          onChange={handleChange}
          style={{ fontSize: "0.5rem", width: "100%" ,color:"grey !important"}}
          alignItems="center"
          aria-label="ant example"
        >
          <AntTab
            label="All"
            icon={<SearchIcon />}
            {...a11yProps(0)}
           
          />
          <AntTab label="Vedio"
            icon={<OndemandVideoIcon  />}
            {...a11yProps(1)} />
          <AntTab label="News" icon={<AnnouncementIcon />} {...a11yProps(2)}  />
          <AntTab label="Maps" icon={<RoomIcon />} {...a11yProps(3)} />
          <AntTab label="Images" icon={<ImageIcon />} {...a11yProps(4)}  />
          <AntTab label="Shopping" icon={<ShoppingCartIcon />} {...a11yProps(5)}  />
          <AntTab label="More" icon={<MoreVertIcon />} {...a11yProps(6)}  />
          <div display="inline-block" style={{fontSize:".85rem",textDecoration:"none"}} >
        <ul >
          <Link style={{marginRight :"5px",color:"grey",textDecoration:"none"}}>Setting</Link>
          <Link style={{marginLeft :"5px",color:"grey",textDecoration:"none"}}>Tools</Link>
        </ul>
      </div>
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
      <div className={classes.demo2}>
        <TabPanel value={value} index={0}>
          {/* {console.log(searchData)}  */}

                  
          { <p className="small font-weight-light" style={{fontSize:"8px !important"}}>
            About {searchInformation.formattedTotalResults} results (
            {searchInformation.formattedSearchTime}
            seconds){' '}
          </p>} 
        {items.map((value,index)=>{
            return(
                <DataShow key = {value.htmlTitle + value.displayLink} displayLink={value.displayLink} formattedUrl = {value.formattedUrl}
                htmlTitle={value.htmlTitle} htmlSnippet={value.htmlSnippet} />)
        })}   
       
        </TabPanel>
        <TabPanel value={value} index={1}>
         <h1>Vedios</h1>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h1>News</h1>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <h1>Maps</h1>
        </TabPanel>
        <TabPanel value={value} index={4}>
         <h1>Images</h1>
        </TabPanel>
        <TabPanel value={value} index={5}>
        <h1>shopping</h1>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <h1>know more</h1>
        </TabPanel>

        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
