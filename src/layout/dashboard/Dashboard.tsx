import { Page, Stack } from '../../elements';
import { IssuePreview } from '../../features';
import React from 'react';
import './Dashboard.scss';

export const Dashboard = () => {
	return (
		<Page>
			<Stack alignment='baseline' spacing='extraTight'>
				<div>Dashboard view</div>
			</Stack>
			<IssuePreview title='test issue' status='open' modified='2 days ago' type='bug' issueKey='TYR-243' />
		</Page>
	);
};
