import React,{useState,useEffect} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc'
import "../../Home/Home.css"
import axios from 'axios'
import Loder from "../../Loder/Loder"
import { getBaseUrl } from "../../utils"
import { blankValidator } from '../../utils/Validation';

const SpacialDiscount = (props) => {
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
                                                <span>Specials & Discounts</span>
                                            </div>
                                        </Grid>
                                       
                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                             
                                    <div>
                                    {itemDatagetArry.map((row,index)=>(
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><img src={row.photo} style={{height:"60px",width:"60px" }}/></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.item}</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.brand}</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.description}</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home ' style={{cursor:"pointer"}} >{row.wholesaler?.name}</span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.distributer?.area} </span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' onClick={() => props.history.push("/customer-shopping-list")}>{row.distributer?.name}<i class="fa fa-arrow-down"></i></span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.discount} </span></div></div></Grid>
                                            <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.date}</span></div></div></Grid>
                                  
                                        </Grid>
                                  
                                      ))}
                                        </div>
                                 
                                    
                                   
                                </section>

                               
                              

                               

                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(SpacialDiscount)
