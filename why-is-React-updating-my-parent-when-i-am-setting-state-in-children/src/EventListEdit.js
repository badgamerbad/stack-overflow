import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { Dialog, DialogContent } from "@material-ui/core";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Typography, Icon, Slide } from "@material-ui/core";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      fontFamily: "Noto Sans SC"
    }
  },
  media: {
    position: "relative",
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  mediaDisplay: {
    zIndex: 5,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute"
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
  sectiontitle: {
    fontFamily: "Noto Sans SC",
    color: "#3993de",
    marginBottom: 10,
    marginTop: 10
  },
  saveButton: {
    float: "right"
  },
  appBar: {
    backgroundColor: "#3993de",
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  input: {
    marginBottom: 10,
    "& label": { fontSize: 18, fontFamily: "Noto Sans SC" }
  },
  switch: {
    padding: 5
  },
  gridForm: {
    padding: "18.5px 14px",
    border: "1px solid #3993de33",
    borderRadius: 2,
    marginBottom: 10
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function EditEvents(props) {
  const defaultFormError = {
    title: false,
    event_date: [],
    summary: false,
    description: false,
    media: { poster: false, youtube: false },
    venue: { text: false, link: false },
    tag: false,
    sms: false
  };

  // console.log(JSON.stringify(props));

  const defaultFormError_eventDate = {
    description: false,
    date: false,
    event_session: false,
    limit: false
  };
  const classes = useStyles();
  const [formData, setFormData] = React.useState(null);
  const [formError, setFormError] = React.useState(null);

  React.useEffect(() => {
    if (props.open) {
      resetForm();
    }
  }, [props.open]);

  function resetForm() {
    let error = defaultFormError;
    error.event_date = props.form_event_detail.event_date.map(() => {
      return defaultFormError_eventDate;
    });

    setFormError(error);
    setFormData(props.form_event_detail);
  }

  function discardForm() {
    var answer = window.confirm(
      "Are you sure? This will discard all the changes you have made so far."
    );
    answer && resetForm();
  }

  function saveForm() {
    console.log("saving form");
    // let event_detail = formData;
    // //scrub created key
    // event_detail.event_date.forEach(event_session => {
    //     delete event_session.current
    // });

    // delete event_detail.registered;
  }

  function updateValue(e) {
    let name = e.target.name,
      value = e.target.value,
      param = e.target.dataset.param,
      index = e.target.dataset.index;
    param && !index && (value = { ...formData[name], [param]: value });

    switch (name) {
      case "sms":
        param === "send" && (value[param] = e.target.checked);
        break;
      case "event_date":
        // let array_value = formData[name];
        // array_value[index] = { ...array_value[index], [param]: value };
        // value = array_value;
        break;
      default:
        break;
    }
    setFormData({ ...formData, [name]: value });
  }

  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={() => props.set_edit()}
      TransitionComponent={Transition}
      key={"edit_event"}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => props.set_open()}
            aria-label="close"
          >
            <Icon>close</Icon>
          </IconButton>
          <Typography
            variant="h6"
            className={`${classes.typography} ${classes.title}`}
          >
            Edit Event
          </Typography>
          <Button
            autoFocus
            color="inherit"
            className={classes.saveButton}
            onClick={() => discardForm()}
          >
            <Icon>replay</Icon>&nbsp;&nbsp;Reset
          </Button>
          <Button
            autoFocus
            color="inherit"
            className={classes.saveButton}
            onClick={() => saveForm()}
          >
            <Icon>save</Icon>&nbsp;&nbsp;Save
          </Button>
        </Toolbar>
      </AppBar>

      {formData && (
        <DialogContent style={{ marginTop: 16 }}>
          <Typography variant="h5" className={classes.sectiontitle}>
            Event Info
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="summary"
            label="Summary"
            value={formData.summary}
            error={formError.summary}
            multiline
            className={classes.input}
            onChange={updateValue}
          />

          <Typography variant="h5" className={classes.sectiontitle}>
            Event Session
          </Typography>

          <ArrayForm
            data={formData.event_date}
            updateValue={updateValue}
            name="event_date"
            description="Event Session"
          />
        </DialogContent>
      )}
    </Dialog>
  );
}

function ArrayForm(props) {
  let classes = useStyles();

  function updateArray(data) {
    let arrayData = {
      target: {
        name: props.name,
        value: props.data,
        dataset: { param: undefined }
      }
    };
    switch (data.name) {
      case "event_date":
        data.type === "add" &&
          arrayData.target.value.push({
            description: "",
            date: new Date(),
            limit: 0
          });
        data.type === "remove" && delete arrayData.target.value[data.index];
        data.type === "update" &&
          (arrayData.target.value[data.index][data.param] = data.value);
        break;
      default:
        break;
    }
    props.updateValue(arrayData);
  }

  let returnData = props.data.map((session, index) => {
    return (
      <Grid container spacing={0} key={props.name + index}>
        <Grid item md={1} xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.input}
            style={{ height: 56 }}
            onClick={() =>
              updateArray({
                name: props.name,
                param: "",
                type: "remove",
                value: "",
                index: index
              })
            }
          >
            <Icon>delete</Icon>
          </Button>
        </Grid>
        <Grid item md={7} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Description"
            value={session.description}
            //error={formError.event_date[index].description}
            className={classes.input}
            onChange={e =>
              updateArray({
                name: props.name,
                param: "description",
                type: "update",
                value: e.target.value,
                index: index
              })
            }
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Date"
            value={new Date(session.date).toISOString().substring(0, 10)}
            //error={formError.event_date[index].date}
            className={classes.input}
            onChange={e =>
              updateArray({
                name: props.name,
                param: "date",
                type: "update",
                value: e.target.value,
                index: index
              })
            }
            type="date"
          />
        </Grid>
        <Grid item md={1} xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="limit"
            value={session.limit}
            //error={formError.event_date[index].limit}
            className={classes.input}
            onChange={e =>
              updateArray({
                name: props.name,
                param: "limit",
                type: "update",
                value: e.target.value,
                index: index
              })
            }
            type="number"
          />
        </Grid>
      </Grid>
    );
  });

  return (
    <div>
      {returnData}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() =>
          updateArray({
            name: props.name,
            param: "",
            type: "add",
            value: "",
            index: 0
          })
        }
      >
        <Icon>add</Icon> Add Session
      </Button>
    </div>
  );
}
