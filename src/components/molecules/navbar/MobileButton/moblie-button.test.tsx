import { configure, render } from '@testing-library/react';
import { MobileNavbarButtonProps } from './mobile-button.interface';
import { MobileNavbarButton } from './mobile-button';
import '@testing-library/jest-dom';

describe('DesktopNavbarButton', () => {
  let mobileNavbarButtonProps: MobileNavbarButtonProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    mobileNavbarButtonProps = {
      expanded: false,
      name: 'Click me',
      icon: <span>A</span>,
      onClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(
      <MobileNavbarButton {...mobileNavbarButtonProps} />
    );
    expect(baseElement).toBeTruthy();
  });

  describe('when the desktop button is rendered', () => {
    it('should render the icon', () => {
      const { getByText } = render(
        <MobileNavbarButton {...mobileNavbarButtonProps} />
      );
      const icon = getByText(/A/i);
      expect(icon).toBeTruthy();
    });

    it('should render the name', () => {
      const { getByText } = render(
        <MobileNavbarButton {...mobileNavbarButtonProps} />
      );
      const name = getByText(/Click me/i);
      expect(name).toBeTruthy();
    });
  });

  describe('when the desktop button is clicked', () => {
    it('should call the onClick function', () => {
      const { getByText } = render(
        <MobileNavbarButton {...mobileNavbarButtonProps} />
      );
      const button = getByText(/Click me/i);
      button.click();
      expect(mobileNavbarButtonProps.onClick).toHaveBeenCalled();
    });
  });
});
