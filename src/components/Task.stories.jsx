import { fn } from "@storybook/test";

import Task from "./Task";

// bundle set of actions to make it reusable
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task,
  title: "Task", //  how to group or categorize the component in the Storybook sidebar
  tags: ["autodocs"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  // allow us to live-edit our components with the controls addon without restarting Storybook
  args: {
    ...ActionsData,
  },
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      id: "2",
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      id: "3",
      state: "TASK_ARCHIVED",
    },
  },
};
