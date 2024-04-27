// Card.stories.tsx
import { Button, Card, type CardProps } from '@jung/design-system';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'outline'],
			control: { type: 'select' },
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: { type: 'select' },
		},
		layout: {
			options: ['stacked', 'horizontal'],
			control: { type: 'select' },
		},
		rounded: {
			options: [true, false],
			control: { type: 'select' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Card>;

const product = {
	id: 1,
	title: 'Card Title',
	subTitle: 'Card SubTitle',
	description: 'Card Description',
};

const renderCard = (
	args: Partial<CardProps & React.RefAttributes<HTMLDivElement>>,
) => (
	<Card product={product} {...args}>
		<Card.Header>
			<Card.Title />
		</Card.Header>
		<Card.Media>
			<img
				src='https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='card img'
			/>
		</Card.Media>
		<Card.Content>
			<Card.SubTitle />
			<Card.Description />
		</Card.Content>
		<Card.Footer>
			<Button>Button</Button>
		</Card.Footer>
	</Card>
);

export const Primary: Story = {
	args: {
		variant: 'primary',
		layout: 'stacked',
		size: 'sm',
	},
	render: renderCard,
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		layout: 'stacked',
		size: 'sm',
	},
	render: renderCard,
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		layout: 'stacked',
		size: 'sm',
	},
	render: renderCard,
};

export const Small: Story = {
	render: renderCard,
	args: {
		variant: 'primary',
		layout: 'stacked',
		size: 'sm',
	},
};

export const Medium: Story = {
	render: renderCard,
	args: {
		variant: 'primary',
		layout: 'stacked',
		size: 'md',
	},
};

export const Large: Story = {
	render: renderCard,
	args: {
		variant: 'primary',
		layout: 'stacked',
		size: 'lg',
	},
};

export const Horizontal: Story = {
	render: renderCard,
	args: {
		variant: 'primary',
		layout: 'horizontal',
		size: 'sm',
	},
};
