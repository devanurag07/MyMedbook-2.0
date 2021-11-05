import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../helpers/constants";

const MyRecords = () => {
  const [records, setRecords] = useState([]);

  const getPatientData = () => {
    const url = `${BASE_URL}api/userpanel/get-myrecords/`;
    axios.get(url).then((resp) => {
      setRecords(resp.data);
      console.log(resp.data);
    });
  };

  useEffect(() => {
    getPatientData();
  }, ["input"]);

  return (
    <div>
      MyRecords
      {records.map((prescription) => {
        return <PrevRecordItem prescription={prescription} />;
      })}
    </div>
  );
};

export default MyRecords;

const PrevRecordItem = ({ prescription }) => {
  const date = prescription.created_at.split("T")[0];

  return (
    <div>
      <Grid container>
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
