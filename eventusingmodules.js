// assign own events modules
// 'events' also build in module create own events name 

var cEvents = require('events');
const { EventEmitter } = require('events');

var Eventemitter = new event.Eventemitter();

var eventstarthandler = function() {
    console.log('Start to ride the bike');

}

var eventstophandler = function() {
    console.log('Stop to ride the bike');
}


//assign events handler to an events
EventEmitter.on('Start', eventstarthandler);
EventEmitter.on('Stop', eventstophandler);


EventEmitter.emit('Start');
EventEmitter.emit('Stop');