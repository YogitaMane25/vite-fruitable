import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
 let navigate= useNavigate()

const [data, setData]=useState({
  username:"",
  Password:""
});
 function handleChange(e){
  setData({...data, [e.target.id]:e.target.value});
 }

function handleSubmit(e){
  e.preventDefault();

  if(data.username==="admin" && data.Password==="admin"){
    // alert("welcomee")
    navigate("/admin")
  }else{
    alert("invalid credintials")
  }

setData({
  username:"",
  Password:""
})
}

  return (
   <>
       <div className="container pt-5">
  <div className="row mt-5">
    <div className="col-lg-4"></div>
    <div className="col-lg-4">
      <form>
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start" style={{marginTop:"60px"}}>
       </div>

        {/* Email input */}
        <div data-mdb-input-init className="form-outline mb-4">
          <input onChange={handleChange} value={data.username} type="text" name="username" id="username" className="form-control form-control-lg" />
          <label for = "username">Username</label>
        </div>

        {/* Password input */}
        <div data-mdb-input-init className="form-outline mb-3">
          <input  onChange={handleChange} value={data.Password} type="password" name="Password" id="Password" className="form-control form-control-lg"/>
          <label for = "Password">Password</label>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          {/* Checkbox */}
          <div className="form-check mb-0">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label className="form-check-label" htmlFor="form2Example3">Remember me</label>
          </div>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button  onClick={handleSubmit} type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
        </div>
      </form>
    </div>
    <div className="col-lg-4"></div>
  </div>
</div>

            
   </>
  )
}

export default AdminLogin;