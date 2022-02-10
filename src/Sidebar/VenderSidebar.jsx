import React, { useState } from 'react';
import "./Sidebar.css"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
//dialog box
import {
    Grid,
    Card,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
} from "@material-ui/core";

const CustomerSidebar = (props) => {
    const history = useHistory()

    const handler = () => {
        //Redirect to another route\
        localStorage.removeItem("token")
        history.push("/") 
      }
    


    console.log("ddddddd", props)

    return <>
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1000"

            data-aos-easing="ease-in-sine">


            <Dialog
                open={props.open}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth="fullWidth"
                onClose={() => {
                    props.close();
                }}
            >
                {/* <DialogTitle>

          <span
            className="float-right icon_color"
          onClick={()=>props.close()}
          >
            <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
          </span>
        </DialogTitle> */}
                <DialogContent>

                    <div className='about_data'>
                        <ul>
                            <Link to="/vendersignup"><li className='li_data' style={{ cursor: "pointer" }}>Profile</li></Link>
                            <Link to="/VenderDistributerList"><li className='li_data' style={{ cursor: "pointer" }}>Distributers</li></Link>
                            <Link to="/VenderCategoryListPage"><li className='li_data' style={{ cursor: "pointer" }}>Category</li></Link>
                            <Link to="/venderItemList"><li className='li_data' style={{ cursor: "pointer" }}>Item List</li></Link>
                            <Link to="/addnewItemPage"><li className='li_data' style={{ cursor: "pointer" }}>Add /Edit Item</li></Link>
                            <Link to="/customer-purchace-order"><li className='li_data' style={{ cursor: "pointer" }}>Purchases Order</li></Link>
                            <Link to="/customerFinalInvoice"><li className='li_data' style={{ cursor: "pointer" }}>Invoices</li></Link>
                           <li className='li_data' style={{ cursor: "pointer" }} onClick={handler}>SignOut</li>


                        </ul>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    </>;
};

export default CustomerSidebar;
