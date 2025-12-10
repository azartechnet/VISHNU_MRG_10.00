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
/*function UserInfo(props)
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
r1.render(<UserInfo name="azar" age="20"/>)*/

//Styling in React
/*import './index.css';
function StyledComponent()
{
    const headingStyle={
        color:'blue',
        textAlign:'center',
        fontSize:'30px'
    };
    return(
        <div>
            <h1 style={headingStyle}>This is Styled Component</h1>
            <p style={{color:'green',fontSize:'20px'}}>This is a paragraph with inline styling</p>
            <h1>ExternalStylesheet</h1>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<StyledComponent/>)*/

//constructor using super

/*class Sample extends React.Component
{
    constructor()
    {
        super();
        this.state={name:"azar",age:20};
    }
    render()
    {
        return(
            <div>
                <h1>Hello,{this.state.name}</h1>
                <p>Your age is::{this.state.age}</p>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor using props

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={name:props.name,age:props.age};
    }
    render()
    {
        return(
            <div>
                <h1>Hello,{this.state.name}</h1>
                <p>Your age is::{this.state.age}</p>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age={20}/>)*/

/*class Counter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
        this.setState({count:this.state.count-1});
    }
    render()
    {
        return(
            <div>
                <h1>Counter Application</h1>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React Event

/*function Football()
{
    const shoot=()=>{
        alert("Goal!!!")
    }
    return(
        <div>
            <h1>Football Game</h1>
            <button onClick={shoot}>Shoot</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Argument passing in Event Handler
/*function Football()
{
    const shoot=(a)=>{
        alert(a)
    }
    return(
        <div>
            <h1>Football Game</h1>
            <button onClick={()=>shoot("azar!!!")}>Shoot</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Event Binding in Class Component

/*class Football extends React.Component
{
    shoot=a=>{
        alert(a)
    }
    render()
    {
        return(
            <div>
                <h1>Football Game</h1>
                <button onClick={()=>this.shoot("azar!!!")}>Shoot</button>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
    return<h1>Missed Goal!!!</h1>
}
function MadeGoal()
{
    return<h1>Goal!!!</h1>
}
function Football(props)
{
    const isGoal=props.isGoal;
    return(
        <div>
            <h1>Football Game</h1>
            {isGoal ? <MadeGoal/> : <MissedGoal/>}
            
        </div>
    )
}   
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/


/*function MissedGoal()
{
    return<h1>Missed Goal!!!</h1>
}
function MadeGoal()
{
    return<h1>Goal!!!</h1>
}
function Football(props)
{
    const isGoal=props.isGoal;
    if(isGoal)
    {
        return<MadeGoal/>;
    }
    else
    {
        return<MissedGoal/>;
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//using class
class Football extends React.Component
{
    render()
    {
        const isGoal=this.props.isGoal;
        if(isGoal)
        {
            return<h1>Goal!!!</h1>;
        }
        else
        {
            return<h1>Missed Goal!!!</h1>;
        }
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football isGoal={Math.random()>0.5}/>)