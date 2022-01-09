import React from 'react'
import './Inspiration.css'
import img1 from './image/Rectangle6.svg'
import img2 from './image/Rectangle7.svg'
import img3 from './image/Rectangle8.svg'
import img4 from './image/Rectangle9.svg'
function Inspiration() {
    return (
        <div className='inspiration'>
            <h2>Inspiration for your next trip</h2>
            <div className="inspiration__Cards">

            <div className="inspiration__Card">
<img src={img1} alt="" />
            </div>
            <div className="inspiration__Card">
<img src={img2} alt="" />
            </div>
            <div className="inspiration__Card">
<img src={img3} alt="" />
            </div>
            <div className="inspiration__Card">
<img src={img4} alt="" />
            </div>
            </div>
        </div>
    )
}

export default Inspiration
