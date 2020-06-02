import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.black};
  flex: 1;
`;
export const Content = styled.SafeAreaView`
  flex: 1;
`;
export const FlatList = styled.FlatList`
  margin: 10px;
`;
