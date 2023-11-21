import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { Field } from 'formik';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomPhoneInput = ({
  label,
  handleChange,
  error,
  value,
  touched,
  setFieldValue,
  phoneInput,
  isError,
  setIsError,
  setPhoneCode,
  setFieldError,
  countryCode,
  placeholder,
  disabled = false,
  extraStyles,
}) => {
  const handleCountryChange = () => {
    phoneInput.current?.setState({ number: '' });
    setFieldValue('phone', '');
    setIsError('Phone number is required!');
  };

  useEffect(() => {
    if (touched && value === '') {
      setIsError('Phone number is required!');
    }
  }, [touched, value]);

  return (
    <View style={{ gap: 8 }}>
      <Field name="phoneNumber">
        {() => (
          <PhoneInput
            ref={phoneInput}
            placeholder={placeholder}
            disabled={disabled}
            defaultCode={countryCode === undefined ? 'US' : countryCode}
            textInputStyle={[
              {
                height: 40,
                width: '40%',
                padding: 0,
                margin: 0,
                fontSize: 12,
                color: extraStyles ? 'rgba(255, 255, 255, 0.5)' : '#000',
              },
            ]}
            codeTextStyle={{
              color: extraStyles ? 'rgba(255, 255, 255, 0.5)' : '#000',
            }}
            textContainerStyle={{
              backgroundColor: extraStyles ? 'rgba(68, 68, 68, 0)' : undefined,
            }}
            containerStyle={[
              {
                height: 45,
                backgroundColor: 'white',
              },
              extraStyles,
            ]}
            flagButtonStyle={{}}
            value={value}
            onChangeText={(phoneNumber) => {
              handleChange(phoneNumber);
              setFieldError('phone', '');
              setIsError('');
            }}
            onChangeCountry={(country) => {
              setPhoneCode(country.callingCode);
              handleCountryChange();
            }}
            withShadow
          />
        )}
      </Field>

      {isError !== '' || (touched && !value) ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
          <Icon name="alert-circle" size={22} color="red" />
          <Text style={{ color: 'red' }}>{error ? error : isError}</Text>
        </View>
      ) : (
        <View style={{ height: 25 }} />
      )}
    </View>
  );
};

export default CustomPhoneInput;
