import { classNames, variationName } from '../../shared/utilities/StyleHelpers';
import { Variation } from '../../shared/utilities/Types';
import React from 'react';
import './Text.scss';

export interface TextProps {
	variation?: Variation;
	children?: React.ReactNode;
}

export const Text = ({ variation, children }: TextProps) => {
	const className = classNames('Text', variation && variationName('Text--Style-', variation));
	return <p className={className}>{children}</p>;
};
