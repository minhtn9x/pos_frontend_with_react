import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const NavBarWrapper = styled.div`
  height: 60px;
  width: 100%;
  padding: 0 2rem;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.15);
  transition: 200ms background-color ease-in-out;
  background-color: rgba(255, 255, 255, 1);
`;

export const IconWrapper = styled('span')`
  & .Polaris-Icon {
    size: 7px;
    font-size: 10px;
    color: red;
  }
`;

export const FooterWrapper = styled.div`
  height: 60px;
  width: 100%;
  box-shadow: 1px -2px 2px -1px rgb(0 0 0 / 15%);
  transition: 200ms background-color ease-in-out;
  background-color: rgba(255, 255, 255, 1);
`;

export const ContentWrapper = styled.div`
  flex: 1;
  height: 100%;
  overflow: scroll;
`;
