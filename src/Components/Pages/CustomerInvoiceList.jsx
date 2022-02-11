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

  
    

    


    const sidebaropen = () => {

        setCustomersidebar(!Customersidebar)
    }
    const [Expendbox, setExpendbox] = useState(false)



 //for Payment
 const proceeds = (totalamount) => {
    var options = {
      key: "rzp_live_03JJx3iLMJehpq",
      amount: "100",
      currency: "INR",
      name: "Vendors",
      description: "Transaction",
      image:
        "https://media.istockphoto.com/vectors/ecommerce-buying-vector-illustration-logo-in-flat-style-vector-id1133937441?k=20&m=1133937441&s=612x612&w=0&h=ivoew5ZA8soZVQ3pf8XphV6RmHygkeMWXS4Rd4z4Zcc=",
      order_id: "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      // "prefill": {
      //     "name": "Gaurav Kumar",
      //     "email": "gaurav.kumar@example.com",
      //     "contact": "9999999999"
      // },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };





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
                                  


                                        <div>
                                            <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}>
                                                    <div className='d-flex mb-2' style={{ justifyContent: "center" }}>


                                                        {Expendbox === false ? (
                                                            <div className='photo_table' onClick={() =>  setExpendbox(!Expendbox)}>
                                                                <span className='table_span_home'  >
                                                                    <i class="fa fa-plus"></i>
                                                                </span>
                                                            </div>
                                                        ) : (<div className='photo_table_blue' onClick={() => {
                                                            setExpendbox(!Expendbox)
                                                        }} ><span className='photo_table_blue'  >
                                                                <i className="fa fa-minus-square"></i>
                                                            </span></div>)}






                                                    </div>
                                                </Grid>


                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Inv.#</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>DD/mm/yy</span></div></div></Grid>
                                                <Grid item md={4} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Venders Name</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>636625</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_blue_cs'><span className='table_span_home'>$Sub Total</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_gree'><span className='table_span_home' style={{cursor:"pointer"}} onClick={proceeds}>Accept</span></div></div></Grid>


                                            </Grid>



                                            <Expand open={Expendbox}>
                                                <div>
                                                 
                                                        <Grid className='Component_main_grid'>

                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'><img style={{ height: "60px", width: "60px" }} src="Photo" /></span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Price</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>4</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>1</span></div></div></Grid>
                                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>




                                                        </Grid>
                                                 
                                                </div>
                                                <div>
                                                 
                                                 <Grid className='Component_main_grid'>

                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'><img style={{ height: "60px", width: "60px" }} src="Photo" /></span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                     <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Price</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>4</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>1</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                     <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>




                                                 </Grid>
                                          
                                         </div>
                                         <div>
                                                 
                                                 <Grid className='Component_main_grid'>

                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'><img style={{ height: "60px", width: "60px" }} src="Photo" /></span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>item #</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Brand</span></div></div></Grid>
                                                     <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Item</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Price</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>4</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>Per</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_cs'><span className='table_span_home'>1</span></div></div></Grid>
                                                     <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>Qty.</span></div></div></Grid>
                                                     <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>$Total</span></div></div></Grid>




                                                 </Grid>
                                          
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
