import styled from 'styled-components/native';
import VectonIcon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex-direction: row;
  margin: 20px;
  align-items: center;
  justify-content: flex-end;
`;
export const Icon = styled(VectonIcon).attrs((props) => ({
  size: 24,
  color: props.theme.colors.white,
}))``;
export const TimeCounter = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  margin-left: 20px;
`;
