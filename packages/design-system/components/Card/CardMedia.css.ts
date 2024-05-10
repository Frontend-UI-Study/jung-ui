import { globalStyle, style } from '@vanilla-extract/css';

import { sprinkles } from '../../styles/sprinkles.css';

export const cardMedia = style([
	sprinkles({}),
	{
		maxWidth: '300px',
	},
]);

globalStyle(`${cardMedia} img`, {
	maxInlineSize: '100%',
	blockSize: 'auto',
	objectFit: 'cover',
});
