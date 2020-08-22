import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { formatNumber } from "libphonenumber-js";
import { Input, View, Text } from 'native-base';

interface IPhoneInputProps  {
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
}

const PhoneInput: React.FC<IPhoneInputProps> = ({ value, onChange, disabled }) => {
  const toFormat = (input: string) => {
    return formatNumber(`+7${input.replace(/^\+7/, "")}`, "International")
  }
    
  const [phoneNumber, setPhoneNumber] = useState(toFormat('+' + value));

  useEffect(() => {
    const tempPhone = phoneNumber.replace(/\+/g, '');
    const removeSpaces = tempPhone.replace(/ /g, '');

    onChange(removeSpaces)
  }, [phoneNumber, onChange])

  const onBlur = () => {
    setPhoneNumber(toFormat(phoneNumber));
  };

  return (
    <Input
      onBlur={onBlur}
      onChangeText={setPhoneNumber}
      value={phoneNumber}
      keyboardType={'phone-pad'}
      disabled={disabled}
      style={{ opacity: disabled ? 0.4 : 1}}
    />
  );
};

const styles = StyleSheet.create({
});

export default PhoneInput;