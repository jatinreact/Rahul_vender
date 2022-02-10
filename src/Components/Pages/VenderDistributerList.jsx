import React, { useState, useEffect } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import VendorSidebar from "../../Sidebar/VenderSidebar"
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"

const VenderDistributerList = (props) => {


    const [mobilesidebar, setmobilesidebar] = useState(false);
    const [isupdated, setisupdated] = useState(false)
    const [isloading, setiisloading] = useState(false)
    const [DistributerData, setiDistributerData] = useState([])
    const token = localStorage.getItem('token');


    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getdistributer";
            let config = {
                headers: { Authorization: `Bearer ${token}` }
              };
            axios.get(url, config).then(
                (res) => {
                    setiDistributerData(res.data.getdistributer);
                    console.log("data cattttt:::", res.data.getdistributer);
                    // showNotificationMsz(res.data.msg, "success");
                },
                (error) => {
                    //   showNotificationMsz(error, "danger");
                }
            );
        } catch (error) {
            //   showNotificationMsz(error, "danger");
        }
    }, [isupdated]);

    const deletedistributer = (row) => {
        console.log("fdwefwefdelete id",row.name)
        let id = row._id;
    
        let url = getBaseUrl() + `api/deletedistributer/${id}`;
        axios
          .delete(url)
          .then(
            (res) => {
              console.log("data response:::", res);
              setisupdated(!isupdated);
            //   showNotificationMsz(res.data.msg, "success");
            },
    
            (error) => {
              console.log("data response error:::", error);
            //   showNotificationMsz(error, "danger");
            }
          )
          .catch((e) => {
            console.log("data response error:::", e);
            // showNotificationMsz(e, "danger");
          });
      };

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
                            <h3 className='mb-3'>WS Vendor's Distributer List</h3>
                            <Card className="home_table_final_inv p-3">
                                <div>
                                </div>

                                <Grid className='Component_main_grid mb-3'>

                                    <Grid item md={2} xs={12} sm={12}>
                                        <div className='pl-2 mt-3' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                    </Grid>
                                    <Grid item md={6} xs={12} sm={12}>
                                        <div className='pl-3' style={{ color: "#FFF" }}>
                                            <h3 className='mt-2'>WS Vendor's Distributer List</h3>
                                        </div>
                                    </Grid>
                                    <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_dist_vend'><span className='table_span_home border_bottom' onClick={() => props.history.push("/add-distributer",{pagetype:"add"})} style={{ cursor: "pointer" }}>Add New Distributer</span></div></div></Grid>

                                </Grid>
                                <Grid className='Component_main_grid'>

                                    <Grid item md={10} xs={12} sm={12}>

                                    </Grid>
                                </Grid>

                                <div className=''>
                                {DistributerData.map((row, index)=> (
                                    <Grid className='Component_main_grid'>
                                       
                                        <Grid item md={1} xs={12} sm={12}>

                                        </Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>{row.name}</span></div></div>
                                        </Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'><span className='table_span_home'>{row.area}</span></div></div>
                                        </Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span  onClick={()=> props.history.push("/add-distributer",{
                                                    PageType:"Edit",
                                                    data:row,
                                                }) }><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>
                                        <Grid item md={1} xs={12} sm={12}>
                                            <div className='text-center'>
                                                <span onClick={()=> deletedistributer(row) }><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
                                            </div>
                                        </Grid>



                                    </Grid>
                                    ))}
                                </div>
                              
                             
                               





                                <VendorSidebar open={mobilesidebar} close={sidebaropen} />




                            </Card>
                            {/* <Table head={['name', 'phoneno', 'address']} data={tdata} /> */}
                        </div>

                    </div>
                </div></section>
            <Loder loading={isloading} />
        </>
    )
}

export default HOC(VenderDistributerList)
