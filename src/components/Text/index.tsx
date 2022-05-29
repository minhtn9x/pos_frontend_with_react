import { LayoutProps } from '@shopify/polaris';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  FlexboxProps,
  layout,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

type TextProps = FlexboxProps & ColorProps & TypographyProps & SpaceProps & LayoutProps;
const Text = styled.div<TextProps>(color, typography, space, layout);

export default Text;
