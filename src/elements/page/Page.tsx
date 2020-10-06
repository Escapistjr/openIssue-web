import { classNames, variationName } from '../../shared/utilities/StyleHelpers';
import { Padding } from '../../shared/utilities/Types';
import React from 'react';
import './Page.scss';

export interface PageProps {
	/** Padding of the page.
	 * @default normal;
	 */
	padding?: Padding;

	/** Decreases the maximum layout width. Intended for single-column layouts */
	narrowWidth?: boolean;

	/** Fix for browsers collapsing margins of first child elements. @default true */
	marginFix?: boolean;

	children?: React.ReactNode;
}

export const Page = ({ padding, narrowWidth, marginFix, children }: PageProps) => {
	const className = classNames(
		'Page',
		padding && padding !== 'normal' && variationName('Page--padding', padding),
		marginFix && 'Page--marginFix',
		narrowWidth && 'Page--narrowWidth'
	);
	return <div className={className}>{children}</div>;
};
