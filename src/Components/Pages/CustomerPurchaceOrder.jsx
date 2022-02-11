import React, { useState, useEffect } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import Expand from "react-expand-animated";
import VendorSidebar from "../../Sidebar/VenderSidebar.jsx"
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import { blankValidator } from '../utils/Validation';

const CustomerPurchaceOrder = (props) => {
    const [isupdated, setisupdated] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [customerpurchasingArry, setcustomerpurchasingArry] = useState([])
    const [mobilesidebar, setmobilesidebar] = useState(false);
    const [Expandboxid, setExpandboxid] = useState("")
    const [venderdistbuterArry, setvenderdistbuterArry] = useState([])
    const [shopingid, setshopingid] = useState("")
    const sidebaropen = () => {
        setmobilesidebar(!mobilesidebar)
    }
    const [Expendbox, setExpendbox] = useState(false)

    const token = localStorage.getItem('token');




    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getshoping";
            let config = {
                headers: { Authorization: `Bearer ${token}` }
              };
            axios.get(url,config).then(
                (res) => {
                   
                    let temp = [];
                    res.data.shoping.map(
                        async (data) => {
                            data["show"] = false;
                            //   await getuseranswerandrealAnswer(data, data.id);
                            temp.push(data);
                        }
                    );
                    setcustomerpurchasingArry(res.data.shoping);
                    console.log("customerpurchasevenderList:::", res.data.shoping);
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


    useEffect(() => {

        try {

            let url = getBaseUrl() + `api/getshopingbyid/${shopingid}`;
            let config = {
                headers: { Authorization: `Bearer ${token}` }
              };
            axios.get(url,config).then(
                (res) => {

                    let temp = [];
                    res.data.shoping.items.map(
                        async (data) => {
                            data["show"] = false;
                            //   await getuseranswerandrealAnswer(data, data.id);
                            temp.push(data);
                        }
                    );
                    setvenderdistbuterArry(res.data.shoping.items);
                    console.log("customeritemid:::", res.data.shoping.items);
                    // showNotificationMsz(res.data.msg, "success");
                },
                (error) => {
                    //   showNotificationMsz(error, "danger");
                }
            );
        } catch (error) {
            //   showNotificationMsz(error, "danger");
        }

    }, [shopingid]);


    const handleexpandbox = (row, index) => {
        console.log("row adta", row._id)
        const datatt = row._id;
        setshopingid(datatt)
        customerpurchasingArry[
            index
        ].show = true;
        setcustomerpurchasingArry([
            ...customerpurchasingArry,
        ]);

        // console.log("ghgjhj", customerpurchasingArry)


    }


    // const handleexpandbox = (row, index) => {
    //     console.log("row adta", row)
    //     const datatt = row.vender._id;
    //     setnewvenderid(datatt)
    //     customerpurchasingArry[
    //         index
    //     ].show = true;
    //     setcustomerpurchasingArry([
    //         ...customerpurchasingArry,
    //     ]);

    //     console.log("ghgjhj", customerpurchasingArry)


    // }



    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_color_Customer_vs_vender p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={1} xs={12}>
                                            <div className='pl-3'>
                                                <div className='pl-2 mt-1' onClick={sidebaropen}>
                                                    <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item md={5} xs={12}> <div className="col-md-12 pb-3">
                                            <h5 className='' style={{ color: "#FFF" }}>Customer's Purchases order to WS <br />Vender/Distributer</h5>
                                        </div></Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className="col-md-12 pb-3">
                                                <input
                                                    disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="PO#"
                                                />
                                            </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3"><input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Customer Name"
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
                                            <Grid item md={2} xs={12}><h6 className='text-center'>PO#</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Date</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Customer Name</h6></Grid>
                                            <Grid item md={3} xs={12}><h6 className='text-center'>Address</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Phone</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Area</h6></Grid>
                                        </Grid>
                                    </div>
                                    {customerpurchasingArry.map((row, index) => (

                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={1} xs={12}>
                                                    <div className='d-flex mb-2' style={{ justifyContent: "center" }}>


                                                        {row.show === false ? (
                                                            <div className='photo_table' 
                                                            onClick={() => handleexpandbox(row, index)}
                                                            // onClick={() => handleexpandbox(row, index)} 
                                                            
                                                            
                                                            
                                                            >
                                                                <span className='table_span_home'  >
                                                                    <i class="fa fa-plus"></i>
                                                                </span>
                                                            </div>
                                                        ) : (
                                                        
                                                        <div className='photo_table_blue'
                                                        onClick={() => {
                                                            customerpurchasingArry[
                                                                index
                                                            ].show = false;
                                                            setcustomerpurchasingArry([
                                                                ...customerpurchasingArry,
                                                            ]);
                                                        }}
                                                            
                                                            ><span className='photo_table_blue'  >
                                                                <i className="fa fa-minus-square"></i>
                                                            </span></div>
                                                           )} 
                                                    </div>
                                                </Grid>

                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PO#</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.customer?.username}</span></div></div></Grid>
                                                <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.customer?.Address}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.customer?.phone}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.customer?.state}</span></div></div></Grid>

                                            </Grid>


                                            <Expand
                                            
                                            // open={row.show}
                                            open={row.show}
                                            
                                            >
                                                <div>
                                               {venderdistbuterArry?.map((row,index) => ( 
                                                        <Grid className='Component_main_grid'>

                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'><img height={{height:"70px" ,width:"70px"}} src={row.item?.photo} /></span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.item}</span></div></div></Grid>
                                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.brand}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.description}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.price}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.Qty}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.msrmt}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>{row?.newQty}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>{row?.actualPrice}</span></div></div></Grid>

                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='edit_delete'><span className='table_span_home' style={{ fontSize: "30px" }}><i class="fa fa-pencil pr-1"></i><i class="fa fa-times" style={{ color: "red" }}></i></span></div></div></Grid>
                                                        </Grid>
                                                    ))} 
                                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={3} xs={12}></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>{row.pickup}<i class="fa fa-arrow-down ml-1 mt-1"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Price</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Invoice Sub-Total</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Address</span></div></div></Grid>

                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree' onClick={() => props.history.push("/customer-invoice-list")} style={{ cursor: "pointer" }}><span className='table_span_home border_bottom' >Submit</span></div></div></Grid>


                                        </Grid>
                                    </div>
                                                </div>

                                            </Expand>


                                        </div>
                                    ))}
                                    <span>

                                    </span>

                                    


                                    {/* <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><i class="fa fa-plus"></i></span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PO#</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>mm/dd/yy</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Customer Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Address</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Phone #</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area</span></div></div></Grid>


                                        </Grid>
                                    </div> */}

                                </section>




                            </Card>
                        </div>

                    </div>
                </div>
                <VendorSidebar open={mobilesidebar} close={sidebaropen} />
            </section>
        </>
    )
}

export default HOC(CustomerPurchaceOrder)
