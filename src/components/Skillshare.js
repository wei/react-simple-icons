import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Skillshare = forwardRef(function Skillshare(
  { color = 'currentColor', size = 24, title = 'skillshare', ...others },
  ref
) {
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
      <path d="M9.783 6.056a.768.768 0 0 0-.773.764c0 .421.346.763.773.763a.768.768 0 0 0 .772-.763.768.768 0 0 0-.772-.764zM1.895 8.1C.821 8.1.111 8.622.111 9.413c0 .634.381 1.06 1.048 1.225l.836.21c.248.078.348.2.347.39 0 .21-.21.327-.424.337-.31.014-.537-.154-.554-.422H0c.02.8.802 1.362 1.974 1.362 1.108 0 1.827-.513 1.827-1.382 0-.634-.399-1.034-1.057-1.208l-.81-.224c-.274-.081-.369-.202-.369-.372 0-.185.146-.294.335-.316.274-.032.486.087.486.382v.02H3.78v-.02h-.001c0-.834-.706-1.294-1.884-1.294zm2.485.116v4.19h1.318v-1.821l1.274 1.82h1.62l-1.629-2.201 1.604-1.977h-1.56l-1.309 1.76v-1.77zm4.744 0v4.19h1.318v-4.19zm2.084 0v4.191h3.218v-1.244h-1.892V8.217zm3.937 0v4.191h3.218v-1.244h-1.892V8.217zm-13.25 5.308c-1.074 0-1.784.522-1.784 1.312 0 .635.381 1.06 1.048 1.225l.836.21c.248.078.348.2.347.39 0 .21-.21.328-.424.338-.31.014-.537-.155-.554-.423H0c.02.8.802 1.362 1.974 1.362 1.108 0 1.827-.512 1.827-1.382 0-.634-.399-1.034-1.057-1.207l-.81-.225c-.274-.081-.369-.201-.369-.371 0-.186.146-.295.335-.317.274-.032.486.087.486.383v.019H3.78v-.02h-.001c0-.834-.706-1.294-1.884-1.294zm9.19.015c-1.215 0-1.986.953-1.986 2.202 0 1.257.72 2.202 1.968 2.201.58 0 1.1-.286 1.326-.702v.59h1.318v-4.179h-1.318v.599c-.225-.425-.702-.711-1.309-.711zm8.751 0c-1.36 0-2.253.832-2.253 2.202 0 1.396.875 2.202 2.296 2.202 1.11 0 1.951-.546 2.08-1.37h-1.3c-.113.26-.373.373-.78.373-.59 0-.954-.295-.98-.841h3.087c.026-.234.035-.364.035-.581 0-1.179-.884-1.985-2.185-1.985zm-2.87.043c-.51 0-1.005.32-1.152.945v-.876h-1.327v4.179h1.327v-1.613c0-.927.382-1.395 1.1-1.395a2.8 2.8 0 0 1 .393.025l.007-1.23a1.28 1.28 0 0 0-.347-.035zM4.38 13.65v4.191h1.3v-1.485h1.59v1.485h1.3V13.65h-1.3v1.505H5.68V13.65zm15.448.781c.564 0 .876.295.885.85H18.9c.008-.511.356-.85.927-.85zm-8.38.217c.66 0 .997.494.997 1.093 0 .607-.337 1.1-.997 1.1-.616 0-.997-.468-.997-1.1 0-.634.382-1.093.997-1.093zm11.78 1.741a.768.768 0 0 0-.772.764c0 .422.345.764.772.764a.768.768 0 0 0 .772-.764.768.768 0 0 0-.772-.764z" />
    </svg>
  );
});

Skillshare.propTypes = {
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

export default Skillshare;
