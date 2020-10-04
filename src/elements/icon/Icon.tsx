import { classNames, variationName } from '../../shared/utilities/StyleHelpers';
import { Color } from '../../shared/utilities/Types';
import { ReactSVG } from 'react-svg';
import React from 'react';
import './Icon.scss';

export type IconSize = 'base' | 'large';

export interface IconProps {
	source: string;
	size?: IconSize;
	color?: Color;
}

export const Icon = ({ source, size = 'base', color }: IconProps) => {
	return (
		<div
			className={classNames('Icon', size && size !== 'base' && variationName('Icon--', size), color && variationName('Icon--Color', color))}>
			<ReactSVG src={source} />
		</div>
	);
};
