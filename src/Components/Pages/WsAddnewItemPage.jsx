import React, { useState, useEffect } from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import { useBarcode } from 'react-barcodes';
import bar from "../../Images/barcode.jpg"
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import { blankValidator } from '../utils/Validation';
import { showNotificationMsz } from "../utils/Validation";


const WsAddnewItemPage = (props) => {
    const token = localStorage.getItem('token');
    const [item, setitem] = useState()

    const [image, setimage] = useState(null)
    const [category, setcategory] = useState("")
    const [distributer, setdistributer] = useState("")
    const [itemdata, setitemdata] = useState("")
    const [brand, setbrand] = useState("")
    const [description, setdescription] = useState("")
    const [itemname, setitemname] = useState("")
    const [price, setprice] = useState("")
    const [Qty, setQty] = useState("")
    const [msrmt, setmsrmt] = useState("")
    const [active, setactive] = useState("")
    const [discount, setdiscount] = useState("")
    const [date, setdate] = useState("")
    const [DistributerArry, setDistributerArry] = useState([])
    const [isupdated, setisupdated] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [CategoryDataArry, setCategoryDataArry] = useState([])
  
    

    const setitemData = (data) => {
        console.log("data")
        setitem(data)

    }

    const { inputRef } = useBarcode({

        value: "iwjfuiweifj",

        options: {
            background: '#ccffff',
        }

    }
    );

    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getdistributer";
            let config = {
                headers: { Authorization: `Bearer ${token}` }
              };
            axios.get(url,config).then(
                (res) => {
                    setDistributerArry(res.data.getdistributer);
                    console.log("data cattttt:::", res.data.getdistributer);
                     showNotificationMsz(res.data.msg, "success");
                },
                (error) => {
                      showNotificationMsz(error, "danger");
                }
            );
        } catch (error) {
           showNotificationMsz(error, "danger");
        }

        try {
            let url = getBaseUrl() + "api/getcategory";
            let config = {
                headers: { Authorization: `Bearer ${token}` }
              };
            axios.get(url,config).then(
                (res) => {
                    setCategoryDataArry(res.data.getcategory);
                    console.log("data catttttgory:::", res.data.getcategory);
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

  


    const [categoryError, setcategoryError] = useState(false)
    const [distributerError, setdistributerError] = useState(false)

    const [brandError, setbrandError] = useState(false)
    const [descriptionError, setdescriptionError] = useState(false)
    const [itemnameError, setitemnameError] = useState(false)
    const [priceError, setpriceError] = useState(false)
    const [QtyError, setQtyError] = useState(false)
    const [msrmtError, setmsrmtError] = useState(false)
    const [activeError, setactiveError] = useState(false)
    const [discountError, setdiscountError] = useState(false)
    const [dateError, setdateError] = useState(false)
    const addItemproduct = () => {
        if (image === null || image === "") {
            alert("Choose the image");
            return;
        }
        if (!blankValidator(item)) {
            setitemnameError(true);
            return;
        }
        if (!blankValidator(brand)) {
            setbrandError(true);
            return;
        }

        if (!blankValidator(category)) {
            setcategoryError(true);
            return;
        }
        if (!blankValidator(description)) {
            setdescriptionError(true);
            return;
        }

        if (!blankValidator(price)) {
            setpriceError(true);
            return;
        }
        if (!blankValidator(Qty)) {
            setQtyError(true);
            return;
        }
        if (!blankValidator(msrmt)) {
            setmsrmtError(true);
            return;
        }
        if (!blankValidator(distributer)) {
            setdistributerError(true);
            return;
        }
        if (!blankValidator(active)) {
            setactiveError(true);
            return;
        }
        if (!blankValidator(discount)) {
            setdiscountError(true);
            return;
        }
        if (!blankValidator(date)) {
            setdateError(true);
            return;
        }

        setisloading(true);
        let url = getBaseUrl() + "api/additem";
        setisloading(true);
        console.log("additemd:::", url);
        const fd = new FormData();

        fd.append("category", category);
        fd.append("distributer", distributer);
        fd.append("item", item);
        fd.append("brand", brand);
        fd.append("description", description);
        fd.append("price", price);
        fd.append("Qty", Qty);
        fd.append("msrmt", msrmt);
        fd.append("active", active);
        fd.append("discount", discount);
        fd.append("date", date);


        //********* HERE IS THE CHANGE ***********

        fd.append("image", image);

       
          let config = {
            headers: { Authorization: `Bearer ${token}` }
          };
        axios
            .post(url, fd,config)
            .then(
                (res) => {
                    showNotificationMsz(res.data.msg, "success");
                    console.log("additem   succes:::", res);
                    props.history.push("/venderItemList")
                    setisupdated(!isupdated);
                    setcategory("")
                    setdistributer("")
                    setitem("")
                    setbrand("")
                    setdescription("")
                    setprice("")
                    setQty("")
                    setmsrmt("")
                    setactive("")
                    setdiscount("")
                    setdate("")

                },

                (error) => {
                    console.log("data response categriesfield:::", error);
                    setisloading(false);
                    showNotificationMsz(error, "success");
                }
            )
            .catch((e) => {
                console.log("data response categriesfield:::", e);
                setisloading(false);
                 showNotificationMsz(e, "success");
            });
    };



    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_colorrr p-3">
                                <div className='wdwq'>

                                </div>
                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={6} xs={12}>
                                            <div className=''>
                                                <h4>WS Vendors/Add New Item</h4>
                                            </div>

                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Grid className='Component_main_grid'>

                                                <Grid item md={4} xs={12}>

                                                    <svg style={{ height: "20px", width: "20px" }} ref={inputRef} alt='barcode' />
                                                </Grid>
                                                <Grid item md={8} xs={12}>
                                                    <div className='d-flex'>
                                                        {/* <div className="profile_input text-center  " >
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                name="image-upload"
                                                                id="input"

                                                            />
                                                            <div className="">
                                                                <label className="resumeview_image_upload" htmlFor="input">
                                                                    <i class="fa fa-camera mr-1"></i>
                                                                </label>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    <div className='mt-4'>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Upload Photo</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    {/* <div className='photo_table'><span className='table_span_home'>PHOTO</span></div> */}
                                                    <div><input type="file" class="form-control" aria-describedby="emailHelp" placeholder="Photo"

                                                        onChange={(e) => {
                                                            setimage(e.target.files[0])
                                                        }}
                                                    /></div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Item#</h6></div>

                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text"
                                                        class="form-control hh"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Item"
                                                        value={item}
                                                        onChange={(e) => {
                                                            setitemnameError(false)
                                                            setitemData(e.target.value)
                                                        }}

                                                    />
                                                        {itemnameError && (
                                                            <span className="text-danger">Enter Item</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Brand</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Brand"
                                                        value={brand}
                                                        onChange={(e) => {
                                                            setbrandError(false)
                                                            setbrand(e.target.value)
                                                        }}
                                                    />
                                                    {brandError && (
                                                            <span className="text-danger">Enter Brand</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Category</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div>
                                                    <select class="form-control hh"   value={category}
                                                        onChange={(e) => {
                                                            setcategoryError(false)
                                                            setcategory(e.target.value)
                                                        }}>
                                                        {CategoryDataArry.map((row, index) => (
                                                              <option value="">select</option>,
                                                            <option value={row._id}>{row.category}</option>
                                                        ))}
                                                        

                                                    </select>
                                                        {/* <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Category"
                                                        value={category}
                                                        onChange={(e) => {
                                                            setcategoryError(false)
                                                            setcategory(e.target.value)
                                                        }}
                                                    /> */}


                                                    {categoryError && (
                                                            <span className="text-danger">Enter category</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Discription</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Discription"
                                                        value={description}
                                                        onChange={(e) => {
                                                            setdescriptionError(false)
                                                            setdescription(e.target.value)
                                                        }}
                                                    />
                                                      {descriptionError && (
                                                            <span className="text-danger">Enter description</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Price</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control mr-2" aria-describedby="emailHelp" placeholder="$Price"
                                                        value={price}
                                                        onChange={(e) => {
                                                            setpriceError(false)
                                                            setprice(e.target.value)
                                                        }}
                                                    />
                                                     {priceError && (
                                                            <span className="text-danger">Enter price</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                                <Grid item md={2} xs={12}>
                                                    <div className='ml-2'><input type="text" class="form-control ml-2" aria-describedby="emailHelp" placeholder="Qut."
                                                        value={Qty}
                                                        onChange={(e) => {
                                                            setQtyError(false)
                                                            setQty(e.target.value)
                                                        }}
                                                    />
                                                    {QtyError && (
                                                            <span className="text-danger">Enter Qty</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                                <Grid item md={2} xs={12}>
                                                    <div className='ml-2'><input type="text" class="form-control ml-2   " aria-describedby="emailHelp" placeholder="Msrmt"
                                                        value={msrmt}
                                                        onChange={(e) => {
                                                            setmsrmtError(false)
                                                            setmsrmt(e.target.value)
                                                        }}
                                                    />
                                                      {msrmtError && (
                                                            <span className="text-danger">Enter msrmt</span>
                                                        )}</div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>

                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Distributer</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><select class="form-control hh" value={distributer}
                                                        onChange={(e) => {
                                                            setdistributerError(false)
                                                            setdistributer(e.target.value)
                                                        }}>
                                                        {DistributerArry.map((row, index) => (
                                                            
                                                            <option value={row._id}>{row.name}</option>
                                                        ))}
                                                        

                                                    </select>
                                                    {distributerError && (
                                                            <span className="text-danger">Enter Distributer</span>
                                                        )}
                                                   
                                                    </div>
                                                </Grid>
                                            </Grid>

                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Active</h6></div>
                                                </Grid>

                                                <Grid item md={3} xs={12}>
                                                    <div><select class="form-control hh" value={active}
                                                        onChange={(e) => {
                                                            setactiveError(false)
                                                            setactive(e.target.value)
                                                        }}>
                                                        <option>select</option>
                                                        <option>Active</option>
                                                        <option>Discontinue</option>
                                                        <option >Coming on</option>
                                                    </select>
                                                    
                                                    {activeError && (
                                                            <span className="text-danger">Enter active</span>
                                                        )}</div>
                                                </Grid>
                                            </Grid>
                                        </div>

                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Discount</h6></div>
                                                </Grid>


                                                <Grid item md={3} xs={12}>
                                                    <div><input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Discount%"
                                                        value={discount}
                                                        onChange={(e) => {
                                                            setdiscountError(false)
                                                            setdiscount(e.target.value)
                                                        }}
                                                    />
                                                     {discountError && (
                                                            <span className="text-danger">Enter discount</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className='mb-3'>
                                            <Grid className='Component_main_grid'>
                                                <Grid item md={3} xs={12}>
                                                    <div className='text-center mt-2'><h6>Calendar</h6></div>
                                                </Grid>


                                                <Grid item md={3} xs={12}>
                                                    <div><input type="date" class="form-control" aria-describedby="emailHelp" placeholder="Select Date"
                                                        value={date}
                                                        onChange={(e) => {
                                                            setdateError(false)
                                                            setdate(e.target.value)
                                                        }}
                                                    />
                                                     {dateError && (
                                                            <span className="text-danger">Enter date</span>
                                                        )}
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>


                                    </div>




                                </section>
                                <div className='float-right' >
                                    <button type="button" class="saveandaddnewitem mr-2" onClick={() => props.history.push("#")}><span className='border_bottom mr-2'>Save & Add New Item</span></button>
                                    <button type="button" class="saveandaddnewitem" onClick={addItemproduct}><span className='border_bottom'>Save</span></button>
                                </div>



                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(WsAddnewItemPage)
