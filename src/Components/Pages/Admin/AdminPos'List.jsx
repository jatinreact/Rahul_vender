import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc';
import "../../Home/Home.css"
import Expand from "react-expand-animated";
import Sidebar from '../../../Sidebar/Sidebar';

const AdminPosList = (props) => {
    const [mobilesidebar, setmobilesidebar] = useState(false);

    const sidebaropen = () => {

        setmobilesidebar(!mobilesidebar)
    }
    const [Expendbox, setExpendbox] = useState(false)
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='p-5'>
                        <div className='home_table'>
                            <Card className="home_table_card_color_ta p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                    <Grid item md={2} xs={12}>  <div className='pl-3'>
                                        <div className='pl-2 mt-1' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        </div></Grid>
                                        <Grid item md={4} xs={12}> <div className="col-md-12 pb-3">
                                            <h5 className='' style={{color:"#FFF"}} >Customer's Purchase Order to WS <br />Vender/Distributer</h5>
                                        </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3 d-flex">
                                                <lable className="mt-1 pr-2"  >From</lable>
                                                <input
                                                  
                                                    type="date"
                                                    class="form-control"
                                                    placeholder="WS Vender/Distributer Name"
                                                />
                                            </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            
                                            <div className="col-md-12 pb-3 d-flex">
                                            <lable className="mt-1 pr-2"  >To</lable><input
                                               
                                                type="date"
                                                class="form-control"
                                                placeholder="Invoice #"
                                            /></div></Grid>

                                        <Grid item md={1} xs={6}>   </Grid>

                                    </Grid>
                                </div>

                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                    <Grid item md={5} xs={12}>   <div className="col-md-12 pb-3">
                                            <h5 className='' >Admin/PO List </h5>
                                        </div> </Grid>
                                        <Grid item md={2} xs={12}>
                                        <div className="col-md-12 pb-3 d-flex">
                                              
                                              <input
                                                disabled
                                                  type="text"
                                                  class="form-control"
                                                  placeholder="PO#"
                                              />
                                          </div>
                                           </Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className="col-md-12 pb-3 d-flex">
                                              
                                                <input
                                                  disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Customer Name"
                                                />
                                            </div></Grid>
                                        <Grid item md={2} xs={12}>
                                            
                                            <div className="col-md-12 pb-3 d-flex">
                                        <input
                                               disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Vender Name"
                                            /></div></Grid>

                                        <Grid item md={1} xs={6}> <div className="search_area col-md-12">
                                            <i class="fa fa-search"></i>
                                        </div></Grid>

                                    </Grid>
                                </div>


                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>PO#</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Date</h6></Grid>
                                            <Grid item md={3} xs={12}><h6 className='text-center'>Customer Name</h6></Grid>
                                            <Grid item md={3} xs={12}><h6 className='text-center'>Vendor Info</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Phone No</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Area</h6></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PO#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vendor Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >Area</span></div></div></Grid>


                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}>
                                                <div className='d-flex mb-2' style={{ justifyContent: "center" }}>

                                                  
                                                        {Expendbox === false ? (
                                                              <div className='photo_table'onClick={() => setExpendbox(!Expendbox)} >
                                                            <span className='table_span_home'  >
                                                                <i class="fa fa-plus"></i>
                                                            </span>
                                                            </div>
                                                        ) : (<div className='photo_table_blue'onClick={() => setExpendbox(!Expendbox)} ><span className='photo_table_blue'  >
                                                            <i className="fa fa-minus-square"></i>
                                                        </span></div>)}





                                                    
                                                </div>
                                            </Grid>


                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PO#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vendor Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >Area</span></div></div></Grid>



                                        </Grid>
                                    </div>
                                    <Expand open={Expendbox}>
                                        <div>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Qty</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                                
 
                                             


                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Qty</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                                
 
                                             


                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Qty</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Msrmt</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "space-around" }}><div className=''><span className='table_span_home'><i class="fa fa-pencil pr-2" style={{ fontSize:"25px" }}></i> <i class="fa fa-times" style={{ color: "red",fontSize:"25px" }}></i></span></div></div></Grid>
                                                
 
                                             


                                            </Grid>
                                        </div>
                                    </Expand>


                                    <div>
                                        <Grid className='Component_main_grid'>
                                        <Grid item md={4} xs={12}></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Shopping</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Invoice Sub-Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Submit</span></div></div></Grid>   
                                           

                                        </Grid>
                                    </div>


                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PO#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Address</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >Area</span></div></div></Grid>


                                        </Grid>
                                    </div>

                                </section>




                            </Card>
                        </div>

                    </div>
                </div>
                <Sidebar open={mobilesidebar} close={sidebaropen} />
                </section>
        </>
    )
}

export default HOC(AdminPosList)
