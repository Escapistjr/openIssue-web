import React from 'react';
import { classNames } from '../../shared/utilities/StyleHelpers';
import './Caption.scss';

export interface CaptionProps {
	children?: React.ReactNode;
}

/** Caption text size is smaller than the recommended size for general reading. It should be used only in a graph or as a timestamp for a list item.
 * ___
 * BEST PRACTICES:
 * - Use for secondary labels in graphs and charts
 * - May be used for timestamps in lists of content
 * - Don’t use this component for other cases
 * - Don’t use this component for text longer than a few words
 * - Don’t use this component for aesthetic effect or to break from the standard text size */
export function Caption({ children }: CaptionProps) {
	const className = classNames('Caption');
	return <span className={className}>{children}</span>;
}
