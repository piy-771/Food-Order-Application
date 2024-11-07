import Card from 'react-bootstrap/Card';
import menu from './images/menubanner.jpg'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const YourOrder=()=>{
    const navigate= useNavigate();
    const [orders, setOrders]= useState([]);
   


    const loadData=()=>{
          let url="http://localhost:3000/orders";
          axios.get(url).then((res)=>{
            console.log(res.data);
            setOrders(res.data);
          })
    }
    useEffect(()=>{
        loadData();
    }, [])

    const ans= orders.map((key)=>{
        return(
            <>
              <tr>
                <td> {key.food} </td>
                <td> {key.foodtype} </td>
                <td> {key.quantity} </td>
                <td> {key.address} </td>
                <td>
                <a href="#" onClick={()=>{myEdit(key.id)}}>
                <Button variant="outline-warning" >Update</Button>
    </a>
                </td>
               
                <td>
                    <a href="#" onClick={()=>{myDel(key.id)}}>
                    <Button variant="outline-danger" >Delete</Button>
                    </a>
                </td>
                
              </tr>
            </>
        )
      })

      const myEdit=(id)=>{
        navigate(`/editrec/${id}`)
   }
   const myDel=(id)=>{
    let api=`http://localhost:3000/orders/${id}`
    axios.delete(api).then((res)=>{
      console.log(res); 
         message.error("Your record Succesfully deleted!!!");
        loadData();
    })
}
    return(
        <>
         <Card className="bg-dark text-white">
        <img src={menu} alt="" height={"330px"} />
      <Card.ImgOverlay style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"
      }}>
        <Card.Title style={{fontSize:"80px"}} >YOUR ORDERS</Card.Title>
      </Card.ImgOverlay>
    </Card>
    <br />
    <br />


    <div className="display-search">
        </div>
         <Table striped bordered hover variant="light" style={{}}>
      <thead>
        <tr>
          <th>Food</th>
          <th>Food Type</th>
          <th>Quantity</th>
          <th>Address</th>
          <th>
            Update
          </th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>


        
        </>
    )
}

export default YourOrder;