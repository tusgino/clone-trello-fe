
// Config for typescript to recognize svg files as modules
// Vietnamese: Cấu hình cho typescript nhận diện file svg là module
declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
  const src: string
  export default src
}
