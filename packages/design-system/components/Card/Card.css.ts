import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles/sprinkles.css';

export const card = recipe({
	base: [sprinkles({})],

	variants: {
		layout: {
			stacked: sprinkles({
				display: 'flex',
				flexDirection: 'column',
				rowGap: '2',
			}),
			horizontal: sprinkles({
				display: 'flex',
				alignItems: 'center',
				columnGap: '2',
			}),
		},
		variant: {
			primary: [
				sprinkles({
					boxShadow: 'tertiary',
				}),
			],
			secondary: sprinkles({
				background: 'primary',
				color: 'white',
			}),
			outline: sprinkles({
				borderColor: 'primary',
				borderWidth: 'hairline',
				borderStyle: 'solid',
			}),
		},
		size: {
			sm: style([sprinkles({})]),
			md: style([sprinkles({ padding: '4' })]),
			lg: style([sprinkles({ padding: '8' })]),
		},
		rounded: {
			true: sprinkles({
				borderRadius: '2xl',
			}),
		},
	},
	defaultVariants: {
		layout: 'stacked',
		variant: 'primary',
		size: 'sm',
		rounded: false,
	},
});
