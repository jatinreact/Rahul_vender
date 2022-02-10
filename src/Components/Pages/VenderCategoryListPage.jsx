import React, { useState, useEffect } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import VendorSidebar from "../../Sidebar/VenderSidebar"
import { showNotificationMsz } from "../utils/Validation";



const VenderCategoryListPage = (props) => {
    const token = localStorage.getItem('token');
    console.log("jatin", props)
    const [mobilesidebar, setmobilesidebar] = useState(false);
    const [isloading, setisloading] = useState(false);
    const [category, setcategory] = useState("");
    const [isupdated, setisupdated] = useState(false)
    const [CategoryArry, setCategoryArry] = useState([]);
    const [Editsubcategries, setEditsubcategries] = useState("")
    const [EditId, setEditId] = useState("")
    const [Edithandle, setEdithandle] = useState(false)


    const sidebaropen = () => {

        setmobilesidebar(!mobilesidebar)
    }




    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getcategory";
            let config = {
                headers: { Authorization: `Bearer ${token}` }
              };
            axios.get(url,config).then(
                (res) => {
                    setCategoryArry(res.data.getcategory);
                    console.log("data catttttgory:::", res.data.getcategory);
                    //  showNotificationMsz(res.data.msg, "success");
                },
                (error) => {
                       showNotificationMsz(error, "danger");
                }
            );
        } catch (error) {
           showNotificationMsz(error, "danger");
        }
    }, [isupdated]);



    const addCategory = () => {

        if (Edithandle === false) {

            try {


                let url = getBaseUrl() + "api/addcategory";
                setisloading(true);
                let temp = {
                    category: category,

                };
                let config = {
                    headers: { Authorization: `Bearer ${token}` }
                  };
                axios
                    .post(url, temp,config)
                    .then(
                        (res) => {
                            console.log("data response:::", res);
                            setisloading(false);

                            setcategory("")

                            // NotificationManager.success(res.data.msg, 'Title here');
                            showNotificationMsz(res.data.msg, "success");
                            setisupdated(!isupdated);
                            //   props.history.push("/VenderDistributerList")

                        },

                        (error) => {
                            setisloading(false);
                            console.log("data response error:::", error);
                            showNotificationMsz(error, "danger");

                        }
                    )
                    .catch((e) => {
                        setisloading(false);
                        console.log("data response error:::", e);
                        showNotificationMsz(e, "danger");

                    });



            } catch (error) {

            }

        }
        else {

            try {


                let url = getBaseUrl() + `api/updatecategory/${EditId}`;
                setisloading(true);
                let temp = {
                    category: category,



                };
                let config = {
                    headers: { Authorization: `Bearer ${token}` }
                  };
                axios
                    .put(url, temp,config)
                    .then(
                        (res) => {
                            console.log("data response:::", res);
                            setisloading(false);
                            setisupdated(!isupdated);
                            setcategory("")
                            setEdithandle(!Edithandle)
                            showNotificationMsz(res.data.msg, "success");

                        },

                        (error) => {
                            setisloading(false);
                            console.log("data response error:::", error);
                            showNotificationMsz(error, "success");

                        }
                    )
                    .catch((e) => {
                        setisloading(false);
                        console.log("data response error:::", e);
                        showNotificationMsz(e, "success");

                    });



            } catch (error) {

            }
        }


    }

    const deletecategory = (row) => {

        let id = row._id;

        let url = getBaseUrl() + `api/deletecategory/${id}`;
        let config = {
            headers: { Authorization: `Bearer ${token}` }
          };
        axios
            .delete(url,config)
            .then(
                (res) => {
                    console.log("data response:::", res);
                    setisupdated(!isupdated);
                    showNotificationMsz(res.data.msg, "success");
                },

                (error) => {
                    console.log("data response error:::", error);
                   showNotificationMsz(error, "danger");
                }
            )
            .catch((e) => {
                console.log("data response error:::", e);
             showNotificationMsz(e, "danger");
            });
    };

    const editcategoriesdata = (row) => {
        setcategory(row.category);
        setEditId(row._id);
        setEdithandle(!Edithandle)
    }





    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='Customer_list'>
                            <h3 className='mb-3'>WS Vendor's Category List</h3>
                            <Card className="home_table_final_inv p-3">
                                <div>
                                </div>

                                <Grid className='Component_main_grid mb-3'>
                                    <Grid item md={2} xs={12} sm={12}>
                                        <div className='pl-2 mt-3' onClick={sidebaropen}>
                                            <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                        </div>
                                    </Grid>
                                    <Grid item md={8} xs={12} sm={12}>
                                        <div className='pl-3' style={{ color: "#FFF" }}>
                                            <h3 className='mt-2'>WS Vendor's Category List</h3>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid className='Component_main_grid'>
                                    <Grid item md={1} xs={12} sm={12}></Grid>
                                    <Grid item md={4} xs={12} sm={12}>
                                        <div className="col-md-12 pb-3">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Add New Category"
                                                value={category}
                                                onChange={(e) => {
                                                    setcategory(e.target.value)
                                                }}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item md={1} xs={12} sm={12}><button type="button" class="btn btn-success" onClick={addCategory}>
                                        {Edithandle === true ? "Update" : "Save"}</button></Grid>
                                </Grid>

                                <div className=''>
                                    {CategoryArry.map((row, index) => (
                                        <Grid className='Component_main_grid'>

                                            <Grid item md={1} xs={12} sm={12}>

                                            </Grid>
                                            <Grid item md={2} xs={12}>

                                                <div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_tablew'>
                                                    <span className='table_span_home'>{row.category}</span>

                                                </div>
                                                </div>

                                            </Grid>
                                            <Grid item md={1} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span onClick={() => editcategoriesdata(row)}><i class="fa fa-pencil" style={{ fontSize: "30px" }}></i></span>
                                                </div>
                                            </Grid>
                                            <Grid item md={1} xs={12} sm={12}>
                                                <div className='text-center'>
                                                    <span onClick={() => deletecategory(row)}><i class="fa fa-times" style={{ color: "red", fontSize: "30px" }}></i></span>
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
                </div>


            </section>
            <Loder loading={isloading} />
        </>
    )
}

export default HOC(VenderCategoryListPage)
