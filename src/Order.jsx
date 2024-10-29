import backgroundImage from './images/orderback.jpg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
const Order =()=>{
    return(
        <>
         <Card className="bg-dark text-white">
      <Card.Img src={backgroundImage} alt="Card image" />
      <Card.ImgOverlay   style={{background: "rgba(0, 0, 0, 0.4)"}}>
        
        <Container>
            
        </Container>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
        </>
    )
}

export default Order;