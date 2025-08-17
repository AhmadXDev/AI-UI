import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import { typography, TypographyStyleKeys } from '../styles';

export interface TextProps extends RNTextProps {
  variant?: TypographyStyleKeys;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  children,
  style,
  ...props
}) => {
  return (
    <RNText
      style={[typography.styles[variant], style]}
      {...props}
    >
      {children}
    </RNText>
  );
};