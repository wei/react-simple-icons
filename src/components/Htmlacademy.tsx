import * as React from 'react';

export type HtmlacademyProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Htmlacademy = React.forwardRef<SVGSVGElement, HtmlacademyProps>(function Htmlacademy({color = 'currentColor', size = 24, title = "htmlacademy", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M12 0L2.524.994v17.368L12 24l9.476-5.638V.994L12.099.01 12 0zm8.236 17.657L12 22.557l-8.236-4.9v-7.119l8.2 4.881.014.885-5.626-3.349-.008.86 5.648 3.394.015.908-5.647-3.36-.008.86L12 19.01l5.703-3.412v-.862l-.008.004v-2.805l2.54-1.517v7.238zm-.006-8.162l-2.254 1.328-1.04.613-4.96-2.951-.009.858 4.24 2.521-.037.023-.092.054-.602.355-3.5-2.083-.009.859 2.763 1.643-.652.436-.015.01-2.088-1.23-.008.858 1.37.807-1.395.837-8.16-4.85 8.172-4.912v.001l8.276 4.823zm.006-.864l-8.28-4.882h-.002l-8.19 4.877V2.11L12 1.246l8.237.864v6.52z" />
    </svg>
  );
});

export default Htmlacademy;
