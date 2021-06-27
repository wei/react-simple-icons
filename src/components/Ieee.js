import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ieee = forwardRef(function Ieee({ color = 'currentColor', size = 24, title = 'ieee', ...others }, ref) {
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
      <path d="M4.74 14.973h-.05v-.064h.04c.022 0 .051.002.051.03 0 .028-.015.034-.04.034zm.101-.03c0-.06-.04-.079-.109-.079h-.099v.265h.057v-.111h.027l.061.111h.068l-.069-.116c.036-.003.064-.02.064-.07zm-.11.243c-.098 0-.176-.076-.176-.19 0-.113.078-.188.176-.188.095 0 .177.075.177.188 0 .114-.082.19-.177.19zm-.247-.19c0 .156.116.247.247.247.13 0 .247-.09.247-.247a.238.238 0 0 0-.247-.246.239.239 0 0 0-.247.246zM3.35 12.61c-.02.374-.025.72-.052 1.096.148.013.315.026.473.003l-.047-1.046-.009-.05c-.12.005-.234.01-.365-.003zm-.926-1.051c-.182.091-.45.23-.421.48.04.136.187.224.304.28.647.286 1.506.295 2.19.083.168-.065.395-.16.426-.366-.002-.171-.183-.279-.313-.344v-.008a.575.575 0 0 1 .144-.039v-.004c-.228-.041-.45-.101-.671-.16.043.097.073.2.109.301.067-.021.135-.038.207-.047.117.045.284.11.3.256.014.137-.136.204-.23.26-.501.181-1.065.2-1.588.06-.144-.045-.353-.103-.37-.287.102-.242.367-.292.588-.351-.114-.073-.23-.138-.34-.22-.119.007-.227.059-.335.106zm1.107-1.46l-.064.208-.326.932c.082.008.183 0 .263.008v.008l-.048 1.054.008.01c.104.01.234.016.34-.002V12.3l-.042-1.022.006-.035.286-.004a46.727 46.727 0 0 1-.414-1.14zm-.15-.469c.239-.163.453.065.639.195.717.578 1.393 1.238 1.909 1.984.065.096.094.246.036.355-.134.223-.314.426-.485.633v.011c-.426.454-.876.92-1.363 1.305-.237.144-.455.46-.761.264a11.007 11.007 0 0 1-1.927-1.82c-.096-.149-.246-.271-.312-.44-.093-.23.112-.394.229-.566.576-.71 1.291-1.407 2.034-1.92zm.6-.678l-.266-.376c-.032-.02-.073-.052-.108-.062-.079-.034-.163.007-.227.056l-.48.624c-.769.953-1.68 1.843-2.673 2.525-.079.061-.195.121-.22.222-.026.091.022.166.078.223a13.061 13.061 0 0 1 2.234 1.94c.12.127.217.252.335.37.198.265.43.53.613.813.057.06.066.158.156.187.07.024.156.04.223 0l.066-.067a13.269 13.269 0 0 1 3.034-3.06c.117-.103.34-.142.343-.336a.308.308 0 0 0-.137-.226l-.02-.003c-.6-.408-1.159-.87-1.686-1.394l-.582-.609a16.595 16.595 0 0 1-.684-.827zm.039.672c.206.157.42.336.61.518l.034.02a10.122 10.122 0 0 1 1.405 1.592c.065.1.122.212.086.343-.133.332-.403.597-.639.887-.51.55-1.05 1.081-1.652 1.506-.122.086-.287.166-.433.097-.444-.232-.818-.613-1.207-.96-.45-.417-.902-.904-1.244-1.413a.417.417 0 0 1-.064-.253c.044-.176.165-.32.279-.469.403-.514.897-1.002 1.397-1.447.011-.012.032-.036.05-.047.215-.186.428-.35.652-.511.234-.182.529-.031.726.137zm15.942-.197H24v1.028h-2.569v1.094h2.364v1.028H21.43V13.7H24v1.028h-4.038zm-4.859 0h4.037v1.028h-2.57v1.094h2.363v1.028H16.57V13.7h2.569v1.028h-4.037zm-4.86 0h4.037v1.028h-2.57v1.094h2.365v1.028H11.71V13.7h2.57v1.028h-4.038zm-2.24 0h1.469v5.301H8.004Z" />
    </svg>
  );
});

Ieee.propTypes = {
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

export default Ieee;
