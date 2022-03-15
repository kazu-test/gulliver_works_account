import * as React from "react";
import { SVGProps } from "react";

const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.722 5.597C12.24 2.477 10.002.907 7 .907c-3.003 0-5.24 1.57-6.722 4.691a.942.942 0 0 0 0 .805c1.481 3.12 3.72 4.69 6.722 4.69 3.003 0 5.24-1.57 6.722-4.691a.942.942 0 0 0 0-.805ZM7 9.969C4.48 9.969 2.634 8.69 1.333 6 2.634 3.31 4.48 2.031 7 2.031S11.366 3.31 12.667 6C11.367 8.69 9.522 9.969 7 9.969ZM6.937 3.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 1 1 0 3.5Z"
      fill="#000"
    />
  </svg>
);

export default SvgVector;
