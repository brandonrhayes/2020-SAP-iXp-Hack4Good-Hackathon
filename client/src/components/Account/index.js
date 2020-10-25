import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MDQTest from './MDQTest';
import HeroUnit from '../HeroUnit';
import Trend from './trend'

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  heading2: {
    marginBottom: '20px',
  },
  link: {
    textDecoration: "none",
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
      <Box align='center' width='500px' height='500px' >
        <Trend width="100%" height="100%"/>
        <MDQTest />
      </Box>
    </>
  )
}

export default Account;
