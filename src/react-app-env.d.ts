/// <reference types="react-scripts" />

declare module "*.svg" {
  import * as React from "react";
  
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  
  const src: string;
  export default src;
}

declare module "*.svg?inline" {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: string;
  export default content;
}
