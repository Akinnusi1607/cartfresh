import image1 from '../images/vegetables2.jpeg';
import image2 from '../images/vegetable2.jpeg';
import {FaArrowRight} from "react-icons/Fa"

const Slide = () => { 
  return (
    <div className='Slide'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active slide1" data-bs-interval="10000">
     <h1>
        SuperMarket For<br/>Fresh Grocery
     </h1>
     <p>introduced a new model for <br/>online grocery shopping and convenient home delivery</p>
     <button className='btn'>Shop Now<FaArrowRight/></button>
    </div> 
    <div className="carousel-item slide2" data-bs-interval="2000">
      <h2>Free Shipping on <br/>orders over $100</h2>
      <p>Free Shipping to First-Time <br/> Customers Only, After <br/> promotions and discounts are <br/> applied</p>
      <button className='btn'>Shop Now</button>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slide
