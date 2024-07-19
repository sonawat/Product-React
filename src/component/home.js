import { useEffect, useState } from 'react';
import {Button,Table} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
export default function Home()
{
    const[d,sd]=useState([]);
    // document.body.style.backgroundColor = '#282c34';
    useEffect(()=>
    {
        fetch("http://localhost:3000/users")
        .then((res)=>
        {
            return res.json();
        })
        .then((data)=>
        {
            sd(data);
        })
    }
    )
    
 
    return(
        <>
        {/* <h1 style={{marginLeft:'35%'}}><Badge bg="secondary">Select Your Product</Badge></h1> */}



              {
                    d.map((item,i)=>
                    
                    <div id='d1'>
               
                    <Card style={{ width: '18rem' ,float:'left',backgroundColor:'silver',boxShadow:'2px 2px 5px 2px black'}}>
      <Card.Img className="im" variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>Price:{item.price}</Card.Title>
        <Card.Text> 
            {item.name}
        </Card.Text>
        <Link to={`/ani/${item.price}/${item.name}`}><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
                            </div>
                        
                           
                    )
                }
        </>
    )
}