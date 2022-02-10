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

const Sidebar = (props) => {


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
              <Link to="/admin-user-list"><li className='li_data'  style={{cursor:"pointer"}}>User List</li></Link>
              <Link to="/admin-pos-list"><li className='li_data' style={{cursor:"pointer"}}>PO's List</li></Link>
              <Link to="/final-invoice"><li className='li_data' style={{cursor:"pointer"}}>Inv's List</li></Link>
              <Link to="/admin-revenue-list"><li className='li_data' style={{cursor:"pointer"}}>Revenue</li></Link>
              <Link to="/admin-vender-list"><li className='li_data' style={{cursor:"pointer"}}>Vendors List</li></Link>
              <Link to="/customerlist"><li className='li_data' style={{cursor:"pointer"}}>Customer List</li></Link>
              <Link to="/customerSignup"><li className='li_data' style={{cursor:"pointer"}}>Sign Out</li></Link>
             
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  </>;
};

export default Sidebar;
