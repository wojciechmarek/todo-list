import styled from '@emotion/styled';

export const LayoutStyle = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  background: var(--background);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
