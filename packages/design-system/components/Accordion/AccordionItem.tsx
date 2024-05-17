import * as S from './AccordionItem.css';

import { type HTMLAttributes, forwardRef, useId } from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { AccordionItemContext } from './context/AccordionItemContext';

export interface AccordionItemProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	index?: number;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
	({ children, index, ...restProps }: AccordionItemProps, ref?) => {
		const id = useId();

		return (
			<AccordionItemContext.Provider value={{ index, id }}>
				<Box ref={ref} className={S.item} {...restProps}>
					{children}
				</Box>
			</AccordionItemContext.Provider>
		);
	},
);
