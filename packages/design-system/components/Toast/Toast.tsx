import React, { type HTMLAttributes } from 'react';
import * as S from './Toast.css';

import { Box } from '..';
import type { OmitAtomProps } from '../../types/atoms';

export interface ToastProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		OmitAtomProps {
	message: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
	({ message, className, ...restProps }, ref) => {
		return (
			<Box ref={ref} className={S.toast} {...restProps}>
				<Box as='p' color='white'>
					{message}
				</Box>
			</Box>
		);
	},
);
