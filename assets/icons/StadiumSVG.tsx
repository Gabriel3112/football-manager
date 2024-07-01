import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={231} height={165} fill="none" {...props}>
    <Path
      fill={props.fill}
      stroke={props.fill}
      strokeWidth={0.5}
      d="M23.026 55.872 15.52 25.85h227.36l-7.506 30.022-15.078 15.078H38.104L23.026 55.872ZM45.755 93.75l-7.35-14.7h181.59l-7.35 14.7H45.755ZM53.355 116.55l-7.35-14.7h166.39l-7.35 14.7H53.355ZM53.45 154.8v-30.15h151.5v30.4h53.2v14.7H.25v-14.7h53.2v-.25Z"
    />
    <Rect
      width={45.6}
      height={22.8}
      x={106.4}
      y={132}
      fill="#1E1E1E"
      rx={0.1}
    />
    <Path fill={props.fill} d="M30.4-4.8h15.2v15.2H30.4z" />
    <Path
      fill={props.fill}
      d="M30.4-4.8h15.2v15.2H30.4zM212.8-4.8H228v15.2h-15.2zM121.6-4.8h15.2v15.2h-15.2z"
    />
  </Svg>
);
export default SvgComponent;
