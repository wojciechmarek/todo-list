import { configure, render } from '@testing-library/react';
import { ButtonProps } from './button.interface';
import { Button } from './button';
import '@testing-library/jest-dom';

describe('Button', () => {
  let buttonProps: ButtonProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    buttonProps = {
      children: 'Button',
      onClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<Button {...buttonProps} />);
    expect(baseElement).toBeTruthy();
  });

  describe('when the button is rendered', () => {
    it('should have the correct text', () => {
      const { getByRole } = render(<Button {...buttonProps} />);
      const button = getByRole('button', { name: /button/i });
      expect(button).toHaveTextContent('Button');
    });
  });

  describe('when the button is clicked', () => {
    it('should call the onClick function', () => {
      const { getByRole } = render(<Button {...buttonProps} />);
      const button = getByRole('button', { name: /button/i });
      button.click();
      expect(buttonProps.onClick).toHaveBeenCalled();
    });
  });

  describe('when the button is disabled', () => {
    it('should not call the onClick function', () => {
      const { getByRole } = render(<Button {...buttonProps} disabled />);
      const button = getByRole('button', { name: /button/i });
      button.click();
      expect(buttonProps.onClick).not.toHaveBeenCalled();
    });

    it('should have the disabled attribute', () => {
      const { getByRole } = render(<Button {...buttonProps} disabled />);
      const button = getByRole('button', { name: /button/i });
      expect(button).toBeDisabled();
    });
  });
});
