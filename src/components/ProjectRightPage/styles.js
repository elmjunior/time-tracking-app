import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  margin-left: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.transparentGray};
  border-top-left-radius: 30px;
  align-items: center;
  justify-content: flex-end;
`;
export const Button = styled.TouchableOpacity``;
export const Icon = styled(VectorIcon).attrs({
  size: 28,
})`
  margin-bottom: 30px;
  color: ${(props) => props.theme.colors.yellow};
`;
