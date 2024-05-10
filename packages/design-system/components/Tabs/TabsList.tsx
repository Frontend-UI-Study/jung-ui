import {
	Children,
	type HTMLAttributes,
	forwardRef,
	isValidElement,
	useEffect,
} from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useTabsContext } from './TabsContext';

export interface TabsListProps
	extends HTMLAttributes<HTMLUListElement>,
		OmitAtomProps {}

export const TabsList = forwardRef<HTMLUListElement, TabsListProps>(
	({ children, className, ...restProps }, ref?) => {
		const { currentTab, setCurrentTab } = useTabsContext();

		useEffect(() => {
			if (currentTab === undefined) {
				const firstChild = Children.toArray(children)[0];
				if (isValidElement(firstChild) && firstChild.props.value) {
					setCurrentTab(firstChild.props.value);
				}
			}
		}, [currentTab, children, setCurrentTab]);

		return (
			<Box as='ul' display='flex' alignItems='center' ref={ref} {...restProps}>
				{children}
			</Box>
		);
	},
);
