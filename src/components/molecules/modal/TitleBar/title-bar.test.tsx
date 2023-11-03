import { configure, render } from '@testing-library/react';
import { ModalTitleBarProps } from './title-bar.interface';
import { ModalTitleBar } from './title-bar';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('TitleBar', () => {
  let modalTitleBarProps: ModalTitleBarProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    modalTitleBarProps = {
      title: 'title',
      handleCloseClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<ModalTitleBar {...modalTitleBarProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <ModalTitleBar {...modalTitleBarProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the title bar is rendered', () => {
    it('should have the correct title', () => {
      const { getByText } = render(<ModalTitleBar {...modalTitleBarProps} />);
      const title = getByText('title');
      expect(title).toBeTruthy();
    });

    it('should render the close button', () => {
      const { getByRole } = render(<ModalTitleBar {...modalTitleBarProps} />);
      const button = getByRole('button');
      expect(button).toBeTruthy();
    });
  });

  describe('when the close button is clicked', () => {
    it('should call the handleCloseClick function', () => {
      const { getByRole } = render(<ModalTitleBar {...modalTitleBarProps} />);
      const button = getByRole('button');
      button.click();
      expect(modalTitleBarProps.handleCloseClick).toHaveBeenCalled();
    });
  });
});
