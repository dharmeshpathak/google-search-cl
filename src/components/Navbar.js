import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Box } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div component={Box}  className={classes.root}>
      <AppBar component={Box} position="fixed" display="flex" style={{ background: '#ffff' ,boxShadow:"none"}} >
        <Toolbar component={Box} justifyContent="flex-end" color="black">
          <Button  color="inherit">
            Gmail
          </Button>
          <Button style={{ fontFamily: "calibri" }} >
            Image
          </Button>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            
          >
            <AppsIcon />
          </IconButton>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
