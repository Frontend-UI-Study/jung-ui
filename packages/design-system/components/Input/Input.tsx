import { Box } from '../Box';

import { type InputHTMLAttributes, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import * as styles from './Input.css';

type OmitProps = 'size' | 'width' | 'height';

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, OmitProps>,
		OmitAtomProps {
	variant?: 'primary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	rounded?: boolean;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ variant, size, rounded, ...restProps }, ref) => {
		const inputStyle = styles.input({ variant, size, rounded });
		return <Box as='input' className={inputStyle} ref={ref} {...restProps} />;
	},
);
