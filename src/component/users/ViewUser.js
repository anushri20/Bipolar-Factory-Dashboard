import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    user_email: '',
    first_name:'',
    last_name:'',    
    mobile_number:'',    
    password:'',
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://5f69b4b9d808b90016bc050d.mockapi.io/signup/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First Name: {user.first_name}</li>
        <li className="list-group-item">Last Name: {user.last_name}</li>
        <li className="list-group-item">email: {user.user_email}</li>
        <li className="list-group-item">phone: {user.mobile_number}</li>
       
      </ul>
    </div>
  );
};

export default ViewUser;