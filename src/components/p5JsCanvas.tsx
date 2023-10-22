import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
  // Your component props
}

let x = 50;
const y = 50;
  
export const P5Canvas: React.FC<ComponentProps> = (props: ComponentProps) => {

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    console.log(canvasParentRef)
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;

    if ( x > window.innerWidth ) {
      x = 0;
    }
  };

  return <Sketch setup={setup} draw={draw} style={{position: "absolute", top:"0px", left:"0px", width:"100%", height:"100%"}}/>;
};