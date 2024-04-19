import { type Sprinkles, elementResets, sprinkles } from '../styles';

import clsx, { type ClassValue } from 'clsx';
import { omit, pick } from 'lodash';
export interface Atoms extends Sprinkles {
	reset?: keyof JSX.IntrinsicElements;
	className?: ClassValue;
}

const keys = Array.from(sprinkles.properties.keys());
export const extractAtoms = <P extends object>(props: P) => [
	pick(props, keys),
	omit(props, keys),
];

export function atoms(atoms: Atoms) {
	const { reset, className, ...rest } = atoms;
	const sprinklesClassNames = sprinkles(rest);

	return clsx(
		sprinklesClassNames,
		className,
		reset ? [elementResets[reset]] : null,
	);
}
