import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MaskedInput from 'react-input-mask';
import { NumberFormatBase } from 'react-number-format';
import { success as SuccessColor, error as ErrorColor } from 'styles/colorProvider';

import { BsFillCheckCircleFill, BsXCircleFill, BsEye, BsEyeSlash } from 'react-icons/bs';
import { StyledInput, Container } from './styles';

function Input({
  icon,
  password,
  type,
  placeholder,
  label,
  mask,
  numeric,
  price,
  value,
  onChange,
  width,
  disabled,
  disableLabel,
  marginVertical,
  marginRight,
  card,
  onFocus,
  height,
  endIcon,
  endButtonIcon,
  onEndButtonClick,
  success,
  error,
  fullWidth,
  name,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? 'text' : numeric ? 'tel' : type;

  return (
    <Container width={width} {...props}>
      <StyledInput
        success={success}
        error={error}
        height={height}
        icon={icon && true}
        width={width}
        marginVertical={marginVertical}
        marginRight={marginRight}
        disabled={disabled}
      >
        <div>{icon}</div>
        {numeric ? (
          <NumberFormatBase
            value={value}
            onChange={onChange}
            prefix={price ? 'R$ ' : ''}
            thousandSeparator="."
            placeholder={placeholder}
            decimalSeparator=","
            decimalScale={price && 2}
            fixedDecimalScale={price}
            onFocus={onFocus}
            disabled={disabled}
          />
        ) : (
          <MaskedInput
            value={value}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete="new-password"
            mask={mask}
            type={inputType}
            maskChar={''}
            onFocus={onFocus}
            name={name}
          />
        )}
        {endIcon && <div>{endIcon}</div>}
        {endButtonIcon && (
          <IconButton size="small" onClick={onEndButtonClick}>
            {endButtonIcon}
          </IconButton>
        )}
        {success && <BsFillCheckCircleFill color={SuccessColor} size={15} />}
        {error && <BsXCircleFill color={ErrorColor} size={15} />}
        {type === 'password' && (
          <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BsEye color="#b2c8dd" /> : <BsEyeSlash color="#b2c8dd" />}
          </IconButton>
        )}
      </StyledInput>
    </Container>
  );
}

export default Input;
