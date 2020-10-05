import { Modal } from '../../elements/modal/Modal';
import React, { useEffect, useState } from 'react';
import './ConsoleInput.scss';
import { Button, Icon, Stack } from '../../elements';
import { search } from '../../assets/icons';

export const ConsoleInput = () => {
	useEffect(() => {
		return () => {
			document.removeEventListener('keydown', handleConsoleInputOpen, false);
		};
	});

	const handleConsoleInputOpen = (e) => {
		if (e.key === 'Enter') {
			setShowConsoleInputModal(true);
			document.removeEventListener('keydown', handleConsoleInputOpen, false);
		}
	};

	document.addEventListener('keydown', handleConsoleInputOpen, false);

	//#region ConsoleInput Modal
	const [showConsoleInputModal, setShowConsoleInputModal] = useState(false);

	return (
		<Modal show={showConsoleInputModal} onClose={() => setShowConsoleInputModal(false)}>
			<div className='ConsoleInput'>
				<Stack spacing='extraTight' alignment='center'>
					<Icon source={search} />
					<Stack.Item fill>
						<input type='text' className='ConsoleInput--Input' placeholder='type / to see available commands' />
					</Stack.Item>
					<Button size='slim' secondary colorTheme='green'>
						Create
					</Button>
				</Stack>
			</div>
		</Modal>
	);
};
