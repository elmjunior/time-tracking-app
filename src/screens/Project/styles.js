import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.black};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;
export const ContentInside = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const RightPane = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;
