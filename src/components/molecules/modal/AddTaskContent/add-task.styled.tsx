import styled from '@emotion/styled';
import { TextArea } from '../../../atoms';
import { Input } from '../../../atoms/Input';

export const AddTaskContainer = styled.div`
  width: calc(100% - 4em);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 2em;
  justify-content: start;
  align-content: flex-start;
`;

export const AddTaskNameInput = styled(Input)`
  margin-bottom: 1em;
  height: 3em;
`;

export const AddTaskDescriptionTextArea = styled(TextArea)`
  height: calc(100% - 4em);
  max-width: 100%;
  min-width: 100%;
`;
