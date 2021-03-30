import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { useSelector } from "react-redux";

const Register = () => {
  const history = useHistory();
  const Token = useSelector((state) => state.user.token);

  const BASE_URL = process.env.REACT_APP_SERVER;
  const ADMIN_CREATE = process.env.REACT_APP_ADMIN_REGISTER;

  const [adminPhone, setAdminPhone] = useState();
  const [adminEmail, setAdminEmail] = useState();
  const [adminFirstPassword, setAdminFrstPassword] = useState();
  const [adminSecondPassword, setAdminSecondPassword] = useState();
  const [validData, setValidData] = useState(false);
  const [error, setError] = useState();

  const Register = () => {
    setValidData(true);
    if (
      adminEmail &&
      adminPhone &&
      adminFirstPassword === adminSecondPassword
    ) {
      axios
        .post(
          `${BASE_URL}${ADMIN_CREATE}`,
          {
            email: adminEmail,
            password: adminSecondPassword,
            phone: adminPhone,
            role: document.querySelector("#inputGroupSelect01").value,
          },
          {
            headers: {
              Authorization: `bearer ${Token}`,
            },
          }
        )
        .then((res) => {
          setAdminPhone("");
          setAdminEmail("");
          setAdminFrstPassword("");
          setAdminSecondPassword("");
          history.push("/");
        })
        .catch((err) => {
          setError(err.response.data.errors);
        });
    }
  };
  console.log(error ? error[1] : "");
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create Admin Account</p>
                  {error
                    ? error.forEach((e) => <p className="error">{e.msg}</p>)
                    : ""}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Roles
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>sub-admin</option>
                      <option>editor</option>
                      <option>vendor</option>
                      <option>salesTeam</option>
                      <option>supportTeam </option>
                    </select>
                  </div>{" "}
                  <hr />
                  {error ? error.forEach((e) => <p>{e.msg}</p>) : ""}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      required
                      onChange={(e) => {
                        setAdminPhone(e.target.value);
                      }}
                      required
                      type="number"
                      placeholder="Number"
                      autoComplete="true"
                    />
                  </CInputGroup>
                  {validData && !adminPhone && (
                    <p className="warn">Require PhoneNumber</p>
                  )}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      required
                      onChange={(e) => {
                        setAdminEmail(e.target.value);
                      }}
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </CInputGroup>
                  {validData && !adminEmail && (
                    <p className="warn">Enter Valid Email</p>
                  )}
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      required
                      onChange={(e) => {
                        setAdminFrstPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      required
                      onChange={(e) => {
                        setAdminSecondPassword(e.target.value);
                      }}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  {!(adminFirstPassword === adminSecondPassword) && (
                    <p className="warn">Password Not Matched</p>
                  )}
                  <CButton onClick={Register} color="success" block>
                    Create Account
                  </CButton>
                  {/* new admin logic */}
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
