import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton, { StyledButton2 } from "./StyledButton";
import { ButtonProps, variants, sizes } from "./types";
import { useMatchBreakpoints } from "../../hooks";

const Button: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};
export const Button2: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;    
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton2 {...internalProps} {...props} isLoading={isLoading} isMobile={isMobile} disabled={isDisabled}>
      {React.isValidElement(startIcon) &&
        React.cloneElement(startIcon, {
          mr: "0.5rem",
        })}
      {children}
      {React.isValidElement(endIcon) &&
        React.cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledButton2>
  );
};

Button.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};
Button2.defaultProps = {
  variant: variants.PRIMARY,
  size: sizes.MD,
  external: false,
  isLoading: false,
  disabled: false,
};
export default Button;
