import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MDQTest from './MDQTest';
import HeroUnit from '../HeroUnit';
import Trend from './trend'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
  },
  moodTrendPlotContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
}))

const pageData = {
  heading: 'Account',
  subheading: 'Manage your account here'
};


const Account = () => {
  const classes = useStyles();

  return (
    <>
      <HeroUnit data={pageData} />
      <div className={classes.moodTrendPlotContainer}>
        <div style={{width: '500px', height: '300px' }}>
          <Trend />
        </div>
      </div>
    </>
  )
}

export default Account;
