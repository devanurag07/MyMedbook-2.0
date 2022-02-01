import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCall } from "../../../../../helpers/axiosUtils";
import { BASE_URL } from "../../../../../helpers/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },

  daysSelector: {
    display: "flex",
    justifyContent: "space-between",
    "& .day": {
      padding: "1em",
    },
  },

  timeslots: {
    display: "flex",
    flexWrap: "wrap",
    "& .timeslot": {
      padding: "0.4em 1.3em",
      background: "#add8e6a1",
      color: "#2387c3",
      marginRight: "1em",
      fontWeight: "405",
      fontSize: "0.9em",
      flex: "1 1 0px",
      marginTop: "1em",
      textAlign: "center",
    },
  },
}));

const DayTimeSlots = () => {
  const classes = useStyles();

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [selectedDay, setSelectedDay] = useState("");
  const [timeslots, setTimeSlots] = useState([]);

  const getDayTimeSlots = () => {
    getCall(BASE_URL + "api/appointment/daytimeslots/", {
      params: {
        day: selectedDay,
      },
    }).then((resp) => {
      if (resp.status == 200) {
        if (resp.data) {
          let timeslots = resp.data.timeslots;
          timeslots = timeslots ? timeslots : [];
          setTimeSlots(timeslots);
          console.log(timeslots);
        }
      }
    });
  };

  useEffect(() => {
    if (selectedDay !== "") {
      getDayTimeSlots();
    }
  }, [selectedDay]);

  return (
    <div>
      <Paper className={classes.root}>
        <h6 className="primary-font-color mt-3 mb-3">Day Wise TimeSlots</h6>

        <div className={classes.daysSelector}>
          {days.map((day) => {
            return (
              <div
                className="day"
                style={
                  selectedDay == day
                    ? { background: "#0d6efd", color: "white" }
                    : {}
                }
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </div>
            );
          })}
        </div>

        <h6 className="primary-font-color mt-3 mb-3">TimeSlots</h6>

        <div className={classes.timeslots}>
          {timeslots.map((timeslot, index) => {
            return <div className="timeslot">{timeslot.start_time}</div>;
          })}
        </div>
      </Paper>
    </div>
  );
};

export default DayTimeSlots;
