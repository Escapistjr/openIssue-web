import { arrowLeft } from '../../assets/icons';
import { Button, Stack } from '../../elements';
import React, { useState } from 'react';
import './Dashboard.scss';
import { Modal } from '../../elements/modal/Modal';

export const Dashboard = () => {
	//#region Pulse Modal
	const [showPulseModal, setShowPulseModal] = useState(false);

	return (
		<div>
			<Stack padding='medium' alignment='baseline' spacing='extraTight'>
				<Button plain onClick={() => setShowPulseModal(true)}>
					Test
				</Button>
				<div>Dashboard view</div>
			</Stack>

			<Modal show={showPulseModal} onClose={() => setShowPulseModal(false)}>
				test
			</Modal>
		</div>
	);
};
