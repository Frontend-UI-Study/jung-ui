import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@jung/design-system';

const meta: Meta<typeof Tabs> = {
	title: 'Components/Tabs',
	component: Tabs,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: () => (
		<Tabs defaultValue='menu1' style={{ width: '375px' }}>
			<Tabs.List>
				<Tabs.Trigger value='menu1'>메뉴 1</Tabs.Trigger>
				<Tabs.Trigger value='menu2'>메뉴 2</Tabs.Trigger>
				<Tabs.Trigger value='menu3'>메뉴 3</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value='menu1'>메뉴 1 컨텐츠</Tabs.Content>
			<Tabs.Content value='menu2'>메뉴 2 컨텐츠</Tabs.Content>
			<Tabs.Content value='menu3'>메뉴 3 컨텐츠</Tabs.Content>
		</Tabs>
	),
};
