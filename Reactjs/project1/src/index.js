import React, { useEffect, useState } from "react";                                     
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
/*class Football extends React.Component
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
r1.render(<Football isGoal={Math.random()>0.5}/>)*/


//Event using form
/*function MyForm()
{
  const hs=()=>{
    
    alert("Form Submitted!!")
  }
  return(
    <div>
      <form onSubmit={hs}>
        <input type="text" placeholder="Enter Name"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyForm/>)*/

//React List using Map

/*function MyList()
{
    const items=["item1","item2","item3","item4"];
    return(
        <div>
            <h1>My List</h1>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}{index}</li>
                ))} 
            </ul>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyList/>)*/

//using class
/*class MyList extends React.Component
{
    render()
    {
        const items=["item1","item2","item3","item4"];
        return(
            <div>
                <h1>My List</h1>
                <ul>
                    {items.map((item,index)=>(
                        <li key={index}>{item}{index}</li>
                    ))} 
                </ul>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))

r1.render(<MyList/>)*/

//React List using Map with props

/*function MyList(props)
{
    const items=props.items;
    return(
        <div>
            <h1>My List</h1>
            <ul>
                {items.map((item,index)=>(
                    <li>{item}<br/>{index}</li>
                ))} 
            </ul>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyList items={["item1","item2","item3","item4"]}/>)*/

//Destructuring

/*function Welcome({name,age})
{
    return(
        <div>
            <h1>Hello,{name}</h1>
            <p>Your age is::{age}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age={20}/>)*/

/*import { Component } from "react";
class Welcome extends Component
{
    render()    
    {
        const{name,age}=this.props;
        return(
            <div>
                <h1>Hello,{name}</h1>
                <p>Your age is::{age}</p>
            </div>
        )
    }   
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age={20}/>)*/


//Destructuring in class component with state

/*class Sample extends React.Component
{   
    constructor()
    {
        super();
        this.state={name:"azar",age:20};
    }
    render()    
    {
        const{name,age}=this.state;
        return(
            <div>
                <h1>Hello,{name}</h1>
                <p>Your age is::{age}</p>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Destructuring in Array

/*function Skills()
{
    const skills=["HTML","CSS","JavaScript","React"];
    const [skill1,skill2,skill3,skill4]=skills;
    return(
        <div>
            <h1>My Skills</h1>
            <ul>
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
                <li>{skill4}</li>
            </ul>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//Class Component Mounting Lifecycle Methods

/*class MyComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("Constructor called");
    }
    componentDidMount()
    {
        console.log("Component Did Mount called");
    }
    render()
    {
        console.log("Render method called");
        return(
            <div>
                <h1>My Component</h1>
            </div>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyComponent/>)*/
//class component updating

/*class Counter extends React.Component
{
    constructor()
    {
        super();
        this.state={count:0}
    }
    componentDidUpdate(preProps,preState)
    {
        console.log("ComponentUpdated")
        console.log("Previous Count::",preState.count)
        console.log("CurrentCount::",this.state.count)
    }
    render()
    {
        return(
            <>
            <h2>Count:{this.state.count}</h2>
            <button onClick={()=>{
                this.setState({count:this.state.count+1})
            }}>Increment</button>
             </>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//unmounting-componentWillUnmount

/*class Child extends React.Component
{
    componentWillUnmount()
    {
        console.log("Welcome")
    }
    render()
    {
        return(
            <h3>Child Component</h3>
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Child/>)*/

//React Hooks useState()

/*function Counter()
{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>Count::{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//use string state
/*function Welcome()
{
    const [name,setName]=useState("admin")
    return(
        <div>
            <h2>Welcome,{name}!!!</h2>
            <input type="text" placeholder="Enter then name" onClick={(e)=>setName(e.target.value)}/>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome/>)*/

//using Object state

/*function Profile()
{
    const [user,setUser]=useState({name:"azar",age:25});
    const updateAge=()=>{
        setUser({...user,age:user.age+1})
    }
    return(
        <div>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <button onClick={updateAge}>Increment</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Profile/>)*/

//useEffect

/*function Example()
{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("ComponentRender or updated")
    })
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example/>)*/

//Example 1

/*const Example1=()=>{
    useEffect(()=>{
        console.log("Component Mounted")
    })
    return(
        <h3>Hello from useEffect</h3>
    )
}
const s1=ReactDOM.createRoot(document.getElementById("root"))
s1.render(<Example1/>)*/

//Example 2

/*const Example2=()=>{
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("Timer is Running..")
        },1000)
        return()=>{
            clearInterval(timer)
            console.log("TimeCleared")
        }
    })
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example2/>)*/

//React without useContext

/*function Component1()
{
    const [user,setUser]=useState("mohamed")
    return(
        <div>
            <h1>UserName is::{user}</h1>
            <button onClick={()=>setUser("azar")}>ClickHere</button>
            <Component2 user={user}/>
        </div>
    )
}
function Component2(props)
{
   return(
    <div>
        <h1>UserName is::{props.user}</h1>
    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//React using useContext

import { useContext,createContext } from "react";

const UserContext = createContext();

function Component1() {
  const user = useContext(UserContext);
  return (
    <h1>This is Component1 :: {user}</h1>
  );
}

function Component2() {
  const user = useContext(UserContext);
  return (
    <h1>Component2 is :: {user}</h1>
  );
}
function Component3(){
    const user=useContext(UserContext);
    return(
        <h1>Component3 is::{user}</h1>
    )
}

function App() {
  const [user, setUser] = useState("mohamed");

  return (
    <UserContext.Provider value={user}>
      <Component1 />
      <Component2 />
      <Component3/>
    </UserContext.Provider>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<App />);

