
    import * as React from 'react';

    export type DiasporaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Diaspora = React.forwardRef<SVGSVGElement, DiasporaProps>(function Diaspora({color = 'currentColor', size = 24, title = "diaspora", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M15.257 21.928l-2.33-3.255c-.622-.87-1.128-1.549-1.155-1.55-.027 0-1.007 1.317-2.317 3.115-1.248 1.713-2.28 3.115-2.292 3.115-.035 0-4.5-3.145-4.51-3.178-.006-.016 1.003-1.497 2.242-3.292 1.239-1.794 2.252-3.29 2.252-3.325 0-.056-.401-.197-3.55-1.247a1604.93 1604.93 0 0 1-3.593-1.2c-.033-.013.153-.635.79-2.648.46-1.446.845-2.642.857-2.656.013-.015 1.71.528 3.772 1.207 2.062.678 3.766 1.233 3.787 1.233.021 0 .045-.032.053-.07.008-.039.026-1.794.04-3.902.013-2.107.036-3.848.05-3.87.02-.03.599-.038 2.725-.038 1.485 0 2.716.01 2.735.023.023.016.064 1.175.132 3.776.112 4.273.115 4.33.183 4.33.026 0 1.66-.547 3.631-1.216 1.97-.668 3.593-1.204 3.605-1.191.04.045 1.656 5.307 1.636 5.327-.011.01-1.656.574-3.655 1.252-2.75.932-3.638 1.244-3.645 1.284-.006.029.94 1.442 2.143 3.202 1.184 1.733 2.148 3.164 2.143 3.18-.012.036-4.442 3.299-4.48 3.299-.015 0-.577-.767-1.249-1.705z" />
        </svg>
      );
    });

    export default Diaspora
  