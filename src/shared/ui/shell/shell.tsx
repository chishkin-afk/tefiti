import type { SVGProps } from "react";

export function Shell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 640 640" fill="none" aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M320 113c23 0 42 8 56 22 40-6 74 14 89 50 38 12 64 43 62 79 35 15 42 48 10 79 24 27 8 66-29 79L367 512q-47 36-94 0L132 434c-39-13-43-46-20-73-40-25-39-65 1-88-3-39 22-70 62-85 14-37 50-58 92-53 14-14 30-22 53-22Z" />
        <path d="m267 135 33 188m76-188-26 188m115-138-75 161m137-82L412 391M175 188l81 157M113 273l116 117m-117-29 138 111m287-129L389 472M273 512q47 7 94 0" />
      </g>
      <circle cx="320" cy="414" r="77" fill="currentColor" />
    </svg>
  );
}
