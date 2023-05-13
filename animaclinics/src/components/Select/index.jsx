import React from "react";
import { StyledInput, Container } from "./styles";

function Select({
  icon,
  placeholder,
  label,
  value,
  onChange,
  width,
  disabled,
  disableLabel,
  marginVertical,
  onFocus,
  height,
  success,
  error,
  children,
}) {
  return (
    <Container>
      <StyledInput
        success={success}
        error={error}
        height={height}
        icon={icon && true}
        width={width}
        marginVertical={marginVertical}
        disabled={disabled}
      >
        <select
          value={value}
          placeholder={placeholder}
          onFocus={onFocus}
          onChange={onChange}
        >
          {children}
        </select>
      </StyledInput>
    </Container>
  );
}

export default Select;
