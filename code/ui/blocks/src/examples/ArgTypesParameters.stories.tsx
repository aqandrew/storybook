import type { Meta, StoryObj } from '@storybook/react';
import { ArgTypesParameters } from './ArgTypesParameters';

/**
 * Reference stories to be used by the ArgTypes stories
 */
const meta = {
  title: 'Example/Stories for ArgTypes',
  component: ArgTypesParameters,
  args: { b: 'b' },
  argTypes: {
    // @ts-expect-error Meta type is trying to force us to use real props as args
    extraMetaArgType: {
      type: { name: 'string' },
      name: 'Extra Meta',
      description: 'An extra argtype added at the meta level',
      table: { defaultValue: { summary: "'a default value'" } },
    },
  },
} satisfies Meta<typeof ArgTypesParameters>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is the primary mode for the button
 *
 * _this description was written as a comment above the story_
 */
export const NoParameters: Story = {
  argTypes: {
    // @ts-expect-error Story type is trying to force us to use real props as args
    extraStoryArgType: {
      type: { name: 'string' },
      name: 'Extra Story',
      description: 'An extra argtype added at the story level',
      table: { defaultValue: { summary: "'a default value'" } },
    },
  },
};

export const Include = {
  ...NoParameters,
  parameters: { docs: { argTypes: { include: ['a'] } } },
};

export const Exclude = {
  ...NoParameters,
  parameters: { docs: { argTypes: { exclude: ['a'] } } },
};

export const Sort = {
  ...NoParameters,
  parameters: { docs: { argTypes: { sort: 'alpha' } } },
};
