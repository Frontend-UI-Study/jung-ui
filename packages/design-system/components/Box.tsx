import { type ElementType, type HTMLAttributes, forwardRef } from 'react';
import { type Atoms, atoms, extractAtoms } from '../utils/atoms';

type HTMLProperties = Omit<
	HTMLAttributes<HTMLElement>,
	'as' | 'className' | 'color' | 'height' | 'width' | 'size'
>;

export type BoxProps = HTMLAttributes<HTMLElement> &
	HTMLProperties &
	Atoms & {
		as?: ElementType;
	};

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
	const { as, ...restProps } = props;
	const [atomsProps, propsToForward] = extractAtoms(restProps);
	const Component: ElementType = as || 'div';
	const className = atoms({
		className: propsToForward?.className,
		reset: typeof Component === 'string' ? Component : 'div',
		...atomsProps,
	});

	return <Component {...propsToForward} className={className} ref={ref} />;
});
