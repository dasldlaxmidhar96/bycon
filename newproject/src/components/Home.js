import React, { useState, useEffect } from "react";
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link,} from "react-router-dom";
const Home = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  
  const getdata = async(e)=>{

      const res = await fetch("/getdata", {
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      });

      const data = await res.json();
      // alert(data.message);

      if(res.status === 422 || !data){
        console.log("error");
      }else{
        setUserdata(data);
        console.log("get data");
      }
  }
  
  useEffect(()=>{
    getdata();
  },[])


  const deleteuser = async (id)=> {

    const res2 = await fetch(`/deleteuser/${id}`, {
      method:"DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if(res2.status === 422 || !deletedata){
      console.log("error");
    }else{
      console.log("user deleted");
      getdata();
    }
  }
    


  // }
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <Link to="/register" className="btn btn-primary">Add data</Link>
        </div>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

            {
              getuserdata.map((element, id)=>{
                return(
                  <>
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.work}</td>
                <td>{element.mobile}</td>
                <td className="d-flex justify-content-between">
                {/* <button className="btn btn-success"><RemoveRedEyeIcon /></button> */}
                <Link to={`edit/${element._id}`}><button className="btn btn-primary"><CreateIcon /></button></Link>
                <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}><DeleteOutlineIcon /></button>
                </td>
            </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
