import React,{useState} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc'
import "../../Home/Home.css"
import youtube from "../../../Images/youtube-logo.jpg"
import Sidebar from '../../../Sidebar/Sidebar'

const AdminVenderList = (props) => {
    const [mobilesidebar, setmobilesidebar] = useState(false);

    const sidebaropen = ()=>{

        setmobilesidebar(!mobilesidebar)
    }

    // const tdata = posts.map(post => {
    //     return [
    //         post.title, post.time, post.content
    //     ]
    // })

    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='Customer_list'>
                            <h3 className='mb-3'>Admin/WS Vender List</h3>
                            <Card className="home_table_card_color_ta p-3">
                                <div>
                                  </div>
                                    <Grid className='Component_main_grid'>
                                    <Grid item md={2} xs={12} sm={12}>
                                    <div className='pl-2' onClick={sidebaropen}>
                                        <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                    </div>
                                        </Grid>
                                        <Grid item md={7} xs={12} sm={12}>
                                            <div className='customer_list pl-3'>
                                                <h5 className='mt-2'>WS Vender List</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={3}><div class="input-group">
                                            <div class="form-outline">
                                                <input type="search" id="form1" class="form-control" placeholder='WS Vendor/Distributor' />

                                            </div>
                                            <button type="button" class="btn btn-primary">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div></Grid>
                                    </Grid>

                                    <div className='p-3'>
                                        <Grid className='Component_main_grid'>

                                            <Grid item md={4} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span>WS Vender Name</span>
                                                </div>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span>Phone#</span>
                                                </div>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span>Area</span>
                                                </div>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span>Distributer</span>
                                                </div>
                                            </Grid>
                                            <Grid item md={2} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span>Action</span>
                                                </div>
                                            </Grid>


                                        </Grid>
                                    </div>
                                    {/* ///data grid */}
                                    <section>
                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vender Name</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Distributers</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-pencil"></i></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-times" style={{ color: "red" }}></i></span></div></div></Grid>
                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vender Name</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Distributers</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-pencil"></i></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-times" style={{ color: "red" }}></i></span></div></div></Grid>
                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vender Name</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Distributers</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-pencil"></i></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-times" style={{ color: "red" }}></i></span></div></div></Grid>
                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vender Name</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Distributers</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-pencil"></i></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-times" style={{ color: "red" }}></i></span></div></div></Grid>
                                            </Grid>
                                        </div>
                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>WS Vender Name</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Distributers</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-pencil"></i></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-times" style={{ color: "red" }}></i></span></div></div></Grid>
                                            </Grid>
                                        </div>




                                    </section>

                                    <Sidebar  open={mobilesidebar} close={sidebaropen}/>




                            </Card>
                            {/* <Table head={['name', 'phoneno', 'address']} data={tdata} /> */}
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(AdminVenderList)
