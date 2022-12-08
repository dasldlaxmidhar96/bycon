import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate("");
    const [inpValue, setInpValue] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""
    })
    const setdata = (e) =>{
        const { name, value } = e.target;
        setInpValue((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }

    const addInpData = async(e)=>{
      try{
        e.preventDefault();

        const {name,email,work,add,mobile,desc,age} = inpValue;
  
        const res = await fetch("/register", {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name,email,work,add,mobile,desc,age
          })
        });
  
        const data = await res.json();
        alert(data.message);
        navigate("/");
        
      }catch(err){
        alert(err);
      }
    }

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <form className="mt-4">
        <div className="row">
          <div className="mb- col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={inpValue.name}
              onChange={setdata}
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb- col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              email
            </label>
            <input
              type="text"
              value={inpValue.email}
              onChange={setdata}
              name="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb- col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              age
            </label>
            <input
              type="text"
              value={inpValue.age}
              onChange={setdata}
              name="age"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb- col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              value={inpValue.mobile}
              onChange={setdata}
              name="mobile"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
           <div className="mb- col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              type="text"
              value={inpValue.work}
              onChange={setdata}
              name="work"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb- col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={inpValue.add}
              onChange={setdata}
              name="add"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb- col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea name="desc" value={inpValue.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
          </div>
          <button type="submit" onClick={addInpData} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
