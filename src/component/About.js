import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom"
export default function About()
{
    const[q,sq] = useState(1);
    const[d,sd] = useState(0);
    const[Am,sAm] = useState(0);
    const[Gs,sGs] = useState(0);
    const abc = useParams();
    const {a} = abc;
    const {b} = abc;

   
       var to = q*a;

       useEffect(()=>
       {
        if(to>0 && to<=2500)
        {
            sAm(to*2/100);
            sd("2%");
            sGs(to-Am);
        }
        else if(to>2500 && to<=5000)
        {
            sAm(to*3/100);
            sd("3%");
            sGs(to-Am);
        }
        else if(to>5000 && to<=10000)
        {
            sAm(to*4/100);
            sd("4%");
            sGs(to-Am);
        }
        else
        {
            sAm(to*5/100);
            sd("5%");
            sGs(to-Am);
        }
       })
    return(
        <>
        <div id="d2">
            <table border='1px' width='90%' className="tab" cellPadding='20px' cellSpacing='20px'>
            <tr>
                <th colSpan={2} style={{textAlign:'center',backgroundColor:'red'}}><h3>Your Bill</h3></th>
            </tr>
            <tr>
                <th>Product Name</th>
                <td>{b}</td>
            </tr>
            <tr>
                <th>Product Price</th>
                <td>{a}</td>
            </tr>
            <tr>
            <th>Select Quantity</th>
          <th>
            <select className="se" onChange={(a)=>sq(a.target.value)}>
              <option selected value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
            </th>
            </tr>
            <tr>
                <th>Total Amount</th>
                <td style={{width:'50%'}}>{to}</td>
            </tr>
            <tr>
                <th>Discount Percentage</th>
                <td>{d}</td>
            </tr>
            <tr>
                <th>Discount Amount</th>
                <td>{Am}</td>
            </tr>
            <tr>
                <th style={{backgroundColor:'pink'}}><h3>Gorss Amount</h3></th>
                <td style={{backgroundColor:'pink'}}><h3>{Gs}</h3></td>
            </tr>    
            </table>
   
     </div>
        </>
    )
}