import { classNames, variationName } from '../../shared/utilities/StyleHelpers';
import { spinnerLarge, spinnerSmall } from '../../assets/icons';
import { ReactSVG } from 'react-svg';
import React from 'react';
import './Spinner.scss';

export type SpinnerColor = 'white' | 'green' | 'inkLightest';

export type SpinnerSize = 'small' | 'large';

export interface SpinnerProps {
	/**
	 * Color of spinner
	 * @default 'green'
	 */
	color?: SpinnerColor;
	/**
	 * Size of spinner
	 * @default 'large'
	 */
	size?: SpinnerSize;
}

export function Spinner({ size = 'large', color = 'green' }: SpinnerProps) {
	const className = classNames('Spinner', color && variationName('Spinner--color', color), size && variationName('Spinner--size', size));

	return (
		<div className={className}>
			<ReactSVG src={size === 'large' ? spinnerLarge : spinnerSmall} />
		</div>
	);
}
