import { configure, render } from '@testing-library/react';
import { IconButton } from './icon-button';
import { IconButtonProps } from './icon-button.interface';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('IconButton', () => {
  let iconButtonProps: IconButtonProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    iconButtonProps = {
      icon: <img src="https://via.placeholder.com/150" alt="icon" />,
      onClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<IconButton {...iconButtonProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <IconButton {...iconButtonProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the icon button is rendered', () => {
    it('should render the icon', () => {
      const { getByRole } = render(<IconButton {...iconButtonProps} />);
      const image = getByRole('img', { name: /icon/i });
      expect(image).toBeTruthy();
    });
  });

  describe('when the icon button is clicked', () => {
    it('should call the onClick function', () => {
      const { getByRole } = render(<IconButton {...iconButtonProps} />);
      const button = getByRole('button', { name: /icon/i });
      button.click();
      expect(iconButtonProps.onClick).toHaveBeenCalled();
    });

    it('should not call the onClick function when the button is disabled', () => {
      const { getByRole } = render(
        <IconButton {...iconButtonProps} disabled />
      );
      const button = getByRole('button', { name: /icon/i });
      button.click();
      expect(iconButtonProps.onClick).not.toHaveBeenCalled();
    });
  });
});
