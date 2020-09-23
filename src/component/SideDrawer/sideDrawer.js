import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PieChartIcon from '@material-ui/icons/PieChart';
import TocIcon from '@material-ui/icons/Toc';
import MapIcon from '@material-ui/icons/Map';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './style';
import Graph from './graph';
import Graph2 from './graph2';
import Card from './cards';

import Login from '../Login/Login';
import Register from '../Register/Register';
import HomeFragment from '../HomeFragment';
import Users from '../users/Users';
import {Link} from '@material-ui/core';




export default function SideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [fragment, setfragment] = useState("HOME")

  const loadFragment = () => {
    switch (fragment) {
      case "HOME":
        return <HomeFragment/>
      case "FORM":
        return <Register/>
        case "USERS":
          return <Users/>
      default:
        break;
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
  
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap >
            Clove
          </Typography>
       
          <SearchIcon style={{paddingLeft:"70rem" }} />
          <SettingsIcon style={{ paddingRight:'8px'}} />
          <NotificationsIcon style={{ paddingRight:'8px'}} />
          <AccountCircleIcon style={{ paddingRight:'8px'}} />
          <Typography  noWrap >
            Mandelyn Shane
          </Typography>
          <Link href="/login" to="/login" style={{paddingLeft:'20px', textDecoration:'none', color:'black'}}>Login</Link>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <Typography>Clove</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        
        </div>
        
        <Divider />
        
         
        
        <List>
          <ListItem button onClick= {e=>setfragment("HOME")}>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button onClick= {e=>setfragment("FORM")}>
            <ListItemIcon>
              <InboxIcon/>
              <ListItemText primary="Register" />
            </ListItemIcon>
          </ListItem>

          <ListItem button onClick= {e=>setfragment("USERS")}>
            <ListItemIcon>
              <InboxIcon/>
              <ListItemText primary="Users" />
            </ListItemIcon>
          </ListItem>
          </List>
          {/* {['Dashboard', 'Application', 'Authentication', 'Pages'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              
            </ListItem>
          ))} */}
          
        
        <Divider />
        {/* <List>
          {['Charts', 'Content', 'Utilities'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <PieChartIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Divider/>
        {/* <List>
          {['Components', 'Tables', 'Maps'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <TocIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader}  />
        
        
        {loadFragment()}
        
        
      </main>
    </div>
    </React.Fragment>
  );
}
