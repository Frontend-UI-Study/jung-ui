import * as S from './TabsTrigger.css';

import { type LiHTMLAttributes, forwardRef } from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { useTabsContext } from './TabsContext';

export interface TabsTriggerProps
	extends LiHTMLAttributes<HTMLLIElement>,
		OmitAtomProps {
	value: string;
}

export const TabsTrigger = forwardRef<HTMLLIElement, TabsTriggerProps>(
	({ children, value, ...restProps }, ref?) => {
		const { currentTab, setCurrentTab } = useTabsContext();
		const handleTabClick = () => {
			setCurrentTab(value);
		};

		const isActive = currentTab === value;

		return (
			<Box
				as='li'
				className={S.trigger({ isActive })}
				{...restProps}
				ref={ref}
				onClick={handleTabClick}
			>
				<Box as='h2' className={S.tab({ isActive })}>
					{children}
				</Box>
			</Box>
		);
	},
);
