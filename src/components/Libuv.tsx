import * as React from 'react';

export type LibuvProps = React.ComponentPropsWithoutRef<'svg'> & {
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

const Libuv = React.forwardRef<SVGSVGElement, LibuvProps>(function Libuv({color = 'currentColor', size = 24, title = "libuv", ...others}, ref) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
      <title>{title}</title>
      <path d="M20.534 19.21c-.573.117-1.183.506-1.656.594-1.044.193-1.66.007-1.108-.22.8-.332 3.44-.415 3.716-2.374.276-1.96.083-2.843-.055-3.34a7.179 7.179 0 0 0-.351-.891 3.633 3.633 0 0 0-.134-.523 1.66 1.66 0 0 1-.074-.228s-.034-.241.076-.476c.098-.208.433-.659.456-1.095v-.08a.762.762 0 0 0-.008-.087l-.002-.026a.802.802 0 0 0-.374-.542c-.123-.082-.29-.107-.382-.224.073-.23.306-.313.404-.501.06-.167.011-.343-.081-.503-.178-.2-.528-.372-.842-.49-.393-.147-.792-.264-1.062-.475-.285-.152-.477-.445-.302-.833a.703.703 0 0 0 .064-.3v-.028c-.001-.02-.004-.037-.006-.055a.538.538 0 0 0-.008-.042l-.006-.024-.008-.027c-.072-.243-.453-.31-.59-.323-.307-.027-.506-.111-.67-.163.132.069.264.16.433.228.106.044.26.07.389.112 0 0 .239.048.304.214a.59.59 0 0 1 0 .403l-.01.027c-.024.073-.05.143-.056.215-.022.286.153.434.246.673.167.159.406.324.736.473.298.134.653.215.874.348.127.077.36.263.354.399-.004.104-.195.245-.272.348-.056.074-.083.171-.132.24-.043.069-.099.112-.162.112-.083 0-.271.032-.147.041.124.01.446.161.446.161.435.18.727.514.567.99-.134.399-.442.732-.463 1.17-.023.467.19.85.218 1.22.046.623-.043 1.051-.164 1.52-.056.218-.086.434-.136.647-.213.906-.76 1.299-1.5 1.718-.322.181-.666.516-1.01.622-.056.017-.141-.009-.192 0-.317.057-.602.215-.927.274-.306.057-.628.03-.991.121-.184.066-.42.165-.559.223-.213.097-.422.199-.631.3l-.693.396s-.386.224.042.059c.344-.134 1.527-.722 1.031-.377-.342.172-.527.416-.83.624 0 0-1.016.504-1.169.645-.167.155-.372.069-.507.22a1.19 1.19 0 0 1-.49.332c-.138.046-.294.35-.506.506-.211.156-.671.11-1.076.285a2.373 2.373 0 0 1-.824.177c-.04.004-.08.006-.116.007H9.56a1.553 1.553 0 0 1-.556-.096c-.169-.062-.231-.03-.193-.01.038.02.148.124.148.124-.472 0-.601-.315-.819-.548.1-.014.381.055.238-.028-.283-.135-.827-.145-.838-.47-.008-.255.11-.2.11-.2.197.346.809.38 1.254.375.83-.01 1.393-.466 1.937-.723a9.87 9.87 0 0 0 .382-.246v.004c.171-.112.345-.22.492-.355.256-.236.429-.543.655-.804a.697.697 0 0 1 .146-.153c.064-.06.132-.115.208-.164l.003.006.03-.02-.006-.01c.548-.311 1.058-.655 1.489-1.072l.003-.005c.062-.056.386-.418.542-.593.185-.246.318-.557.395-.87.028-.114.01-.251.054-.374.069-.19.242-.36.355-.548.117-.195.195-.408.273-.622.341-.938.736-1.685 1.473-2.191.355-.244.787-.402 1.037-.772a1.665 1.665 0 0 1-.703.408c-.811.267-1.338.95-1.603 1.385a5.167 5.167 0 0 0-.477 1.22 4.06 4.06 0 0 0-.355-1.395c-.16-.37-.303-.761-.6-.996 0 0-.011.001-.058-.027-.046-.027.767-.048.767-.048.143.006.287.026.434.045a.373.373 0 0 1 .103.006c.447.079.91-.088 1.2-.298.15-.11.412-.197.628-.256.004-.01.025-.02.08-.03 0 0 .33-.104.682-.2a3.27 3.27 0 0 0 .533-.175.779.779 0 0 0 .187-.162c.104-.127.106-.28.192-.498.085-.217.216-.386.218-.573.006-.611-.573-1.098-1.2-.772.617-.16 1.056.142.982.723-.092.716-1.172 1.248-1.829 1.518-.26.107-.565.243-.873.274-.443.045-.846-.05-1.227-.025-.49.032-.815.291-1.228.324-.355.028-.307-.212-.615-.239-.063-.036-.257 0-.45-.01-.532.14-.874-.103-1.309-.299-.314-.141-.648-.27-.982-.299-.838-.07-1.348.046-2.033-.027-.193-.02-.594-.045-.784-.116-.593-.222-1.047-.141-1.69-.15-.469-.007-.903-.032-1.196.02-.08.014-.16.034-.245.05-.628.109-1.583.166-1.555.721.046-.032.033-.118.109-.124-.003.102-.006.204.027.274-.365-.01-.58-.262-.573-.548.012-.487.796-.69 1.337-.822.542-.13 1.105-.284 1.5-.348-.947.139-1.95.228-2.673.572a.778.778 0 0 1-.021-.108c-.058-.263-.183-.666-.27-1.058-.102-.451.055-1.242.055-1.242l.004.004c.065-.402.148-.58.228-.821.172-.513.726-.674 1.114-.723a1.742 1.742 0 0 0-.668.901c-.017.137-.03.264-.039.377.294-.914 1.113-1.256 1.113-1.256l.262-.283-.003.013c.452-.438 1.05-.777 1.809-.798.383-.01.845.09.844.466 0 .212-.167.392-.393.491a.311.311 0 0 0 .183-.019l.235-.263c.078-.192.07-.435-.06-.581.346-.296.884.036.845.428.101-.085.163-.247.094-.375.465-.273.726.39 1.194.235-.044-.133-.27-.106-.338-.217.612-.087 1.15.128 1.764.08.038.033.08.066.124.1-1.149.126-.215.126-.215.126.147-.014.5-.038.638-.014.225.04.37-.014.569-.092.004.009.024.008.036-.014.103-.041.222-.086.373-.127a.98.98 0 0 0 .174-.042l.024-.005.004-.004c.079-.027.153-.06.216-.09.58-.279 1.06-.934 1.554-1.278.819-.569 1.595.134 2.165.59l-.004.006c.143.098.332.218.537.344.537.233 1.245.437 1.623.811.302.299.405.684.535 1.083.122.373.357.702.49 1.12a.163.163 0 0 0 .05-.092c-.004-.036-.01-.073 0-.097l.008.007a1.047 1.047 0 0 0-.043-.249c-.112-.229-.309-.49-.285-.693 0 0 .697.36 1.488.718.273.123.522.326.74.559l.063-.002a.136.136 0 0 0-.004.065c.384.43.657.944.752 1.24a4.416 4.416 0 0 0 .16.412h.001c.014.025.023.05.032.074.115.247.227.448.258.503.1.124.181.285.268.42a11.375 11.375 0 0 1-2.465 8.17c-.09.011-.214.032-.378.066zm-.718 1.12c-.549.18-1.11.516-1.467.55-1.076.102-1.27-.376-.41-.455.325-.03.805-.067 1.188-.248.564-.269 1.142-.529 1.528-.722-.264.306-.544.598-.839.875zm-11.735.052c-.092.03-.092-.015-.092-.015s-.165-.236-.19-.456c-.026-.218.03-.412.084-.44.055-.03.067.097.112.256.045.16.268.49.268.49.032.067-.09.134-.182.165zm.575.1c-.105.036-.105-.016-.105-.016s-.189-.269-.217-.519c-.03-.247.036-.468.099-.5.063-.035.076.11.127.29.051.183.307.558.307.558.036.077-.105.153-.211.188zm.194-.697c-.036-.313.048-.593.129-.636.08-.043.098.14.162.37.065.231.39.706.39.706.046.098-.134.194-.27.238-.135.044-.134-.02-.134-.02s-.24-.34-.277-.658zm4.669-3.587c.056-.05.116.056.226.176.11.122.5.313.5.313.063.046-.062.162-.164.232-.1.07-.117.03-.117.03s-.287-.136-.396-.321c-.108-.183-.106-.379-.05-.43zm-.924.492c.069-.065.143.073.281.229.14.16.631.414.631.414.08.06-.076.21-.203.3-.127.091-.148.038-.148.038s-.359-.182-.495-.423c-.136-.237-.136-.493-.066-.558zm-.825 1.11c-.122-.256-.111-.52-.04-.584.07-.064.138.083.266.255.131.175.602.467.602.467.075.067-.084.215-.212.301-.128.087-.147.03-.147.03s-.344-.21-.469-.47zm-.754.63c-.102-.269-.075-.54-.003-.6.073-.06.128.097.24.28.115.189.55.522.55.522.069.075-.094.214-.224.292-.129.078-.142.018-.142.018s-.318-.24-.421-.512zm-1.017 1.654c-.136.041-.134-.021-.134-.021s-.23-.331-.257-.637c-.026-.304.066-.574.148-.614.082-.041.094.136.15.358.059.225.37.686.37.686.043.094-.14.186-.277.228zm.275-1.059c-.066-.304-.002-.59.08-.642.082-.054.116.124.205.34.089.218.48.646.48.646.058.09-.125.21-.267.273-.14.062-.145-.004-.145-.004s-.286-.305-.353-.613zm3.688-7.155s.08.013.043.126c-.035.112-.042.46.066.61.11.15-.075.093-.219-.059-.144-.15-.246-.43-.215-.619 0 0-.008-.08.325-.058zm-.51.921c.176.195-.092.143-.316-.049-.223-.191-.406-.565-.39-.834 0 0-.022-.11.447-.13 0 0 .114.007.079.17-.033.163.006.65.18.843zm-1.19 1.016c1.017.067 1.747-.286 2.264-.647.136-.095.316-.326.546-.174-.098.203-.358.337-.573.448-.377.195-.712.365-1.146.473.732-.112 1.253-.417 1.8-.697.068.14.143.423.192.662h.008s.05.133.034.264c.003.063-.01.116-.055.146a.23.23 0 0 1-.055.052c-.2.13-.794.42-1.27.455-.016 0-.03.003-.046.004l-.035.01-.001-.006c-.432.05-.711.228-.16.137.553-.091 1.736-.292 1.305-.13h.002c-.538.21-1.245.415-1.938.348-.448-.043-.91-.263-1.31-.473-.397-.21-.775-.485-1.2-.573-.323-.067-.59.027-.873.075-.188.032-.45.108-.563-.01-.048-.056-.01-.115-.01-.115.108-.266.421-.423.682-.498.819-.235 1.611.198 2.401.25zm.23-.891c.171.248-.126.148-.353-.105-.227-.253-.38-.71-.323-1.017 0 0-.01-.13.529-.08 0 0 .129.025.066.206-.064.182-.09.747.08.996zm-1.084-.119c.169.283-.146.159-.376-.132-.23-.29-.367-.802-.284-1.136 0 0-.002-.144.58-.064 0 0 .137.035.057.232-.08.196-.145.818.023 1.1zm-1.12-.156c.172.286-.147.164-.38-.13-.234-.292-.376-.812-.293-1.155 0 0-.003-.145.585-.072 0 0 .14.034.059.236-.08.2-.143.836.029 1.121zm-1.027.323c.212.37-.159.213-.441-.166-.283-.379-.472-1.053-.397-1.5 0 0-.011-.19.662-.099 0 0 .161.042.081.306-.08.263-.116 1.089.095 1.46zm-1.09-.275c.211.323-.16.2-.441-.128-.282-.328-.467-.927-.389-1.332 0 0-.01-.171.665-.12 0 0 .162.032.08.272-.082.24-.125.985.085 1.308zm-1.154-.376c.149.277-.14.154-.345-.133-.205-.285-.318-.787-.232-1.115 0 0 .002-.14.54-.058 0 0 .127.035.046.226-.08.193-.158.802-.009 1.08zm-.88-.24c.14.221-.114.125-.303-.102-.189-.227-.308-.628-.248-.892 0 0-.005-.113.46-.053 0 0 .11.026.05.182-.06.154-.1.644.04.865zm-.925.16c.17.248-.126.149-.353-.105-.227-.254-.38-.71-.322-1.017 0 0-.01-.13.528-.08 0 0 .129.025.066.206-.064.182-.09.747.081.996zm-.746-.066c.175.195-.093.143-.316-.049-.224-.191-.407-.565-.39-.834 0 0-.023-.111.446-.13 0 0 .115.007.08.17-.034.163.005.65.18.843zm10.24 10.242c-.516.179-1.435.627-2.173 1.003-.177.008-.354.012-.533.012C5.69 23.423.577 18.31.577 12c0-4.888 3.07-9.057 7.387-10.688.022.02.045.04.07.058.048.039.129.059.17.109.057.067.033.203.058.287.075.259.235.497.501.691.04.029.114.043.148.08.074.085.052.227.108.324.06.102.16.226.284.321.067.052.169.08.232.143.052.05.066.14.103.216.1.204.362.44.488.653a.47.47 0 0 1 .041.088c.053.108.18.338.353.444 0 0 .018.319.336.682-.644-.035-1.265-.399-1.743-.037-.138-.15-.58-.269-.77-.058-.139-.242-.88-.398-1.025-.014-1.053-.472-2.325.202-2.734.878a2.86 2.86 0 0 0-.214.114 1.196 1.196 0 0 0-1.102.187c-.417.301-.853 1.65-.778 2.584.008.1.198.336.266.81.068.469.12.623.12.623-.093.162-.204.234-.219.423-.033.41.318.632.646.842.117.054.249.093.392.099.087.137.42.6.973.6l.04-.001c.211.177.431.225.28.006a.442.442 0 0 1-.034-.059.88.88 0 0 0 .334.13c.002 0 .054.013.097.013.015 0 .06 0 .076-.035s-.016-.072-.027-.084c-.044-.051-.094-.184-.131-.307.04.074.084.144.134.205.262.322.63.475.425.154a.957.957 0 0 1-.122-.392.95.95 0 0 0 .562.33c.235.223.528.315.352.077a.574.574 0 0 1-.091-.225c.142.17.382.389.676.389h.027c.202.136.371.158.22-.038a.692.692 0 0 1-.117-.33c.134.272.39.646.834.767.003 0 .08.022.143.022.049 0 .08-.013.094-.04.022-.038-.006-.083-.016-.098a1.094 1.094 0 0 1-.078-.16c.2.117.346.127.191-.063a.746.746 0 0 1-.14-.379c.108.29.329.695.764.96.003.002.081.04.168.04a.25.25 0 0 0 .112-.026.101.101 0 0 0 .053-.067c.022-.09-.063-.22-.071-.23a1.88 1.88 0 0 1-.134-.35l.003.003c.315.254.723.371.471.118-.153-.154-.212-.417-.217-.632.092.257.315.704.778.792.003 0 .075.014.128.014.029 0 .064-.003.077-.031.005-.012.007-.032-.014-.055a.817.817 0 0 1-.11-.251c.022.016.044.034.067.049.224.147.489.224.523.176.072.06.184.136.337.204.014.032.028.065.04.098 0 0 .07.198.098.305-.363-.094-.984-.276-1.446-.174-.365.08-1.317.606-1.086.976a.17.17 0 0 0 .057.056l.014.005a.962.962 0 0 0 .42.075l.061-.001a2.74 2.74 0 0 0 .442-.07c.254-.084.482-.034.482-.034l-.004.003c.181.02.372.084.569.185.212.107.5.285.573.373.132.16-.07.532-.146.761l-.013.042-.005.019a1.63 1.63 0 0 1-.039.1.42.42 0 0 1-.033-.047c-.072-.121-.11-.228-.148-.179-.038.05-.04.244.032.427a.496.496 0 0 0 .026.055c-.082.15-.182.307-.287.458a1.218 1.218 0 0 1-.204-.234c-.093-.16-.142-.3-.19-.235-.048.064-.05.322.042.565a.86.86 0 0 0 .123.213 5.25 5.25 0 0 1-.307.352 1.736 1.736 0 0 1-.276-.345c-.089-.178-.135-.33-.185-.265-.05.065-.06.338.024.603.034.108.094.207.152.287a16.61 16.61 0 0 1-.345.32 1.455 1.455 0 0 1-.178-.284c-.079-.192-.116-.355-.17-.293-.052.063-.075.347-.005.63.018.07.045.137.075.199-.12.107-.235.209-.34.3a1.261 1.261 0 0 1-.072-.183c-.062-.23-.085-.419-.146-.36-.061.056-.114.361-.069.685.004.032.01.062.017.093l-.03.026c-.069.06-.144.132-.222.21a1.239 1.239 0 0 1-.042-.164c-.04-.24-.045-.43-.108-.385-.062.045-.137.34-.122.67.002.051.008.103.017.155-.091.103-.182.209-.267.313A2.156 2.156 0 0 1 8 19.008c-.045-.25-.055-.45-.119-.401-.058.044-.122.312-.115.623-.064.047-.147.264-.15.51a.935.935 0 0 0 .035.246c-.042.058-.114.099-.164.17-.261.365-.155.8.409.896.173.532.61.79 1.282.797.09 0 .185-.03.273-.025.1.007.182.047.273.05.49.015.746-.14 1.118-.25.278-.08.564-.106.737-.173.265-.104.39-.389.6-.523.079-.05.226-.074.355-.15.11-.064.204-.18.3-.224.085-.038.225-.03.328-.074.17-.075.36-.235.573-.35a16.92 16.92 0 0 1 1.282-.622c.227-.1.467-.333.6-.348.158-.018.341.113.464.1.25.297.338.713.327 1.248.015.001.004.132.004.132s.087 1.148-1.705 1.768zM7.583.205c.188.052.397.159.197.477-.122-.131-.164-.304-.197-.477zm.358.42c.06-.105 0-.159.032-.222.539.07.585.448.352.984-.359-.121-.455-.361-.523-.605C7.86.72 7.904.69 7.94.625zm.588.106c.502.221.58.776.234 1.499a.94.94 0 0 1-.278-.274c-.053-.082-.127-.216-.11-.326.01-.075.07-.177.1-.261.089-.244.123-.463.054-.638zm2.403 2.105c-.009-.026.01-.025.031-.045.75.152.81.884.487 1.435-.152.261-.302.399-.536.326-.194-.06-.22-.217-.314-.324.382-.556.375-.966.332-1.392zm-.866-.55c-.004-.068-.016-.144.011-.21a.74.74 0 0 1 .27.07c.422.223.596 1.018.351 1.486-.105.2-.211.298-.408.241-.317-.09-.409-.45-.537-.599.346-.368.326-.692.313-.988zM9.05 1.287l.02-.01c.825.29 1.299.84.549 1.85-.286-.144-.447-.335-.521-.552-.044-.127-.078-.143-.048-.3.064-.341.085-.717 0-.988zm3.201 4.238l-.052.024c-.1.051-.206.082-.306.1-.62-.134-.807-.84-.807-.84.58-.256.907-.99.7-1.393.006-.015.02-.012.033-.01.263.117.54.311.673.522.256.399.331 1 .119 1.482-.095.022-.156.044-.232.07a.543.543 0 0 0-.04.012l-.07.026-.007.003-.011.004zm1-.501l-.122.104c-.036.068-.145.158-.284.217.11-.335.124-.691.132-.955.228.119.38.282.468.467l-.087.075a.62.62 0 0 0-.163-.194c.032.093.05.188.057.286zM12 .577c5.596 0 10.251 4.023 11.232 9.335a1.862 1.862 0 0 0-.358-.198c-.28-1.248-.882-2.037-2.118-2.487-.414-.151-.807-.326-1.216-.504.024-1.328-1.52-1.3-2.482-1.984-.418-.298-.893-.848-1.371-.95-.926-.197-1.495.448-2.042.899-.134-.146-.335-.29-.627-.42 0 0-.522-.744-.765-.884a.123.123 0 0 1-.034-.026c-.134-.063-.303-.098-.422-.177-.117-.077-.14-.26-.257-.348a1.08 1.08 0 0 0-.225-.122c-.095-.038-.256-.03-.351-.083-.117-.064-.127-.272-.211-.376a.842.842 0 0 0-.408-.273c-.08-.026-.198-.028-.27-.066-.079-.043-.098-.177-.16-.26-.143-.192-.384-.341-.66-.439-.06-.02-.139-.02-.182-.05-.051-.034-.057-.119-.088-.184C9.945.718 10.956.577 12 .577zm11.343 10.068c-.116-.199-.223-.39-.263-.559.08.052.148.11.212.172.02.128.036.257.051.387zM12 0a12 12 0 0 0-3.55.535.27.27 0 0 0-.044-.062c-.103-.1-.226-.177-.482-.112A.647.647 0 0 0 7.52.11l-.006.01c.025.233.058.468.235.629l-.003.028C3.22 2.494 0 6.87 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12S18.627 0 12 0zM5.9 6.312s-.471.107-.6.942c0 0-.022.42.11.328-.111-.506.37-.735.48-.787.155-.069.283-.046.293.086.01.142-.152.205-.2.352.172-.098.558-.326.518-.623-.03-.218-.235-.412-.6-.298zm6.206.512c-.81-.475-2.907-.393-3.4-.43-.484-.038-.726.579-.726.579-.007.13.1-.02.1-.02.317-.57.595-.466.595-.466 1.003.293 1.182 1.767 1.224 2.108.041.34.127.119.127.119.097-.848-.52-1.882-.65-2.015-.13-.131-.007-.206.408-.09 1.247.35 1.364 2.349 1.44 2.59.075.242.122.01.122.01-.17-1.837-.868-2.29-1.054-2.543-.077-.105.554-.12.831.06 1.568 1.013 1.392 2.953 1.534 2.676.143-.283-.395-2.038-1.15-2.636-.152-.119.524.09.773.319 1.18 1.09 1.324 2.271 1.415 2.612.09.34.133.225.133.225.016-1.155-.899-2.617-1.722-3.098zm2.274-.804c.174-.094.379-.707.8-.452.314.189.463.236.463.236s-.219.062-.319.226-.218.29-.566.239c-.366-.055-.433.003-.617.033 0 0 .065-.187.239-.282zm-.673.49c.269.059.516.163.764.324.275.179.573.507.983.474.13-.01.368-.137.463-.2.12-.078.404-.263.328-.547-.034-.126-.184-.147-.273-.25-.124-.143-.12-.283-.218-.448.216.044.34.172.572.2a3.983 3.983 0 0 0-1.31-.797c.04-.022.065-.113.192-.15.115-.033.484.024.246-.025-.24-.067-.389.002-.546.1-.362.226-.656.745-1.037.971-.165.099-.327.076-.464.25.089.177.18.072.3.099zm2.838-.323c-.09.052.057.1.082.125.104.102.336.29.409.448.15.323.103.817-.164.996-.18.12-1.06.449-1.446.448-1.083-.001-1.193-1.191-1.855-1.594.012.114.095.353.19.476.372.486.727 1.487 1.773 1.32.37-.059 1.061-.314 1.339-.488.301-.188.525-.909.218-1.308-.138-.178-.467-.405-.546-.423z" />
    </svg>
  );
});

export default Libuv;
