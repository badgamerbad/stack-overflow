import React from "react";
import ReactDOM from "react-dom";

import { EventList } from "./EventList.js";

import { Icon, Grid, Fab, Typography, Popper } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";

// import MetaTags from "react-meta-tags";

const ColorCircularProgress = withStyles({
  root: {
    color: "#ff695c"
  }
})(CircularProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  homeButton: {
    background: "url('./img/homeIcon.png') center no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#fff"
  },
  naviButton: {
    float: "right",
    top: 40,
    position: "relative",
    left: "calc(-50% + 26px)" /* or right 50% */
  },
  loginButton: {
    backgroundColor: "#35cc4e",
    color: "#fff",
    marginLeft: 10
  },
  isLoading: {
    float: "right",
    top: 35,
    position: "relative",
    left: "calc(-50% + 88px)" /* or right 50% */
  },
  typography: {
    fontFamily: "Noto Sans SC, san serif"
  }
}));

function App() {
  const [param_event_detail, setParamEventDetail] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [param_event_id, setParamEventId] = React.useState(
    new URLSearchParams(window.location.search).get("event_id")
  ); //temp ID remove later|| "5df6ccc9fddb44313c6e2fd9"
  const [page, setPage] = React.useState({
    name:
      new URLSearchParams(window.location.search).get("page") || "event_detail",
    index: 0
  }); //default page, change later to event_list

  let returnData = [
    {
      _id: "5dff7dd4d1a7962c84e2e2d4",
      title: "TESTER",
      event_date: [
        {
          description: "Test Event 1: 22/02/2019 :00am - 12:00pm",
          date: "2019-02-21T16:00:00.000Z",
          event_session: "evt-1",
          limit: "1000",
          current: {
            no: 1000,
            progress: 0,
            percent: 0,
            style: {
              color: {},
              progress: "primary",
              decoration: {}
            }
          }
        }
      ],
      summary: "this is a summary test",
      description: "this is a description test",
      media: {
        poster: "jingsi-1.jpg",
        youtube: "BQn36TiNn3I"
      },
      venue: {
        link: "https://goo.gl/maps/V8NvmStF3DmJhhF96",
        text: "This is a test venue"
      },
      tag: ["test", "test2"],
      sms: {
        send: false,
        message: ""
      },
      event_id: "5dff7dd4d1a7962c84e2e2d4",
      registered: []
    }
  ];

  React.useEffect(() => {
    getData(param_event_id);
  }, [param_event_id]);

  function set_route(page, param) {
    setPage({ name: page, index: param });
  }

  function getData() {
    setIsLoading(false);
    setParamEventDetail(returnData);
  }

  function event_reload(text) {
    //console.log("Calling from: " + text);
    getData(param_event_id);
  }

  function LoadingCircular() {
    const classes = useStyles();
    return (
      <Grid container justify="center" style={{ marginTop: "20vh" }}>
        <Typography variant="h5" className={classes.typography} align="center">
          感恩他人就是美化自己。
        </Typography>
        <Typography
          variant="body1"
          className={classes.typography}
          align="center"
        >
          <i>~摘錄自證嚴上人靜思語~</i>
          <br />
          <br />
        </Typography>
      </Grid>
    );
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid item md={8} xs={12} className="gridContentMargin">
          {isLoading && <LoadingCircular />}
          <PageLoad
            page={page}
            event_detail={param_event_detail}
            event_reload={event_reload}
            set_route={set_route}
          />
        </Grid>
      </Grid>
    </div>
  );
}

function PageLoad(props) {
  switch (props.page.name) {
    default:
      return (
        <div>
          <EventList {...props} />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
