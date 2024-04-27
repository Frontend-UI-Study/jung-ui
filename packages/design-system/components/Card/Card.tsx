'use client';

import { type HTMLAttributes, forwardRef } from 'react';
import { Box } from '../Box';

import { createContext, useContext } from 'react';
import type { OmitAtomProps } from '../../types/atoms';
import * as styles from './Card.css';
import { CardContent } from './CardBody';
import { CardDescription } from './CardDescription';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';
import { CardSubTitle } from './CardSubTitle';
import { CardTitle } from './CardTitle';
import type { Product } from './types/product';

const DEFAULT_VALUE: Product = {
	id: 0,
	title: '',
	subTitle: '',
	description: '',
};

const CardContext = createContext<Product | undefined>(DEFAULT_VALUE);

export const useCardContext = () => {
	const context = useContext(CardContext);
	if (!context) {
		throw Error('It should be rendered in Card component');
	}
	return context;
};

type Size = 'sm' | 'md' | 'lg';

export interface CardProps
	extends HTMLAttributes<HTMLDivElement>,
		OmitAtomProps {
	variant?: 'primary' | 'secondary' | 'outline';
	size?: Size;
	rounded?: boolean;
	product?: Product;
	layout?: 'horizontal' | 'stacked';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			product,
			fontSize,
			size,
			layout,
			variant,
			rounded,
			children,
			...restProps
		},
		ref,
	) => {
		const cardStyle = styles.card({ layout, variant, rounded, size });

		return (
			<CardContext.Provider value={product}>
				<Box
					as='div'
					className={cardStyle}
					width='fit'
					ref={ref}
					{...restProps}
				>
					{children}
				</Box>
			</CardContext.Provider>
		);
	},
);
const CardCompound = Object.assign(Card, {
	Header: CardHeader,
	Content: CardContent,
	Footer: CardFooter,
	Media: CardMedia,
	Title: CardTitle,
	SubTitle: CardSubTitle,
	Description: CardDescription,
});
export { CardCompound as Card };
