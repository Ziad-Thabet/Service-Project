import"./Preworks.css"
import kts from"./photo prework/images__34_-removebg-preview.png"
import kt from"./photo prework/images__35_-removebg-preview.png"
import kti from"./photo prework/images__36_-removebg-preview.png"
import ktu from"./photo prework/images__37_-removebg-preview.png"
import kth from"./photo prework/images__38_-removebg-preview.png"
import kta from"./photo prework/images__39_-removebg-preview.png"
import ktj from"./photo prework/images__40_-removebg-preview.png"
import ktk from"./photo prework/images__41_-removebg-preview.png"
import ktv from"./photo prework/images__42_-removebg-preview.png"
import ktb from"./photo prework/images__43_-removebg-preview.png"
import ktn from"./photo prework/images__44_-removebg-preview.png"
import ktq from"./photo prework/images__45_-removebg-preview.png"
import ktm from"./photo prework/images__46_-removebg-preview.png"
import ktz from"./photo prework/images__47_-removebg-preview.png"
import ktc from"./photo prework/images__48_-removebg-preview.png"
import ktcs from"./photo prework/images__49_-removebg-preview.png"
import poy from"./photo prework/images__50_-removebg-preview.png"

import { Link } from "react-router-dom"
const Protien = () => {

    const data=[
        {
        name:"prework stomp",
        img:kts,
        resia:"40$"
        },
        {
        name:"prework nitro",
        img:kti,
        resia:"20$"
        },
        {
        name:"prework ko ",
        img:kt,
        resia:"26$"
        },
        {
        name:"prework halk",
        img:kth,
        resia:"sdlnflsjdf"
        },
        {
        name:"prework ",
        img:kta,
        resia:"sdlfkmsldmkfd"
        },
        {
        name:"prework iso ",
        img:ktu,
        resia:"22$"
        },
        {
            name:"prework ",
            img:ktk,
            resia:"32$"
        },
        {
            name:"prework #1",
            img:ktq,
            resia:"39$"
        },
        {
            name:"prework roar",
            img:ktj,
            resia:"40$"
        },
        {
            name:"prework pr",
            img:ktn,
            resia:"45$"
        },
        {
            name:"prework iG",
            img:ktb,
            resia:"40$"
        },
        {
            name:"prework wh",
            img:ktm,
            resia:"45$"
        },
        {
            name:"prework bulk",
            img:ktv,
            resia:"35$"
        },
        {
            name:"prework bulk",
            img:ktz,
            resia:"25$"
        },
        {
            name:"prework sur",
            img:ktc,
            resia:"15$"
        },
        {
            name:"prework most",
            img:poy,
            resia:"18$"
        },
        {
            name:"prework C4",
            img:ktcs,
            resia:"36$"
        },

 ]
    return (
        <body className='hys'>
            
            <Link to="/First"><button class="button">
                Back
                </button></Link>

        <h1 className='gt'> *Pre workout* </h1>
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