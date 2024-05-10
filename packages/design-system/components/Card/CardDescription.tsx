import { type HTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useCardContext } from './Card';

// TODO: 타입 절대경로 지정하기

export interface CardDescriptionProps
	extends HTMLAttributes<HTMLParagraphElement>,
		OmitAtomProps {}

export const CardDescription = forwardRef<
	HTMLParagraphElement,
	CardDescriptionProps
>(({ children, ...restProps }, ref) => {
	const { description } = useCardContext();
	return (
		<Box as='p' ref={ref} {...restProps}>
			{description}
			{children}
		</Box>
	);
});
