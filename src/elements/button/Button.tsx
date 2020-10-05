import { classNames, variationName } from '../../shared/utilities/StyleHelpers';
import { Icon, Spinner } from '..';
import React from 'react';
import './Button.scss';

export type ButtonSize = 'mini' | 'slim' | 'base' | 'large';
export type IconAlign = 'left' | 'right';
export type ButtonColorTheme = 'red' | 'blue' | 'pink' | 'purple' | 'indigo' | 'cyan' | 'orange' | 'green' | 'yellow';

export interface ButtonProps {
	/** The content to display inside the button */
	children?: string | string[];
	/** A destination to link to, rendered in the href attribute of a link */
	url?: string;
	/** A unique identifier for the button */
	id?: string;
	/** Provides extra visual weight and identifies the primary action in a set of buttons */
	primary?: boolean;
	/** Provides soft visual weight and identifies the supporting action in a set of buttons */
	secondary?: boolean;
	/** Indicates a dangerous or potentially negative action */
	destructive?: boolean;
	/** Disables the button, disallowing merchant interaction */
	disabled?: boolean;
	/** Replaces button text with a spinner while a background action is being performed */
	loading?: boolean;
	/**
	 * Changes the size of the button, giving it more or less padding
	 * @default 'base'
	 */
	size?: ButtonSize;
	icon?: string;
	iconAlign?: IconAlign;
	/** Gives the button a subtle alternative to the default button styling, appropriate for certain backdrops */
	outline?: boolean;
	/** Allows the button to grow to the width of its container */
	fullWidth?: boolean;
	/** Allows the button to submit a form */
	submit?: boolean;
	/** Renders a button that looks like a link */
	plain?: boolean;
	/** Color of the button text and border if applicable */
	colorTheme?: ButtonColorTheme;
	/** Forces url to open in a new tab */
	external?: boolean;
	/** Callback when clicked */
	onClick?(e: any): void;
}

export const Button = ({
	iconAlign = 'right',
	size = 'base',
	destructive,
	colorTheme,
	secondary,
	fullWidth,
	children,
	disabled,
	external,
	primary,
	loading,
	outline,
	onClick,
	submit,
	plain,
	icon,
	url,
	id,
}: ButtonProps) => {
	const isDisabled = disabled || loading;
	const className = classNames(
		'Button',
		primary && 'Button--Primary',
		secondary && 'Button--Secondary',
		outline && 'Button--Outline',
		destructive && 'Button--Destructive',
		isDisabled && 'Button--Disabled',
		loading && 'Button--Loading',
		plain && 'Button--Plain',
		size && variationName('Button--Size-', size),
		fullWidth && 'Button--FullWidth',
		icon && children === null && 'Button--IconOnly',
		!primary && !secondary && !outline && !destructive && !plain && 'Button--Default',
		colorTheme && variationName('Button--ColorTheme-', colorTheme)
	);

	let iconMarkup;
	if (icon && !loading) {
		iconMarkup = (
			<div className={classNames('Button--Icon', children && variationName('Button--Icon-Align', iconAlign))}>
				<Icon source={icon} />
			</div>
		);
	}

	const childMarkup = children && !loading ? <span className={classNames('Button--Text')}>{children}</span> : null;
	const type = submit ? 'submit' : 'button';

	const spinnerColor = primary || destructive ? 'white' : 'inkLightest';

	const spinnerSVGMarkup = loading ? (
		<span className={classNames('Button--Spinner')}>
			<Spinner size='small' color={spinnerColor} />
		</span>
	) : null;

	const content = iconMarkup ? (
		<span className={classNames('Button--Content')}>
			{spinnerSVGMarkup}
			{iconAlign === 'left' && iconMarkup}
			{childMarkup}
			{iconAlign === 'right' && iconMarkup}
		</span>
	) : (
		<span className={classNames('Button--Content')}>
			{spinnerSVGMarkup}
			{childMarkup}
		</span>
	);

	return (
		<button id={id} type={type} onClick={onClick} className={className} disabled={isDisabled}>
			{content}
		</button>
	);
};
