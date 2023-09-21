import { useEffect } from "react"
import image1 from "../images/Corn.webp"
import image2 from "../images/eat.jpeg"
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import AOS from "aos"

const Card2 = () => {
  useEffect(()=>{
    AOS.init({duration: 3000})
  }, [])
  return (
    <div className='row fresh'>
     <div className='container col-lg-5 fruit1' data-aos="fade-down-right">
     <h1>
        SuperMarket For<br/>Fresh Grocery
     </h1>
     <p>introduced a new model for <br/>online grocery shopping and convenient home delivery</p>
     <button className='btn'>Shop Now</button>
    </div> 

    <div className="fruit2 container col-lg-5" data-aos="fade-up-left">
    
      <h2>Freshly Baked Buns</h2>
      <p>Get Upto 25% Off</p>
      <button className='btn'>Shop Now</button>
    </div>
    
  </div>
 

  )
}

export default Card2
