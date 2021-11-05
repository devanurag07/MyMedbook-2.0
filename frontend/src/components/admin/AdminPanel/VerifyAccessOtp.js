import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { postCall } from "../../../helpers/axiosUtils";
import { BASE_URL } from "../../../helpers/constants";

const VerifyAccessOtp = (props) => {
  let patient_id = props.match.params.id;
  patient_id = patient_id ? patient_id : 0;

  const [otpValue, setOtpValue] = useState("");

  const verifyOtp = () => {
    postCall(BASE_URL + `api/doctors_m/${patient_id}/verify-otp/`, {
      otp: otpValue,
    }).then((resp) => console.log(resp.data));
  };

  const onOtpChange = (e) => {
    setOtpValue(e.target.value);
  };

  return (
    <div>
      Verify Access {patient_id}
      <Grid container>
        <Grid item sm>
          <TextField
            placeholder="Enter OTP..."
            onChange={onOtpChange}
            value={otpValue}
          />
          <Button variant="contained" color="primary" onClick={verifyOtp}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default VerifyAccessOtp;
