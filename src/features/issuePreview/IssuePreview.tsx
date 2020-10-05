import { IssueStatusTypes, IssueType } from '../../shared/utilities/Types';
import { Stack, StatusDropdown } from '../../elements';
import './IssuePreview.scss';
import React from 'react';

export interface IssuePreviewProps {
	title: string;
	status: IssueStatusTypes;
	modified: string;
	type: IssueType;
}

export const IssuePreview = ({ title, status, modified, type }: IssuePreviewProps) => {
	return (
		<div>
			<Stack alignment='center'>
				<div className='IssuePreview--ColorStrip' />
				<div>{title}</div>
				<StatusDropdown intialStatus={status} />
			</Stack>
		</div>
	);
};
