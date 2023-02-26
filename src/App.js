import React , {useState}from 'react';
import { useFormik } from 'formik';
import './App.css';
const validate = values => {
  const errors={};
  if(!values.firstname){
    errors.firstname="*Required";
  }else if(values.firstname.length>8){
    errors.firstname="*must be 8 characters or less";
  }
  if(!values.secondname){
    errors.secondname="*Required";
  }else if(values.secondname.length>8){
    errors.secondname="*must be 8 characters or less";
  }
  if(!values.email){
    errors.email="*Required";
  }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.text(values.email)){
    errors.email="*invalid Email Address";
  }
  if (!values.password){
    errors.password="*Required";
  }else if(values.password.length>8){
    errors.password="*maximum 8 cheracters";
  }else if(values.password.length<4){
    errors.password="*minimam 4 characters";
  }
  if(!values.confirmpassword){
    errors.confirmpassword="*requrired";
  }else if(values.password!==values.confirmpassword){
    errors.confirmpassword="*password must match";
  }
  return errors;
}
const App =()=>{
  const[bool,setBool]=useState(0);
  const formik=useFormik({
    initialValues:{
      firstname:'',
      secondname:'',
      email:'',
      password:'',
      confirmpassword:'',
      
    },
    validate,
    onSubmit:values =>{
      alert(`hello!,${values.firstname}you successfully signed up!`);
    }

  });
  console.log(formik.values);
  return(
    <div className="main">
      <div className="sighup-form">
        <h2>Sign   Up Here</h2>
        <form onSubmit={formik.handleSubmit}>
          <input type="text"
          placeholder="FirstName..."
          name="firstname"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          onBlur={formik.handleBlur}/>
          {
            formik.touched.firstname&& formik.errors.firstname?<span>{formik.errors.firstname}</span>:null
          }
          <input type="text"
          placeholder="SecontName..."
          name="secondname"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.secondname}
          onBlur={formik.handleBlur}/>
           {
            formik.touched.secondname&&formik.errors.secondname?<span>{formik.errors.secondname}</span>: null
          }
          <input type="text"
          placeholder="Email..."
          name="email"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}/>
           {
           formik.touched.email&& formik.errors.email?<span>{formik.errors.email}</span>:null
          }
          <input type="password"
          placeholder="Password..."
          name="password"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}/>
           {
            formik.touched.password&&formik.errors.password?<span>{formik.errors.password}</span>:null
          }
          <input type="password"
          placeholder="Confirmpassword..."
          name="confirmpassword"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}/>
           {
           formik.touched.confirmpassword&& formik.errors.confirmpassword?<span>{formik.errors.confirmpassword}</span>:null
          }
          <input type="Submit"
          value="submit"/>
        </form>
      </div>
        <div className="message-box">
          {
            bool?(<popup onclick={formik.handleSubmit}/>):null
          }

        </div>
    </div>
  )
}
export default App;