import { configure, render } from '@testing-library/react';
import { TaskTodoProps } from './task-todo.interface';
import { TaskStatus } from '../../../../common/enums/task-status';
import { TaskTodo } from './task-todo';

describe('TaskTodo', () => {
  let taskTodoProps: TaskTodoProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    taskTodoProps = {
      task: {
        id: 1,
        title: 'Task 1',
        description: 'Task 1 description',
        status: TaskStatus.Todo,
      },
      handleDoneClick: jest.fn(),
      handleOnItemClick: jest.fn(),
      handleRemoveClick: jest.fn(),
    };
  });

  it('renders correctly', () => {
    const { baseElement } = render(<TaskTodo {...taskTodoProps} />);
    expect(baseElement).toBeTruthy();
  });

  describe('when the button is clicked', () => {});
});
