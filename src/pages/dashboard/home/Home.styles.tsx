import { Button } from '@shopify/polaris';
import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 26px;
  grid-row-gap: 26px;
  background-color: white;
`;
export const CardTable = styled.div`
  &:hover {
    background-color: #ffecb3;
    color: black;
    cursor: pointer;
  }
  height: 63px;
  width: 105px;
  display: flex;
  background-color: #f6f6f7;
  justify-content: center;
  align-items: center;
  color: #babec3;
  border-radius: 4px;
  font-style: bold;
  font-weight: 900;
  font-size: 42px;
  line-height: 20px;
  transition: 0.3s;
`;
export const CardContainer = styled.div`
  /* width: 1170px;
  height: 768px; */
  display: flex;
`;
export const IconButtonStack = styled.div`
  margin-bottom: 80px;
  margin-right: 265px;
  margin-top: 60px;
  justify-content: flex-end;
  display: flex;
`;

export const ButtonArrowLeftWrapper = styled('span')`
  & .Polaris-Button {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export const ButtonArrowRightWrapper = styled('span')`
  & .Polaris-Button {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
