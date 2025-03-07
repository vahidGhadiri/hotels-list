import type { SVGProps } from "react";
const SvgLocationPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    {...props}
  >
    <g fill="#231F20">
      <path d="M32 0C18.745 0 8 10.745 8 24c0 5.678 2.502 10.671 5.271 15l17.097 24.156a2 2 0 0 0 3.264 0L50.729 39C53.375 35.438 56 29.678 56 24 56 10.745 45.255 0 32 0m0 38c-7.732 0-14-6.268-14-14s6.268-14 14-14 14 6.268 14 14-6.268 14-14 14" />
      <path d="M32 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12m0 22c-5.523 0-10-4.478-10-10s4.477-10 10-10 10 4.478 10 10-4.477 10-10 10" />
    </g>
  </svg>
);
export default SvgLocationPin;
