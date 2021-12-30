
import React from 'react';
import Slide from '@material-ui/core/Slide';
import { Fade, Zoom } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
export const TransitionUp = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export const TransitionLeft = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});
export const TransitionRight = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});

export const TransitionZoom = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export const TransitionFade = React.forwardRef(function Transition(props, ref) {
    return <Fade in={true} ref={ref} {...props} />;
});


export default Transition