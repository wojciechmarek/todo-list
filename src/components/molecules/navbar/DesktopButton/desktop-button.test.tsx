import { configure, render } from '@testing-library/react';
import { DesktopNavbarButtonProps } from './desktop-button.interface';
import { DesktopNavbarButton } from './desktop-button';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('DesktopNavbarButton', () => {
  let desktopNavbarButtonProps: DesktopNavbarButtonProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    desktopNavbarButtonProps = {
      icon: <span>A</span>,
      expanded: false,
      name: 'Click me',
      onClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(
      <DesktopNavbarButton {...desktopNavbarButtonProps} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <DesktopNavbarButton {...desktopNavbarButtonProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the desktop button is rendered', () => {
    it('should render the icon', () => {
      const { getByText } = render(
        <DesktopNavbarButton {...desktopNavbarButtonProps} />
      );
      const icon = getByText(/A/i);
      expect(icon).toBeTruthy();
    });

    it('should render the name', () => {
      const { getByText } = render(
        <DesktopNavbarButton {...desktopNavbarButtonProps} />
      );
      const name = getByText(/Click me/i);
      expect(name).toBeTruthy();
    });
  });

  describe('when the desktop button is clicked', () => {
    it('should call the onClick function', () => {
      const { getByText } = render(
        <DesktopNavbarButton {...desktopNavbarButtonProps} />
      );
      const button = getByText(/Click me/i);
      button.click();
      expect(desktopNavbarButtonProps.onClick).toHaveBeenCalled();
    });
  });
});
