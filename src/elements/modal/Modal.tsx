import { classNames } from '../../shared/utilities/StyleHelpers';
import { capitalize } from '../../shared/utilities/Utils';
import React, { useState, useEffect } from 'react';
import { cancel } from '../../assets/icons';
import { Button } from '..';
import './Modal.scss';

export type ModalSizeTypes = 'small' | 'medium' | 'large';

export interface ModalProps {
	/** Elements to display inside stack */
	children?: React.ReactNode;
	/** Determines wether the modal is active or not */
	show: boolean;
	/** Determines the size of the modal */
	size?: ModalSizeTypes;
	/** Function to close modal */
	onClose?(): void;
	showCloseIcon?: boolean;
}

export const Modal = ({ size = 'medium', children, onClose, show, showCloseIcon = false }: ModalProps) => {
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

	const closeIcon = showCloseIcon ? (
		<div className='Modal--CloseIcon'>
			<Button icon={cancel} size='slim' plain onClick={() => onClose()} />
		</div>
	) : null;

	return shouldRender ? (
		<div
			className={classNames('Modal', `Modal--${capitalize(size)}`)}
			style={{
				animation: `${
					show ? 'fade-in 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both' : 'fade-out 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
				}`,
			}}>
			<div className='Modal--Backdrop' onClick={onClose}></div>
			<div
				className='Modal--Dialog'
				style={{
					animation: `${
						show
							? 'slide-top 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both'
							: 'slide-bottom 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
					}`,
				}}
				onAnimationEnd={onAnimationEnd}>
				{closeIcon}
				{children}
			</div>
		</div>
	) : null;
};
