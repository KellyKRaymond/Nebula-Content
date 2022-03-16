import './App.css';
import React from 'react';
import { useState, useEffect } from 'react' 

function App() {
  /*const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const [memberId, setMemberID] = useState('');*/
  const [user, setUser] = useState({
    name: 'John Doe',
    DOb: '1213',
  });
  // useEffect(()=>{
  //   fetch info hehre populate set user
  // })
  return (
    <div className="App">
      <div className='member-card--container'>
        <img className="member-card--headshot"></img>
        <div className='member-information'>
          <h1> Name</h1>
          <h2> DOB </h2>
          <h3> Join Date </h3>
          <h3> Member ID Number</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
