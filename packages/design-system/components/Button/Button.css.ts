import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles/sprinkles.css';

export const button = recipe({
	base: [
		sprinkles({
			borderColor: 'primary',
			borderWidth: 'hairline',
			borderStyle: 'solid',
		}),
	],
	variants: {
		variant: {
			primary: sprinkles({
				border: 'none',
				background: {
					base: 'primary',
					hover: 'primary100',
				},
				color: 'white',
			}),
			secondary: sprinkles({
				border: 'none',
				background: {
					base: 'secondary',
					hover: 'blue',
				},
				color: 'white',
			}),
			outline: sprinkles({
				background: {
					base: 'transparent',
					hover: 'primary',
				},
				color: {
					base: 'primary',
					hover: 'white',
				},
			}),
			ghost: sprinkles({
				border: 'none',
				background: {
					base: 'transparent',
					hover: 'primary',
				},
				color: {
					base: 'primary',
					hover: 'white',
				},
			}),
		},
		size: {
			sm: sprinkles({
				paddingX: '2.5',
				paddingY: '1.5',
			}),
			md: sprinkles({
				paddingX: '3',
				paddingY: '2',
			}),
			lg: sprinkles({
				paddingX: '3.5',
				paddingY: '2.5',
			}),
		},
		rounded: {
			true: sprinkles({
				borderRadius: '2xl',
			}),
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'sm',
		rounded: false,
	},
});
