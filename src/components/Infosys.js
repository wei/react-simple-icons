import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Infosys = forwardRef(function Infosys({ color = 'currentColor', size = 24, title = 'Infosys', ...others }, ref) {
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
      <path d="M23.2734 7.5703c-.3984 0-.7246.3282-.7246.7266 0 .4013.3262.7246.7246.7246.3982 0 .7266-.3233.7266-.7246 0-.3984-.3284-.7266-.7266-.7266zm0 .1074c.3395 0 .6192.2795.6192.6192 0 .3396-.2797.6172-.6192.6172-.3397 0-.6171-.2776-.6171-.6172 0-.3397.2774-.6192.6171-.6192zm-15.1367.0547c-.9001 0-1.549.5917-1.6387 1.6406h-.6953v.5215h.6856c.0028 1.6664-.002 3.334-.002 4.998h.7774c-.0022-1.6659-.002-3.3319-.002-4.998h1.748c-.646.5242-1.0663 1.3739-1.0663 2.334 0 1.593 1.1564 2.8848 2.582 2.8848 1.4258 0 2.582-1.2918 2.582-2.8848 0-.1896-.0174-.3753-.0488-.5547.2565.4131.7488.6133 1.4082.8985.7784.329 1.2129.6165 1.2129 1.1074 0 .5885-.556.8955-1.1817.8906-.611 0-1.0883-.249-1.6191-.7305v.9239c.3239.2088.8256.3281 1.3691.3281.6844-.0023 2.0918-.249 2.0918-1.6758-.0044-.8557-.715-1.2239-1.4863-1.5586-.9383-.4653-1.2965-.5629-1.2871-1.0957 0-.7088.6178-.9219 1.0996-.9219.2099 0 .3891.0293.5586.086.3163.1194.4209.3553.5332.6113.5283 1.2356 1.0344 2.4811 1.5488 3.7227-.2464.5637-.526 1.1519-.7168 1.5273l-.0039.0098-.1601.2969-.1797.336h.7617c.3322-.7342 1.7436-4.1688 2.0469-4.9083.1995.533.6857.7467 1.4297 1.0684.7783.329 1.2148.6166 1.2148 1.1074 0 .5886-.5562.8936-1.1816.8887-.6348 0-1.1257-.2685-1.6817-.7871l-.0507-.041v.9413c.3115.259.8713.4102 1.4824.4102.6844-.0022 2.0918-.249 2.0918-1.6758-.0042-.8557-.7151-1.2258-1.4863-1.5605-.9384-.4654-1.2593-.563-1.25-1.0957 0-.709.5787-.9219 1.0605-.9219.5483 0 .8958.2037 1.379.5547V9.584c-.3923-.1381-.7212-.1915-1.1642-.1895-.8912-.0018-1.6966.3234-1.9004 1.0762l-1.1054 2.7344-.1153.3437-.1015-.3437c-.5022-1.2089-.9934-2.4236-1.4863-3.6309-.3154-.0828-.8307-.201-1.1934-.1953-.0377-.0007-.0758-.0002-.1152 0-1.0302-.002-2.0235.4332-2.0235 1.457 0 .0596.0022.1155.006.17-.412-.9813-1.3036-1.6602-2.338-1.6602-.1245 0-.2472.0085-.3672.0273H7.254c-.1194-.733.2228-1.1503.7383-1.1503.6472-.0006.9242.192 1.205.4511 0 0 .0195-.0007.0274 0 .0038-.2457.002-.5318.002-.7949-.185-.0857-.5061-.1465-1.0899-.1465zM0 7.756v7.1367h.8594V7.7559zm23 .1386v.7657h.1387v-.3086h.164l.1192.3086h.1543l-.1407-.3301c.0494-.0248.1329-.0518.1329-.1875 0-.2224-.1673-.248-.3125-.248zm.1387.1328h.1543c.0834 0 .1289.0337.1289.1016 0 .068-.0524.0996-.1172.0996h-.166zM4.1719 9.3555c-.945 0-1.3429.3359-1.6582.6738a.2474.2474 0 00-.0352.0644h-.0078v-.043l-.0098-.623H1.707v5.4649h.7754v-3.9961c.0226-.4905.7134-.9746 1.252-.9746.6477 0 1.1777.4364 1.1777 1.039v3.9317h.7754c-.0019-1.429-.002-2.858-.002-4.2871-.0234-.4835-.6094-1.25-1.5136-1.25zm6.2832.5566c.9741-.0175 1.7825 1.0214 1.8047 2.3184.022 1.297-.7504 2.3614-1.7246 2.3789-.9742.0171-1.7825-1.0195-1.8047-2.3164-.0221-1.2971.7503-2.3634 1.7246-2.3809Z" />
    </svg>
  );
});

Infosys.propTypes = {
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

export default Infosys;
