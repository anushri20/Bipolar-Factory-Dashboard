import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.background,
      border: 0,
      fontSize: 16,
      borderRadius: 7,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 158,
      padding: 20,
    //   padding: '30px 30px',
      margin: 10,
      width: 300,
      
    },
  }));
  
  function DeepChild() {
    const classes = useStyles();
  
    return (
        <React.Fragment >
            
        <div style={{display: 'flex'}} >
      <div className={classes.root} style={{background: 'linear-gradient(0.25turn, #3c4d73, #6e93e7)'}}>
       <h6> Visitors</h6>
        <h3>19.7K</h3>
        176,987 Target Users
      </div>
       <div className={classes.root} style={{background: 'linear-gradient(0.25turn, #995b4d, #f06d06)'}}>
       <h6> Visitors</h6>
        <h3>19.7K</h3>
        176,987 Target Users
      </div>
      </div>
      <div style={{display: 'flex'}} >
      <div className={classes.root} style={{background: 'linear-gradient(45deg, #81568e, #8622a4)'}}>
       <h6> Visitors</h6>
        <h3>19.7K</h3>
        176,987 Target Users
      </div>
      <div className={classes.root} style={{background: 'linear-gradient(0.25turn, #8d3d58, #c13262)'}}>
       <h6> Visitors</h6>
        <h3>19.7K</h3>
        176,987 Target Users
      </div>
      </div>
      
     
      </React.Fragment>
    );
  }

const theme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  };
  const theme2 = {
    background: ' linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
  };
const cards = () => {
    return (
        <ThemeProvider theme={theme}>
            
           <DeepChild/>
           
        </ThemeProvider>
       
            
        
    )
}

export default cards
