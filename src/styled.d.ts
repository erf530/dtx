import { } from 'styled-components';
import { CSSProp } from 'styled-components';

// This is so typescript recognizes css prop
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
