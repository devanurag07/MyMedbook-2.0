import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import IconButton from "@mui/material/IconButton";
import { BASE_URL } from "../../../helpers/constants";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .valueBox": {
      minHeight: "20vh",
      border: "1px solid gray",
      borderRadius: "0.2em",
    },
    "& .infoTitle": {
      color: "black",
    },
    "& .medDetails": {
      padding: "1em",
    },
  },
}));

const PatientPrescDetail = (props) => {
  const presc_id = props.match.params.id;

  const classes = useStyles();

  const [prescriptionData, setPrescriptionData] = useState({
    prescription_list: [],
  });

  const getPrescriptionData = () => {
    const url = `${BASE_URL}api/admin_m/${presc_id}/get-prescription/`;
    axios.get(url).then((resp) => {
      setPrescriptionData(resp.data.data);
      console.log(resp.data.data);
    });
  };

  useEffect(() => {
    getPrescriptionData();
  }, ["input"]);

  return (
    <div>
      <Grid container className={classes.root} spacing={3}>
        <Grid item sm={12}>
          <h6>Dr . {prescriptionData.doctor_name}</h6>

          <Typography className="infoTitle">Purpose Of Visit</Typography>
          <Typography className="valueBox"></Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography className="infoTitle">Symptoms</Typography>
          <Typography className="valueBox"></Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography className="infoTitle">Notes from Doctor</Typography>
          <Typography className="valueBox">{prescriptionData.note}</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={5}>
          <h6>Prescription</h6>
          {prescriptionData.prescription_list.map((prescription) => {
            return <MedicineListItem medicine={prescription} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientPrescDetail;

const useStyles2 = makeStyles((theme) => ({
  root: {},
  medDetails: {
    border: "1px solid gray",
    color: "black",
    padding: "1em",
  },
}));

export const MedicineListItem = ({ medicine }) => {
  const [show, setShow] = useState(false);
  const classes = useStyles2();

  console.log(medicine);
  const toogle = () => {
    setShow(!show);
  };

  const styles = {
    display: show ? "block" : "none",
    color: "black",
  };

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#E0F7FB",
    padding: "0.2em",
  };
  return (
    <div className="medlist">
      <Grid container>
        <Grid
          item
          sm={5}
          style={{
            background: "#E0F7FB",
            alignItems: "center",
            display: "flex",
            padding: "0.2em",
          }}
        >
          <Typography>Medicine 1 </Typography>
        </Grid>
        <Grid item sm={5} style={boxStyle}>
          <Typography> Drug To Taken </Typography>
        </Grid>
        <Grid
          item
          sm={2}
          style={{
            background: "#E0F7FB",
            alignItems: "flex-end",
            display: "flex",
            justifyContent: "flex-end",
            padding: "0.2em",
          }}
        >
          <IconButton onClick={toogle}>
            {show ? (
              <ArrowDropUpIcon fontSize="medium" />
            ) : (
              <ArrowDropDownIcon fontSize="medium" />
            )}
          </IconButton>
        </Grid>
      </Grid>
      <Grid container style={styles} className={classes.medDetails}>
        <Grid item sm={12}>
          <Typography style={styles}>
            Medicine Name : -- {medicine.name}
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography style={styles}>
            {" "}
            Direction To Intake -- {medicine.drug_to_taken}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
