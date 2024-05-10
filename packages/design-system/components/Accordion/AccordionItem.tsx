import * as S from './AccordionItem.css';

import { type HTMLAttributes, forwardRef, useMemo } from 'react';

import { useToggle } from '@jung/shared/hooks';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { AccoridonContext } from './context/AccordionContext';

export interface AccordionItemProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
	({ children, ...restProps }: AccordionItemProps, ref?) => {
		const { toggle, setToggle, handleToggle } = useToggle();

		const value = useMemo(
			() => ({ toggle, setToggle, handleToggle }),
			[handleToggle, setToggle, toggle],
		);
		return (
			<AccoridonContext.Provider value={value}>
				<Box ref={ref} className={S.item} {...restProps}>
					{children}
				</Box>
			</AccoridonContext.Provider>
		);
	},
);
