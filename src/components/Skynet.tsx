
    import * as React from 'react';

    export type SkynetProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Skynet = React.forwardRef<SVGSVGElement, SkynetProps>(function Skynet({color = 'currentColor', size = 24, title = "skynet", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="m-.0004 6.4602 21.3893 11.297c.561.2935.6633 1.0532.1999 1.4846h-.011a10.0399 10.0399 0 0 1-2.2335 1.5307c-6.912 3.4734-14.9917-1.838-14.5438-9.5605l2.8601 1.9752c.856 4.508 5.6187 7.1094 9.8742 5.3932zm8.6477 3.1509 14.3661 5.6785a.8704.8704 0 0 1 .5197 1.0466v.0182c-.1537.5377-.7668.7938-1.2575.5252zm5.2896-7.4375c2.7093-.2325 6.0946.7869 8.1116 3.3871 1.699 2.1951 2.0497 4.8772 1.9298 7.6465v-.007c-.0478.5874-.6494.9616-1.1975.745l-9.7652-3.8596 9.0656 2.4313a7.296 7.296 0 0 0-1.0677-4.5631c-2.9683-4.7678-9.9847-4.5344-12.6297.4201a7.5048 7.5048 0 0 0-.398.8831L5.5546 7.9614c.069-.1017.1417-.198.2144-.2962.1163-.2416.2417-.487.3798-.7268 1.6118-2.7911 4.3102-4.4338 7.1558-4.6973.2108-.0182.4215-.049.6323-.0672z" />
        </svg>
      );
    });

    export default Skynet
  