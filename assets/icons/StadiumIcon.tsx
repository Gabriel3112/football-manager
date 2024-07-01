import * as React from "react";
import Svg, { Circle, Rect, Path, SvgProps } from "react-native-svg";

export default function SvgComponent(props: SvgProps) {
  return (
    <Svg viewBox="0 0 30 30" fill="none" {...props}>
      <Path d="M6.25 27.5L6.25 2.5H23.75V27.5H6.25Z" fill={props.color} />
      <Path
        d="M6.25 15.625V14.375L23.75 14.375V15.625L6.25 15.625Z"
        fill={props.fill}
      />
      <Path
        d="M10 15C10 17.75 12.25 20 15 20C17.75 20 20 17.75 20 15C20 12.25 17.75 10 15 10C12.25 10 10 12.25 10 15ZM18.75 15C18.75 17.0625 17.0625 18.75 15 18.75C12.9375 18.75 11.25 17.0625 11.25 15C11.25 12.9375 12.9375 11.25 15 11.25C17.0625 11.25 18.75 12.9375 18.75 15ZM11.875 2.5H10.625V6.875H19.375V2.5H18.125V5.625H11.875V2.5ZM11.875 27.5V24.375H18.125V27.5H19.375V23.125H10.625V27.5H11.875Z"
        fill={props.fill}
      />
    </Svg>
  );
}
