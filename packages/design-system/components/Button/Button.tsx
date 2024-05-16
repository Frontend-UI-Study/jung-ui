import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import { Box } from '../Box';
import * as styles from './Button.css';

type OmitProps = 'prefix';

interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, OmitProps>,
		OmitAtomProps {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	rounded?: boolean;
	prefix?: ReactNode;
	suffix?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, size, rounded, prefix, suffix, children, ...restProps }, ref) => {
		const buttonStyle = styles.button({ variant, size, rounded });
		return (
			<Box
				as='button'
				display='flex'
				alignItems='center'
				columnGap='1'
				className={buttonStyle}
				ref={ref}
				{...restProps}
			>
				{prefix && <Box as='span'>{prefix}</Box>}
				{children}
				{suffix && <Box as='span'>{suffix}</Box>}
			</Box>
		);
	},
);
