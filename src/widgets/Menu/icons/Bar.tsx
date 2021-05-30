import * as React from "react";

export const Bar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M0 22h1v-5h4v5h2V12h4v10h2V7h4v15h2V1h4v21h1v1H0v-1zm4-4H2v4h2v-4zm6-5H8v9h2v-9zm6-5h-2v14h2V8zm6-6h-2v20h2V2z" />
  </svg>
);
