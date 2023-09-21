import image1 from "../images/Salted Instant Popcorn.jpg"
import image2 from "../images/Slurrp Millet Chocolate.jpg"
import image3 from "../images/Amul Butter - 500 g.jpg"
import image4 from "../images/Blueberry Greek Yogurt.jpg"
import image5 from "../images/Britannia Cheese Slices.jpg"
import image6 from "../images/Cadbury 5 Star Chocolate.jpg"
import image7 from "../images/Onion Flavour Potato.jpg"
import image8 from "../images/NutriChoice Digestive.jpg"
import Counter from "../Component/Counter"


const Card = () => {
  return (
    <div className="cardjsx" data-aos="zoom-in">
      <div className="Container-fluid row">
        <div className="Container image-container col-lg-3 col-5" >
            <div className="card"><img src={image1} className="card-images"/>
            <h6>Salted Instant Popcorn</h6>
            <div className="naira"><h5>#20</h5></div>
            <Counter/>
            </div>
        </div>


        <div className="Container image-container col-lg-3 col-5">
           <div className="card"><img src={image2} className="card-images"/>
            <h6>Slurrp Millet Chocolate</h6>
            <div className="naira"><p5>#40</p5></div>
            <Counter/>
            </div> 
        </div>


        <div className="Container image-container col-lg-3 col-5">
            <div className="card"><img src={image3} className="card-images"/>
            <h6>Amul Butter - 500 g</h6>
           <div className="naira"><h5>#50</h5></div>
            <Counter/>
            </div>
        </div>


        <div className="Container image-container col-lg-3 col-5">
            <div className="card"><img src={image4} className="card-images"/>
            <h6>Blueberry Greek Yogurt</h6>
            <div className="naira"><p5>#30</p5></div>
            <Counter/>
            </div>
        </div>


        <div className="Container image-container col-lg-3 col-5">
            <div className="card"><img src={image5} className="card-images"/>
            <h6>Britannia Cheese Slices</h6>
            <div className="naira"><p5>#90</p5></div>
            <Counter/>
            </div>
        </div>

        <div className="Container image-container col-lg-3 col-5">
            <div className="card"><img src={image6} className="card-images"/>
            <h6>Cadbury 5 Star Chocolate</h6>
           <div className="naira"> <p5>#50</p5></div>
            <Counter/>
            </div>
        </div>

        <div className="Container image-container col-lg-3 col-5">
            <div className="card"><img src={image7} className="card-images"/>
            <h6>Onion Flavour Potato</h6>
            <div className="naira"><p5>#80</p5></div>
            <Counter/>
            </div>
        </div>

        <div className="Container image-container col-lg-3 col-5">
            <div className="card"><img src={image8} className="card-images"/>
            <h6>NutriChoice Digestive</h6>
            <div className="naira"><h5>#80</h5></div>
            <Counter/>
            </div>
        </div>




      </div>
    </div>
  )
}

export default Card
