import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export const Container = styled.View`
  margin: 20px;
`;
export const SignInButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  width: ${width - 40}px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 30px;
  margin-bottom: 20px;
`;
export const SignInButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  font-weight: 800;
`;
export const SignUpButton = styled.Button.attrs((props) => ({
  color: props.theme.colors.primary,
}))`
  font-size: 20px;
  font-weight: 800;
`;
