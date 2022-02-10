import React,{useState} from 'react'
import HOC from '../../../Common/Hoc'
import { Grid, Card } from "@material-ui/core"
import "../Customer/Customer.css"
import axios from 'axios'
import Loder from "../../Loder/Loder"
import {getBaseUrl} from "../../utils"
import { showNotificationMsz } from "../../utils/Validation";


const VenderSignup = (props) => {
    const [isloading,setisloading] = useState("");
    const [Businessname,setBusinessname] = useState("");
    const [address,setaddress] = useState("");
    const [city,setcity] = useState("");
    const [state,setstate] = useState("");
    const [zipcode,setzipcode] = useState("");
    const [phone,setphone] = useState("");
    const [email,setemail] = useState("");
    const [Ein,setEin] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [AuthorizedDistributers,setAuthorizedDistributers] = useState("");
    const [area,setarea] = useState("");
    const [MinOrder,setMinOrder] = useState("");
    const [BankName,setBankName] = useState("");
    const [Routing,setRouting] = useState("");
    const [Account,setAccount] = useState("");
    // console.log("feseg",AuthorizedDistributers)

    const vendersignup = () => {

        try {
      
        
            let url = getBaseUrl() + "api/addwholeseler";
            setisloading(true);
        
            let temp = {
                name:Businessname,
                address:address,
                city:city,
                state:state,
                zipcode:zipcode,
                phone:phone,
                email:email,
                Ein:Ein,
                username:username,
                password:password,
                AuthorizedDistributers:AuthorizedDistributers,
                area:area,
                MinOrder:MinOrder,
                BankName:BankName,
                Routing:Routing,
                Account:Account,
               
            };
            axios
              .post(url, temp)
              .then(
                (res) => {
                  console.log("data response:::", res);
                  setisloading(false);
                //   localStorage.setItem("isAuth", true);
                
               
                showNotificationMsz(res.data.msg, "success");
               
                    props.history.push("/VenderLogin")
                  
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
          };

    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='sign_up_customer d-flex'>
                        <Grid className="Component_main_grid" style={{ justifyContent: "center" }}>
                            <Grid item md={6}>

                                <Card className="Card_shadow">

                                    <div className="card_color_customer_vender p-3">
                                        <h4 className='text-center mt-2 mb-4' style={{ color: "#fff", fontSize: "30px" }}>WS Vendor Sign-Up</h4>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Business name</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Business name"
                                                    value={Businessname}
                                                    onChange={(e)=>{
                                                        setBusinessname(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>
                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Address</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Street"
                                                    value={address}
                                                    onChange={(e)=>{
                                                        setaddress(e.target.value)
                                                    }}
                                                />
                                            </div>

                                                <div className='pl-2 pr-2'>
                                                    <Grid className='Component_main_grid'>
                                                        <Grid item md={4} xs={12}>
                                                            <div className="pb-3 m-1">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="City"
                                                                    value={city}
                                                                    onChange={(e)=>{
                                                                        setcity(e.target.value)
                                                                    }}
                                                                />
                                                            </div>
                                                        </Grid>
                                                        <Grid item md={4} xs={12}>
                                                            <div className="pb-3 m-1">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="State"
                                                                    value={state}
                                                                    onChange={(e)=>{
                                                                        setstate(e.target.value)
                                                                    }}
                                                                />
                                                            </div>
                                                        </Grid>

                                                        <Grid item md={4} xs={12}>
                                                            <div className="pb-3 m-1 ">
                                                                <input
                                                                    type="text"
                                                                    class="form-control"
                                                                    placeholder="zip"
                                                                    value={zipcode}
                                                                    onChange={(e)=>{
                                                                        setzipcode(e.target.value)
                                                                    }}
                                                                />
                                                            </div>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Phone No</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="XXX-XXXX-XXX"
                                                    value={phone}
                                                    onChange={(e)=>{
                                                        setphone(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Email</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e)=>{
                                                        setemail(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>


                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* EIN</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="EIN"
                                                    value={Ein}
                                                    onChange={(e)=>{
                                                        setEin(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>
                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="username"
                                                    value={username}
                                                    onChange={(e)=>{
                                                        setusername(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>
                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e)=>{
                                                        setpassword(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>
                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Authorized Distributers</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <select class="form-control"  value={AuthorizedDistributers} onChange={(e)=> {
                                                    setAuthorizedDistributers(e.target.value)
                                                }}>

                                                    <option value="Dist. A">Dist. A</option>
                                                    <option value="Dist. B">Dist. B</option>
                                                    <option value="Dist. C">Dist. C</option>
                                                    <option value="Dist. D">Dist. D</option>
                                                    <option value="Dist. E">Dist. E</option>
                                                </select>

                                            </div>
                                            </Grid>

                                        </Grid>

                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Covered area</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <select class="form-control"   value={area} onChange={(e)=> {
                                                    setarea(e.target.value)
                                                }}
                                                  >
                                                    <option value="">All US States</option>
                                                    <option value="Alabama">Alabama</option>
                                                    <option value="Alaska">Alaska</option>
                                                    <option value="Arizonz">Arizonz</option>
                                                    <option value="Arkanas">Arkanas</option>
                                                </select>
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Min. Order</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder=""
                                                    value={MinOrder}
                                                    onChange={(e)=>{
                                                        setMinOrder(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Bank Name</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Bank Name"
                                                    value={BankName}
                                                    onChange={(e)=>{
                                                        setBankName(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Routing</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Routing"
                                                    value={Routing}
                                                    onChange={(e)=>{
                                                        setRouting(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>

                                        </Grid>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}> <div className='ml-3'><label for="exampleInputEmail1">* Account</label></div></Grid>
                                            <Grid item md={9} xs={12}>  <div className="col-md-12 pb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Account"
                                                    value={Account}
                                                    onChange={(e)=>{
                                                        setAccount(e.target.value)
                                                    }}
                                                />
                                            </div></Grid>

                                        </Grid>






                                        <div className="pricing_btn text-right mb-3 mr-4">
                                            <button type="button" class="btn btn-success" onClick={vendersignup}>
                                                Log In
                                            </button>
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

export default HOC(VenderSignup)
