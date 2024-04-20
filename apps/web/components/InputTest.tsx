import { Button, Input } from '@jung/design-system';

const InputTest = () => {
	return (
		<>
			<Input placeholder='primary' variant='primary' padding='10' color='red' />
			<Input placeholder='outline' variant='outline' />
			<Input placeholder='ghost' variant='ghost' />
			<Button padding='20'>hihi</Button>
		</>
	);
};

export default InputTest;
