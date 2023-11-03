import { configure, render } from '@testing-library/react';
import { IconInput } from './icon-input';
import { IconInputProps } from './icon-input.interface';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('IconButton', () => {
  let iconInputProps: IconInputProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    iconInputProps = {
      icon: <img src="https://via.placeholder.com/150" alt="icon" />,
      placeholder: 'placeholder',
      value: 'value',
      handleInputChange: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<IconInput {...iconInputProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <IconInput {...iconInputProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the icon input is rendered', () => {
    it('should render the icon', () => {
      const { getByRole } = render(<IconInput {...iconInputProps} />);
      const image = getByRole('img', { name: /icon/i });
      expect(image).toBeTruthy();
    });

    it('should render the placeholder', () => {
      const { getByRole } = render(<IconInput {...iconInputProps} />);
      const placeholder = getByRole('textbox');
      expect(placeholder).toBeTruthy();
    });
  });

  describe('when the icon input is changed', () => {
    it('should call the handleInputChange function', async () => {
      const { getByRole } = render(<IconInput {...iconInputProps} />);
      const input = getByRole('textbox');
      await userEvent.type(input, 'qwerty', { delay: 1 });
      expect(iconInputProps.handleInputChange).toHaveBeenCalled();
    });

    it('should call the handleInputChange function 3 times for 3 characters', async () => {
      const { getByRole } = render(<IconInput {...iconInputProps} />);
      const input = getByRole('textbox');
      await userEvent.type(input, 'abc', { delay: 1 });
      expect(iconInputProps.handleInputChange).toHaveBeenCalledTimes(3);
    });

    it('should call the handleInputChange function with correct phrase', async () => {
      const { getByRole } = render(<IconInput {...iconInputProps} />);
      const input = getByRole('textbox');
      await userEvent.type(input, '123', { delay: 1 });
      expect(iconInputProps.handleInputChange).toHaveBeenCalledWith('value123');
    });
  });
});
