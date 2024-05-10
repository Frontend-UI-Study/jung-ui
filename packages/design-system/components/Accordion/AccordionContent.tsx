import * as S from './AccordionContent.css';

import { Children, type HTMLAttributes, forwardRef, useRef } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useBeforeMatch } from '@jung/shared/hooks';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useAccordionContext } from './context/AccordionContext';
import { useExpandableHeight } from './hooks/useExpandableHeight';

export interface AccordionContentProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	HIDDEN?: string;
}

export const AccordionContent = forwardRef<
	HTMLDivElement,
	AccordionContentProps
>(({ className, children, ...restProps }: AccordionContentProps, ref?) => {
	const { toggle, handleToggle } = useAccordionContext();
	const contentRef = useRef<HTMLDivElement>(null);
	useBeforeMatch<HTMLDivElement>(contentRef, handleToggle);
	const contentHeight = useExpandableHeight<HTMLDivElement>(contentRef, toggle);

	return (
		<Box
			ref={contentRef || ref}
			style={assignInlineVars({
				[S.contentHeightVar]: `${contentHeight + 1}px`,
			})}
			className={S.content}
			HIDDEN={toggle ? undefined : 'until-found'}
			{...restProps}
		>
			{Children.map(children, (child, index) => (
				<div key={index} className={S.contentChild}>
					{child}
				</div>
			))}
		</Box>
	);
});
