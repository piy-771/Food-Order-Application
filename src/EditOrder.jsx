import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import backgroundImage from './images/orderback.jpg';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { message } from "antd";
import Button from 'react-bootstrap/Button';

const EditOrder=()=>{

     // State to hold the selected option from the first input
   const [firstInputValue, setFirstInputValue] = useState("");
   // State to hold the options for the second input
   const [secondInputOptions, setSecondInputOptions] = useState([]);
   // State to hold the specific food choice (from second dropdown)
const [secondInputValue, setSecondInputValue] = useState("");
 
   // Options for the first input
   const firstInputOptions = ["Burgers", "Pizzas", "Salads","Desserts","Drinks"];
 
   // Options for the second input based on the first input value
   const optionsMap = {
    Burgers: ["Sweet Chili Beef Burger", "French Style Burger", "Supreme Nacho Burger","Malasian Beef Pendang"],
     Pizzas: ["Vegetarian Hot with Garlic", "Tuna and Wild Tomatoes Pizza", "Supreme Chicken Pizza","Ham & Mushroom Pizza"],
     Salads: ["Ceasar Salad with Dried Tomatoes", "Italian Stuffed Tomatoes Salad", "Sauteed Shrimp Salad","Vegetarian Salad with Garlic"],
     Desserts: ["Classuc Nut Tart", "Fried Ice Cream", "Vanilla Creme Brilee","Fruit Assortment"],
     Drinks: ["Strawbery Daiquiri", "Singapore Sling", "Innocent Mojito","Ginger & Lemon Tea"]
   };

   const {myid} = useParams();

   // Handler for first input change
  const handleFirstInputChange = (event) => {
    const selectedValue = event.target.value;
    setFirstInputValue(selectedValue);
    // Update the second input options based on the selected value
    setSecondInputOptions(optionsMap[selectedValue] || []);

    //Update the input state  to include the food category
    setInput((values)=>({...values,food:selectedValue}))
  };

  //Handle for second input change (specific food choice)
  const handleSecondInputChange =  (event)=>{
    const selectedValue = event.target.value;
    setSecondInputValue(selectedValue);

    //Update the input state to include the food choice
    setInput((values) => ({...values,foodtype:selectedValue}));
  }

  const loadData=()=>{
    let api=`http://localhost:3000/orders/${myid}`;
    axios.get(api).then((res)=>{
      console.log(res.data);
      setInput(res.data);
    })
  }

  useEffect(()=>{
    loadData();
},[]);

  const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }


    const handleSubmit=(e)=>{
            e.preventDefault();

      let api=`http://localhost:3000/orders/${myid}`;
     
      axios.put(api,input).then((res)=>{
          console.log(res);
          message.success("Data Successfully Updated!!!");
          setInput({
            food:"",
            foodtype:"",
            quantity:"",
            address:""
          })
      })
     }


    return(
        <>
            <Card className="bg-dark text-white justify-content-center">
      <img src={backgroundImage}  alt="" />
      <Card.ImgOverlay   style={{background: "rgba(0, 0, 0, 0.4)"}}>
     
        
      <div  className='maindiv-form'>
                <h1>UPDATE YOUR ORDER</h1>
                <Form >
                <Form.Group className='mb-3' controlId='exampleForm.ControInput1'>
                    <Form.Label>Food</Form.Label>
                    <Form.Control as={"select"}  name="food" value={firstInputValue} onChange={handleFirstInputChange}>
                    <option value="">What you wanna eat?</option>
         
          {firstInputOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
         
                    </Form.Control>

                </Form.Group>


                {firstInputValue && (
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Choice</Form.Label>
                  <Form.Control  as={"select"} name="foodtype" onChange={handleSecondInputChange} value={secondInputValue}>
                  <option value="">--Select--</option>
                  {secondInputOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </Form.Control>
                 
          
                </Form.Group>
                )}
      
      
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput4" >
            <Form.Label>Quantity</Form.Label>
            <Form.Control type='number' name='quantity' onChange={handleInput}/>
            
      </Form.Group>
      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput5" >
            <Form.Label>Address</Form.Label>
            <Form.Control  type="text"  name="address" onChange={handleInput}  />
      </Form.Group>
      <div className='text-center' >
    <Button  variant="outline-warning" onClick={handleSubmit} size='lg'>UPDATE</Button>
    
    
    </div>
     
    </Form>
                </div>
      </Card.ImgOverlay>
    </Card>
        </>
    )
}

export default EditOrder;