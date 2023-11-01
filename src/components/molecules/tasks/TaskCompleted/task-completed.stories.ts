import type { Meta, StoryObj } from '@storybook/react';

import { TaskCompleted } from './task-completed';
import { TaskStatus } from '../../../../common';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Molecules/TaskCompleted',
  component: TaskCompleted,
  tags: ['autodocs'],
} satisfies Meta<typeof TaskCompleted>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    task: {
      id: 1,
      description: 'Task 1',
      title: 'Task 1',
      status: TaskStatus.Done,
    },
    handleOnItemClick: () => {},
    handleRemoveClick: () => {},
    handleRestoreClick: () => {},
  },
};
