import * as S from './AccordionTrigger.css';

import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '../../assets/icons';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useAccordionContext } from './context/AccordionContext';
import { useAccordionItemContext } from './context/AccordionItemContext';

export interface AccordionTriggerProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps<'top'> {
	top?: ReactNode;
}

export const AccordionTrigger = forwardRef<
	HTMLDivElement,
	AccordionTriggerProps
>(({ children, top, ...restProps }: AccordionTriggerProps, ref?) => {
	const { openIndexes, handleToggleIndex } = useAccordionContext();
	const { index, id } = useAccordionItemContext();
	const isOpen = openIndexes.has(index!);

	return (
		<Box
			ref={ref}
			className={S.trigger}
			onClick={() => handleToggleIndex(index!)}
			role='button'
			id={id}
			aria-expanded={isOpen}
			aria-controls={id}
			{...restProps}
		>
			<Box display='flex' flexDirection='column' rowGap='5'>
				{top && top}
				<Box as='p'>{children}</Box>
			</Box>
			<Box className={S.arrow}>
				{isOpen ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
			</Box>
		</Box>
	);
});
