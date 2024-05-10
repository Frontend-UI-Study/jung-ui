import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useCardContext } from './Card';

// TODO: 타입 절대경로 지정하기

export interface CardTitleProps
	extends HTMLAttributes<HTMLHeadingElement>,
		OmitAtomProps {}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
	({ children, ...restProps }, ref) => {
		const { title } = useCardContext();
		return (
			<Box as='h1' ref={ref} {...restProps}>
				{title}
				{children}
			</Box>
		);
	},
);
