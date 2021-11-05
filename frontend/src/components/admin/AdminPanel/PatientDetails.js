import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper, makeStyles, Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../helpers/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .subheading": {
      fontWeight: "605",
      color: "black",
      margin: "0.3em",
    },
    "& .infoValue": {
      margin: "0.3em",
    },
  },
}));

const PatientDetails = (props) => {
  const classes = useStyles();

  const patientId = props.match.params.id;

  const [patientData, setPatientData] = useState({ prev_prescs: [] });

  const getPatientData = () => {
    const url = `${BASE_URL}api/admin_m/${patientId}/get-customer/`;
    axios.get(url).then((resp) => {
      setPatientData(resp.data.data);
      console.log(resp.data);
    });
  };

  useEffect(() => {
    getPatientData();
  }, ["input"]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={4}>
          <Typography className="subheading">Patient Name</Typography>
          <Typography className="infoValue">
            {patientData.first_name} {patientData.last_name}
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography className="subheading">Mobile </Typography>
          <Typography className="infoValue">{patientData.mobile}</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography className="subheading">Total Visits</Typography>
          <Typography className="infoValue">
            {patientData.total_visits}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={4}>
          <Typography className="subheading">DOB </Typography>
          <Typography className="infoValue">xx.xx.2005</Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography className="subheading">Email</Typography>
          <Typography className="infoValue">{patientData.email}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <h6 style={{ color: "#0A58CA" }}>Previous Prescriptions</h6>
        <Grid item sm={12} style={{ marginTop: "1em" }}>
          {patientData.prev_prescs.map((prescription) => {
            return <PrescriptionListItem prescription={prescription} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientDetails;

export const PrescriptionListItem = ({ prescription }) => {
  const date = prescription.created_at.split("T")[0];

  return (
    <div>
      <Grid container style={{ marginTop: "1em" }}>
        <Grid item sm={2}>
          Date : - {date}
        </Grid>
        <Grid item sm={2}>
          Age - ......
        </Grid>
        <Grid item sm={3}>
          Note - {prescription.note}
        </Grid>
        <Grid item sm={3}>
          Doctor - {prescription.doctor_name}
        </Grid>

        <Grid item sm={2}>
          <Link to={`/app/patient/presc/${prescription.id}`}>
            <button className="btn btn-success btn-sm me-2">View</button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};
