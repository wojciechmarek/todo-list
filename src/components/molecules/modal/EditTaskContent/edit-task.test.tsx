import { configure, render, renderHook } from '@testing-library/react';
import { ModalEditTaskContentProps } from './edit-task.interface';
import { UseFormReturn, useForm } from 'react-hook-form';
import { Task, TaskStatus } from '../../../../common';
import { ModalEditTaskContent } from './edit-task';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TestRenderer from 'react-test-renderer';

describe('EditTaskContent', () => {
  let modalEditTaskContentProps: ModalEditTaskContentProps;
  let useFormResult: UseFormReturn<Task, any, undefined>;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    const { result } = renderHook(() =>
      useForm<Task>({
        defaultValues: {
          title: 'Go to the shop',
          description: 'Buy a milk',
          status: TaskStatus.Done,
          id: 123,
        },
      })
    );

    modalEditTaskContentProps = {
      control: result.current.control,
    };

    useFormResult = result.current;
  });

  it('should render', () => {
    const { baseElement } = render(
      <ModalEditTaskContent {...modalEditTaskContentProps} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <ModalEditTaskContent {...modalEditTaskContentProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the edit task modal content is rendered', () => {
    it('should render 2 text boxes (input and textarea)', () => {
      const { getAllByRole } = render(
        <ModalEditTaskContent {...modalEditTaskContentProps} />
      );
      const textBoxes = getAllByRole('textbox');
      expect(textBoxes.length).toBe(2);
    });

    it('should have correct initial value for input', () => {
      const { getAllByRole } = render(
        <ModalEditTaskContent {...modalEditTaskContentProps} />
      );
      const textBoxes = getAllByRole('textbox');
      const input = textBoxes.at(0);
      expect(input).toHaveValue('Go to the shop');
    });

    it('should have correct initial value for textarea', () => {
      const { getAllByRole } = render(
        <ModalEditTaskContent {...modalEditTaskContentProps} />
      );
      const textBoxes = getAllByRole('textbox');
      const textarea = textBoxes.at(1);
      expect(textarea).toHaveValue('Buy a milk');
    });
  });

  describe('when the edit task modal content is edited', () => {
    it('should update a value for input field', async () => {
      const { getAllByRole } = render(
        <ModalEditTaskContent {...modalEditTaskContentProps} />
      );
      const textBoxes = getAllByRole('textbox');
      const input = textBoxes.at(0) ?? new HTMLElement();
      await userEvent.type(input, 'qwerty', { delay: 1 });
      expect(useFormResult.getValues().title).toBe('Go to the shopqwerty');
    });

    it('should update a value for textarea field', async () => {
      const { getAllByRole } = render(
        <ModalEditTaskContent {...modalEditTaskContentProps} />
      );
      const textBoxes = getAllByRole('textbox');
      const textarea = textBoxes.at(1) ?? new HTMLElement();
      await userEvent.type(textarea, 'qwerty', { delay: 1 });
      expect(useFormResult.getValues().description).toBe('Buy a milkqwerty');
    });
  });
});
