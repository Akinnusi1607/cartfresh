import image1 from "../images/veg.jpeg"
import image2 from "../images/Roast Ground Coffee.jpg"
import image3 from "../images/Salted Instant Popcorn.jpg"
import {FaArrowRight} from "react-icons/fa"

const Oranic = () => {
  return (
    <div className='row fresh'  data-aos="zoom-in-down">
    <div className='container col-lg-5 col-10 junks'> 
    <h1>
        100% Organic <br/> Coffee Beans.
    </h1>
    <p>Get the best deal before <br/>close.</p>
    <button className='btn'>Shop Now <FaArrowRight/></button>
   </div> 


    <div className="Container  col-lg-3 col-6 junks-images ">
            <div className="card"><img src={image2} className="card-top"/>
           
            <h6>Roast Ground Coffee</h6>
            <button className='btn btn1'>Add Cart</button>
            
            </div>
        </div>

     <div className="Container col-lg-3 col-6 junks-images">
           <div className="card"><img src={image3} className="card-top"/>

            <h6>Salted Instant Popcorn</h6>
            <button className='btn btn1'>Add Cart</button>

            </div>
            
            
    </div>

 </div>

  )
}

export default Oranic
