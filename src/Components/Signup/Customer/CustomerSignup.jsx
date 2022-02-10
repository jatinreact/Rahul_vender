import React, { useState } from 'react'
import HOC from '../../../Common/Hoc'
import { Grid, Card } from "@material-ui/core"
import "./Customer.css"
import { showNotificationMsz, blankValidator,emailValidator } from "../../utils/Validation";
import axios from 'axios'
import { getBaseUrl } from "../../utils"





const CustomerSignup = (props) => {


  const [isloading, setisloading] = useState("");

  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [Ein, setEin] = useState("");
  const [Address, setAddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [businessname, setbusinessname] = useState("");

  //error
  const [businessnameError, setbusinessnameError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [usernameError, setusernameError] = useState(false);
  const [passwordError, setpasswordError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [EinError, setEinError] = useState(false);
  const [AddressError, setAddressError] = useState(false);
  const [cityError, setcityError] = useState(false);
  const [stateError, setstateError] = useState(false);
  const [zipError, setzipError] = useState(false);
  const [emailMatchError, setemailMatchError] = useState(false);


  const customerLogin = () => {

    try {
      setisloading(true);

      if (!blankValidator(businessname)) {
        setbusinessnameError(true);
        return;
    }
      if (!blankValidator(Address)) {
        setAddressError(true);
        return;
      }
      if (!blankValidator(city)) {
        setcityError(true);
        return
      }
      if (!blankValidator(state)) {
        setstateError(true);
        return;
      }
      if (!blankValidator(zip)) {
        setzipError(true);
        return;
      }
      if (!blankValidator(phone)) {
        setphoneError(true);
        return;
      }
      if (!blankValidator(email)) {
        setemailError(true);
        return;
      }
      if (!emailValidator(email)) {
        setemailMatchError(true);
        return
    }
      if (!blankValidator(Ein)) {
        setEinError(true);
        return;
      }
  

      if (!blankValidator(username)) {
        setusernameError(true);
        return;
      }

   

      if (!blankValidator(password)) {
        setpasswordError(true);
        return;
      }



      let url = getBaseUrl() + "api/customeradd";


      let temp = {
        businessname: businessname,
        email: email,
        username: username,
        password: password,
        phone: phone,
        Ein: Ein,
        Address: Address,
        city: city,
        state: state,
        zip: zip,
      };
      axios
        .post(url, temp)
        .then(
          (res) => {
            console.log("data response:::", res);

            props.history.push("/custonerLogin")


            showNotificationMsz(res.data.msg, "success");
            setisloading(false);

          },

          (error) => {
            setisloading(false);
            console.log("data response error:::", error);
            showNotificationMsz(error, "danger")
          }
        )
        .catch((e) => {
          setisloading(false);
          console.log("data response error:::", e);
          showNotificationMsz(e, "danger")
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

                <Card className="Card_shadow m-5">

                  <div className="card_color_customer p-3">
                    <h4 className='text-center mt-2 mb-4' style={{ color: "#fff", fontSize: "30px" }}>Customer SignUp</h4>
                    <div className='ml-3'><label for="exampleInputEmail1">* Business name</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Business name"
                        value={businessname}
                        onChange={(e) => {
                          setbusinessnameError(false);
                          setbusinessname(e.target.value)
                        }}
                      />
                      {businessnameError && (
                        <span className="text-danger">Enter Business name</span>
                      )}
                    </div>
                    <div className='ml-3'><label for="exampleInputEmail1">* Address</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Address"
                        value={Address}
                        onChange={(e) => {
                          setAddressError(false)
                          setAddress(e.target.value)
                        }}
                      />  {AddressError && (
                        <span className="text-danger">Enter Address</span>
                      )}
                    </div>
                    <Grid className="Component_main_grid" >
                      <Grid item md={4}>
                        <div className="col-md-12 pb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="City"
                            value={city}
                            onChange={(e) => {
                              setcityError(false);
                              setcity(e.target.value)
                            }}
                          />
                           {cityError && (
                        <span className="text-danger">Enter Business name</span>
                      )}
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="col-md-12 pb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="State"
                            value={state}
                            onChange={(e) => {
                              setstateError(false)
                              setstate(e.target.value)
                            }}
                          />
                           {stateError && (
                        <span className="text-danger">Enter State</span>
                      )}
                        </div>
                      </Grid>
                      <Grid item md={4}>
                        <div className="col-md-12 pb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="zip"
                            value={zip}
                            onChange={(e) => {
                              setzipError(false)
                              setzip(e.target.value)
                            }}
                          />
                          {zipError && (
                        <span className="text-danger">Enter zip Code</span>
                      )}
                        </div>
                      </Grid>
                    </Grid>
                    <div className='ml-3'><label for="exampleInputEmail1">* Phone No</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Number"
                        value={phone}
                        onChange={(e) => {
                          setphoneError(false)
                          setphone(e.target.value)
                        }}
                      />
                       {phoneError && (
                        <span className="text-danger">Enter Phone no</span>
                      )}
                    </div>
                    <div className='ml-3'><label for="exampleInputEmail1">* Email</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => {
                          setemailError(false)
                          setemail(e.target.value)
                        }}
                      />
                        {emailError && (
                        <span className="text-danger">Enter email </span>
                      )}
                       {emailMatchError && (
                                            <span className="text-danger">Enter the Correct Email Address</span>
                                        )}
                    </div>
                    <div className='ml-3'><label for="exampleInputEmail1">* EIN</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="XXX-XXXXX"
                        value={Ein}
                        onChange={(e) => {
                          setEinError(false)
                          setemailMatchError(false)
                          setEin(e.target.value)
                        }}
                      />
                        {EinError && (
                        <span className="text-danger">Enter EIN </span>
                      )}
                    </div>
                    <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Name"
                        value={username}
                        onChange={(e) => {
                          setusernameError(false)
                          setusername(e.target.value)
                        }}
                      />
                        {usernameError && (
                        <span className="text-danger">Enter Username </span>
                      )}
                    </div>
                    <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div>
                    <div className="col-md-12 pb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setpasswordError(false)
                          setpassword(e.target.value)
                        }}
                      />
                       {passwordError && (
                        <span className="text-danger">Enter password </span>
                      )}
                    </div>


                    {/* <div className='login_forgont d-flex p-1' style={{justifyContent:"space-between"}}>
                  <div className='pl-2' >Need an account? <span className='account_signup'>Sign up</span></div>
               <div>
                 <p className='pr-2 account_signup'>Forgot password?</p>
                 </div>
                 
                 </div> */}
                    <div className="pricing_btn text-right mb-3 mr-4">
                      <button type="button" class="btn btn-success" onClick={customerLogin}>
                        Log In
                      </button>
                    </div>
                  </div>

                </Card>
              </Grid>

              {/* <Grid item md={6}>
            
                    <Card className="Card_shadow m-5">

    <div className="p-3">
    <h4 className='text-center mt-2 mb-4'>Wholesaler Login</h4>
    <div className='ml-3'><label for="exampleInputEmail1">Email</label></div>
    <div className="col-md-12 pb-3">
        <input
        type="text"
        class="form-control"
        placeholder="Enter Email"
        />
    </div>
    <div className='ml-3'><label for="exampleInputEmail1">Password</label></div>
    <div className="col-md-12 pb-3">
        <input
        type="text"
        class="form-control"
        placeholder="Password"
        />
    </div>
    <div className='login_forgont d-flex p-1' style={{justifyContent:"space-between"}}>
    <div className='pl-2' >Need an account? <span className='account_signup'>Sign up</span></div>
    <div>
    <p className='pr-2 account_signup'>Forgot password?</p>
    </div>
    
    </div>

    </div>
    <div className="pricing_btn text-right mb-3 mr-4">
    <button type="button" class="pricing_button">
        Log In
    </button>
    </div>
    </Card>
                </Grid> */}
            </Grid>

          </div>
        </div>
      </section>
    </>
  )

}

export default HOC(CustomerSignup)
