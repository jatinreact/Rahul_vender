import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc';
import "../../Home/Home.css"
import Expand from "react-expand-animated";
import Sidebar from '../../../Sidebar/Sidebar';

const AdminCustomerFinalInvoice = (props) => {
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
                                           </Grid>
                                        <Grid item md={3} xs={12}>
                                            
                                            </Grid>

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
                                                  placeholder="Inv.#"
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
                                            <Grid item md={1} xs={12}><h5 className='text-center'>Inv.#</h5></Grid>
                                            <Grid item md={1} xs={12}><h5 className='text-center'>Date</h5></Grid>
                                            <Grid item md={2} xs={12}><h5 className='text-center'>Customer Name</h5></Grid>
                                            <Grid item md={2} xs={12}><h5 className='text-center'>Vendor Name</h5></Grid>
                                            <Grid item md={1} xs={12}><h5 className='text-center'>Cust.#</h5></Grid>
                                            <Grid item md={1} xs={12}><h5 className='text-center'>Area</h5></Grid>
                                            <Grid item md={2} xs={12}><h5 className='text-center'>Shipped Credit</h5></Grid>
                                            <Grid item md={1} xs={12}><h5 className='text-center'>Rfd</h5></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vendor Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >$Credit</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>


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


                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vendor Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center p-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >$Credit</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>



                                        </Grid>
                                    </div>
                                    <Expand open={Expendbox}>
                                        <div>
                                            <Grid className='Component_main_grid ml-5'>
                                         
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
                                                
 
                                             


                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid ml-5'>
                                         
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
                                                
 
                                             


                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid ml-5'>
                                         
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
                                                
 
                                             


                                            </Grid>
                                        </div>
                                    </Expand>


                                    <div>
                                        <Grid className='Component_main_grid'>
                                       
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Inv. Adj.</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Credit</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Shipping</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Price</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home' >Invoice Sub-Total</span></div></div></Grid>   
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home' >$Price</span></div></div></Grid>  
                                           

                                        </Grid>
                                    </div>

                                    <div className='mt-2 mb-2'>
                                        <Grid className='Component_main_grid'>
                                            
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='shipping_carrier'><span className='table_span_home'>Shipping Carrier: XXXXXXXXXXX</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='shipping_carrier'><span className='table_span_home'>Traking #: XXXXXXXXXXX</span></div></div></Grid>
                                             
                                            <Grid item md={2} xs={12}></Grid>

                                        </Grid>
                                    </div>


                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vendor Name</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' >Area</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home' >$Credit</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /></span></div></div></Grid>


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

export default HOC(AdminCustomerFinalInvoice)
