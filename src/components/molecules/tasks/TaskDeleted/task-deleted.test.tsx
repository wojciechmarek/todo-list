import { configure, render } from '@testing-library/react';
import { TaskDeletedProps } from './task-deleted.interface';
import { TaskDeleted } from './task-deleted';
import '@testing-library/jest-dom';
import { TaskStatus } from '../../../../common';
import TestRenderer from 'react-test-renderer';

describe('DesktopNavbarButton', () => {
  let taskDeletedProps: TaskDeletedProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    taskDeletedProps = {
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
    const { baseElement } = render(<TaskDeleted {...taskDeletedProps} />);
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <TaskDeleted {...taskDeletedProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when the task completed is rendered', () => {
    it('should render the title', () => {
      const { getByText } = render(<TaskDeleted {...taskDeletedProps} />);
      const title = getByText(/title/i);
      expect(title).toBeTruthy();
    });

    it('should render the description', () => {
      const { getByText } = render(<TaskDeleted {...taskDeletedProps} />);
      const description = getByText(/description/i);
      expect(description).toBeTruthy();
    });
  });

  describe('when the task completed is clicked', () => {
    it('should call the handleOnItemClick function', () => {
      const { getByText } = render(<TaskDeleted {...taskDeletedProps} />);
      const task = getByText(/title/i);
      task.click();
      expect(taskDeletedProps.handleOnItemClick).toHaveBeenCalled();
    });
  });

  describe('when the remove button is clicked', () => {
    it('should call the handleRestoreClick function', async () => {
      const { getAllByRole } = render(<TaskDeleted {...taskDeletedProps} />);
      const restoreButton = getAllByRole('button', { hidden: true })[0];
      restoreButton.click();
      expect(taskDeletedProps.handleRestoreClick).toHaveBeenCalled();
    });
  });

  describe('when the done button is clicked', () => {
    it('should call the handleRemoveClick function', async () => {
      const { getAllByRole } = render(<TaskDeleted {...taskDeletedProps} />);
      const removeButton = getAllByRole('button', { hidden: true })[1];
      removeButton.click();
      expect(taskDeletedProps.handleRemoveClick).toHaveBeenCalled();
    });
  });
});
