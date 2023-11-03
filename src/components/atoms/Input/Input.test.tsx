import { configure, render } from '@testing-library/react';
import { Input } from './input';
import { InputProps } from './input.interface';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';

describe('Input', () => {
  let inputProps: InputProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    inputProps = {
      value: 'hello world',
      placeholder: 'placeholder test',
      handleInputChange: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<Input {...inputProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(<Input {...inputProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the input is rendered', () => {
    it('should have the correct value', () => {
      const { getByRole } = render(<Input {...inputProps} />);
      const input = getByRole('textbox');
      expect(input).toHaveValue('hello world');
    });

    it('should have the correct placeholder', () => {
      const { getByRole } = render(<Input {...inputProps} />);
      const input = getByRole('textbox');
      expect(input).toHaveAttribute('placeholder', 'placeholder test');
    });
  });

  describe('when the text to the input is entered', () => {
    it('should call the handleInputChange function when the input changes', async () => {
      const { getByRole } = render(<Input {...inputProps} />);
      const input = getByRole('textbox');
      await userEvent.type(input, 'qwerty', { delay: 1 });
      expect(inputProps.handleInputChange).toHaveBeenCalled();
    });

    it('should call the handleInputChange function 3 times for 3 characters', async () => {
      const { getByRole } = render(<Input {...inputProps} />);
      const input = getByRole('textbox');
      await userEvent.type(input, 'abc', { delay: 1 });
      expect(inputProps.handleInputChange).toHaveBeenCalledTimes(3);
    });

    it('should call the handleInputChange function with correct phrase', async () => {
      const { getByRole } = render(<Input {...inputProps} />);
      const input = getByRole('textbox');
      await userEvent.type(input, '123', { delay: 1 });
      expect(inputProps.handleInputChange).toHaveBeenCalledWith(
        'hello world123'
      );
    });
  });
});
