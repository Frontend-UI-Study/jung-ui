import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const trigger = recipe({
	base: style([
		sprinkles({
			padding: '1',

			width: 'full',
			cursor: 'pointer',
		}),
	]),
	variants: {
		isActive: {
			true: {
				borderBottom: '2px solid',
			},
			false: {
				borderBottom: '0.5px solid #C9C9C9',
			},
		},
	},
});

export const tab = recipe({
	base: sprinkles({
		marginBottom: '1',
		marginX: 'auto',
		fontWeight: 'semibold',
	}),
	variants: {
		isActive: {
			true: sprinkles({
				color: 'black',
			}),
			false: sprinkles({
				color: 'gray400',
			}),
		},
	},
});
