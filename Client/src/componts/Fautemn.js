import"./Fautemn.css"
import vq from "./photo multivitamin/images__52_-removebg-preview.png"
import vw from "./photo multivitamin/images__53_-removebg-preview.png"
import ve from "./photo multivitamin/images__54_-removebg-preview.png" 
import vr from "./photo multivitamin/images__55_-removebg-preview.png"
import vt from "./photo multivitamin/images__56_-removebg-preview.png"
import vy from "./photo multivitamin/images__57_-removebg-preview.png"
import vu from "./photo multivitamin/images__72_-removebg-preview.png"
import va from "./photo multivitamin/images__60_-removebg-preview.png"
import vs from "./photo multivitamin/images__61_-removebg-preview.png"
import vd from "./photo multivitamin/images__62_-removebg-preview.png"
import vf from "./photo multivitamin/images__63_-removebg-preview.png"
import vg from "./photo multivitamin/images__64_-removebg-preview.png"
import vh from "./photo multivitamin/images__65_-removebg-preview.png"
import vj from "./photo multivitamin/images__66_-removebg-preview.png"
import vc from "./photo multivitamin/images__67_-removebg-preview.png"
import vx from "./photo multivitamin/images__68_-removebg-preview.png"
import vz from "./photo multivitamin/images__69_-removebg-preview.png"

import { Link } from "react-router-dom"
const Protien = () => {

    const data=[
        {
        name:"multivitamin",
        img:vq,
        resia:"40$"
        },
        {
        name:"multivitamin",
        img:vw,
        resia:"20$"
        },
        {
        name:"multivitamin",
        img:ve,
        resia:"40$"
        },
        {
        name:"multivitamin",
        img:vr,
        resia:"42$"
        },
        {
        name:"multivitamin",
        img:vt,
        resia:"15$"
        },
        {
        name:"multivitamin",
        img:vg,
        resia:"20$"
        },
        {
            name:"multivitamin",
            img:vy,
            resia:"30$"
        },
        {
            name:"multivitamin",
            img:vc,
            resia:"40$"
        },
        {
            name:"multivitamin",
            img:vs,
            resia:"50$"
        },
        {
            name:"multivitamin",
            img:vx,
            resia:"10$"
        },
        {
            name:"multivitamin",
            img:vf,
            resia:"12$"
        },
        {
            name:"multivitamin",
            img:va,
            resia:"12$"
        },
        {
            name:"multivitamin",
            img:vd,
            resia:"15$"
        },
        {
            name:"multivitamin",
            img:vh,
            resia:"20$"
        },
        {
            name:"multivitamin",
            img:vu,
            resia:"40$"
        },
        {
            name:"multivitamin",
            img:vj,
            resia:"50$"
        },
        {
            name:"multivitamin",
            img:vz,
            resia:"21$"
        },

 ]
    return (
        <body className='hys'>
            
            <Link to="/First"><button class="button">
                Back
                </button></Link>

        <h1 className='gt'> *multivitamin* </h1>
        <div className="container">
           
            {
                data.map((d) => {
                    return (
                        
                        <div className="card_item" >
                            <div className="card_inner">
                                <img src={d.img} alt="" />
                                <div className="userName">{d.name}</div>
                                <div className="userUrl">{d.resia}</div>
                                <div className="detail-box">

                                </div>
                                <button className="seeMore">buy now </button>
                            </div>

                        </div>
                    )
                })
            }

        </div>              
    </body>
)

}

export default Protien;