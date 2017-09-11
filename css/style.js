import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#4B77BE",
        "fontFamily": "'Montserrat', sans-serif",
        "fontSize": "small"
    },
    "button": {
        "fontFamily": "'Montserrat', sans-serif",
        "fontSize": "small",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3,
        "marginRight": 8,
        "marginBottom": 8,
        "color": "white",
        "backgroundColor": "#6496c8",
        "border": "none",
        "borderRadius": 2,
        "boxShadow": "1px 5px #27496d"
    },
    "playground": {
        "position": "fixed",
        "top": 0,
        "left": 340,
        "bottom": 0,
        "right": 0,
        "border": "8px solid white"
    },
    "videovideo": {
        "backgroundColor": "#E4F1FE",
        "border": "3px solid #ECECEC"
    },
    "margin": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "width": 300
    },
    "filterButtons": {
        "width": 300,
        "flexDirection": "row",
        "flexWrap": "wrap"
    },
    "li": {
        "marginLeft": -20
    },
    "button:hover": {
        "backgroundColor": "#417cb8"
    },
    "buttonhover": {
        "backgroundColor": "#417cb8"
    },
    "button:active": {
        "backgroundColor": "#417cb8",
        "boxShadow": "0 3px #27496d",
        "transform": "translateY(2px) translateX(1px)"
    },
    "buttonactive": {
        "backgroundColor": "#417cb8",
        "boxShadow": "0 3px #27496d",
        "transform": "translateY(2px) translateX(1px)"
    },
    "button:disabled": {
        "backgroundColor": "darkgrey",
        "boxShadow": "0 3px #27496d",
        "transform": "translateY(2px) translateX(1px)"
    },
    "buttondisabled": {
        "backgroundColor": "darkgrey",
        "boxShadow": "0 3px #27496d",
        "transform": "translateY(2px) translateX(1px)"
    },
    "photo": {
        "boxShadow": "3px 3px 3px #888888",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "marginTop": 30,
        "marginRight": 30,
        "marginBottom": 30,
        "marginLeft": 30,
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "backgroundColor": "white",
        "cursor": "move",
        "transition": "all 0.5s"
    },
    "0000photo:hover": {
        "position": "absolute",
        "WebkitTransform": "translateY(-1px) translateX(-1px) rotate(0deg) scale(1.5)",
        "zIndex": 999,
        "boxShadow": "15px 15px 30px #666"
    }
});