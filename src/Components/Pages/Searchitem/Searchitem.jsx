import React,{useState,useEffect} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../../Common/Hoc'
import "../../Home/MainHome/HomePage.css"

import axios from 'axios'
import Loder from "../../Loder/Loder"
import { getBaseUrl } from "../../utils"
import { blankValidator } from '../../utils/Validation';

const MainHome = (props) => {
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

                                        <Grid item md={5} xs={12}>
                                            <div className='new_arivals'>
                                                <span>Searched Item</span>
                                            </div>
                                        </Grid>
                                      
                                    </Grid>
                                </div>
                            
                                <section>
                               
                                    {itemDatagetArry.map((row,index)=>(
                                      
                                        <div>
                                       <Grid className='Component_main_grid'>
                                             <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'><img style={{width:"60px",width:"60px"}} src={row.photo} /></span></div></div></Grid>
                                             <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.item}</span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.brand}</span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.description}</span></div></div></Grid>
                                             <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.wholesaler?.name}</span></div></div></Grid>
                                             <Grid item md={1} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.distributer?.area} </span></div></div></Grid>
                                             <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home border_bottom' >{row.distributer?.name} </span></div></div></Grid>
                                           
                                         </Grid>
                                     </div>

                                    ))}
                                   
                                  
                                   
                                </section>

                            </Card>
                        </div>

                    </div>
                </div></section>
        </>
    )
}

export default HOC(MainHome)
