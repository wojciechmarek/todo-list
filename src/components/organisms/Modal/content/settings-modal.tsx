import styled from '@emotion/styled';

export interface SettingsModalProps {
  handleCloseClick: () => void;
}

export const SettingsModalStyle = styled.div`
  height: 300px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  border-radius: 5px;
  box-shadow: 0 0 100px 10px #202020;
`;

export const SettingsModal = ({ handleCloseClick }: SettingsModalProps) => {
  return (
    <SettingsModalStyle>
      <p>Hello settings</p>
      <button onClick={handleCloseClick}>Close</button>
    </SettingsModalStyle>
  );
};
