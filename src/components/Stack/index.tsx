import styled from 'styled-components';
import {
  color,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

type StackProps = FlexboxProps & SpaceProps & LayoutProps;

const Stack = styled.div<StackProps>`
  display: flex;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

export default Stack;
