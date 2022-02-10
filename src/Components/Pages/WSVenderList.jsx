import React,{useState,useEffect} from 'react'
import { Card, Grid } from "@material-ui/core"
import HOC from '../../Common/Hoc'
import "../Home/Home.css"
import axios from 'axios'
import Loder from "../Loder/Loder"
import { getBaseUrl } from "../utils"
import { blankValidator } from '../utils/Validation';

const WSVenderList = (props) => {

    const [isupdated, setisupdated] = useState(false)
    const [isloading, setisloading] = useState(false)
    const [itemDatagetArry, setitemDatagetArry] = useState([])




    useEffect(() => {
        try {
            let url = getBaseUrl() + "api/getallitem";

            axios.get(url).then(
                (res) => {
                    setitemDatagetArry(res.data.getitem);
                    console.log("getallitem:::", res.data.getitem);
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
                                                <span>WS Vendors List</span>
                                            </div>
                                        </Grid>

                                    </Grid>
                                </div>
                                {/* ///data grid */}
                                <section>
                                    {itemDatagetArry.map((row,index)=>(
                                    <div>
                                        <Grid className='Component_main_grid'>
                                            <Grid item md={5} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("#")}><span className='table_span_home' style={{cursor:"pointer"}}>{row.wholesaler?.name}</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' ><span className='table_span_home'>548444844</span></div></div></Grid>
                                            <Grid item md={2} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table'><span className='table_span_home'>{row.distributer?.area}<i class="fa fa-arrow-down pl-2"></i></span></div></div></Grid>
                                            <Grid item md={3} xs={12}><div className='d-flex mb-2' style={{ justifyContent: "center" }}><div className='photo_table' onClick={()=> props.history.push("/WS-distributer-list")}><span className='table_span_home border_bottom' style={{cursor:"pointer"}} >{row.distributer?.name}</span></div></div></Grid>
                                           
                                        </Grid>
                                    </div>
                                    ))}
                                   
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

export default HOC(WSVenderList)
