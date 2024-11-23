import { EventEmitter } from 'event';

const myEmitter  = new EventEmitter();

function greetHandler(){
    console.log('hello world');
    
}

function goodByeHandler(){
    console.log('good bye world')
}

//Register event listeners
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodByeHandler);

//emit events

myEmitter.emit('greet');
myEmitter.emit('goodbye');