import type { Meta, StoryObj } from '@storybook/react';

import { Menubar } from '@jung/design-system';

const meta: Meta<typeof Menubar> = {
	title: 'Components/Menubar',
	component: Menubar,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
	render: () => (
		<Menubar>
			<Menubar.Menu>
				<Menubar.Trigger>File</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>New Tab</Menubar.Item>
					<Menubar.Item>New Window</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Share</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Edit</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>Undo</Menubar.Item>
					<Menubar.Item>Redo</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar>
	),
};

export const Disabled: Story = {
	render: () => (
		<Menubar>
			<Menubar.Menu>
				<Menubar.Trigger>File</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>New Tab</Menubar.Item>
					<Menubar.Item>New Window</Menubar.Item>
					<Menubar.Item disabled>New Incongnito Window</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>hihi</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger>Edit</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>Undo</Menubar.Item>
					<Menubar.Item>Redo</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar>
	),
};
