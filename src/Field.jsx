import React from 'react';
import { TextInput } from 'react-native';
import { navyBlue } from './Constants';

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={{ borderRadius: 90, color: navyBlue, paddingHorizontal: 9, width: '78%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 5 }}
      placeholderTextColor={navyBlue}></TextInput>
  );
};

export default Field;
