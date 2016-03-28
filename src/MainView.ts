/// <reference path="../fuse.d.ts" /> 
import Observable = require('FuseJS/Observable');

var buttonText = Observable('Button');
var clickCount = 1;

function click() {
    buttonText.value = 'Clicks: ' + ++clickCount;
}

export = {
	buttonText: buttonText,
	click: click
};