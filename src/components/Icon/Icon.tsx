import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export const Icon: React.FC<
  IconProps & {
    component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }
> = ({
  component: Component,
  size = 24,
  color = "currentColor",
  className,
  style,
  ...props
}) => {
  const iconStyle: React.CSSProperties = {
    width: size,
    height: size,
    color,
    ...style,
  };

  return <Component className={className} style={iconStyle} {...props} />;
};

// Higher-order component to create reusable icon components
export const createIcon = (
  SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
) => {
  return React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon component={SvgComponent} ref={ref} {...props} />
  ));
};
