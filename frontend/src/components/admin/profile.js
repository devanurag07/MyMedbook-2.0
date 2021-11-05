import React, { Component } from "react";
import { Route, useLocation, Redirect } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SmartTable from "../../ui/smart-table";
import { AvForm, AvInput } from "availity-reactstrap-validation";
import { setBData } from "../../redux/actions";
import { connect } from "react-redux";
import "../../assets/scss/style.scss";
import { postCall, putCall, getCall } from "../../helpers/axiosUtils";
import { BASE_URL } from "../../helpers/constants";
import { toast } from "react-toastify";
import { loginUserSuccess } from "../../redux/actions";

/*
 customer name, address, contact no, email, a field to enter prescription, extra note if necessary
*/

class Profile extends Component {
  recordPerPage = 5;
  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.state = {
      formValues: this.props.user,
    };
    console.log(this.props.user);
    this.props.setBData([
      {
        label: "App",
        link: "",
        active: false,
      },
      {
        label: "Profile",
        link: "",
        active: true,
      },
    ]);
  }

  onFileChange = (event) => {
    this.setState({
      fileDataList: {
        [event.target.id]: event.target.files[0],
        ...this.state.fileDataList,
      },
    });

    console.log(this.state);
  };
  notify = () => toast("Profile updated !");
  UNSAFE_componentWillMount() {
    //this.props.fetchCategoryData();
    //this.props.fetchParentCategoryData();
    /* if (this.props.match && this.props.match.params && this.props.match.params.id) {
            this.getQueueDetails(this.props.match.params.id)
        } */
  }
  submitHandler = (event, values) => {
    event.preventDefault();
    let formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    if (this.state.fileDataList) {
      for (let filename in this.state.fileDataList) {
        formData.append(
          filename,
          this.state.fileDataList[filename],
          this.state.fileDataList[filename].name
        );

        console.log(formData);
      }
    }
    postCall(BASE_URL + `api/users/update-profile/`, formData).then((r) => {
      this.props.loginUserSuccess(r.data);
      this.notify();
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row mt-2 p-3">
          <div className="col">
            <h4 className="">Profile</h4>
            <AvForm onValidSubmit={this.submitHandler}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="required">Name</label>
                    <AvInput
                      bsSize="sm"
                      type="text"
                      name="first_name"
                      className="form-control"
                      value={this.props.user ? this.props.user.first_name : ""}
                      required
                      placeholder="Please enter name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="required">Email</label>
                    <AvInput
                      readOnly
                      bsSize="sm"
                      type="text"
                      name="email"
                      className="form-control"
                      value={this.props.user ? this.props.user.email : ""}
                      required
                      placeholder="Please enter email"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="required">Mobile</label>
                    <AvInput
                      bsSize="sm"
                      type="text"
                      value={this.props.user ? this.props.user.mobile : ""}
                      name="mobile"
                      className="form-control"
                      required
                      placeholder="Please enter mobile"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Clinic Address</label>
                    <AvInput
                      type="textarea"
                      name="address_line1"
                      value={
                        this.props.user ? this.props.user.address_line1 : ""
                      }
                      className="form-control"
                      placeholder="Please enter comment"
                    />
                  </div>
                </div>
                {this.props.user && this.props.user.role_name == "Doctors" && (
                  <React.Fragment>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="required">
                          Doctor Registration No.
                        </label>
                        <AvInput
                          bsSize="sm"
                          type="text"
                          value={
                            this.props.user
                              ? this.props.user.doctor_registeration_no
                              : ""
                          }
                          name="doctor_registeration_no"
                          className="form-control"
                          required
                          placeholder="Please enter your qualifications no"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="required">
                          Clinic Registration No.
                        </label>
                        <AvInput
                          bsSize="sm"
                          type="text"
                          value={
                            this.props.user
                              ? this.props.user.clinic_registeration_no
                              : ""
                          }
                          name="clinic_registeration_no"
                          className="form-control"
                          required
                          placeholder="Please enter clinic registration no"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="file"
                          id="agreement_file"
                          onChange={this.onFileChange}
                          style={{ fontSize: "13px" }}
                        />
                        <a href={this.props.user.agreement_file}>
                          Agreement File
                        </a>
                      </div>
                      <div className="form-group">
                        <input
                          type="file"
                          id="degree_certificate"
                          onChange={this.onFileChange}
                          style={{ fontSize: "13px" }}
                        />

                        <a href={this.props.user.degree_certificate}>
                          Degree Certificate
                        </a>
                      </div>
                      <div className="form-group">
                        <input
                          type="file"
                          id="doctor_registration"
                          style={{ fontSize: "13px" }}
                          onChange={this.onFileChange}
                        />
                        <a href={this.props.user.doctor_registration}>
                          Doctor Registeration
                        </a>
                      </div>
                      <div className="form-group">
                        <input
                          type="file"
                          style={{ fontSize: "13px" }}
                          id="clinic_address_proof"
                          onChange={this.onFileChange}
                        />

                        <a href={this.props.user.clinic_address_proof}>
                          Clinic Address Proof
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Clinic name</label>
                        <AvInput
                          type="text"
                          bsSize="sm"
                          name="clinic_name"
                          value={
                            this.props.user ? this.props.user.clinic_name : ""
                          }
                          className="form-control"
                          placeholder="Please enter clinic_name"
                        />
                      </div>
                    </div>
                  </React.Fragment>
                )}
                <div className="col-lg-12">
                  <Button color="primary" className="float-end" type="submit">
                    Update
                  </Button>
                </div>
              </div>
            </AvForm>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  const { user } = state.Auth;
  return { user };
};
export default connect(mapStateToProps, { setBData, loginUserSuccess })(
  Profile
);
