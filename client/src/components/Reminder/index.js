import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroUnit from '../HeroUnit';
import ReminderCard from './ReminderCard';

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
  cardsBox: {
  },
  cardsContainer: {
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    // direction: 'column',
  }
}))

const pageData = {
  heading: 'Reminders',
  subheading: 'Your reminders for a healthy work-from-home environment'
};

const reminder_data = [
  {
    title: "Do you want to talk to someone?",
    date: "Today",
    description: "Hey, Jim. Your mood hasn't been great lately. You haven't talked to Pam in a while. Want to send your friend a Facebook message?",
    facebook_message: true,
  },
  {
    title: "Prank Dwight",
    date: "Recurring; Everyday at 2:00pm",
    description: "Bears. Beets. Battlestar Galactica.",
  },
  {
    title: "Eat lunch",
    date: "Recurring; Everyday at 12:00pm",
    description: "Time to eat lunch!",
  },
  {
    title: "Stand up and stretch",
    date: "Recurring; Everyday; every 30 minutes",
    description: "Every 30 minutes, stand up and stretch.",
  }
];

const Reminder = () => {
  const classes = useStyles();

  return (
    <>
      <HeroUnit data={pageData} />
      <div className={classes.cardsContainer}>
        <Box className={classes.cardsBox}>
          {reminder_data.map((data) => <ReminderCard reminder_data={data} />)}
        </Box>
      </div>
    </>
  );
}

export default Reminder;
