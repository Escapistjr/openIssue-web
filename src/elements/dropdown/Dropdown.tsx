import './Dropdown.scss';
import React, { ReactNode, useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { Padding } from '../../shared/utilities/Types';
import { classNames, variationName } from '../../shared/utilities/StyleHelpers';

export interface DropdownProps {
	/** Elements to display inside dropdown */
	children?: ReactNode;
	/** Determines wether the dropdown is active or not */
	show: boolean;
	/** Function to close dropdown */
	onClose?(): void;
	padding?: Padding;
	/** Determines wether the dropdown sould have animations or not
	 * @default true
	 */
	animate?: boolean;
}

export const Dropdown = ({ children, show, onClose, padding = 'normal', animate = true }: DropdownProps) => {
	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) setRender(true);
	}, [show]);

	useEffect(() => {
		return () => {
			document.removeEventListener('keydown', handleEscClose, false);
		};
	});

	const onAnimationEnd = () => {
		if (!show) setRender(false);
	};

	const handleEscClose = (e) => {
		if (e.key === 'Escape') {
			onClose();
			document.removeEventListener('keydown', handleEscClose, false);
		}
	};

	document.addEventListener('keydown', handleEscClose, false);

	return shouldRender ? (
		<ClickAwayListener onClickAway={onClose}>
			<div
				className={classNames('Dropdown', padding && variationName('Dropdown--Padding-', padding), animate && 'Dropdown--Animate')}
				onAnimationEnd={onAnimationEnd}>
				{children}
			</div>
		</ClickAwayListener>
	) : null;
};
