import styled from '@emotion/styled';
import { TextArea } from '../../../atoms';
import { Input } from '../../../atoms/Input';

export const EditTaskContainer = styled.div`
  width: calc(100% - 4em);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 2em;
  justify-content: start;
  align-content: flex-start;
`;

export const EditTaskNameInput = styled(Input)`
  margin-bottom: 1em;
  height: 3em;
  box-shadow: var(--container-box-shadow);
`;

export const EditTaskDescriptionTextArea = styled(TextArea)`
  height: calc(100% - 4em);
  max-width: 100%;
  min-width: 100%;
  box-shadow: var(--container-box-shadow);
`;
