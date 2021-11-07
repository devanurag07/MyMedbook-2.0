import React, { useEffect, useState } from "react";
import { Paper, Grid, Typography, makeStyles, Button } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getCall, postCall } from "../../../helpers/axiosUtils";
import { BASE_URL } from "../../../helpers/constants";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A58CA",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    "& .text-align-center": {
      textAlign: "center",
    },

    "& .bold-text": {
      fontWeight: "606",
    },
    "& .content-center": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },

  askPermissionBtn: {
    background: "#0A58CA",
    fontWeight: "606",
  },
  mainPaper: {
    minHeight: "63vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

const AskAccessPermission = (props) => {
  let patient_id = props.match.params.id;
  patient_id = patient_id ? patient_id : 0;

  const [patientData, setPatientData] = useState({});

  const classes = useStyles();

  const getPatientData = () => {
    getCall(BASE_URL + `api/doctors_m/${patient_id}/get-customer-info/`).then(
      (resp) => {
        setPatientData(resp.data);
      }
    );
  };

  const askPermission = (customerID) => {
    postCall(BASE_URL + `api/doctors_m/${customerID}/send-accessrequest/`).then(
      (resp) => {
        // this.setState({ accessData: resp.data });\
        props.history.push(`/app/verifyaccess/${customerID}`);
      }
    );
  };
  useEffect(() => {
    getPatientData();
  }, ["inp"]);

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <h2 className="primary-font-color">Patient Details</h2>
        <h6>
          Patient name{" "}
          <span className="bold-text"> {patientData.full_name} </span>
        </h6>
        <Paper className={classes.mainPaper}>
          <Typography
            variant="h6"
            className="text-align-center"
            color="primary"
            style={{ marginTop: "1em", color: "#0A58CA", fontWeight: "505" }}
          >
            You do not have <span className="bold-text">access </span>to patient
            data
          </Typography>
          <div
            className="patient-info content-center"
            style={{ marginTop: "1em", color: "#0A58CA" }}
          >
            <div className="patient-name">
              Name : -{" "}
              <span className="bold-text">{patientData.full_name} </span>
            </div>
            <div className="patient-mob"> Mobile : {patientData.mobile}</div>
          </div>

          <div
            className="btn-container content-center"
            style={{ marginTop: "1em" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.askPermissionBtn}
              onClick={() => askPermission(patient_id)}
            >
              Ask Permission
            </Button>
          </div>
          <Typography
            variant="h6"
            className="text-align-center"
            color="primary"
            style={{ marginTop: "1em", color: "#0A58CA", fontWeight: "505" }}
          >
            You will be able to access patients data only when the <br />
            patients gives you access
          </Typography>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default AskAccessPermission;
