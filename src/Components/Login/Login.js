import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {Link, useHistory} from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  // const handleLogin = (e)=>{
  //   e.preventDefault()
  //   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  //     history.push('/')
  //   }).catch((err)=>{
  //     alert(err.message)
  //   })

  // }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    firebase.auth().signInWithEmailAndPassword(data.email,data.password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            name="email"
            // value={email}
            // id="fname"
            // onChange={(e)=> setEmail(e.target.value)}
            // defaultValue="John"
            {...register("email", { required: "true" })}
          />
          {errors.email && (
            <p className="text-danger">Please enter your email</p>
          )}
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            // value={password}
            // id="lname"
            // onChange={(e)=> setPassword(e.target.value)}
            // defaultValue="Doe"
            {...register("password", { required: "true" })}
          />
          {errors.password && (
            <p className="text-danger">Please enter your password</p>
          )}
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={"/signup"}>
        <a>Signup</a>
        </Link>
      </div>
    </div>
  );
}

export default Login;
