import"./Creatien.css"
import its from"./photo ceratien/download__3_-removebg-preview.png"
import itq from"./photo ceratien/download__4_-removebg-preview.png"
import itl from"./photo ceratien/download__5_-removebg-preview.png"
import itu from"./photo ceratien/images__15_-removebg-preview.png"
import itp from"./photo ceratien/images__17_-removebg-preview.png"
import ity from"./photo ceratien/images__33_-removebg-preview.png"
import itr from"./photo ceratien//images__30_-removebg-preview.png"
import it from"./photo ceratien/images__32_-removebg-preview.png"
import itg from"./photo ceratien/images__21_-removebg-preview.png"
import itx from"./photo ceratien/images__22_-removebg-preview.png"
import itz from"./photo ceratien/images__23_-removebg-preview.png"
import itb from"./photo ceratien/images__24_-removebg-preview.png"
import itd from"./photo ceratien/images__25_-removebg-preview.png"
import itm from"./photo ceratien/images__26_-removebg-preview.png"
import itfg from "./photo ceratien/images__27_-removebg-preview.png"
import itag from "./photo ceratien/images__28_-removebg-preview.png"
import iaag from "./photo ceratien/images__29_-removebg-preview.png"
import { Link } from "react-router-dom"
const Protien = () => {

    const data=[
        {
        name:"Creatine 100",
        img:its,
        price:"50$"
        },
        {
        name:"Creatine ON",
        img:itq,
        price:"60$"
        },
        {
        name:"Creatine ON",
        img:itl,
        price:"30$"
        },
        {
        name:"Creatine BLACK",
        img:itu,
        price:"25$"
        },
        {
        name:"Creatine LL",
        img:itp,
        price:"45$"
        },
        {
        name:"Creatine MIC",
        img:ity,
        price:"36$"
        },
        {
            name:"Creatine MONO ",
            img:itr,
            price:"28$"
        },
        {
            name:"Creatine Pills",
            img:it,
            price:"45$"
        },
        {
            name:"Creatine HCi",
            img:iaag,
            price:"15$"
        },
        {
            name:"Creatine go",
            img:itg,
            price:"35$"
        },
        {
            name:"Creatine Gold",
            img:itx,
            price:"41$"
        },
        {
            name:"Creatine DY",
            img:itz,
            price:"22$"
        },
        {
            name:"Creatine Dody",
            img:itb,
            price:"23$"
        },
        {
            name:"Creatine UP",
            img:itfg,
            price:"21$"
        },
        {
            name:"Creatine ",
            img:itd,
            price:"45$"
        },
        {
            name:"Creatine QNT",
            img:itag,
            price:"20$"
        },
        {
            name:"Creatine CN",
            img:itm,
            price:"34$"
        },

 ]
    return (
        <body className='hys'>
            
            <Link to="/First"><button class="button">
                Back
                </button></Link>

        <h1 className='gt'> Creatine  </h1>
        <div className="container">
           
            {
                data.map((d) => {
                    return (
                        
                        <div className="card_item" >
                            <div className="card_inner">
                                <img src={d.img} alt="" />
                                <div className="userName">{d.name}</div>
                                <div className="userUrl">{d.price}</div>
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