import React,{useState,useEffect} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc'
import "../../Home/Home.css"
import axios from 'axios'
import Loder from "../../Loder/Loder"
import { getBaseUrl } from "../../utils"
import { blankValidator } from '../../utils/Validation';

const ArivalsPage = (props) => {
    const [isupdated, setisupdated] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [itemDatagetArry, setitemDatagetArry] = useState([])


    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getallitem";

            axios.get(url).then(
                (res) => {
                    setitemDatagetArry(res.data.getitem);
                    console.log("data item data:::", res.data.getitem);
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


    

    const wholesaler =(row)=>{

        console.log("wholesellerid",row.wholesaler._id)
        const wholeselerlid = row.wholesaler._id
        

       props.history.push("/customer-shopping-list", {data:wholeselerlid})
    }

    return (
        <>
            <section>
                <div className="home_padding mb-4">
                    <div className='container'>
                        <div className='home_table'>
                            <Card className="home_table_card_color p-3">

                                <div className='p-3'>
                                    <Grid className='Component_main_grid'>

                                        <Grid item md={5} xs={12} sm={12}>
                                            <div className='new_arivalss'>
                                                <span>NEW ARRIVALS</span>
                                            </div>
                                        </Grid>

                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>

                                <section>
                                    {itemDatagetArry.map((row,index)=>(
                                        //  <div className='' >
                                        //      <div className='d-flex mb-2' style={{ justifyContent: "space-between" }}>
                                        //      <div ><div className='withoutgrid' style={{backgroundColor:"#a9d18e"}}><span className='table_span_home'><img src={row.photo} /></span></div></div>
                                        //      <div><div className='withoutgrid' style={{backgroundColor:"#a9d18e"}}><span className='table_span_home'>{row.brand}</span></div></div>
                                        //      <div><div className='withoutgrid' style={{backgroundColor:"#a9d18e"}}><span className='table_span_home'>{row.item}</span></div></div>
                                        //      <div><div className='withoutgrid' style={{backgroundColor:"#a9d18e"}}><span className='table_span_home' >{row.distributer?.name}</span></div></div>
                                        //     <div><div className='withoutgrid' style={{backgroundColor:"#a9d18e"}}><span className='table_span_home'>{row.distributer?.area} <i class="fa fa-arrow-down"></i></span></div></div>
                                            
                                        //  </div>
                                        <div>
                                         <Grid className='Component_main_grid'>
                                             <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><img style={{width:"60px",width:"60px"}} src={row.photo} /></span></div></div></Grid>
                                             <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.item}</span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.brand}</span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.description} </span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home '  style={{cursor:"pointer"}} >{row.wholesaler?.name}</span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.distributer?.area} <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                        
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={()=> wholesaler(row)}>{row.distributer?.name} <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                             {/* <Grid item md={2} xs={12}></Grid> */}
                                         </Grid>
                                     </div>

                                    ))}
                                   
                                  
                                   
                                </section>

                                    
                                    {/* <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>PHOTO</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Brand</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Item Name</span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' style={{cursor:"pointer"}} onClick={() => props.history.push("/customer-shopping-list")}>WS Vendor</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>Area <i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                        </Grid>
                                    </div> */}
                                  
                                  
                                </section>

                                <div className=' float-right'>
                                    <button type="button" class="Customer_log_arrival" onClick={() => props.history.push("/custonerLogin")}>Customer-Log-In</button>
                                </div>




                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(ArivalsPage)
