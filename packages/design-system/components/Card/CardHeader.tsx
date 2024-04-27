import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';

// TODO: 타입 절대경로 지정하기

export interface CardHeaderProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ children, ...restProps }, ref) => {
		return (
			<Box as='div' display='flex' alignItems='center' ref={ref} {...restProps}>
				{children}
			</Box>
		);
	},
);
