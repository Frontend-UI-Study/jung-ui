import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
	const [toggle, setToggle] = useState(initialState);

	const handleToggle = useCallback(() => {
		setToggle((prev) => !prev);
	}, []);

	return { toggle, setToggle, handleToggle };
};
