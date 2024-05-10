import * as S from './TabsContent.css';

import { type HTMLAttributes, forwardRef } from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useTabsContext } from './TabsContext';

export interface TabsContentProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	value: string;
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
	({ children, value, ...restProps }, ref?) => {
		const { currentTab } = useTabsContext();

		const isActive = currentTab === value;

		return (
			<Box ref={ref} {...restProps} className={S.content({ isActive })}>
				{children}
			</Box>
		);
	},
);
