import { TextAreaProps } from './text-area.interface';
import '@testing-library/jest-dom';
import { configure, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from './text-area';

describe('TextArea', () => {
  let textAreaProps: TextAreaProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    textAreaProps = {
      value: 'hello textarea',
      placeholder: 'placeholder test for textarea',
      handleTextAreaChange: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<TextArea {...textAreaProps} />);
    expect(baseElement).toBeTruthy();
  });

  describe('when the text area is rendered', () => {
    it('should have the correct value', () => {
      const { getByRole } = render(<TextArea {...textAreaProps} />);
      const textarea = getByRole('textbox');
      expect(textarea).toHaveValue('hello textarea');
    });

    it('should have the correct placeholder', () => {
      const { getByRole } = render(<TextArea {...textAreaProps} />);
      const textarea = getByRole('textbox');
      expect(textarea).toHaveAttribute(
        'placeholder',
        'placeholder test for textarea'
      );
    });
  });

  describe('when the text to the text area is entered', () => {
    it('should call the handleTextAreaChange function when the input changes', async () => {
      const { getByRole } = render(<TextArea {...textAreaProps} />);
      const textarea = getByRole('textbox');
      await userEvent.type(textarea, 'qwerty', { delay: 1 });
      expect(textAreaProps.handleTextAreaChange).toHaveBeenCalled();
    });

    it('should call the handleTextAreaChange function 3 times for 3 characters', async () => {
      const { getByRole } = render(<TextArea {...textAreaProps} />);
      const textarea = getByRole('textbox');
      await userEvent.type(textarea, 'abc', { delay: 1 });
      expect(textAreaProps.handleTextAreaChange).toHaveBeenCalledTimes(3);
    });

    it('should call the handleTextAreaChange function with correct phrase', async () => {
      const { getByRole } = render(<TextArea {...textAreaProps} />);
      const textarea = getByRole('textbox');
      await userEvent.type(textarea, '1', { delay: 1 });
      expect(textAreaProps.handleTextAreaChange).toHaveBeenCalledWith(
        'hello textarea1'
      );
    });
  });
});
