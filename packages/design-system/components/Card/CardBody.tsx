import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';

// TODO: 타입 절대경로 지정하기

export interface CardContentProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	({ children, ...restProps }, ref) => {
		return (
			<Box as='div' ref={ref} {...restProps}>
				{children}
			</Box>
		);
	},
);
