# react-flexbox2
React flexbox implementation similar to Polymer Layout Attributes.

## Installation
```
npm install --save react-flexbox2
```

## Usage
Similar to [Polymer Layout Attributes](https://www.polymer-project.org/0.5/docs/polymer/layout-attrs.html)
```jsx
var React   = require('react');
var FlexBox = require('react-flexbox2');

module.exports = React.createClass({
    render: function(){
        return (
            <div layout horizontal justified>
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
            </div>
        );
    }
});
```
