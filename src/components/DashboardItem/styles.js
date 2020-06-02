import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.transparentGray};
  height: ${height * 0.13}px;
  width: ${width * 0.58}px;
  margin-left: 20px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
`;
export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
`;
