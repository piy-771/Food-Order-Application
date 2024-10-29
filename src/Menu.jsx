import menu from './images/menubanner.jpg'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import burger1 from './images/burger1.jpg'
import burger2 from './images/burger2.jpg'
import burger3 from './images/burger3.jpg'
import burger4 from './images/burger4.jpg'
import pizza1 from './images/pizza1.jpg'
import pizza2 from './images/pizza2.jpg'
import pizza3 from './images/pizza3.jpg'
import pizza4 from './images/pizza4.jpg'
import salad1 from './images/salad1.jpg'
import salad2 from './images/salad2.jpg'
import salad3 from './images/salad3.jpg'
import salad4 from './images/salad4.jpg'
import dessert1 from './images/dessert1.jpg'
import dessert2 from './images/dessert2.jpg'
import dessert3 from './images/dessert3.jpg'
import dessert4 from './images/dessert4.jpg'
import drink1 from './images/drink1.jpg'
import drink2 from './images/drink2.jpg'
import drink3 from './images/drink3.jpg'
import drink4 from './images/drink4.jpg'
import Button from 'react-bootstrap/Button';
const Menu =()=>{
    return(
        <>
         <Card className="bg-dark text-white">
        <img src={menu} alt="" height={"330px"} />
      <Card.ImgOverlay style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"
      }}>
        <Card.Title style={{fontSize:"80px"}} >MENU</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <Container className='mt-5'>
          <h1>BURGERS</h1>
          <p>Clients most popular choice</p>
          <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Card style={{ width: '18rem',borderRadius:"5%" }}>
      <Card.Img variant="top" src={burger1} />
      <Card.Body>
        <Card.Title>Sweet Chili Beef Burger</Card.Title>
        <Card.Text>
          With garlic, capers, chili, fennel, parsley
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={burger2} />
      <Card.Body>
        <Card.Title>French Style Burger</Card.Title>
        <Card.Text>
          With rocket salad,pickels, and cheddar
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={burger3} />
      <Card.Body>
        <Card.Title>Supreme Nacho Burger</Card.Title>
        <Card.Text>
          With onion,cheddar, and mustard
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={burger4} />
      <Card.Body >
        <Card.Title>Malasian Beef Pendang</Card.Title>
        <Card.Text>
          With onion,pickels,salad and bacon
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
          </Container>
        </Container>

        <Container className='mt-5'>
          <h1>PIZZA</h1>
          <p>Clients most popular choice</p>
          <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Card style={{ width: '18rem',borderRadius:"5%" }}>
      <Card.Img variant="top" src={pizza1} />
      <Card.Body>
        <Card.Title>Vegetarian Hot with Garlic</Card.Title>
        <Card.Text>
          With garlic, capers, chili, fennel, parsley
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza2} />
      <Card.Body>
        <Card.Title>Tuna and Wild Tomatoes Pizza</Card.Title>
        <Card.Text>
          With rocket salad,pickels, and cheddar
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza3} />
      <Card.Body>
        <Card.Title>Supreme Chicken Pizza</Card.Title>
        <Card.Text>
          With onion,cheddar, and mustard
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza4} />
      <Card.Body >
        <Card.Title>Ham & Mushroom Pizza</Card.Title>
        <Card.Text>
          With onion,pickels,salad and bacon
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
          </Container>
        </Container>



        <Container className='mt-5'>
          <h1>SALADS</h1>
          <p>Clients most popular choice</p>
          <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Card style={{ width: '18rem',borderRadius:"5%" }}>
      <Card.Img variant="top" src={salad1} />
      <Card.Body>
        <Card.Title>Ceasar Salad with Dried Tomatoes</Card.Title>
        <Card.Text>
          With anchovy sauce, capers, parsley
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={salad2} />
      <Card.Body>
        <Card.Title>Italian Stuffed Tomatoes Salad</Card.Title>
        <Card.Text>
          With rocket salad,pickels, and cheddar
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={salad3} />
      <Card.Body>
        <Card.Title>Sauteed Shrimp Salad</Card.Title>
        <Card.Text>
          With onion,cheddar, and mustard
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={salad4} />
      <Card.Body >
        <Card.Title>Vegetarian Salad with Garliic</Card.Title>
        <Card.Text>
          With onion,pickels,salad and bacon
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
          </Container>
        </Container>

        <Container className='mt-5'>
          <h1>DESSERTS</h1>
          <p>Clients most popular choice</p>
          <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Card style={{ width: '18rem',borderRadius:"5%" }}>
      <Card.Img variant="top" src={dessert1} />
      <Card.Body>
        <Card.Title>Classuc Nut Tart</Card.Title>
        <Card.Text>
          With anchovy sauce, capers, parsley
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert1} />
      <Card.Body>
        <Card.Title>Fried Ice Cream</Card.Title>
        <Card.Text>
          With rocket salad,pickels, and cheddar
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert3} />
      <Card.Body>
        <Card.Title>Vanilla Creme Brilee</Card.Title>
        <Card.Text>
          With onion,cheddar, and mustard
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dessert4} />
      <Card.Body >
        <Card.Title>Fruit Assortment</Card.Title>
        <Card.Text>
          With onion,pickels,salad and bacon
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
          </Container>
        </Container>

        <Container className='mt-5'>
          <h1>DRINKS</h1>
          <p>Clients most popular choice</p>
          <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Card style={{ width: '18rem',borderRadius:"5%" }}>
      <Card.Img variant="top" src={drink1} />
      <Card.Body>
        <Card.Title>Strawberry Daiquiri</Card.Title>
        <Card.Text>
          With anchovy sauce, capers, parsley
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={drink2} />
      <Card.Body>
        <Card.Title>Singapore Sling</Card.Title>
        <Card.Text>
          With rocket salad,pickels, and cheddar
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={drink3} />
      <Card.Body>
        <Card.Title>Innocent Mojito</Card.Title>
        <Card.Text>
          With onion,cheddar, and mustard
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={drink4} />
      <Card.Body >
        <Card.Title>Ginger & Lemon Tea</Card.Title>
        <Card.Text>
          With onion,pickels,salad and bacon
        </Card.Text>
        <Button variant="warning">Order</Button>
      </Card.Body>
    </Card>
          </Container>
        </Container>


        </>
    )
}

export default  Menu;