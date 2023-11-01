import { configure, render } from '@testing-library/react';
import { ButtonProps } from './button.interface';
import { Button } from './button';

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

  describe('when the button is clicked', () => {
    it('should call the onClick function', () => {
      const { getByRole } = render(<Button {...buttonProps} />);
      const button = getByRole('button', { name: /button/i });
      button.click();
      expect(buttonProps.onClick).toHaveBeenCalled();
    });

    it('should not call the onClick function', () => {
      const { getByRole } = render(<Button {...buttonProps} />);
      const button = getByRole('button', { name: /button/i });
      expect(buttonProps.onClick).not.toHaveBeenCalled();
    });
  });
});
