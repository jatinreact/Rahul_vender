import React,{useState} from 'react'
import HOC from '../../../Common/Hoc'
import {Grid,Card} from "@material-ui/core"
import axios from "axios";
import Loder from "../../Loder/Loder"
import { getBaseUrl } from "../../utils";

const VeryfyPassword = (props) => {
  console.log("forgoteeee",props.location.state.email)
  const email = props.location.state.email;

  const [otp,setotp] = useState("");
  const [password,setpassword] = useState("");

  const [isloading,setisloading] = useState("");

  const usernameforgot = () => {

    try {
  
    
        let url = getBaseUrl() + "api/wholeselerforgotpassword";
        setisloading(true);
    
        let temp = {
          email:email,
          otp:otp,
          password:password,
         
        };
        axios
          .post(url, temp)
          .then(
            (res) => {
              console.log("data response:::", res);
              setisloading(false);
              localStorage.setItem("isAuth", true);
             
              props.history.push("/VenderLogin")
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
  };

  

    return (
        <>
             <section>
        <div className="home_padding mb-4">
                <div className='sign_up_customer d-flex pt-3'>
          <Grid className="Component_main_grid" style={{justifyContent:"center"}}>
            <Grid item md={6} xs={12}>
           
              <Card className="Card_shadow  m-5">

                <div className="card_color_customer_admin p-3">
                <h4 className='text-center mt-2 mb-4' style={{color:"#fff" , fontSize:"30px"}}>Vendor Log-In</h4>
                <div className='pl-4 pr-4'>
                <div className='ml-3'><label for="exampleInputEmail1">* Email</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Email"
                      value={email}
                     
                    />
                    
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* OTP</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e)=> {
                        setotp(e.target.value)
                      }}
                    />
                    
                  </div>
                  <div className='ml-3'><label for="exampleInputEmail1">* New Password</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e)=> {
                        setpassword(e.target.value)
                      }}
                    />
                    
                  </div>
                  </div>
                 
                  
                  {/* <div className='pl-4 pr-4'>
                <div className="btn_forgot  p-3" style={{justifyContent:"space-between"}}>
                <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                  <span className='new_customer text-center'>Forgot UN</span>
                
                </div>
                <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                  <span className='new_customer text-center'>Forgot PW</span>
                
                </div>
                </div></div> */}
                <div className='pl-4 pr-4'>
                {/* <div className="customer_vender mt-3 mb-3 text-center pt-2 pb-2 " >
                  <span className='new_customer text-center pl-2 pr-2'>New Wholeselers Sign-Up</span>
                
                </div> */}
                </div>
                <div className='mt-5 text-right'>
                <button type="button" class="btn btn-success" onClick={usernameforgot }>Next<i class="fa fa-arrow-right pl-2"></i></button>
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

export default HOC(VeryfyPassword)
