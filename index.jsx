'use strict';

var React  = require("react");
var assign = require("react/lib/Object.assign");

var buildProps = function(props) {
    if (props) {
        var style = props.layout ? {display: "flex"} : {};

        // Container Attribute: flex-direction
        if (props.vertical) {
            style.flexDirection = style.WebkitFlexDirection = props.reverse ? "column-reverse" : "column";
        } else {
            style.flexDirection = style.WebkitFlexDirection = props.reverse ? "row-reverse" : "row";
        }

        // Container Attribute: align-items
        if (props.center) {
            style.alignItems = "center";
        } else if (props.start) {
            style.alignItems = "flex-start";
        } else if (props.end) {
            style.alignItems = "flex-end";
        } else if (props.stretch) {
            style.alignItems = "stretch";
        }

        // Container Attribute: justify-content
        if (props["startJustified"] || props["start-justified"]) {
            style.justifyContent = "flex-start";
        } else if (props["centerJustified"] || props["center-justified"]) {
            style.justifyContent = "center";
        } else if (props["endJustified"] || props["end-justified"]) {
            style.justifyContent = "flex-end";
        } else if (props["justified"]) {
            style.justifyContent = "space-between";
        } else if (props["aroundJustified"] || props["around-justified"]) {
            style.justifyContent = "space-around";
        }

        // Container Attribute: align-content


        // Container
        if (props.wrap) {
            style.flexWrap = "wrap";
        }

        // Item Attribute: align-self
        if (props["selfStart"] || props["self-start"]) {
            style.alignSelf = "flex-start";
        } else if (props["selfCenter"] || props["self-center"]) {
            style.alignSelf = "center";
        } else if (props["selfEnd"] || props["self-end"]) {
            style.alignSelf = "flex-end";
        } else if (props["selfStretch"] || props["self-stretch"]) {
            style.alignSelf = "stretch";
        }

        // Item Attribute: order
        if (props.order) {
            style.order = props.order;
        }

        // Item Attribute: flex-grow
        if (props["flexGrow"] || props["flex-grow"]) {
            style.flexGrow = props["flexGrow"] || props["flex-grow"];
        }

        // Item Attribute: flex-shrink
        if (props["flexShrink"] || props["flex-shrink"]) {
            style.flexShrink = props["flexShrink"] || props["flex-shrink"];
        }

        // Item Attribute: flex-basis
        if (props["flexBasis"] || props["flex-basis"]) {
            style.flexBasis = props["flexBasis"] || props["flex-basis"];
        }

        // Item Attribute: flex
        if (typeof(props.flex) === "number") {
            style.flexGrow = props.flex;
        } else if (typeof(props.flex) === "string") {
            style.flex = props.flex;
        } else if (props.flex) {
            style.flex = "1 1 auto";
        }

        return {
            style: assign(props.style || {}, style)
        };
    }
    return {};
};

var originalCreateElement = React.createElement;
React.createElement = function(type, props) {
    var args = arguments;
    if (props && typeof type === 'string') {
        assign(props, buildProps(props));
    }
    return originalCreateElement.apply(this, [type, props].concat(Array.prototype.slice.call(args, 2)));
};

module.exports = {};