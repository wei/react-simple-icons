import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stubhub = forwardRef(function Stubhub({ color = 'currentColor', size = 24, title = 'stubhub', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M23.78 6.566L.21 8.148c-.116.008-.21.107-.21.227V8.4l.725 6.884v.004c.003.036.006.07.006.11 0 .123-.016.243-.048.347L.344 16.84c-.04.122.026.182.146.134l1.805-.75c.002 0 .004 0 .006-.002h.003c.13-.05.27-.076.418-.076h.036l20.04 1.29c.127 0 .23-.097.243-.222L24 6.784v-.02c0-.11-.09-.198-.2-.198h-.02zm-19.245 3.68h.053c.823 0 1.25.304 1.275.892v.045h-.516l-.006-.04c-.027-.26-.273-.386-.753-.386h-.045c-.48.008-.717.152-.717.434v.08c.005.055.03.102.07.136.052.048.117.087.19.11l1.204.403-.007-.005.01.004c.18.057.34.163.46.306.108.138.175.313.175.502v.117c0 .287-.14.54-.36.695-.235.18-.575.268-.997.268s-.75-.093-.99-.268v-.002c-.218-.155-.36-.41-.36-.7v-.07h.516v.05c0 .146.063.255.21.346s.358.137.628.137.49-.048.637-.136.22-.2.22-.346v-.072c0-.167-.098-.277-.3-.344L3.935 12c-.195-.062-.35-.157-.45-.28-.1-.12-.16-.274-.16-.444v-.084c0-.616.403-.935 1.21-.943zm8.292.08h.518v1.448h1.588v-1.447h.52v3.47h-.522v-1.52h-1.585v1.52h-.518v-3.47zm-6.495.007h.5v.945h.535v.51h-.535v.89c0 .208.056.37.168.487l-.002.004c.087.09.202.15.334.17h.035v.485l-.047-.004h-.004c-.265-.016-.504-.13-.68-.308-.203-.21-.305-.492-.305-.834v-2.346zm11.913 0h.5v1.12c.155-.157.367-.24.633-.24.755 0 1.14.395 1.142 1.175v.283c0 .342-.103.624-.305.835s-.486.316-.836.316-.628-.105-.83-.315-.306-.494-.306-.834v-2.337zm-8.084.002h.5v1.12c.156-.16.368-.243.634-.243.76 0 1.14.396 1.144 1.176v.283c0 .342-.105.624-.307.835s-.483.316-.833.316-.627-.105-.83-.315-.307-.494-.307-.834v-2.335zm-2.395.945h.492v1.367c0 .258.04.442.113.545.07.095.204.146.387.146h.016c.185 0 .31-.047.385-.146s.115-.287.115-.545H9.27V11.28h.49v1.367c0 .417-.08.72-.23.902-.146.173-.385.264-.71.272h-.115c-.325-.008-.564-.098-.71-.273-.156-.18-.23-.486-.23-.903V11.28zm8.077 0h.492v1.367c0 .258.04.442.115.545.07.095.2.146.384.146h.025c.18 0 .306-.05.378-.146.075-.104.115-.287.115-.545h-.004V11.28h.49v1.367c0 .417-.083.728-.23.902s-.384.264-.71.272h-.12c-.324-.008-.563-.098-.71-.273-.155-.18-.228-.486-.228-.903V11.28zm-4.548.422c-.207 0-.37.05-.473.156s-.16.285-.16.53v.288c0 .208.062.366.17.486s.26.182.464.182c.203 0 .357-.056.47-.18s.17-.28.17-.488v-.283c0-.247-.056-.423-.163-.53s-.266-.16-.476-.16zm8.083 0c-.207 0-.37.05-.473.156s-.16.285-.16.53v.288c0 .208.06.366.166.486s.267.182.467.182.355-.06.47-.18.17-.285.17-.488v-.283c0-.247-.056-.423-.163-.53s-.267-.16-.477-.16z" />
    </svg>
  );
});

Stubhub.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Stubhub;
