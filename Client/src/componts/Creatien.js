import"./Creatien.css"
import bt from "./photo/Screenshot_2023-12-15_165949-removebg-preview.png"
import btt from "./photo/61NoaSZARtL._AC_UL600_SR600_600_-removebg-preview.png"
import bts from "./photo/447974_C4_PreWorkout_WWE_Pomegranate_PileDriver_Front-removebg-preview.png"
import { Link } from "react-router-dom"
const Protien = () => {

    const data=[
        {
        name:"dfkjkfds",
        img:bt,
        resia:"sdlnflsjdf"
        },
        {
        name:"sdklfmdslkf",
        img:btt,
        resia:"sdlfkmsldmkfd"
        },
        {
        name:"sdl;fsdf,",
        img:bts,
        resia:"sdfkjlndsflsjkd"
        },
        {
        name:"dfkjkfds",
        img:bt,
        resia:"sdlnflsjdf"
        },
        {
        name:"sdklfmdslkf",
        img:btt,
        resia:"sdlfkmsldmkfd"
        },
        {
        name:"sdl;fsdf,",
        img:bts,
        resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },
        {
            name:"sdl;fsdf,",
            img:bts,
            resia:"sdfkjlndsflsjkd"
        },

 ]
    return (
        <body className='hys'>
            
            <Link to="/First"><button class="button">
                Back
                </button></Link>

        <h1 className='gt'> Protien </h1>
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