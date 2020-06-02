import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 10px 20px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.transparentGray};
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const Content = styled.View``;
export const Title = styled.Text`
  font-size: 16px;
  flex: 1;
  color: ${(props) => props.theme.colors.primary};
`;
export const Label = styled.Text`
  font-size: 20px;
  text-align: right;
  color: ${(props) => props.theme.colors.white};
`;
export const CreatedAt = styled.Text`
  color: ${(props) => props.theme.colors.gray};
  text-align: right;
`;
