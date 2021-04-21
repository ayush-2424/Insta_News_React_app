import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import categories from '../data/category';
import { Height } from '@material-ui/icons';

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft:10,
    paddingRight:5,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer({setCategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
   
  });

  
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );
  
    // return (
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline/>
    //     <Routes/>
    //   </ThemeProvider>
    // );
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h1> &#10066; Catagories</h1>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem style={{height:40,borderRadius:3}} button key={text} onClick={()=>setCategory(text)}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon></MenuIcon>
          {'Menu'} </Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
        
        </React.Fragment>
    </div>
  );
}
