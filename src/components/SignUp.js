import React, { useState } from "react";
import axios from 'axios'
 
 
const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    mobile: "",
  });
 
  const { email, mobile} = user;
   
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3000/SignUp",user);
    alert('Data Inserted');
    // history.push("/");
  };
  return (
    <div className="container bg-light">
      <div class="row">  
       <div className="col-sm-4 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Enter your details</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter mobile"
              name="mobile"
              value={mobile}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">submit</button>
        </form>
      </div>
    </div>
  </div>  
  );
};
 
export default SignUp;
