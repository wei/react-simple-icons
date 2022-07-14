
    import * as React from 'react';

    export type QuasarProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Quasar = React.forwardRef<SVGSVGElement, QuasarProps>(function Quasar({color = 'currentColor', size = 24, title = "quasar", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M12 0a12 12 0 0 0-3.002.39v3.126a9.015 9.015 0 0 0-2.831 1.628 11.106 11.106 0 0 0 1.609 3.454c1.328-2.711 3.828-4.86 7.227-6.234V.397A12 12 0 0 0 11.999 0zm3.02 3.52a11.106 11.106 0 0 0-2.186 3.12c3.013-.204 6.124.886 9.012 3.143l1.704-.984A12 12 0 0 0 22.392 6a12 12 0 0 0-1.839-2.404l-2.706 1.563A9.014 9.014 0 0 0 15.02 3.52zm-11.567.078a12 12 0 0 0-1.846 2.403A12 12 0 0 0 .445 8.795l2.706 1.563a9.003 9.003 0 0 0-.005 3.266c1.273.332 2.546.444 3.796.334C5.258 11.45 4.647 8.21 5.157 4.58zM12 9.658A2.341 2.341 0 0 0 9.66 12 2.341 2.341 0 0 0 12 14.341 2.341 2.341 0 0 0 14.341 12a2.341 2.341 0 0 0-2.34-2.341zm6 .343c-.315 0-.63.014-.942.042 1.684 2.506 2.296 5.746 1.785 9.376l1.704.983a12 12 0 0 0 1.846-2.403 12 12 0 0 0 1.162-2.794l-2.706-1.563c.202-1.09.2-2.197.005-3.266a11.316 11.316 0 0 0-2.855-.375zM2.154 14.217l-1.704.984A12 12 0 0 0 1.608 18a12 12 0 0 0 1.839 2.404l2.706-1.563A9.015 9.015 0 0 0 8.98 20.48a11.106 11.106 0 0 0 2.187-3.12c-3.013.204-6.124-.886-9.012-3.143zm14.07 1.185c-1.329 2.711-3.828 4.86-7.227 6.234v1.967a12 12 0 0 0 3.004.397 12 12 0 0 0 3.001-.39v-3.126a9.015 9.015 0 0 0 2.831-1.628 11.106 11.106 0 0 0-1.609-3.454z" />
        </svg>
      );
    });

    export default Quasar
  