import React, { useState } from  'react';
    
const Form = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const createPerson = (e) => {
        e.preventDefault();
        const newPerson = { firstname, lastname, email, password, confirmpassword }
        console.log("Welcome", newPerson);
        setfirstname("");
        setlastname("");
        setemail("");
        setpassword("");
        setconfirmpassword("");
    };

    return(
        <form onSubmit={ createPerson }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setfirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setemail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setpassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setconfirmpassword(e.target.value) } />
            </div>
            <input type="submit" value="Create Person" />

            <div>
                <h3 style={{textAlign: 'center'}}>Your Form Data</h3>
                <h3>First Name: {firstname}</h3>
                <h3>Last Name: {lastname}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <h3>Confirm Password: {confirmpassword}</h3>
            </div>
        </form>
    );
};
export default Form;
