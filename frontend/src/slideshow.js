import react from 'react';
import carousel from 'react-bootstrap/Carousel';





function Slideshow () {
    <div>
        <carousel>
            <carousel.Item>
            < img className="d-block W=100"src= {require("./Images/a.jpg")}
                   alt = "First Image"  style={{height: "100vh"}}
                   />
                <carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Scenery 1</p> 
                </carousel.Caption>
            </carousel.Item>
             {/*  */}
            <carousel.Item>
            < img className="d-block W=100"src= {require("./Images/b.jpg")}
                   alt = "Second Image"  style={{height: "100vh"}}
                   />
                <carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Scenery 1</p> 
                </carousel.Caption>
            </carousel.Item>
            {/*  */}
            <carousel.Item>
            < img className="d-block W=100"src= {require("./Images/c.jpg")}
                   alt = "Third Image"  style={{height: "100vh"}}
                   />
                <carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Scenery 1</p> 
                </carousel.Caption>
            </carousel.Item>
        </carousel>

    </div>
}


export default Slideshow;