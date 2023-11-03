import { configure, render } from '@testing-library/react';
import { ModalActionButtons } from './action-buttons';
import { ModalActionButtonsProps } from './action-buttons.interface';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';

describe('ActionButtons', () => {
  let modalActionButtonsProps: ModalActionButtonsProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    modalActionButtonsProps = {
      handleAcceptButtonClick: jest.fn(),
      handleCancelButtonClick: jest.fn(),
      label: {
        acceptButton: 'acceptButton',
        cancelButton: 'cancelButton',
      },
    };
  });

  it('should render', () => {
    const { baseElement } = render(
      <ModalActionButtons {...modalActionButtonsProps} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <ModalActionButtons {...modalActionButtonsProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the modal action buttons are rendered', () => {
    it('should render 2 buttons', () => {
      const { getAllByRole } = render(
        <ModalActionButtons {...modalActionButtonsProps} />
      );
      const buttons = getAllByRole('button');
      expect(buttons.length).toBe(2);
    });

    it('should render the accept button', () => {
      const { getByRole } = render(
        <ModalActionButtons {...modalActionButtonsProps} />
      );
      const button = getByRole('button', { name: /acceptButton/i });
      expect(button).toBeTruthy();
    });

    it('should render the cancel button', () => {
      const { getByRole } = render(
        <ModalActionButtons {...modalActionButtonsProps} />
      );
      const button = getByRole('button', { name: /cancelButton/i });
      expect(button).toBeTruthy();
    });
  });

  describe('when the button is clicked ', () => {
    it('should call the handleAcceptButtonClick function', () => {
      const { getByRole } = render(
        <ModalActionButtons {...modalActionButtonsProps} />
      );
      const button = getByRole('button', { name: /acceptButton/i });
      button.click();
      expect(
        modalActionButtonsProps.handleAcceptButtonClick
      ).toHaveBeenCalled();
    });

    it('should call the handleCancelButtonClick function', () => {
      const { getByRole } = render(
        <ModalActionButtons {...modalActionButtonsProps} />
      );
      const button = getByRole('button', { name: /cancelButton/i });
      button.click();
      expect(
        modalActionButtonsProps.handleCancelButtonClick
      ).toHaveBeenCalled();
    });
  });
});
