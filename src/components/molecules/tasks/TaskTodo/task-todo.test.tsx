import { configure, render } from '@testing-library/react';
import { TaskTodoProps } from './task-todo.interface';
import { TaskTodo } from './task-todo';
import '@testing-library/jest-dom';
import { TaskStatus } from '../../../../common';

describe('TaskTodo', () => {
  let taskTodoProps: TaskTodoProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    taskTodoProps = {
      handleOnItemClick: jest.fn(),
      handleRemoveClick: jest.fn(),
      handleDoneClick: jest.fn(),

      task: {
        id: 1,
        title: 'title',
        description: 'description',
        status: TaskStatus.Done,
      },
    };
  });

  it('should render', () => {
    const { baseElement } = render(<TaskTodo {...taskTodoProps} />);
    expect(baseElement).toBeTruthy();
  });

  describe('when the task completed is rendered', () => {
    it('should render the title', () => {
      const { getByText } = render(<TaskTodo {...taskTodoProps} />);
      const title = getByText(/title/i);
      expect(title).toBeTruthy();
    });

    it('should render the description', () => {
      const { getByText } = render(<TaskTodo {...taskTodoProps} />);
      const description = getByText(/description/i);
      expect(description).toBeTruthy();
    });
  });

  describe('when the task completed is clicked', () => {
    it('should call the handleOnItemClick function', () => {
      const { getByText } = render(<TaskTodo {...taskTodoProps} />);
      const task = getByText(/title/i);
      task.click();
      expect(taskTodoProps.handleOnItemClick).toHaveBeenCalled();
    });
  });

  describe('when the remove button is clicked', () => {
    it('should call the handleRestoreClick function', async () => {
      const { getAllByRole } = render(<TaskTodo {...taskTodoProps} />);
      const restoreButton = getAllByRole('button', { hidden: true })[0];
      restoreButton.click();
      expect(taskTodoProps.handleDoneClick).toHaveBeenCalled();
    });
  });

  describe('when the done button is clicked', () => {
    it('should call the handleRemoveClick function', async () => {
      const { getAllByRole } = render(<TaskTodo {...taskTodoProps} />);
      const removeButton = getAllByRole('button', { hidden: true })[1];
      removeButton.click();
      expect(taskTodoProps.handleRemoveClick).toHaveBeenCalled();
    });
  });
});
