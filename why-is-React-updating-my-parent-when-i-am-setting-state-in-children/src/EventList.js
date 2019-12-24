import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  CardActions,
  Typography
} from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";
import { EditEvents } from "./EventListEdit.js";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      fontFamily: "Noto Sans SC"
    }
  },
  paper: {
    backgroundColor: "#ffffffdd",
    border: "2px solid #3993de33",
    borderRadius: 20,
    padding: 10
  },
  typography: {
    fontFamily: "Noto Sans SC"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  adminbuttons: {
    backgroundColor: "#3993de",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2466aa"
    }
  },
  cardheader: {
    "& > div > .MuiCardHeader-title": { fontFamily: "Noto Sans SC" }
  },
  card: {
    marginBottom: 10,
    backgroundColor: "#f7f7f733",
    border: "1px solid #3993de33"
  }
}));

export function EventList({ event_detail, set_route }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState();

  // console.log(event_detail);

  function set_edit(index) {
    setEditIndex(index);
    set_open();
  }

  function set_open() {
    setOpen(!open);
  }

  return (
    <Paper className={classes.paper}>
      {event_detail
        ? event_detail.map((list, index) => {
            return (
              <Card key={"event-" + index} className={classes.card}>
                <CardHeader className={classes.cardheader} title={list.title} />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item md={9} xs={12}>
                      <Typography
                        variant="body1"
                        className={classes.typography}
                      >
                        {list.summary}
                      </Typography>
                    </Grid>
                  </Grid>
                  {event_detail[index].event_date.map(
                    (event_session, index) => {
                      return (
                        <Typography variant="body1" key={"event_list1" + index}>
                          {event_session.description}&nbsp;
                          {event_session.date}&nbsp;
                          {event_session.limit}&nbsp;
                        </Typography>
                      );
                    }
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => set_route("event_detail", index)}
                  >
                    View Details
                  </Button>

                  <Button
                    className={classes.adminbuttons}
                    variant="contained"
                    onClick={() => set_edit(index)}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            );
          })
        : ""}
      <EditEvents
        open={open}
        set_open={set_open}
        form_event_detail={event_detail[editIndex]}
      />
    </Paper>
  );
}
