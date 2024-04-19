import { Box } from '../Box';
import { button } from './Button.css';

import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from 'react';

interface Props
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	rounded?: boolean;
	prefix?: ReactNode;
	suffix?: ReactNode;
}

export const Button = forwardRef(
	(
		{ variant, size, rounded, prefix, suffix, children, ...restProps }: Props,
		ref?: React.Ref<HTMLButtonElement>,
	) => {
		const buttonStyle = button({ variant, size, rounded });

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
