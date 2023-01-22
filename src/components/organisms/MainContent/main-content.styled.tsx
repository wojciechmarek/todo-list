import styled from '@emotion/styled';

export const MainContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const MainContentContainer = styled.div`
  height: calc(100% - 2em);
  width: 70%;
  max-width: 860px;
  margin: 0.75em auto;
  border-radius: var(--standard-border-radius);

  background-color: var(--primary-color);
`;
