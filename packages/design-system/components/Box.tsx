import { type HTMLAttributes, forwardRef } from 'react';
import { type Atoms, atoms, extractAtoms } from '../utils/atoms';

type HTMLProperties = Omit<
	React.AllHTMLAttributes<HTMLElement>,
	'as' | 'className' | 'color' | 'height' | 'width' | 'size'
>;

type BoxProps = HTMLAttributes<HTMLElement> &
	HTMLProperties &
	Atoms & {
		as?: React.ElementType;
	};

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
	const { as: Component = 'div', ...other } = props;
	const [atomsProps, propsToForward] = extractAtoms(other);
	const className = atoms({
		className: propsToForward?.className,
		reset: typeof Component === 'string' ? Component : 'div',
		...atomsProps,
	});

	return <Component {...propsToForward} className={className} ref={ref} />;
});
