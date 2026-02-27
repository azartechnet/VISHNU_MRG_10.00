//import EventEmitter class
const EventEmitter=require('events')
//create object of eventemitter
const event=new EventEmitter();
//create event listener
event.on('greet',()=>{
    console.log("Hello Azar!!! welcome to nodejs event")
})
//Emit(trigger)the event
event.emit('greet');
