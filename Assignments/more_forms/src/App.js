//Using the previous assignment "Hook Form", add error messages.
//If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
//The e-mail is less than 5 characters, say the field must be at least 5 characters.
//The passwords must match and be at least 8 characters.
//These messages can appear right when you render the page, and will disappear in real time.

import './App.css';
import Form from "./components/Forms";
import React, { useState } from "react";

const App = () => {
  const [firstname, setfirstname] = useState("");
  const [firstnameError, setfirstnameError] = useState("");
  const [lastname, setlastname] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [confirmpasswordError, setconfirmpasswordError] = useState("");

// vvv Validatiosn vvv

  const handlefirstname = (e) => {
    setfirstname(e.target.value);
    if(e.target.value.length < 2) {
        setfirstnameError("Must be at least two characters!");
    } else {
        setfirstnameError("");
    }
}

const handlelastname = (e) => {
  setlastname(e.target.value);
  if(e.target.value.length < 2) {
      setlastnameError("Must be at least two characters!");
  } else {
      setlastnameError("");
  }
}

const handleemail = (e) => {
  setemail(e.target.value);
  if(e.target.value.length < 5) {
      setemailError("Must be at least five characters!");
  } else {
      setemailError("");
  }
}

const handlepassword = (e) => {
  setpassword(e.target.value);
  if(e.target.value.length < 8) {
      setpasswordError("Must be at least eight characters!");
  } else {
      setpasswordError("");
  }
}

const handleconfirmpassword = (e) => {
  setconfirmpassword(e.target.value);
  if(e.target.value.length < 8) {
      setconfirmpasswordError("Must be at least eight characters!");
  } else if (confirmpassword !== password) {
      setconfirmpasswordError("Passwords must match!")
  } else {
      setconfirmpasswordError("");
  }
}

// vvv Form vvv

  return (
    <div className="App">
      <>
        <form onSubmit={() => {}}>
          <div>
            <label>First Name </label>
            <input type="text" onChange={ handlefirstname }  />
            {
              firstnameError ?
              <p>{ firstnameError }</p> :
              ''
            }
          </div>

          <div>
            <label>Last Name </label>
            <input type="text" onChange={ handlelastname }  />
            {
              lastnameError ?
              <p>{ lastnameError }</p> :
              ''
            }
          </div>

          <div>
            <label>Email </label>
            <input type="text" onChange={ handleemail } />
            {
              emailError ?
              <p>{ emailError }</p> :
              ''
            }
          </div>

          <div>
            <label>Password </label>
            <input type="text" onChange={ handlepassword} />
            {
              passwordError ?
              <p>{ passwordError }</p> :
              ''
            }
          </div>

          <div>
            <label>Confirm Password </label>
            <input type="text" onChange={ handleconfirmpassword} />
            {
              confirmpasswordError ?
              <p>{ confirmpasswordError }</p> :
              ''
            }
          </div>
        </form>

        <div>
          <h3 style={{textAlign: 'center'}}>Your Form Data</h3>
          <h3>First Name: {firstname}</h3>
          <h3>Last Name: {lastname}</h3>
          <h3>Email: {email}</h3>
          <h3>Password: {password}</h3>
          <h3>Confirm Password: {confirmpassword}</h3>
        </div>

      </>
    </div>
  );
};

export default App;
