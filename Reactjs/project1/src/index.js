import React from "react";                                     
import ReactDOM from 'react-dom/client';

/*const App=()=>{
    return(
        <>
        <h1>LoginForm</h1>
        <label>UserName</label>
        <input type="text"/>
        <input type="submit" value="Login"/>
        </>
        
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
    const name="azar";
    const age=20;
    return(
        <div>
            <h1>Hello,{name}</h1>
            <p>Your age is::{age}</p>
            <p>Today date is::{new Date().toLocaleDateString()}</p>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React List

/*const MyElem=()=>{
    return(

        <div>
            <h1>MyList</h1>
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ul>
            <ol>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
            </ol>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Conditional Rendering

/*const x=50
let text="";
if(x>10)
{
    text=`x is greater than ${x}`;
}
else
{
    text="x is less than 10"
}
const MyElem=()=>{
    return(
        <div>
            <h1>{text}</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyElem/>)*/

//Task Nested if else-Else if ladder and Switch Statement

//Function Component

/*function Sample()
{
    return(
        <div>
            <h1>This is Function Component</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Class Component

/*class Sample extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>This is Class Component</h1>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component

/*function Greeting()
{
    const name="azar";
    const age=20;
    return(
        <div>
            <h1>Hello,{name}</h1>
            <p>Your age is::{age}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Greeting/>)*/

//using onClick Event

/*function SimpleButton()
{
    function handleClick()
    {
        alert("Button Clicked")
    }
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Using props
/*function Welcome(props)
{
    return(
        <div>
            <h1>Hello,{props.name}</h1>
            <p>Your age is::{props.age}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age={20}/>)*/

//Component in Component
function UserInfo(props)
{
    return(
        <div>
            <h2>User Name:{props.name}</h2>
            <p>User Age:{props.age}</p>
            <UserProfile/>
        </div>
    )
}
function UserProfile()
{
    return(
        <div>
            <h3>This is User Profile Component</h3>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<UserInfo name="azar" age="20"/>)
