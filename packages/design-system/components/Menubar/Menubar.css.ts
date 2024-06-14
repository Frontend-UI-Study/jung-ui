import { createVar } from '@vanilla-extract/css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

export const menubar = style([
	{
		border: '1px solid #ccc',
	},
	sprinkles({
		width: 'fit',
		display: 'flex',
		columnGap: '1',
		alignItems: 'center',
		borderRadius: 'md',
		padding: '1',
	}),
]);

export const trigger = recipe({
	base: sprinkles({
		paddingX: '2',
		paddingY: '1',
	}),
	variants: {
		isActive: {
			true: sprinkles({ background: 'gray100' }),
			false: sprinkles({ background: 'transparent' }),
		},
	},
});

export const topVar = createVar();
export const leftVar = createVar();

export const content = style([
	{
		border: '1px solid #ccc',
		top: topVar,
		left: leftVar,
	},
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		borderRadius: 'md',
		position: 'absolute',
		zIndex: '100',
		paddingY: '0.5',
	}),
]);

// export const item = sprinkles({
// 	background: {
// 		hover: 'gray100',
// 	},

// 	paddingX: '1',
// });

export const item = recipe({
	base: sprinkles({
		paddingX: '1',
		paddingY: '2',
	}),
	variants: {
		disabled: {
			true: sprinkles({ color: 'gray200' }),
			false: sprinkles({ background: { hover: 'gray100' } }),
		},
	},
});
