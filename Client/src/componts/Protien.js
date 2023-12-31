import"./Protein.css"
import btf from "./photo protien/BPI-Whey-HD-on-Acacia-World-1.webp"
import bttr from "./photo protien/download (1).jpeg"
import btq from "./photo protien/download (2).jpeg"
import btw from "./photo protien/download-removebg-preview (1).png"
import bte from "./photo protien/download.jpeg"
import btr from "./photo protien/download__1_-removebg-preview.png"
import by from "./photo protien/download__2_-removebg-preview.png"
import btss from "./photo protien/images (1).jpeg"
import btg from "./photo protien/images (10).jpeg"
import btsq from "./photo protien/images (11).jpeg"
import bta from "./photo protien/images (12).jpeg"
import btz from "./photo protien/images (13).jpeg"
import bto from "./photo protien/images (14).jpeg"
import btp from "./photo protien/images (2).jpeg"
import btv from "./photo protien/images (3).jpeg"
import btzx from "./photo protien/images (4).jpeg"
import btzq from "./photo protien/images (5).jpeg"
import { Link } from "react-router-dom"
const Protien = () => {

    const data=[
        {
        name:"BPI coces",
        img:btf,
        price:"50$"
        },
        {
        name:"ISO 100",
        img:btq,
        price:"90$"
        },
        {
        name:"whey ",
        img:bttr,
        price:"50$"
        },
        {
        name:" whey gold ",
        img:bto,
        price:"40$"
        },
        {
        name:"whey coces",
        img:btzx,
        price:"100$"
        },
        {
        name:"whey HD",
        img:btv,
        price:"20$"
        },
        {
            name:"HPI soclat",
            img:btp,
            price:"60$"
        },
        {
            name:"iso fifx",
            img:btz,
            price:"80$"
        },
        {
            name:"whey",
            img:btw,
            price:"70$"
        },
        {
            name:"Hpi",
            img:btss,
            price:"60$"
        },
        {
            name:"isolit",
            img:btsq,
            price:"50$"
        },
        {
            name:"whey HD",
            img:btzq,
            price:"60$"
        },
        {
            name:"whey standered",
            img:btr,
            price:"80$"
        },
        {
            name:"iso",
            img:by,
            price:"30$"
        },
        {
            name:"whey ",
            img:btg,
            price:"80$"
        },
        {
            name:"protien whey",
            img:bte,
            price:"60$"
        },
        {
            name:"proptein",
            img:bta,
            price:"50$"
        }

 ]
    return (
        <body className='hys'>
            
            <Link to="/First"><button class="button">
                Back
                </button></Link>

        <h1 className='gt'> *Protien* </h1>
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