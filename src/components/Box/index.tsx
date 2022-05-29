import styled from 'styled-components';
import {
  backgroundImage,
  BackgroundImageProps,
  BackgroundProps,
  border,
  BordersProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';

type BoxProps = FlexboxProps &
  SpaceProps &
  LayoutProps &
  GridProps &
  ColorProps &
  TypographyProps &
  BordersProps &
  ZIndexProps &
  BackgroundProps &
  BackgroundImageProps &
  PositionProps;
const Box = styled.div<BoxProps>(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  position,
  grid,
  zIndex,
  backgroundImage,
);

export default Box;
