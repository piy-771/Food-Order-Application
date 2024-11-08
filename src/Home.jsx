import Carousel from 'react-bootstrap/Carousel';
// import img1 from './images/img1.jpg'
//import img2 from './images/img2.jpg'
//import img3 from './images/img3.jpg'
//import img4 from './images/img4.jpg'
//import img5 from './images/img5.jpg'
import { useState } from 'react';
import './css/Home.css'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import overlayimg1 from './images/overlay1.jpg'
import overlayimg2 from './images/overlay2.jpg'



const Home=()=>{
        const [index, setIndex] = useState(0);
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        }
    return(
        <>
        <div className='hero'>
        <Carousel fade  activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item >
        <img alt="" width={"100%"} height={"600vh"} style={{background
          :"rgba(0,0,0,0.4)"
        }} />
        <Carousel.Caption  >
          <h1>ORDER FOOD DELIVERY</h1>
          <p>From Your Favorite Restaurants!</p>
          <div className='button'>
          <Button  variant="outline-warning" size="lg" >Order</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img  alt="" width={"100%"} height={"600vh"} />
        <Carousel.Caption>
          <h1>ORDER TAKEAWAY ONLINE</h1>
          <p>From Your Favorite Restaurants!</p>
          <div className='button'>
          <Button  variant="outline-warning" size="lg" >Order</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  alt="" width={"100%"} height={"600vh"} />
        <Carousel.Caption>
          <h1>WE GET WHAT YOU LOVE</h1>
          <p>
          From Your Favorite Restaurants!
          </p>
          <div className='button'>
          <Button  variant="outline-warning" size="lg" >Order</Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <Container className="overlay"
        style={{marginTop:"20px"}}>
          <Row>
            <Col>
            <Card className="bg-dark text-white" style={{width:"435px",marginTop:"50px"}}>
        <img src={overlayimg1}  width={"435px"} height={"265px"} alt=""/>
      <Card.ImgOverlay style={{background: "rgba(0, 0, 0, 0.4)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
        <Card.Title style={{fontSize:"40px"}}>FREE DELIVERY</Card.Title>
        <Card.Text style={{fontSize:"26px"}}>
          on all orders <span style={{color:"#ffbd2f",fontFamily:'Damion,cursive',fontSize:"36px"}}>over $50</span>
        </Card.Text>
        <Button variant='warning'>Order Now</Button>
      </Card.ImgOverlay>
    </Card>
            </Col>
            <Col>
            <Card className="bg-dark text-white" style={{width:"435px",marginTop:"50px"}}>
      <img src={overlayimg2}  width={"435px"}  height={"265px"} alt="" />
      <Card.ImgOverlay  style={{background: "rgba(0, 0, 0, 0.4)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
        <Card.Title style={{fontSize:"36px"}}>ALL YOUR</Card.Title>
        <Card.Title style={{fontSize:"36px"}}>FAVORITE FOOD </Card.Title>
        <Card.Text style={{
           color:"#ffbd2f", fontFamily:'Damion,cursive' ,fontSize:"36px"
        }}>
        in one place
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
            </Col>
          </Row>
        </Container>
        
        </>
    )
}
export default Home;