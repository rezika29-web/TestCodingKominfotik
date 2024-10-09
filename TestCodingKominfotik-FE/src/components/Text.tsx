import React from "react";
import { twMerge } from "tailwind-merge";

type SizeParagraphType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body1"
  | "body2"
  | "caption";

type IProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: SizeParagraphType;
};

function sizeParagraph(size: SizeParagraphType) {
  if (size === "h1") {
    return "wrtc-h1";
  }
  if (size === "h2") {
    return "wrtc-h2";
  }
  if (size === "h3") {
    return "wrtc-h3";
  }
  if (size === "h4") {
    return "wrtc-h4";
  }
  if (size === "h5") {
    return "wrtc-h5";
  }
  if (size === "h6") {
    return "wrtc-h6";
  }
  if (size === "subtitle") {
    return "wrtc-subtitle";
  }
  if (size === "body1") {
    return "wrtc-body1";
  }
  if (size === "body2") {
    return "wrtc-body2";
  }
  if (size === "caption") {
    return "wrtc-caption";
  }

  return "text-caption";
}

function Text(props: IProps) {
  const { children, size = "body1", className, ...restProps } = props;

  return (
    <span
      className={twMerge(["block", sizeParagraph(size), className])}
      {...restProps}
    >
      {children}
    </span>
  );
}

export default Text;
