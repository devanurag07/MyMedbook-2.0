import { makeStyles } from "@material-ui/styles";
import { Autocomplete, Grid, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getCall } from "../../../../../helpers/axiosUtils";
import { BASE_URL } from "../../../../../helpers/constants";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3em",
  },
}));

const Billing = () => {
  const classes = useStyles();
  const [customer, setCustomer] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const searchCustomer = (value) => {
    if (!value.trim().length) {
      setFilteredCustomers([]);
    } else {
      getCall(BASE_URL + `api/users/get-customers/?searchText=${value}`)
        .then((r) => {
          setFilteredCustomers(r.data);
        })
        .catch((er) => {
          setFilteredCustomers([]);
        });
    }
  };

  const autoCompleteChange = (e) => {
    setCustomer(e.value);
  };

  useEffect(() => {
    searchCustomer(customer);
  }, [customer]);
  return (
    <div>
      Billing
      {/* Form */}
      <Paper className={classes.root}>
        <Grid container>
          <Grid container>
            <Grid xs={4} item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={4} item>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={filteredCustomers}
                sx={{ width: 300 }}
                size="small"
                getOptionLabel={(option) => option.first_name}
                onChange={(event, value) => {
                  console.log(value);
                }}
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      label="Movie"
                      onChange={(e) => {
                        const value = e.target.value;
                        setCustomer(value);
                      }}
                    />
                  );
                }}
              />
            </Grid>
            <Grid xs={4} item>
              <TextInput></TextInput>
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={4} item></Grid>
            <Grid xs={4} item></Grid>
            <Grid xs={4} item></Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Billing;
