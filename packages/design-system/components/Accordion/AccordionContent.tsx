import * as S from './AccordionContent.css';

import { Children, type HTMLAttributes, forwardRef, useRef } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useBeforeMatch } from '@jung/shared/hooks';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useAccordionContext } from './context/AccordionContext';
import { useAccordionItemContext } from './context/AccordionItemContext';
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
	const { openIndexes, handleToggleIndex } = useAccordionContext();
	const { index, id } = useAccordionItemContext();
	const isOpen = openIndexes.has(index!);

	const contentRef = useRef<HTMLDivElement>(null);
	useBeforeMatch<HTMLDivElement>(contentRef, () => handleToggleIndex(index!));
	const contentHeight = useExpandableHeight<HTMLDivElement>(contentRef, isOpen);

	return (
		<Box
			style={assignInlineVars({
				[S.contentHeightVar]: `${contentHeight}px`,
			})}
			className={S.content({ isOpen })}
			ref={contentRef || ref}
			HIDDEN={isOpen ? undefined : 'until-found'}
			role='region'
			aria-labelledby={id}
			tabIndex={isOpen ? 0 : -1}
			id={`${id}-content`}
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
