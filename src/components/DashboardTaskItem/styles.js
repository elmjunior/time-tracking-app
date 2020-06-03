import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px 20px;
  align-items: center;
  justify-content: space-between;

  flex: 3;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  flex: 1;
`;
export const Label = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  margin-left: 10px;
`;
