import React from 'react';
import PropTypes from 'prop-types';

const Showpad = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M24 12V11.66l-.03-.24a5.48 5.48 0 0 0-4.88-4.89l-.24-.01h-.05l-.27-.01a5.45 5.45 0 0 0-3.88 1.6L12.8 9.97l1.35 1.36 1.35-1.35h-.01l.5-.51a3.55 3.55 0 0 1 2.53-1.05h.2l.16.01a3.58 3.58 0 0 1 3.2 3.19V12.35a3.58 3.58 0 0 1-2 2.84l-.03.02-.1.04-.07.03-.06.03-.11.04h-.03a3.58 3.58 0 0 1-3.69-.84l-.5-.5-3.37-3.36-5.38-5.39-1.35 1.35L0 12l1.35 1.35 5.39 5.39 1.34-1.35 3.37-3.37-1.34-1.35-3.37 3.37L2.7 12l4.04-4.04 2.02 2.02 5.39 5.39.5.5a5.46 5.46 0 0 0 5.65 1.3l.05-.01.16-.07.1-.04.11-.04.16-.07.05-.03a5.47 5.47 0 0 0 3.04-4.35v-.01l.02-.24v-.04V12H24z" />
    </svg>
  );
};

Showpad.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Showpad.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Showpad;