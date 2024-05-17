import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@jung/design-system';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'outline', 'ghost'],
			control: { type: 'select' },
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' },
		},
		rounded: {
			options: [true, false],
			control: { type: 'select' },
		},
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		size: 'sm',
		children: 'Primary Button',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		size: 'sm',
		children: 'Secondary Button',
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		size: 'sm',
		children: 'Outline Button',
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: 'sm',
		children: 'Ghost Button',
	},
};

export const WithIconButton: Story = {
	args: {
		prefix: '⬅️',
		suffix: '➡️',
		children: 'Prefix and Suffix',
	},
};
