import { Accordion, type AccordionProps } from '@jung/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		type: {
			options: ['single', 'multiple'],
			control: { type: 'select' },
		},
	},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

const Template = (args: AccordionProps) => (
	<Accordion type={args.type} style={{ width: '375px' }} {...args}>
		<Accordion.Item>
			<Accordion.Trigger top={<div>AccordionTrigger</div>}>
				What is the Virtual DOM and how does it work in React?
			</Accordion.Trigger>
			<Accordion.Content>
				<Accordion.Panel title='Answer'>
					The Virtual DOM is a lightweight copy of the actual DOM used by React
					to optimize the update process.
				</Accordion.Panel>
				<Accordion.Panel title='Answer2'>
					By rendering a virtual representation of the UI, React can minimize
					direct DOM manipulations and improve performance.
				</Accordion.Panel>
			</Accordion.Content>
			<Accordion.Content>
				<Accordion.Panel title='Follow-up Question 2'>
					What are the benefits of using the Virtual DOM compared to direct DOM
					manipulation?
				</Accordion.Panel>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item>
			<Accordion.Trigger top={<div>Answered 2023.07.19 | Delete</div>}>
				Can you explain the difference between `var`, `let`, and `const` in
				JavaScript?
			</Accordion.Trigger>
			<Accordion.Content>
				<Accordion.Panel>
					`var` is function-scoped, while `let` and `const` are block-scoped.
				</Accordion.Panel>
			</Accordion.Content>
		</Accordion.Item>
		<Accordion.Item>
			<Accordion.Trigger top={<div>Answered 2023.07.19 | Delete</div>}>
				Can you explain the difference between `var`, `let`, and `const` in
				JavaScript?
			</Accordion.Trigger>
			<Accordion.Content>
				<Accordion.Panel>
					`var` is function-scoped, while `let` and `const` are block-scoped.
				</Accordion.Panel>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion>
);

export const Default: Story = {
	render: (args) => <Template {...args} type='single' />,
};

export const Multiple: Story = {
	render: (args) => <Template {...args} type='multiple' />,
};
