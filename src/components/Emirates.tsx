import * as React from 'react';

export type EmiratesProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Emirates = React.forwardRef<SVGSVGElement, EmiratesProps>(function Emirates({color = 'currentColor', size = 24, title = "emirates", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M6.247 15.56l-1.386 1.385c.945.945 1.26 1.386 1.323 1.827.063-.063 1.323-1.134 1.323-1.512 0-.567-.378-.756-1.26-1.7m-3.15-2.458h-.755s.756.441.756 1.45v3.4c0 2.205 1.826 4.284 4.031 4.284h1.827c1.134 0 1.512-.252 2.142-.882l.692-.693c.378-.44.82-.755.82-1.952v-1.134c0-.945-.568-1.386-.82-1.638l-.63-.63v2.268s.441.504.693.63c.945.756.19 2.078-.692 2.078H7.066c-1.89-.063-3.402-1.637-3.465-3.527v-1.827c0-1.827-.503-1.827-.503-1.827m5.92 2.457l-1.385 1.386c.945.945 1.26 1.386 1.323 1.827.063-.063 1.323-1.134 1.323-1.512 0-.567-.378-.82-1.26-1.7M11.853 0l-.944.945c-.378.378-.252 1.134.504 1.89v1.89c0 .188-.19.377-.19.377s-1.133-1.008-2.14-1.008H7.57c-.945 0-1.7.882-1.827.945-.504.504-.504 1.45-.126 1.89L6.688 8s-.252-1.7 0-2.835c.063-.252.378-.567.693-.567l2.457 1.89-2.835 2.96c-.126.127-.504.379-.882.379-.44 0-.63-.252-.819-.504v1.386c0 .44.63.945 1.197.945h3.78c.252 0 .567-.063.819-.315l1.26-1.26c.188-.19.251-.441.251-.756V7.874c0-1.386-1.07-2.457-1.07-2.457s.251-.189.251-.756V3.213s.441.44.504.63l.82-.82c.377-.377-.253-1.07-.505-1.385C11.853.818 11.853 0 11.853 0M7.13 9.953c.378-.19.441-.315.756-.693l2.394-2.52s1.322 1.386 1.763 2.142c.19.378.441 1.07-.692 1.07H7.13M3.915 7.056h-.692c.44.252.755 1.008.755 1.449v2.772c0 .755.567 3.464 3.024 3.464h7.118v4.536c0 .755-.252 1.196-.44 1.385l-1.072 1.008h.504l1.953-1.763c.378-.441.819-.882.819-2.268V14.74l.819-.819 1.386-1.323c0 1.134.567 1.638 1.07 1.638a1.26 1.26 0 0 0 .756-.315l1.26-1.197c.567-.567.882-2.33-.504-2.33-.882 0-1.89 1.26-1.952 1.386-.315-.19-.567-.63-.567-.63v1.07c-.126.19-.693.63-1.134.63h-1.134v-1.07c0-.504.189-1.071.44-1.323l1.072-1.008h-.504l-2.142 1.953c-.378.44-.63 1.26-.63 1.448H6.058c-1.008 0-1.638-1.007-1.638-1.826v-2.08c0-1.7-.44-1.889-.504-1.889m16.315 6.047c-.189 0-.378-.063-.63-.252-.251-.189-.692-.819-.692-.819.126-.125.504-.251.818-.251.252 0 .504.063.567.189.441.566.378 1.133-.063 1.133M16.893 0L14.75 1.953c-.126.126-.63.882-.63 1.764v5.606c0 .378-.252.945-.44 1.134l-1.072 1.008h.504l2.016-1.827c.252-.252.756-.882.756-1.953V2.331c0-.82.378-1.26.567-1.45L17.397 0h-.504m.315 14.362v2.205l.756.819c.63.63.567 1.827-1.323 3.653a3.78 3.78 0 0 1-2.583 1.197h-3.401L12.672 24h1.386c1.386 0 2.646-.567 3.465-1.449.756-.819 1.197-1.89 1.134-3.023V16.63c0-1.008-.63-1.575-.756-1.7-.126 0-.693-.568-.693-.568Z" />
    </svg>
  );
});

export default Emirates;
