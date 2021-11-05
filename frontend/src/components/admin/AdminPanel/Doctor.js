import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../../helpers/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiGrid-item": {
      marginBottom: "1em",
    },
    "& .infoTitle": {
      fontWeight: "505",
    },
  },
  infoValue: {
    marginTop: "0.4em",
  },
}));

const Doctor = (props) => {
  const classes = useStyles();

  const [doctorData, setDoctorData] = useState({});
  const getDoctorInfo = () => {
    const url_path = `${BASE_URL}api/admin_m/${props.match.params.id}/get-doctor/`;
    axios.get(url_path).then((resp) => {
      setDoctorData(resp.data);
      console.log(resp.data);
    });
  };

  useEffect(() => {
    getDoctorInfo();
  }, ["inpt"]);

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Doctor Name
          </Typography>
          <Typography className={classes.infoValue}>
            {doctorData.full_name}
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Mobile
          </Typography>
          <Typography className={classes.infoValue}>
            {doctorData.mobile}
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Doctor Registration No.
          </Typography>
          <Typography className={classes.infoValue}>A2D23XD3D</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Email ID
          </Typography>
          <Typography className={classes.infoValue}>
            {doctorData.email}
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Doctor Qualifications
          </Typography>
          <Typography className={classes.infoValue}>MBBS</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Clinic Address
          </Typography>
          <Typography className={classes.infoValue}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
            deleniti.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Clinic Name
          </Typography>
          <Typography className={classes.infoValue}>
            {doctorData.clinic_name}
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="subheading2" className="infoTitle">
            Clinic Registration Number
          </Typography>
          <Typography className={classes.infoValue}>Clinic A3DAD</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Doctor;
