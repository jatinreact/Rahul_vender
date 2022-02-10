import React, { useState, useEffect } from 'react'
import HOC from '../../Common/Hoc'
import { Grid, Card } from "@material-ui/core"
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import { blankValidator, showNotificationMsz } from "../utils/Validation";



const VendorAddEdit = (props) => {
  const [name, setname] = useState("")
  const [username, setusername] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const [area, setarea] = useState("")
  const [isloading, setisloading] = useState("");
  //  const [EditId,setEditId] = useState=("")
  let pagetype = props.location.state.PageType;
  // let data = data.history.location.state.data;
  const token = localStorage.getItem('token');
 


  ////error
  const [Errorname, setErrorname] = useState("")
  const [Errorusername, setErrorusername] = useState("")
  const [Errorphone, setErrorphone] = useState("")
  const [Errorpassword, setErrorpassword] = useState("")
  const [Errorarea, setErrorarea] = useState("")


  const [Editname, setEditname] = useState("")
  const [Editusername, setEditusername] = useState("")
  const [Editphone, setEditphone] = useState("")
  const [Editpassword, setEditpassword] = useState("")
  const [Editarea, setEditarea] = useState("")
  const [iddata,setiddata] = useState("")
  console.log("row", iddata)

  useEffect(() => {
    if (pagetype === "Edit") {
      let data = props.history.location.state.data;
     console.log("dddddd", props.history.location.state.data)
      setname(data.name);
      setusername(data.username);
      setphone(data.phone);
      setpassword(data.password);
      setarea(data.area);
      setiddata(data._id)
     
    }
  }, []);




  const adddistributer = () => {
    if (pagetype === "Edit") {
      console.log("iddddddddddddddddd", pagetype)

      setisloading(true);
      try {


        let url = getBaseUrl() + `api/updatedistributer/${iddata}`;
        setisloading(true);
        let temp = {
          name: name,
          area: area,


        };
        let config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        axios
          .put(url, temp,config)
          .then(
            (res) => {
              console.log("data response:::", res);
              setisloading(false);
            

              // NotificationManager.success(res.data.msg, 'Title here');
               showNotificationMsz(res.data.msg, "success");

              props.history.push("/VenderDistributerList")

            },

            (error) => {
              setisloading(false);
              console.log("data response error:::", error);
              showNotificationMsz(error, "danger");

            }
          )
          .catch((e) => {
            setisloading(false);
            console.log("data response error:::", e);
            showNotificationMsz(e, "danger");

          });



      } catch (error) {

      }
    } else {

      try {

        if (!blankValidator(name)) {
          setErrorname(true);
          return;
        }
        if (!blankValidator(phone)) {
          setErrorphone(true);
          return;
        }
        if (!blankValidator(area)) {
          setErrorarea(true);
          return;
        }
        if (!blankValidator(username)) {
          setErrorusername(true);
          return;
        }
        if (!blankValidator(password)) {
          setErrorpassword(true);
          return;
        }
        let url = getBaseUrl() + "api/adddistributer";
        setisloading(true);
        let temp = {
          name: name,
          phone: phone,
          area: area,
          username: username,

          password: password,

        };
        let config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        axios
          .post(url, temp,config)
          .then(
            (res) => {
              console.log("data response:::", config);
              setisloading(false);
              
              

              // NotificationManager.success(res.data.msg, 'Title here');
              // ReactNotifications(res.data.msg, "success");

              props.history.push("/VenderDistributerList")

            },

            (error) => {
              setisloading(false);
              console.log("data response error:::", error);

            }
          )
          .catch((e) => {
            setisloading(false);
            console.log("data response error:::", e);

          });



      } catch (error) {

      }

    }
  };


  return (
    <>
      <section>
        <div className="home_padding mb-4">
          <div className='sign_up_customer d-flex pt-3'>
            <Grid className="Component_main_grid" style={{ justifyContent: "center" }}>
              <Grid item md={6} xs={12}>

                <Card className="Card_shadow  m-5">

                  <div className="card_color_customer_vender p-3">
                    <h4 className='text-center mt-2 mb-4' style={{ color: "#fff", fontSize: "30px" }}>WS Vendor Add/Edit Distributer</h4>
                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Name</label></div>
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="name"
                         
                          value={name}
                          onChange={(e) => {
                            setErrorname(false)
                            setname(e.target.value)
                          }}
                        />
                        {Errorname && (
                          <span className="text-danger">Enter Name</span>
                        )}
                      </div>
                    </div>
                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Phone#</label></div>
                      <div className="col-md-12 pb-3">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="(xxx) xxxx-xxxxx"
                          disabled={pagetype === "Edit" ? true :false}
                          value={phone}
                          onChange={(e) => {
                            setErrorphone(false)
                            setphone(e.target.value)
                          }}
                        />
                        {Errorphone && (
                          <span className="text-danger">Enter Number</span>
                        )}
                      </div>
                    </div>

                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Covered Area</label></div>
                      <div className="col-md-12 pb-3">

                        <select class="form-control" value={area}
                          onChange={(e) => {
                            setErrorarea(false)
                            setarea(e.target.value)
                          }}>
                          <option>Select</option>
                          <option value="All US State">All US States</option>
                          <option value="Alabama">Alabama</option>
                          <option value="Alaska">Alaska</option>
                          <option value="Arizone">Arizone</option>
                          <option value="Caligornia">Caligornia</option>
                        </select>
                        {Errorarea && (
                          <span className="text-danger">Enter Area</span>
                        )}

                      </div>
                    </div>


                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div>
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="username"
                          disabled={pagetype === "Edit" ? true :false}
                          value={username}
                          onChange={(e) => {
                            setErrorusername(false)
                            setusername(e.target.value)
                          }}
                        />
                        {Errorusername && (
                          <span className="text-danger">Enter Username</span>
                        )}
                      </div>
                    </div>

                    <div className='pl-4 pr-4'>
                      <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div>
                      <div className="col-md-12 pb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="password"
                          disabled={pagetype === "Edit" ? true :false}
                          value={password}
                          onChange={(e) => {
                            setErrorpassword(false)
                            setpassword(e.target.value)
                          }}
                        />
                        {Errorpassword && (
                          <span className="text-danger">Enter Password</span>
                        )}
                      </div>
                    </div>

                    <div className='pl-4 pr-4'>
                      <div className="btn_forgot  p-3" style={{ justifyContent: "space-between" }}>
                        <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                          <span className='new_customer text-center'>Forgot UN</span>

                        </div>
                        <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                          <span className='new_customer text-center'>Forgot PW</span>

                        </div>
                      </div></div>
                    <div>
                      <Grid className='Component_main_grid'>
                        <Grid item md={8}>

                          <div className='mt-5 text-right' >
                            <button type="button" class="customer_distri">Ad another Distributor</button>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                          <div className='mt-5 text-right' onClick={adddistributer}>
                            <button type="button" class="btn btn-success" >Next<i class="fa fa-arrow-right pl-2"></i></button>
                          </div>
                        </Grid>
                      </Grid>
                    </div>

                  </div>




                </Card>
              </Grid>


            </Grid>

          </div>
        </div>
      </section>
      <Loder loading={isloading} />
    </>
  )
}

export default HOC(VendorAddEdit)
