import {
	Children,
	type HTMLAttributes,
	type ReactElement,
	cloneElement,
	forwardRef,
	isValidElement,
	useCallback,
	useMemo,
	useState,
} from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { AccordionContext } from './context/AccordionContext';

export interface AccordionProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	type?: 'single' | 'multiple';
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
	(
		{ type = 'single', children, className, ...restProps }: AccordionProps,
		ref?,
	) => {
		const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

		const handleToggleIndex = useCallback(
			(index: number) => {
				const newSet = new Set(openIndexes);
				if (type === 'multiple') {
					if (newSet.has(index)) {
						newSet.delete(index);
					} else {
						newSet.add(index);
					}
				} else if (type === 'single') {
					if (newSet.has(index)) {
						newSet.delete(index);
					} else {
						newSet.clear();
						newSet.add(index);
					}
				}

				setOpenIndexes(newSet);
			},
			[openIndexes, type],
		);

		const value = useMemo(
			() => ({ type, openIndexes, handleToggleIndex }),
			[type, openIndexes, handleToggleIndex],
		);

		return (
			<AccordionContext.Provider value={value}>
				<Box
					ref={ref}
					display='flex'
					flexDirection='column'
					rowGap='4'
					{...restProps}
				>
					{Children.map(children, (child, index) =>
						isValidElement(child)
							? cloneElement(child as ReactElement, { index: index + 1 })
							: child,
					)}
				</Box>
			</AccordionContext.Provider>
		);
	},
);
