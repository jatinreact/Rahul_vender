import React, { useState, useEffect } from 'react'
import { Card, Grid } from "@material-ui/core"
import axios from 'axios'
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import Expand from "react-expand-animated";
import CustomerSidebar from '../../Sidebar/CustomerSidebar';
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import { blankValidator } from '../utils/Validation';

const CustomerPurchaceOrder = (props) => {
    const [Customersidebar, setCustomersidebar] = useState(false);
    const [isupdated, setisupdated] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [customerinvoiceArry, setcustomerinvoiceArry] = useState([])
    const [newvenderid, setnewvenderid] = useState("")
    const [finalinvoiceArry, setfinalinvoiceArry] = useState([])

    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getinvoice";

            axios.get(url).then(
                (res) => {
                    let temp = [];
                    res.data.getinvoice.map(
                        async (data) => {
                            data["show"] = false;
                            //   await getuseranswerandrealAnswer(data, data.id);
                            temp.push(data);
                        }
                    );

                    setcustomerinvoiceArry(res.data.getinvoice);
                    console.log("customerinvoiceArry:::", res.data.getinvoice);
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

            let url = getBaseUrl() + `api/getinvoicebyid/${newvenderid}`;

            axios.get(url).then(
                (res) => {

                    // let temp = [];
                    // res.data.map(
                    //     async (data) => {
                    //         data["show"] = false;
                    //         //   await getuseranswerandrealAnswer(data, data.id);
                    //         temp.push(data);
                    //     }
                    // );
                    ///setvenderdistbuterArry(temp);
                    setfinalinvoiceArry(res.data.getinvoicebyid);
                    console.log("customerpurchasevenderiddwfwefwe:::", res.data.getinvoicebyid);
                    // showNotificationMsz(res.data.msg, "success");
                },
                (error) => {
                    //   showNotificationMsz(error, "danger");
                }
            );
        } catch (error) {
            //   showNotificationMsz(error, "danger");
        }

    }, [newvenderid]);

    const handleexpandbox = (row, index) => {
        console.log("row adta", row)
        const datatt = row.vender._id;
        console.log("row adta", row.vender._id)
        setnewvenderid(datatt)
        customerinvoiceArry[
            index
        ].show = true;
        setcustomerinvoiceArry([
            ...customerinvoiceArry,
        ]);

        console.log("ghgjhj", customerinvoiceArry)


    }




    const sidebaropen = () => {

        setCustomersidebar(!Customersidebar)
    }
    const [Expendbox, setExpendbox] = useState(false)
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='p-5'>
                        <div className='home_table'>
                            <Card className="home_table_card_color_Customer_inv_list p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={1} xs={12}> <div className="col-md-12 pb-3">
                                            <div className='pl-3'>
                                                <div className='pl-2 mt-1' onClick={sidebaropen}>
                                                    <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                                </div>
                                            </div>
                                        </div></Grid>
                                        <Grid item md={4} xs={12}> <div className="col-md-12 pb-3">
                                            <h5 className='' style={{ color: "#FFF" }}>Customer Invoices List</h5>
                                        </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3">
                                                <input
                                                    disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="WS Vender/Distributer Name"
                                                />
                                            </div></Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className="col-md-12 pb-3"><input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Invoice #"
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
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Inv#</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Date</h6></Grid>
                                            <Grid item md={4} xs={12}><h6 className='text-center'>Venders Name</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Contact Info</h6></Grid>
                                            <Grid item md={2} xs={12}><h6 className='text-center'>Inv. Total</h6></Grid>
                                            <Grid item md={1} xs={12}><h6 className='text-center'>Action</h6></Grid>
                                        </Grid>
                                    </div>
                                    {customerinvoiceArry.map((row, index) => (


                                        <div>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={1} xs={12}>
                                                    <div className='d-flex mb-2' style={{ justifyContent: "center" }}>


                                                        {row.show === false ? (
                                                            <div className='photo_table' onClick={() => handleexpandbox(row, index)} >
                                                                <span className='table_span_home'  >
                                                                    <i class="fa fa-plus"></i>
                                                                </span>
                                                            </div>
                                                        ) : (<div className='photo_table_blue' onClick={() => {
                                                            customerinvoiceArry[
                                                                index
                                                            ].show = false;
                                                            setcustomerinvoiceArry([
                                                                ...customerinvoiceArry,
                                                            ]);
                                                        }} ><span className='photo_table_blue'  >
                                                                <i className="fa fa-minus-square"></i>
                                                            </span></div>)}






                                                    </div>
                                                </Grid>


                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>DD/mm/yy</span></div></div></Grid>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.vender?.vendername}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.vender?.number}</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Accept</span></div></div></Grid>


                                            </Grid>



                                            <Expand open={row.show}>
                                                <div>
                                                    {finalinvoiceArry.map((row, index) => (
                                                        <Grid className='Component_main_grid'>

                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'><img style={{ height: "60px", width: "60px" }} src={row.item?.photo} /></span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.brand}</span></div></div></Grid>
                                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.item}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.price}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.Qty}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>{row.item?.msrmt}</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>




                                                        </Grid>
                                                    ))}

                                                </div>
                                                <div>
                                                    <Grid className='Component_main_grid'>

                                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Shopping</span></div></div></Grid>
                                                        <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Admin Fees</span></div></div></Grid>
                                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Price</span></div></div></Grid>
                                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>Invoice Sub-Total</span></div></div></Grid>
                                                        <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                                        <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' >Accept</span></div></div></Grid>
                                                        <Grid item md={2} xs={12}></Grid>

                                                    </Grid>
                                                </div>


                                            </Expand>

                                        </div>
                                    ))}







                                </section>




                            </Card>
                        </div>

                    </div>
                </div>
                <CustomerSidebar open={Customersidebar} close={sidebaropen} />
            </section>
        </>
    )
}

export default HOC(CustomerPurchaceOrder)
