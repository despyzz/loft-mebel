declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: any;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}