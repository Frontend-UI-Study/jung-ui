import type { RefObject } from 'react';
import { useEffect } from 'react';

export function useOutsideClick(
	ref: RefObject<HTMLElement>,
	callback: () => void,
) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, callback]);
}
