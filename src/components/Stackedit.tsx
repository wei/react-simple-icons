
    import * as React from 'react';

    export type StackeditProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Stackedit = React.forwardRef<SVGSVGElement, StackeditProps>(function Stackedit({color = 'currentColor', size = 24, title = "stackedit", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M6 0C2.689 0 0 2.689 0 6v12c0 3.311 2.689 6 6 6h12c3.311 0 6-2.689 6-6V6c0-3.311-2.689-6-6-6H6zm.227 1.871h11.546A3.98 3.98 0 0 1 21.75 5.85v11.545a3.978 3.978 0 0 1-3.977 3.976H6.227a3.978 3.978 0 0 1-3.977-3.976V5.85a3.98 3.98 0 0 1 3.977-3.98zm-.223 2.31V6.01H4.633V7.7h1.37v1.903h-1.37v1.689h1.37v1.828h1.4v-1.828h1.695v1.828h1.398v-1.828h1.371v-1.69h-1.37v-1.9h1.37V6.01h-1.37V4.182h-1.4V6.01H7.403V4.182H6.004zm1.398 3.52h1.696v1.903H7.402V7.7z" />
        </svg>
      );
    });

    export default Stackedit
  