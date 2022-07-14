
    import * as React from 'react';

    export type PrdotcoProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Prdotco = React.forwardRef<SVGSVGElement, PrdotcoProps>(function Prdotco({color = 'currentColor', size = 24, title = "prdotco", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M11.9998 4.67c1.876-.0025 3.7518.7157 5.1832 2.1468 1.026 1.0238 1.6037 2.1895 1.898 3.2853l1.7906-1.7905c.7157-.7157 1.8761-.7157 2.5916 0 .7157.7155.7157 1.8758 0 2.5913l-6.2802 6.2803c-1.4314 1.4314-3.3073 2.1469-5.1832 2.1469-1.8758 0-3.7517-.7155-5.1831-2.147-.9442-.944-1.5768-2.0815-1.898-3.2848L3.128 15.6886c-.7154.716-1.8758.716-2.5915 0-.7153-.7154-.7153-1.8758 0-2.5915 2.092-2.0933 4.1908-4.1889 5.9512-5.9502 1.6938-1.8595 3.7695-2.4746 5.5121-2.477zm2.5918 4.7384c-1.4314-1.4312-3.7521-1.4312-5.1834 0-1.4313 1.4312-1.4313 3.7522 0 5.1834 1.4313 1.4312 3.7518 1.431 5.1831-.0002 1.4313-1.4312 1.4313-3.752.0003-5.1832z" />
        </svg>
      );
    });

    export default Prdotco
  