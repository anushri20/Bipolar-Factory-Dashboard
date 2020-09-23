import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUsers = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    user_email: '',
    first_name:'',
    last_name:'',    
    mobile_number:'',    
    password:'',
  });

  const { user_email, first_name, last_name, mobile_number, password } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://5f69b4b9d808b90016bc050d.mockapi.io/signup/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://5f69b4b9d808b90016bc050d.mockapi.io/signup/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="first_name"
              value={first_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="last_name"
              value={last_name}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="user_email"
              value={user_email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="mobile_number"
              value={mobile_number}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUsers;