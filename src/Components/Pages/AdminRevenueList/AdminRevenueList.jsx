import React,{useState} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc'
import "../../Home/Home.css"
import youtube from "../../../Images/youtube-logo.jpg"
import Sidebar from '../../../Sidebar/Sidebar'

const AdminRevenueList = (props) => {
    const [mobilesidebar, setmobilesidebar] = useState(false);

    const sidebaropen = () => {

        setmobilesidebar(!mobilesidebar)
    }
    return (
        <>
            <section>
                <div className="home_padding mb-4 pb-3">
                    <div className='container'>
                        <div className='Customer_list'>
                            <h3 className='mb-3'>Admin/Revenue List</h3>
                            <Card className="home_table_card_color_ta p-3 pb-3">

                                <Grid className='Component_main_grid'>
                                    <Grid item md={6} xs={12} sm={12}>
                                        <div className='pl-3'>
                                        <div className='pl-2 mt-3' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                        </div>
                                    </Grid>
                                    <Grid item md={3} xs={12} sm={12}>
                                        
                                        <div class="input-group ">
                                        <div class="form-outline d-flex">
                                            <label className='mt-1 mr-1'>TO</label>
                                            <input type="date" id="form1" class="form-control" placeholder='Form'/>
                                          
                                        </div>
                                       
                                    </div></Grid>
                                    <Grid item md={3} xs={12} sm={12}>
                                        
                                        <div class="input-group ml-2">
                                        <div class="form-outline d-flex">
                                        <label className='mt-1 mr-1'>Form</label>
                                            <input type="date" id="form1" class="form-control" placeholder='Form'/>
                                          
                                        </div>
                                       
                                    </div></Grid>
                                </Grid>

                                <div className='mt-2'>
                                <Grid className='Component_main_grid'>
                                    <Grid item md={5} xs={12} sm={12}>
                                        <div className='pl-3'>
                                            <h5 className='mt-2'>Admin/Revenue List</h5>
                                        </div>
                                    </Grid>
                                    <Grid item md={2} xs={12} sm={12}>
                                        
                                        <div class="input-group ">
                                        <div class="form-outline d-flex">
                                         
                                            <input type="text" disabled id="form1" class="form-control" placeholder='Inv. #'/>
                                          
                                        </div>
                                       
                                    </div></Grid>
                                    <Grid item md={2} xs={12} sm={12}>
                                        
                                        <div class="input-group ml-2 pr-1">
                                        <div class="form-outline d-flex">
                                        <input type="text" disabled id="form1" class="form-control" placeholder='Customer Name'/>
                                          
                                        </div>
                                       
                                    </div></Grid>
                                    <Grid item md={2} xs={12} sm={12}>
                                        
                                        <div class="input-group ml-2">
                                        <div class="form-outline d-flex">
                                        <input type="text" disabled id="form1" class="form-control" placeholder='Vender Name'/>
                                          
                                        </div>
                                       
                                    </div></Grid>
                                </Grid>
                                </div>

                                <div className='p-3 mt-2'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>Inv. #</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>Date</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>Customer Name</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>Vender Name</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>Inv. Total</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>Revenue</h5>
                                            </div>
                                        </Grid>


                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vender Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv. Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Revanue</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vender Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv. Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Revanue</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vender Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv. Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Revanue</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vender Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv. Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Revanue</span></div></div></Grid>
                                        </Grid>
                                    </div>
                                    <div>
                                        <Grid className='Component_main_grid pb-5'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Vender Name</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv. Total</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Revanue</span></div></div></Grid>
                                        </Grid>
                                    </div>




                                </section>


                                <Sidebar open={mobilesidebar} close={sidebaropen} />



                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(AdminRevenueList)
