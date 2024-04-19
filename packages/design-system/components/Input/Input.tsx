import { type InputHTMLAttributes, type Ref, forwardRef } from 'react';

import { Box } from '../Box';
import * as styles from './Input.css';

type OmitProps = 'size' | 'width' | 'height';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, OmitProps> {
	variant?: 'primary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	rounded?: boolean;
}

export const Input = forwardRef(
	(
		{ className, variant, size, rounded, ...restProps }: Props,
		ref?: Ref<HTMLInputElement>,
	) => {
		const inputStyle = styles.input({ variant, size, rounded });

		return <Box as='input' className={inputStyle} ref={ref} {...restProps} />;
	},
);
