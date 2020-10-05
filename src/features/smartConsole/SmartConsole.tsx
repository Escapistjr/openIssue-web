import React, { useEffect, useState } from 'react';
import { Button, Icon, Stack } from '../../elements';
import { Modal } from '../../elements/modal/Modal';
import { search } from '../../assets/icons';
import './SmartConsole.scss';

export const SmartConsole = () => {
	useEffect(() => {
		return () => {
			document.removeEventListener('keydown', handleSmartConsoleOpen, false);
		};
	});

	const handleSmartConsoleOpen = (e) => {
		if (e.key === 'Enter') {
			setShowSmartConsoleModal(true);
			document.removeEventListener('keydown', handleSmartConsoleOpen, false);
		}
	};

	document.addEventListener('keydown', handleSmartConsoleOpen, false);

	//#region SmartConsole Modal
	const [showSmartConsoleModal, setShowSmartConsoleModal] = useState(false);

	return (
		<Modal show={showSmartConsoleModal} onClose={() => setShowSmartConsoleModal(false)}>
			<div className='SmartConsole'>
				<Stack spacing='extraTight' alignment='center'>
					<Icon source={search} />
					<Stack.Item fill>
						<input type='text' className='SmartConsole--Input' placeholder='type / to see available commands' autoFocus />
					</Stack.Item>
					<Button size='slim' secondary colorTheme='green'>
						Create
					</Button>
				</Stack>
			</div>
		</Modal>
	);
};
