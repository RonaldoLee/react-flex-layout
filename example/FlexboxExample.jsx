'use strict';

var React   = require('react');
var FlexBox = require('react-flexbox2');

module.exports = React.createClass({
    render: function(){
        return (
            <div layout horizontal stretch wrap justified style={{height: 100}}>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} self-end flex="4">A</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} order="1" flex-grow="1">B</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} order="2" flex-grow="2">C</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1" flex-basis="200px">D</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">E</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">F</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">G</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">H</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">I</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">J</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">K</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">L</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">M</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">N</div>
                <div style={{padding: 4, margin: 10, backgroundColor: "orange"}} flex-grow="1">O</div>
            </div>
        );
    }
});