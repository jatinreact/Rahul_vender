import React, { useState } from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom"
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
              <Link to="/customerSignup"><li className='li_data'  style={{cursor:"pointer"}}>Profile</li></Link>
              <Link to="/"><li className='li_data' style={{cursor:"pointer"}}>Main Page</li></Link>
              <Link to="/WSVenderList"><li className='li_data' style={{cursor:"pointer"}}>Vendor List</li></Link>
              <Link to="/customer-shopping-list"><li className='li_data' style={{cursor:"pointer"}}>Shopping List</li></Link>
              <Link to="/customer-invoice-list"><li className='li_data' style={{cursor:"pointer"}}>Invoice List</li></Link>
              <Link to="/customerSignup"><li className='li_data' style={{cursor:"pointer"}}>SignOut</li></Link>
             
             
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </>;
};

export default CustomerSidebar;
