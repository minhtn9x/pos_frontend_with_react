import styled from 'styled-components';

export const CategoryContainer = styled.div`
  width: 870px;
  background-color: white;
`;

export const GridCategoryWrapper = styled.div`
  width: 816px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: gray;
  grid-gap: 3px;
  padding-bottom: 3px;
`;

export const CardCategory = styled.div`
  height: 52px;
  width: 136px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
export const ButtonCollapseWrapper = styled('span')`
  & .Polaris-Button {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
