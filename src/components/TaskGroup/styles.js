import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/Ionicons';
export const Container = styled.View``;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  margin-bottom: 10px;
`;

export const LoadMoreContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const LoadMoreText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
`;
