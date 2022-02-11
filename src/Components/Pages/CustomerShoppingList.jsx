import React, { useState, useEffect } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import CustomerSidebar from '../../Sidebar/CustomerSidebar'
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import { blankValidator } from '../utils/Validation';
import { showNotificationMsz } from "../utils/Validation";


const CustomerShoppingList = (props) => {
    const token = localStorage.getItem('token');


    const [isupdated, setisupdated] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [itemCategoryArry, setitemCategoryArry] = useState([])
    const [gettemCategoryArry, setgettemCategoryArry] = useState([])
    const [Customersidebar, setCustomersidebar] = useState(false);
    const [catergoryId, setCatergoryId] = useState('')
    const [StoreQty, setStoreQty] = useState()
    const [total, settotal] = useState(0)
    const [getprice, setgetprice] = useState("")
    const [indexvalue, setindexvalue] = useState("")
    const [typeshow, settypeshow] = useState("")
    const [morelabal, setmorelabal] = useState(true)
    const [pickup, setpickup] = useState("")
    console.log("grdgr", pickup)

    /////add shopin api state

    const [venderid, setvenderid] = useState("")
    const [itemid, setitemid] = useState("")
    const [selectitem, setselectitem] = useState("")
    const [newQut, setnewQut] = useState("")
    const [newtotal, setnewtotal] = useState("")

    const [categorybyiddata, setcategorybyiddata] = useState([])
    const [categoryitembyid, setcategoryitembyid] = useState("")
    const [TrueDataArr, setTrueDataArr] = useState([])


    console.log("wholeid>>>>>>>>>>>>>>>>", props.location.state.data)
    const idd = props.location.state.data;
    const sidebaropen = () => {

        setCustomersidebar(!Customersidebar)
    }






    useEffect(() => {
        try {
            let url = getBaseUrl() + `api/categorybywholesalerid/${idd}`;


            axios.get(url).then(
                (res) => {
                    setitemCategoryArry(res.data.categorybywholesalerid);
                    setcategorybyiddata(res.data.categorybywholesalerid._id)
                    console.log("makecategry id", res.data.categorybywholesalerid._id)


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




    const nice = (row) => {
        console.log("happy", row._id)
        const iddd = row._id
        setcategoryitembyid(iddd)

    }

    useEffect(() => {
        try {
            let url = getBaseUrl() + `api/productcategorybyId/${categoryitembyid}`;


            axios.get(url).then(
                (res) => {
                    let temp = [];
                    res.data.map(
                        async (data) => {
                            data["show"] = false;
                            //   await getuseranswerandrealAnswer(data, data.id);
                            temp.push(data);
                        }
                    );

                    // setAssignmnetReview(temp);
                    temp.map(item => {
                        item.actualPrice = 0
                        item.newQty = 0
                    });

                    setcategorybyiddata(temp)
                    console.log("actulprice:::", temp)


                    // showNotificationMsz(res.data.msg, "success");
                },
                (error) => {
                    //   showNotificationMsz(error, "danger");
                }
            );
        } catch (error) {
            //   showNotificationMsz(error, "danger");
        }


    }, [categoryitembyid]);


    const Customerpurchase = () => {

        try {


            let url = getBaseUrl() + "api/addshoping";
            setisloading(true);

            let temp = {
                wholeseler: venderid,
                items: TrueDataArr,
                select: morelabal,
                Qty: StoreQty,
                total: newtotal,
                pickup: pickup,

            };
            let config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios
                .post(url, temp, config)
                .then(
                    (res) => {
                        console.log("response customer purchase :::", res);
                        setisloading(false);


                        showNotificationMsz(res.data.msg, "success");
                        // props.history.push("/customer-purchace-order")

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
    };




    const finalprice = (e, row, index) => {
        console.log("jatin:::", row);
        console.log("value:::", e.target.value);
        console.log("price>>>>>>>>>>>>>>>>>:::", row.actualPrice);
        console.log("price>>>>>>>>>>>>>>>>>:::", row.price);
        categorybyiddata[index].actualPrice = row.price * e.target.value;
        categorybyiddata[index].newQty =  e.target.value;
        setcategorybyiddata([...categorybyiddata])
        setnewtotal(row.actualPrice)
        setStoreQty(e.target.value)

    }

    const checkboxhandler = (e, row, index) => {
        console.log("checked????????", e.target.checked)
        // console.log("rowItemid????????",row.wholesaler?._id)
        setvenderid(row.wholesaler?._id)
        setitemid(row._id)
        // setmorelabal(!morelabal)
        // const more_labal = row.select
        // console.log("fwefewfjatin>>>>>>>>>>",row.show)
        // setmorelabal(!more_labal)
        categorybyiddata[index].show = e.target.checked;
        setcategorybyiddata([...categorybyiddata])
        let dtaTrueDataArr = categorybyiddata.filter(item => item.show === true);
        setTrueDataArr(dtaTrueDataArr)
        console.log("TrueDataArr", TrueDataArr)
    }


    console.log("Qtydata", StoreQty)
    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_color_shopping p-3">
                                <div className='wdwq'>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={2} xs={12}> <div className="col-md-12 pb-3">
                                            <div className='pl-3'>
                                                <div className='pl-2 mt-1' onClick={sidebaropen}>
                                                    <i class="fa fa-bars" style={{ fontSize: "30px" }}></i>
                                                </div>
                                            </div>
                                        </div></Grid>
                                        <Grid item md={5} xs={12}> <div className="col-md-12 pb-3">

                                            <h5 className='' style={{ color: "#FFF" }}>Customer Shopping List</h5>
                                        </div></Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className="col-md-12 pb-3">
                                                <input
                                                    disabled
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Brand"

                                                />
                                            </div></Grid>
                                        <Grid item md={2} xs={12}>
                                            <div className="col-md-12 pb-3"><input
                                                disabled
                                                type="text"
                                                class="form-control"
                                                placeholder="Item name"
                                            /></div></Grid>

                                        <Grid item md={1} xs={6}> <div className="search_area col-md-12">
                                            <i class="fa fa-search"></i>
                                        </div></Grid>

                                    </Grid>
                                </div>
                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={2} xs={12}>


                                        </Grid>
                                        <Grid item md={4} xs={12}>
                                            <div className=''>
                                                <h5>WS Vendors/Distributor Name</h5>
                                            </div>

                                        </Grid>
                                        <Grid item md={3} xs={12}>
                                            <div className=''>
                                                {/* <div className='mb-2' style={{ justifyContent: "center" }}><div className='photo_table_shopping'><span className='table_span_home'>Shipping<i class='fa fa-arrow-down pl-2' style={{ fontSize: "20px" }}></i> */}
                                                {/* <div class="form-group">


                                                    </div> */}


                                                {/* </span></div></div> */}
                                            </div>
                                            <select class="form-control" value={pickup} onChange={(e) => {
                                                setpickup(e.target.value)
                                            }}>
                                                <option>Select</option>
                                                <option value="Yes">Yes</option>
                                                <option value="Self Pick up">Self Pick up</option>
                                                <option value="Drop Off">Drop Off</option>

                                            </select>

                                        </Grid>
                                        <Grid item md={3} xs={12}>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={6} xs={12}>
                                                    <div className='mt-1' >
                                                        <h5>Min.Order:</h5><div></div>
                                                    </div>
                                                </Grid>
                                                <Grid item md={6} xs={12}>
                                                    <div className='' >
                                                        <input type="number" class="form-control" placeholder="$" />
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>

                                    <div>
                                        <Grid className='Component_main_grid'>
                                            {itemCategoryArry?.map((row, index) => (
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center", cursor: "pointer" }}><div className='photo_tablew'><span className='table_span_home' onClick={(e) => nice(row)} value={row.category}>{row.category}</span></div></div></Grid>

                                            ))}
                                        </Grid>
                                    </div>



                                    <div>
                                        {categorybyiddata?.map((row, index) => (
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><img style={{ height: "70px", width: "80px" }} src={row.photo} /></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='mb-2' ><div className='text-center pl-1'><span className='' ><input type="checkbox" id="vehicle1" checked={row.show} onChange={(e) => checkboxhandler(e, row, index)} /></span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.item}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.brand}</span></div></div></Grid>
                                                <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.item}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.price}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Per</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home' value={StoreQty}>{row.Qty}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.msrmt}</span></div></div></Grid>
                                                <Grid item md={1} xs={12}><input style={{ width: "80px" }} type="purchase" placeholder='Qty'
                                                    onChange={(e) => finalprice(e, row, index)}


                                                /></Grid>
                                                <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table_csss'><span className='table_span_home'>{row.actualPrice}</span></div></div></Grid>

                                            </Grid>
                                        ))}
                                    </div>

                                </section>


                                <div>
                                    <Grid className='Component_main_grid'>
                                        <Grid item md={4} xs={12}>
                                            <div className='text-center mt-5 mb-3'>
                                                <button type="button" class="shiping_list btn btn-primary" ><span className='border_bottom'>Category A Total</span></button>
                                            </div>
                                        </Grid>
                                        <Grid md={4} xs={12}>
                                            <div className='text-center mt-5 mb-3'>
                                                <button type="button" class="shiping_list btn btn-primary" ><span className='border_bottom'>Order Subtotal</span></button>
                                            </div>
                                        </Grid>
                                        <Grid md={4} xs={12}>
                                            <div className='text-center mt-5 mb-3'>
                                                <button type="button" class="shiping_list btn btn-success " ><span className='border_bottom' onClick={Customerpurchase}>Submit</span></button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>


                            </Card>
                        </div>

                    </div>
                </div>
                <CustomerSidebar open={Customersidebar} close={sidebaropen} />
            </section>
        </>
    )
}

export default HOC(CustomerShoppingList)
