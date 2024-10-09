import {
    Button,
    ButtonProps,
    Popconfirm,
  } from "antd";
  import Link from "next/link";
  import React from "react";
  import { twMerge } from "tailwind-merge";
  
  export default function PrimaryButton(props: ButtonProps) {
    const { children, className, ...restProps } = props;
    return (
      <Button
        {...restProps}
        className={twMerge(
          "text-white border-none hover:border-none hover:bg-hover font-inter",
          className
        )}
        style={{ backgroundColor: "rgba(46, 118, 40, 1)" }}
      >
        {children}
      </Button>
    );
  }
  
  export function SecondaryButton(props: ButtonProps) {
    const { children, className, ...restProps } = props;
    return (
      <Button
        {...restProps}
        className={twMerge(
          "bg-white text-primary border-primary hover:bg-primary hover:text-white font-inter",
          className
        )}
      >
        {children}
      </Button>
    );
  }
  
  export function LinkButton(
    props: ButtonProps & { classType?: "primary" | "secondary" }
  ) {
    const { children, href, className, classType, ...restProps } = props;
  
    const primaryType =
      "bg-primary text-white border-none hover:border-none hover:bg-hover font-inter";
    const secondaryType =
      "bg-link text-primary border-none hover:border-none hover:bg-link hover:text-primary font-inter";
  
    function renderClassType() {
      switch (classType) {
        case "primary":
          return primaryType;
        case "secondary":
          return secondaryType;
  
        default:
          return secondaryType;
      }
    }
  
    return (
      <Link href={href || "/"}>
        <Button {...restProps} className={twMerge(renderClassType(), className)}>
          {children}
        </Button>
      </Link>
    );
  }
  
  export function TextButton(props: ButtonProps) {
    const { children, className, ...restProps } = props;
    return (
      <Button
        type="text"
        {...restProps}
        className={twMerge("hover:bg-transparent font-inter", className)}
      >
        {children}
      </Button>
    );
  }
  
  interface WithPopConfirmProps {
    withPopOverConfirm?: boolean;
    titlePopUp?: React.ReactNode;
    descriptionPopUp?: React.ReactNode;
    onConfirm?: () => void;
  }
  export function IconButton(props: ButtonProps & WithPopConfirmProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, className, icon, withPopOverConfirm, ...restProps } = props;
  
    if (withPopOverConfirm) {
      return (
        <Popconfirm
          onConfirm={restProps.onConfirm}
          okButtonProps={{ className: "bg-primary" }}
          title={restProps.titlePopUp || "Title"}
          description={restProps.descriptionPopUp || "description"}
        >
          <Button
            icon={icon}
            {...restProps}
            className={twMerge(
              "hover:bg-transparent font-inter rounded-full",
              className
            )}
          />
        </Popconfirm>
      );
    }
  
    return (
      <Button
        icon={icon}
        {...restProps}
        className={twMerge(
          "hover:bg-transparent font-inter rounded-full",
          className
        )}
      />
    );
  }
  