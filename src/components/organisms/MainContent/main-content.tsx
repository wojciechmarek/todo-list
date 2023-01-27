import React from 'react';
import {
  MainContentContainer,
  MainContentWrapper,
} from './main-content.styled';
import { ItemsTodo } from './views';

export const MainContent = () => {
  return (
    <MainContentWrapper>
      <MainContentContainer>
        <ItemsTodo />
      </MainContentContainer>
    </MainContentWrapper>
  );
};
