import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import * as styles from './CardMedia.css';

// TODO: 타입 절대경로 지정하기

export interface CardMediaProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(
	({ children, ...restProps }, ref) => {
		return (
			<Box as='div' className={styles.cardMedia} ref={ref} {...restProps}>
				{children}
			</Box>
		);
	},
);
