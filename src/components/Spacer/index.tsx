import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

type SpacerProps = SpaceProps;
const Spacer = styled.div<SpacerProps>(space);

export default Spacer;
