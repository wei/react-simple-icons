import React from 'react';
import PropTypes from 'prop-types';

const Dashlane = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M15.63 10.04c-.47-.393-.863-1.02-.863-1.648 0-.235.078-.627.157-.863 0-.156.078-.156.157-.235.706-.157 1.02-.157 1.098-.235.157-.314.235-.706.235-.706l-5.49-1.726s.314.863.549.942l2.51 1.098s-1.255.313-1.961.47l-.157.079s.235.47.706.706c.47-.157 1.333-.314 1.333-.314-1.176 2.353-3.686 3.921-6.353 3.921h-.94c-.315 0-.393.236-.158.393.47.235.863.705 1.02 1.176.078.314-.079.55-.314.706-.47.392-1.725 1.255-2.902 2.196a3.664 3.664 0 0 1-.392-.784C2.767 12.784 2.218 9.333 2.218 4.784v-.157l9.412-3.058 9.411 3.058v.079c0 1.647-.078 3.216-.235 4.549v.157h1.569v-.079c.157-1.411.235-2.902.235-4.549V3.53L11.63 0 .65 3.53v1.176c0 4.784.548 8.392 1.725 11.059.157.392.392.784.549 1.098-.941.706-1.726 1.255-1.726 1.255l.47.784 6.04-4.314a19.5 19.5 0 0 1 10.98-3.372h1.883c-.235 1.49-.628 2.823-1.098 3.921-.55 1.255-1.255 2.353-2.196 3.451-.706.863-1.569 1.569-2.51 2.196-1.569 1.098-2.98 1.569-3.059 1.647-.157-.078-1.49-.549-3.059-1.647-1.02-.706-1.882-1.411-2.588-2.274-.235-.235-.47-.55-.706-.863l-.078-.078-1.255.94.078.08c.314.391.55.705.785 1.019.784.941 1.725 1.725 2.745 2.431 1.725 1.177 3.215 1.726 3.45 1.804 0 0 .314.079.393.157h.157c.157 0 .392-.157.392-.157.314-.078 1.725-.627 3.45-1.804a16.44 16.44 0 0 0 2.746-2.431 15.164 15.164 0 0 0 2.431-3.843 16.555 16.555 0 0 0 1.255-4.55h1.334c.078-.313.156-.862.156-.862h-4.862c-1.804-.078-2.432 0-2.902-.314z" />
    </svg>
  );
};

Dashlane.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dashlane.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dashlane;
