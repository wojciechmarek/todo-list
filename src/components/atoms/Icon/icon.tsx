import React from 'react';
import { IconProps } from './icon.interface';
import { IconStyle } from './icon.styled';

export const Icon = (props: IconProps) => {
  const { children, ...params } = props;

  return <IconStyle {...params}>{children}</IconStyle>;
};
