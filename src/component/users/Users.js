import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Users = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://5f69b4b9d808b90016bc050d.mockapi.io/signup");
        setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`https://5f69b4b9d808b90016bc050d.mockapi.io/signup/${id}`);
        loadUsers();
    }
    return (
        <div>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map((user, index) => (
              <tr>
                  <th scope="row">{index + 1 }</th>
                  <td> {user.first_name} </td>
                  <td> {user.last_name} </td>
                  <td> {user.user_email} </td>
                  <td> {user.mobile_number} </td>
                  <td>
                      <Link class="btn btn-primary mr-2"  to={`users/view/${user.id}`}> View</Link>
                      <Link class="btn btn-outline-primary mr-2" to={`users/edit/${user.id}`}> Edit</Link>
                      <Link class="btn btn-danger" onClick={() => deleteUser(user.id)} >Delete</Link>
                  </td>
              </tr>
          ))
      }
  
  </tbody>
</table>


        </div>
    )
}

export default Users
