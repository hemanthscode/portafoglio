import { memo } from "react";
import { typographyStyles } from "@/utils/styles";
import { TypographyVariant, type TypographyProps } from "@/utils/types";
import clsx from "clsx";

// Enhanced with children validation
const Typography = ({
  children,
  variant = TypographyVariant.P,
  className,
  id,
  role,
}: TypographyProps) => {
  if (!children) {
    console.warn("Typography component requires children");
    return null;
  }

  const { component: Component, className: baseStyles } =
    typographyStyles[variant];

  return (
    <Component id={id} className={clsx(baseStyles, className)} role={role}>
      {children}
    </Component>
  );
};

export default memo(Typography);
