import { Button, Stack } from '../../elements';
import { IssuePreview } from '../../features';
import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<div>
			<Stack padding='medium' alignment='baseline' spacing='extraTight'>
				<Button plain>Test</Button>
				<div>Dashboard view</div>
			</Stack>
			<IssuePreview title='test issue' status='open' modified='2 days ago' type='Bug' />
		</div>
	);
};
