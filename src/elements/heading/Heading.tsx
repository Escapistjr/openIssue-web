import { classNames } from '../../shared/utilities/StyleHelpers';
import React from 'react';
import './Heading.scss';

export type HeadingElements = 'h1' | 'h2' | 'p';

export interface HeadingProps {
	/**
	 * The element name to use for the heading
	 * @default 'h2'
	 */
	element?: HeadingElements;
	/** The content to display inside the heading */
	children?: React.ReactNode;
	/** Whether the heading shows negative value */
	negative?: boolean;
	color?: string;

	onClick?(): void;
}

/** Headings are used as the titles of each major section of a page in the interface.
 * ___
 * DO:
 * - Use headings to support the hierarchy and structure of the page.
 * ___
 * DO NOT:
 * - Use headings for style alone.
 * ___
 * Headings should:
 * - Clearly describe the section of interface they refer to
 * - Highlight the most important concept or piece of information merchants need to know
 * - Sit at the top of the section of interface they’re referring to */

export function Heading({ element: Element = 'h2', children, negative, color, onClick }: HeadingProps) {
	const className = classNames('Heading', negative && 'Heading--Negative');

	return (
		<Element onClick={onClick} className={className} style={{ color: color }}>
			{children}
		</Element>
	);
}
