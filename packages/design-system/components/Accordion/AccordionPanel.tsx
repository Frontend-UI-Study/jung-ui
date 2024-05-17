import { type HTMLAttributes, forwardRef, useRef } from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useAccordionItemContext } from './context/AccordionItemContext';

export interface AccordionPanelProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	title?: string;
}

export const AccordionPanel = forwardRef<HTMLDivElement, AccordionPanelProps>(
	({ children, title, ...restProps }: AccordionPanelProps, ref?) => {
		const panelRef = useRef<HTMLDivElement>(null);
		const { index, id } = useAccordionItemContext();
		const panelId = `${id}-panel-${index}`;

		return (
			<Box
				ref={panelRef || ref}
				{...restProps}
				role='region'
				aria-labelledby={panelId}
				aria-hidden={!restProps['aria-expanded']}
			>
				{title && (
					// FIXME: 나중에 Typography 컴포넌트로 변경
					<Box as='p' marginBottom='4' fontWeight='semibold'>
						{title}
					</Box>
				)}
				<Box as='p' marginBottom='4'>
					{children}
				</Box>
			</Box>
		);
	},
);
