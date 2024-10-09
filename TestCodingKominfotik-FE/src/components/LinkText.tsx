import React from "react";
import Link from "next/link";

type IProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

function LinkText(props: IProps) {
  const { href, children, ...restProps } = props;
  return (
    <Link href={href} {...restProps}>
      {children}
    </Link>
  );
}

export default LinkText;
