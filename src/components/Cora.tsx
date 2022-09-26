import * as React from 'react';

export type CoraProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Cora = React.forwardRef<SVGSVGElement, CoraProps>(function Cora({color = 'currentColor', size = 24, title = "cora", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M17.637 8.6606c0-.0838-.0344-.1153-.118-.1117-.1242.0045-.2487 0-.3729 0a1.5068 1.5068 0 0 0-1.0148.4021 2.4725 2.4725 0 0 0-.462.594c-.0526.088-.1058.1756-.1589.2632l-.0215-.0053c-.0028-.0304-.0078-.0608-.008-.0915q-.0062-.4465-.0107-.8904c0-.0653-.007-.1097-.0937-.1116-.4763-.0109-.9524-.016-1.429-.0087-.0954.0014-.1183.0374-.1191.1273-.0223 2.1229-.0128 4.2458 0 6.369 0 .0753.0279.0895.0952.0906.4796.0084.9596.0134 1.4392 0 .171-.0047.1736-.0067.1755-.181.012-1.1667.021-2.3336.0352-3.5003a1.263 1.263 0 0 1 1.0118-1.2573 3.508 3.508 0 0 1 .9378-.0516c.0949.0033.1152-.0257.1141-.1144-.0033-.29.0028-.5799.0033-.87-.0005-.2174-.0047-.4348-.0036-.6524zM3.2957 9.9943a.9705.9705 0 0 1 .8005.4744 1.5509 1.5509 0 0 1 .1954.4978c.0156.0698.0471.0854.1116.0837.2553-.0033.5109 0 .7662 0 .2553 0 .511-.005.7662.0025.0958.0028.1184-.0279.1091-.1164a2.4354 2.4354 0 0 0-1.4004-2.0762 3.5683 3.5683 0 0 0-2.2044-.264A2.6017 2.6017 0 0 0 .4925 9.9383a4.0022 4.0022 0 0 0-.4643 1.6708 4.9916 4.9916 0 0 0 .1485 1.8461 2.6 2.6 0 0 0 1.4038 1.7133 3.5789 3.5789 0 0 0 2.2694.2112c1.3915-.2882 2.016-1.3394 2.1854-2.3592.0147-.089-.0026-.1273-.1086-.1259-.4626.0064-.9253.0028-1.3876.0028-.2233 0-.2233 0-.2816.2205a1.1622 1.1622 0 0 1-.985.9088 1.1413 1.1413 0 0 1-1.144-.4688 1.8042 1.8042 0 0 1-.2723-.6761 5.631 5.631 0 0 1-.0623-1.114 2.439 2.439 0 0 1 .0837-.6545c.1555-.6044.5634-1.1795 1.4181-1.119Zm7.911-1.2316a3.7982 3.7982 0 0 0-2.6367-.003 2.8688 2.8688 0 0 0-1.8363 1.862 4.2971 4.2971 0 0 0-.0416 2.6186 2.8816 2.8816 0 0 0 1.8623 1.9907 3.8071 3.8071 0 0 0 2.5392.0432 2.8978 2.8978 0 0 0 1.8383-1.644 3.9383 3.9383 0 0 0 .3153-1.6265 4.9445 4.9445 0 0 0-.0985-.9727 2.9614 2.9614 0 0 0-1.942-2.2683zm.0557 4.3671a1.3036 1.3036 0 0 1-1.2579.865 1.734 1.734 0 0 1-.7333-.091 1.4208 1.4208 0 0 1-.826-.912 2.9901 2.9901 0 0 1-.1372-1.0755 2.458 2.458 0 0 1 .2338-1.1404 1.3394 1.3394 0 0 1 1.1935-.7774 1.7189 1.7189 0 0 1 .7441.0904 1.2986 1.2986 0 0 1 .7858.776 3.0973 3.0973 0 0 1-.0028 2.2652zm12.6651 1.8749a.483.483 0 0 1-.2028-.2274 1.0475 1.0475 0 0 1-.093-.4621c-.0248-1.3427-.0039-2.686-.0382-4.0284a1.512 1.512 0 0 0-.5463-1.1402 2.4695 2.4695 0 0 0-1.126-.515 5.3873 5.3873 0 0 0-1.7104-.0559 2.6815 2.6815 0 0 0-1.073.32c-.7078.403-.9852 1.0638-1.0831 1.8305-.0112.0882.022.1008.0993.1002.435-.0034.87-.0017 1.305-.0017.2367 0 .2367 0 .2967-.2246a.848.848 0 0 1 .7478-.6613 3.0786 3.0786 0 0 1 .7849.0198.6892.6892 0 0 1 .6211.7177.4668.4668 0 0 1-.2846.4408 1.4912 1.4912 0 0 1-.4202.1013c-.5916.1002-1.19.1608-1.7752.2933a1.9228 1.9228 0 0 0-1.3854 1.0324 2.2822 2.2822 0 0 0-.1937 1.2816 1.697 1.697 0 0 0 .889 1.3737 2.7038 2.7038 0 0 0 2.7834-.2854c.1244-.1038.2464-.211.3683-.3178.0558-.0478.0756-.04.0857.0343a3.4009 3.4009 0 0 0 .1214.5759.1091.1091 0 0 0 .125.0896c.2726-.0047.5455-.002.818-.002v-.0084c.2727 0 .5456.002.8182-.0017.0483 0 .12.0231.1306-.0623.01-.079.0335-.1665-.0625-.217zm-2.5833-1.0715a1.6879 1.6879 0 0 1-1.0681.2888.7785.7785 0 0 1-.6976-.9842.8195.8195 0 0 1 .5843-.6496 5.6502 5.6502 0 0 1 .8153-.187 2.6787 2.6787 0 0 0 .865-.2672c.0558-.0335.0659-.0034.0659.0424v.435h.0042v.279a1.178 1.178 0 0 1-.569 1.0428Z" />
    </svg>
  );
});

export default Cora;
