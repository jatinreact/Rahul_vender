import React from 'react'
import HOC from '../../../Common/Hoc'
import {Grid,Card} from "@material-ui/core"
const AdminLogin = (props) => {
    return (
        <>
             <section>
        <div className="home_padding mb-4">
                <div className='sign_up_customer d-flex pt-3'>
          <Grid className="Component_main_grid" style={{justifyContent:"center"}}>
            <Grid item md={6} xs={12}>
           
              <Card className="Card_shadow  m-5">

                <div className="card_color_customer_admin p-3">
                <h4 className='text-center mt-2 mb-4' style={{color:"#fff" , fontSize:"30px"}}>Admin Log-In</h4>
                <div className='pl-4 pr-4'>
                <div className='ml-3'><label for="exampleInputEmail1">* Username</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                  </div>
                  <div className='pl-4 pr-4'>
                  <div className='ml-3'><label for="exampleInputEmail1">* Password</label></div>
                  <div className="col-md-12 pb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  </div>
                  
                  <div className='pl-4 pr-4'>
                <div className="btn_forgot  p-3" style={{justifyContent:"space-between"}}>
                <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                  <span className='new_customer text-center'>Forgot UN</span>
                
                </div>
                <div className="customer mt-3 mb-3 text-center pt-2 pb-2" >
                  <span className='new_customer text-center'>Forgot PW</span>
                
                </div>
                </div></div>
                <div className='pl-4 pr-4'>
                {/* <div className="customer_vender mt-3 mb-3 text-center pt-2 pb-2 " >
                  <span className='new_customer text-center pl-2 pr-2'>New Wholeselers Sign-Up</span>
                
                </div> */}
                </div>
                <div className='mt-5 text-right'>
                <button type="button" class="btn btn-success" onClick={()=> props.history.push("/admin-revenue-list")}>Next<i class="fa fa-arrow-right pl-2"></i></button>
                </div>
                </div>



               
              </Card>
            </Grid>


          </Grid>
      
        </div>
        </div>
      </section>
        </>
    )
}

export default HOC(AdminLogin)
