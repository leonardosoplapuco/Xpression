import React, { userEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [getUserId, setGetUserId] = useState('');

  const [userId, setUserId] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const [newUserFirstName, setNewUserFirstName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUserAddress, setNewUserAddress] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  const [deleteUserId, setDeleteUserId] = useState('');

  const handleGetUserId = () => {
    setGetUserId(event.target.value);
  };

  const handleNewUserFirstName = (event) => {
    setNewUserFirstName(event.target.value);
  };

  const handleNewUserLastName = (event) => {
    setNewUserLastName(event.target.value);
  };

  const handleNewUserAddress = (event) => {
    setNewUserAddress(event.target.value);
  };

  const handleNewUserPassword = (event) => {
    setNewUserPassword(event.target.value);
  };

  const handleDeleteUserId = (event) => {
    setDeleteUserId(event.target.value)
  };

  const getUser = (id) => {
    axios.get(`http://127.0.0.1:8000/users/${id}`, {
      withCredentials: true
    })
      .then((response) => {
        console.log(response.data);
        setUserId(response.data.id);
        setUserFirstName(response.data.first_name);
        setUserLastName(response.data.last_name);
        setUserAddress(response.data.address);
      }).catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/users/', {
      first_name: newUserFirstName,
      last_name: newUserLastName,
      address: newUserAddress,
      password: newUserPassword,
    })
      .then((response) => {
        console.log('Response: ', response.data)
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  const deleteUser = (id) => {
    axios.delete(`http://127.0.0.1:8000/users/${id}`)
      .then((response) => {
        console.log('Response: ', response);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };


  return (
    <div className="App">
      <div>
        <input
        type="text"
        id="user_id"
        value={getUserId}
        onChange={handleGetUserId}
        />
        <button onClick={() => getUser(getUserId)}>Get User</button>
        { userId ? <p>{userId}</p> : null}
        { userFirstName ? <p>{userFirstName}</p> : null}
        { userLastName? <p>{userLastName}</p> : null}
        { userAddress ? <p>{userAddress}</p> : null}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First name: </label>
          <input
            type="text"
            id="first_name"
            value={newUserFirstName}
            onChange={handleNewUserFirstName}
          />
        </div>
        <div>
          <label htmlFor="last_name">Last name: </label>
          <input
            type="text"
            id="last_name"
            value={newUserLastName}
            onChange={handleNewUserLastName}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            value={newUserAddress}
            onChange={handleNewUserAddress}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            value={newUserPassword}
            onChange={handleNewUserPassword}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <input
          type="text"
          placeholder="Enter User ID to be deleted"
          value={deleteUserId}
          onChange={handleDeleteUserId}
        />
        <button onClick={() => deleteUser(deleteUserId)}>Delete User</button>
      </div>
    </div>
  );
}

export default App;
