import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Test, TestProps } from './test';

const meta: Meta = {
  title: 'Welcome 2',
  component: Test,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TestProps> = args => <Test {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
