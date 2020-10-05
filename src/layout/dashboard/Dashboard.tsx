import { arrowLeft } from '../../assets/icons';
import { Button, Stack } from '../../elements';
import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<div>
			<Stack padding='medium' alignment='baseline' spacing='extraTight'>
				<Button plain>Test</Button>
				<div>Dashboard view</div>
			</Stack>
		</div>
	);
};
