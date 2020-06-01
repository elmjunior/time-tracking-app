import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export const Container = styled.View``;

export const SignInButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  width: ${width - 40}px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 20px;
  height: 50px;
`;
export const SignInButtonText = styled.Text`
  color: ${(props) => props.theme.colors.darkText};
  font-size: 20px;
  font-weight: 600;
`;
export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  height: 50px;
  background-color: ${(props) => props.theme.colors.transparentGray};

  color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
`;
