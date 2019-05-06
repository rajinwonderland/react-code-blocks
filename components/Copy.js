import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const CopyIcon = ({ size, color, ...props }) => (
	<svg {...props} viewBox="0 0 448 512" width={size} height={size} fill={color}>
		<path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" />
	</svg>
);

CopyIcon.displayName = 'CopyIcon';

CopyIcon.defaultProps = {
	size: 24,
	color: 'currentcolor'
};

export default class CopyButton extends React.Component {
	static propTypes = {
		/**
		 * Provide a description for the icon representing the copy action that can
		 * be read by screen readers
		 */
		iconDescription: PropTypes.string,

		/**
		 * Specify the string that is displayed when the button is clicked and the
		 * content is copied
		 */
		feedback: PropTypes.string,

		/**
		 * Specify the time it takes for the feedback message to timeout
		 */
		feedbackTimeout: PropTypes.number,

		/**
		 * Specify an optional `onClick` handler that is called when the underlying
		 * <button> is clicked
		 */
		onClick: PropTypes.func
	};

	static defaultProps = {
		iconDescription: 'Copy to clipboard',
		feedback: 'Copied!',
		feedbackTimeout: 2000,
		color: 'black',
		background: 'transparent',
		onClick: () => {}
	};

	/* istanbul ignore next */
	componentWillUnmount() {
		if (typeof this.timeoutId !== 'undefined') {
			clearTimeout(this.timeoutId);
			delete this.timeoutId;
		}
	}
	render() {
		const {
			iconDescription,
			feedback,
			color,
			background,
			feedbackTimeout,
			onClick,
			...other
		} = this.props;
		const classNames =
			'w-4 h-4 flex flex-wrap items-center justify-center outline-none';

		return (
			<button
				type="button"
				style={{
					background
				}}
				className={classNames}
				onClick={this.handleClick}
				data-tip={feedback}
				data-event="click focus"
				data-delay-hide={feedbackTimeout}
				title={iconDescription}
				{...other}>
				<CopyIcon
					className={`w-4 h-4`}
					color={color}
					aria-label={iconDescription}
				/>
				<ReactTooltip />
			</button>
		);
	}
}
