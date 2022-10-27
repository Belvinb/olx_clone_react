import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('');
  const [email,setEmail] =useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] =useState('');
  const {firebase} = useContext(FirebaseContext)
  // const handleSubmit= (e)=>{
  //   e.preventDefault()
  //   firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
  //     result.user.updateProfile({displayName:username}).then(()=>{
  //       firebase.firestore().collection('users').add({
  //         id:result.user.uid,
  //         username:username,
  //         phone:phone
  //       }).then(()=>{
  //         history.push("/login")
  //       })
  //     })
  //   })
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then((result)=>{
      result.user.updateProfile({displayName:data.username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:data.username,
          phone:data.phone
        }).then(()=>{
          history.push("/login")
        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            name="username"
            // value={username}
            // onChange ={(e)=>setUsername(e.target.value)}
            // id="fname"
            // defaultValue="John"
            {...register("username", { required: "true" })}
          />
          {errors.username && (
            <p className="text-danger">Please enter your username</p>
          )}
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            // id="fname"
            // defaultValue="John"
            {...register("email", { required: "true" })}
          />
          {errors.email && (
            <p className="text-danger">Please enter your email</p>
          )}
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            name="phone"
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
            // id="lname"
            // defaultValue="Doe"
            {...register("phone", { required: "true" })}
          />
          {errors.phone && (
            <p className="text-danger">Please enter your phone number</p>
          )}
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            // id="lname"
            // defaultValue="Doe"
            {...register("password", { required: "true" })}
          />
          {errors.password && (
            <p className="text-danger">Please enter your password</p>
          )}
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to={"/login"}>
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
