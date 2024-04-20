import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@jung/design-system';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		variant: {
			options: ['primary', 'outline', 'ghost'],
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		placeholder: 'primary',
		size: 'sm',
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		placeholder: 'outline',
		size: 'sm',
	},
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		placeholder: 'ghost',
		size: 'sm',
	},
};
