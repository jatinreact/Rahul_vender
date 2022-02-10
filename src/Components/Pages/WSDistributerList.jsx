import React, { useState } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"



const WSDistributerList = (props) => {
 
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
                         
                            <Card className="home_table_card_distributer p-3">
                                <div>
                                </div>
                                <h4 className='mb-3' style={{color:"#FFF"}}>WS Distributer List</h4>
                                <Grid className='Component_main_grid'>
                                <Grid item md={4} xs={12} sm={12}>
                                <span ><h5 className='pl-2'>WS Vendors Name</h5></span>
                                        </Grid>
                                    <Grid item md={10} xs={12} sm={12}>
                                        
                                        </Grid>
                                        </Grid>

                            
                             
                                <div className='mt-4 pl-2'>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer 1</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                             <Grid item md={4} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div className='mt-4 pl-2'>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer 2</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                             <Grid item md={4} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div className='mt-4 pl-2'>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer 3</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                             <Grid item md={4} xs={12}></Grid>
                                        </Grid>
                                    </div>
                                    <div className='mt-4 pl-2'>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Distributer 4</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>Area<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                             <Grid item md={4} xs={12}></Grid>
                                        </Grid>
                                    </div>






                              




                            </Card>
                         
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(WSDistributerList)
