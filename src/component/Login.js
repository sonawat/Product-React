import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Login()
{
    const [name,setName] = useState("");
    const [Password,setPasseord] = useState("");

    const ani = () =>
    {
        if(name=='Aniket' && Password == '1234')
        {
             localStorage.setItem('login',true);
             alert("You Are Successful Login");
        }
        else
        {
            alert("Please Enter Correct Input");
        }
    }
    return(
        <div id="a">
        <h2>Login Page</h2>
        <hr/>
        <label>Enter Your Name </label>
        <input type="text" onChange={(a)=>setName(a.target.value)}/>
        <br/>
        <br/>
        <label>Enter Your Password </label>
        <input type="number" onChange={(a)=>setPasseord(a.target.value)}/>
        <br/>
        <br/>
        <Button className="bu" onClick={ani}>Click Me</Button>
        </div>
    )
}
