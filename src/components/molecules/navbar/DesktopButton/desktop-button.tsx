import React from 'react';
import { DesktopNavbarButtonProps } from './desktop-button.interface';
import { DesktopNavbarButtonContainer } from './desktop-button.styled';

export const DesktopNavbarButton = (props: DesktopNavbarButtonProps) => {
  const { icon, name, ...params } = props;
  return (
    <DesktopNavbarButtonContainer {...params}></DesktopNavbarButtonContainer>
  );
};
