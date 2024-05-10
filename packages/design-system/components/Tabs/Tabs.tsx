import { type HTMLAttributes, forwardRef, useMemo, useState } from 'react';

import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import { TabsContext } from './TabsContext';

export interface TabsProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	defaultValue?: string | number;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
	({ children, defaultValue, ...restProps }, ref) => {
		const [currentTab, setCurrentTab] = useState(defaultValue);
		const contextValue = useMemo(
			() => ({
				currentTab,
				setCurrentTab,
			}),
			[currentTab],
		);

		return (
			<TabsContext.Provider value={contextValue}>
				<Box ref={ref} {...restProps}>
					{children}
				</Box>
			</TabsContext.Provider>
		);
	},
);
