import React from 'react';
import { Button as RNButton } from 'react-native';
export interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return <RNButton onPress={() => {}} title={title} />;
};
