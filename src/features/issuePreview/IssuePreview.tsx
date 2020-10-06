import { IssueStatuses, IssueTypes } from '../../shared/utilities/Types';
import { StatusDropdown, TypeDropdown } from '..';
import { Caption, Stack, Text } from '../../elements';
import './IssuePreview.scss';
import React from 'react';

export interface IssuePreviewProps {
	title: string;
	status: IssueStatuses;
	modified: string;
	type: IssueTypes;
	issueKey: string;
}

export const IssuePreview = ({ title, status, modified, type, issueKey }: IssuePreviewProps) => {
	return (
		<div className='IssuePreview'>
			<Stack alignment='center' distribution='fill'>
				<Stack.Item keepWidth>
					<TypeDropdown initialType={type} issueKey={issueKey} />
				</Stack.Item>
				<Stack distribution='equalSpacing' alignment='center'>
					<Text variation='subdued'>{title}</Text>
					<Text variation='subdued'>
						<Caption>{modified}</Caption>
					</Text>
				</Stack>
				<Stack.Item keepWidth>
					<StatusDropdown intialStatus={status} issueKey={issueKey} />
				</Stack.Item>
			</Stack>
		</div>
	);
};
