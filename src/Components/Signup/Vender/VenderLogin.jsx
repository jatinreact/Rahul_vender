import React,{useState} from 'react'
import HOC from '../../../Common/Hoc';
import {Grid,Card} from "@material-ui/core"
import axios from 'axios'
import Loder from "../../Loder/Loder"
import {getBaseUrl} from "../../utils"
import { showNotificationMsz } from "../../utils/Validation";

const VenderLogin = (props) => {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [isloading,setisloading] = useState("");


  const venderLogin = () => {

    try {
      setisloading(true);
    
        let url = getBaseUrl() + "api/wholeselerlogin";
       
    
        let temp = {
          username:username,
          password:password,
        };
       
        axios
          .post(url, temp)
          .then(
            (res) => {
              console.log("data response:::", res.data.token);
             
              props.history.push("/venderItemList")
             localStorage.setItem("token",res.data.token)
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
                <div className='sign_up_customer d-flex pt-3'>
          <Grid className="Component_main_grid" style={{justifyContent:"center"}}>
            <Grid item md={6} xs={12}>
           
              <Card className="Card_shadow  m-5">

                <div className="card_color_customer_vender p-3">
                <h4 className='text-center mt-2 mb-4' style={{color:"#fff" , fontSize:"30px"}}>WS Vendor / Distributer Log-In</h4>
                <div className='pl-4 pr-4'>
                <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e)=> {
                        setusername(e.target.value)
                      }}
                    />
                  </div>
                  </div>
                  <div className='pl-4 pr-4'>
                  <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e)=> {
                        setpassword(e.target.value)
                      }}
                    />
                  </div>
                  </div>
                  
                  <div className='pl-4 pr-4'>
                <div className="btn_forgot  p-3" style={{justifyContent:"space-between"}}>
                <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                  <span className='new_customer text-center' onClick={()=>props.history.push("/forgot-user-name")}>Forgot UN</span>
                
                </div>
                <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                  <span className='new_customer text-center' onClick={()=> props.history.push("/forgot-password-vender")}>Forgot PW</span>
                
                </div>
                </div></div>
                <div className='pl-4 pr-4'>
                <div className="customer_vender mt-3 mb-3 text-center pt-2 pb-2 ">
                  <span className='new_customer text-center pl-2 pr-2' onClick={()=> props.history.push("/VenderSignup")}>New Wholeselers Sign-Up</span>
                
                </div>
                </div>
                <div className='mt-5 text-right' onClick={venderLogin}>
                <button type="button" class="btn btn-success"  >Next<i class="fa fa-arrow-right pl-2"></i></button>
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

export default HOC(VenderLogin)
