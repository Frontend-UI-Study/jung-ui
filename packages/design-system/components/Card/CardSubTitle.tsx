import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useCardContext } from './Card';

// TODO: 타입 절대경로 지정하기

export interface CardSubTitleProps
	extends HTMLAttributes<HTMLHeadingElement>,
		OmitAtomProps {}

export const CardSubTitle = forwardRef<HTMLHeadingElement, CardSubTitleProps>(
	({ children, ...restProps }, ref) => {
		const { subTitle } = useCardContext();
		return (
			<Box as='h2' ref={ref} {...restProps}>
				{subTitle}
				{children}
			</Box>
		);
	},
);
