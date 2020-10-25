import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    // display: "flex",
    marginBottom: "10px",
    maxWidth: "500px",
  },
  cardDetails: {
    flex: 1,
  },
});

const ReminderCard = (props) => {
  const classes = useStyles();
  const { reminder_data } = props;

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {reminder_data.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {reminder_data.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {reminder_data.description}
            </Typography>
          </CardContent>
        </div>
        {reminder_data.facebook_message ? (
          <CardActions>
            <Button align="right" size="small" color="primary">
              send a facebook message
            </Button>
          </CardActions>
        ) : null}
      </Card>
    </>
  );
};

export default ReminderCard;
