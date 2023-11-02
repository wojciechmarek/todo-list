import { configure, render } from '@testing-library/react';
import { TaskCompletedProps } from './task-completed.interface';
import { TaskCompleted } from './task-completed';
import '@testing-library/jest-dom';
import { TaskStatus } from '../../../../common';

describe('TaskCompleted', () => {
  let taskCompletedProps: TaskCompletedProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    taskCompletedProps = {
      handleOnItemClick: jest.fn(),
      handleRemoveClick: jest.fn(),
      handleRestoreClick: jest.fn(),
      task: {
        id: 1,
        title: 'title',
        description: 'description',
        status: TaskStatus.Done,
      },
    };
  });

  it('should render', () => {
    const { baseElement } = render(<TaskCompleted {...taskCompletedProps} />);
    expect(baseElement).toBeTruthy();
  });

  describe('when the task completed is rendered', () => {
    it('should render the title', () => {
      const { getByText } = render(<TaskCompleted {...taskCompletedProps} />);
      const title = getByText(/title/i);
      expect(title).toBeTruthy();
    });

    it('should render the description', () => {
      const { getByText } = render(<TaskCompleted {...taskCompletedProps} />);
      const description = getByText(/description/i);
      expect(description).toBeTruthy();
    });
  });

  describe('when the task completed is clicked', () => {
    it('should call the handleOnItemClick function', () => {
      const { getByText } = render(<TaskCompleted {...taskCompletedProps} />);
      const task = getByText(/title/i);
      task.click();
      expect(taskCompletedProps.handleOnItemClick).toHaveBeenCalled();
    });
  });

  describe('when the remove button is clicked', () => {
    it('should call the handleRestoreClick function', async () => {
      const { getAllByRole } = render(
        <TaskCompleted {...taskCompletedProps} />
      );
      const restoreButton = getAllByRole('button', { hidden: true })[0];
      restoreButton.click();
      expect(taskCompletedProps.handleRestoreClick).toHaveBeenCalled();
    });
  });

  describe('when the done button is clicked', () => {
    it('should call the handleRemoveClick function', async () => {
      const { getAllByRole } = render(
        <TaskCompleted {...taskCompletedProps} />
      );
      const removeButton = getAllByRole('button', { hidden: true })[1];
      removeButton.click();
      expect(taskCompletedProps.handleRemoveClick).toHaveBeenCalled();
    });
  });
});
