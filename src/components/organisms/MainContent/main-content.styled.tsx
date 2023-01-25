import styled from '@emotion/styled';

export const MainContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const MainContentContainer = styled.div`
  height: calc(100% - 2em);
  width: 90%;
  max-width: 860px;
  margin: 0.75em auto;
  border-radius: var(--standard-border-radius);
  background-color: var(--primary-color);
  border: var(--standard-border);
  box-shadow: var(--container-box-shadow);

  @media (max-width: 768px) {
    width: calc(100% - 2em);
  }
`;
