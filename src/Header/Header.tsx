import React from 'react';
import styled from 'styled-components/native';

export interface HeaderProps {
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  backgroundColor = 'purple',
}) => {
  return (
    <HeaderComponent style={{ backgroundColor }}>
      <HeaderText>Cool Header</HeaderText>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.View`
  padding-top: 50px;
  background-color: blue;
`;

const HeaderText = styled.Text`
  font-size: 52px;
  color: white;
  font-weight: bold;
  padding-horizontal: 10px;
`;
