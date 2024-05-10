import * as S from './AccordionTrigger.css';

import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '../../assets/icons';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useAccordionContext } from './context/AccordionContext';

export interface AccordionTriggerProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps<'top'> {
	top?: ReactNode;
}

export const AccordionTrigger = forwardRef<
	HTMLDivElement,
	AccordionTriggerProps
>(({ children, top, ...restProps }: AccordionTriggerProps, ref?) => {
	const { toggle, handleToggle } = useAccordionContext();

	return (
		<Box
			ref={ref}
			className={S.trigger}
			onClick={handleToggle}
			role='button'
			{...restProps}
		>
			<Box display='flex' flexDirection='column' rowGap='5'>
				{top && top}
				<Box as='p'>{children}</Box>
			</Box>
			<Box className={S.arrow}>
				{toggle ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
			</Box>
		</Box>
	);
});
