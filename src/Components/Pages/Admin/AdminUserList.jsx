import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc'
import "../../Home/Home.css"
import youtube from "../../../Images/youtube-logo.jpg"
import Sidebar from '../../../Sidebar/Sidebar'

const AdminUserList = (props) => {
    const [mobilesidebar, setmobilesidebar] = useState(false);

    const sidebaropen = () => {

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
                            <h3 className='mb-3'>Admin User List</h3>
                            <Card className="home_table_card_color_ta p-3">
                                <div>
                                </div>
                               
                                <Grid className='Component_main_grid'>
                                    <Grid item md={2} xs={12} sm={12}>
                                        <div className='pl-2 mt-3' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12} sm={12}>
                                        <div className='pl-3' style={{ color: "#FFF" }}>
                                            <h3 className='mt-2'>Admin User List</h3>
                                        </div>
                                    </Grid>
                                    <Grid item md={2}><div><button type="button" class="hyper btn">Add User</button></div></Grid>
                                </Grid>
                                <Grid className='Component_main_grid'>
                                <Grid item md={4} xs={12} sm={12}>
                                <span ><h5 className='text-center pr-2'>Users</h5></span>
                                        </Grid>
                                    <Grid item md={10} xs={12} sm={12}>
                                        
                                        </Grid>
                                        </Grid>

                                <div className='p-3 '>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={4} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>-User Name 1</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>

                                <div className='p-3 '>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={4} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>-User Name 1</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>
                                <div className='p-3 '>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={4} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>-User Name 1</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>
                                <div className='p-3 '>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={4} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <h5>-User Name 1</h5>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={2} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                </div>





                                <Sidebar open={mobilesidebar} close={sidebaropen} />




                            </Card>
                            {/* <Table head={['name', 'phoneno', 'address']} data={tdata} /> */}
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(AdminUserList)
