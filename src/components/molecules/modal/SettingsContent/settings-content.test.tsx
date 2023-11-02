import { act, configure, render, renderHook } from '@testing-library/react';
import { ModalSettingsContentProps } from './settings-content.interface';
import { UseFormReturn, useForm } from 'react-hook-form';
import { Task, TaskStatus, Theme } from '../../../../common';
import { ModalSettingsContent } from './settings-content';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('SettingsContent', () => {
  let modalSettingsContentProps: ModalSettingsContentProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    modalSettingsContentProps = {
      theme: Theme.Cardboard,
      handleThemeClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(
      <ModalSettingsContent {...modalSettingsContentProps} />
    );
    expect(baseElement).toBeTruthy();
  });

  describe('when the edit settings modal content is rendered', () => {
    it('should render 11 theme tiles', () => {
      const { getAllByTestId } = render(
        <ModalSettingsContent {...modalSettingsContentProps} />
      );
      const themeTiles = getAllByTestId('tile');
      expect(themeTiles.length).toBe(11);
    });
  });

  describe('when the tile is clicked', () => {
    it('should call the handleThemeClick function', () => {
      const { getAllByTestId } = render(
        <ModalSettingsContent {...modalSettingsContentProps} />
      );
      const themeTiles = getAllByTestId('tile');
      const tile = themeTiles.at(0);
      act(() => {
        tile?.click();
      });
      expect(modalSettingsContentProps.handleThemeClick).toHaveBeenCalled();
    });

    it('should call the handleThemeClick function with correct parameter', () => {
      const { getAllByTestId } = render(
        <ModalSettingsContent {...modalSettingsContentProps} />
      );
      const themeTiles = getAllByTestId('tile');

      // Neobruthalism theme at index 3
      const tile = themeTiles.at(3);

      act(() => {
        tile?.click();
      });
      expect(modalSettingsContentProps.handleThemeClick).toHaveBeenCalledWith(
        Theme.Neobruthalism
      );
    });
  });
});
