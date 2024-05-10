import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';

// TODO: 타입 절대경로 지정하기

export interface CardFooterProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
	({ children, ...restProps }, ref) => {
		return (
			<Box
				as='div'
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				ref={ref}
				{...restProps}
			>
				{children}
			</Box>
		);
	},
);
