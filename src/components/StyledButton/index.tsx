import { ButtonProps } from '@shopify/polaris';
import styled from 'styled-components';
import {
  background,
  BackgroundProps,
  border,
  BordersProps,
  buttonStyle,
  ButtonStyleProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

type StyledButtonProps = FlexboxProps &
  SpaceProps &
  LayoutProps &
  ButtonStyleProps &
  ColorProps &
  TypographyProps &
  BordersProps &
  BackgroundProps;

const StyledButton = styled.div<StyledButtonProps>`
  &:hover {
    background-color: #ffecb3;
    color: black;
    cursor: pointer;
  }
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;

  ${buttonStyle}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${background}
  ${border}
  ${typography}
`;

export default StyledButton;
