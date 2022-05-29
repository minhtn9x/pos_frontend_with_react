import { Button, Frame, Heading, Navigation, TopBar } from '@shopify/polaris';
import { ArrowLeftMinor, HomeMajor, OrdersMajor } from '@shopify/polaris-icons';
import NavBar from 'layouts/NavBar';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
  ContentWrapper,
  FooterWrapper,
  LayoutWrapper,
  NavBarWrapper,
} from '../layouts/POSLayout/POSLayout.style';

type Props = {};

// TODO: Add authorization logic here

const POSLayout: React.FC<Props> = ({ children }) => {
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: 'Back to Shopify',
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Jaded Pixel App"
        items={[
          {
            label: 'Dashboard',
            icon: HomeMajor,
          },
          {
            label: 'Jaded Pixel Orders',
            icon: OrdersMajor,
          },
        ]}
      />
    </Navigation>
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      onNavigationToggle={() => setMobileNavigationActive(true)}
    />
  );

  return (
    <Frame>
      <LayoutWrapper>
        <NavBarWrapper>
          <NavBar></NavBar>
        </NavBarWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        <FooterWrapper>Footer</FooterWrapper>
      </LayoutWrapper>
    </Frame>
  );
};

export default POSLayout;
