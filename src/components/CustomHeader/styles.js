import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/FontAwesome';
export const Container = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  height: 30px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.transparentGray};
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  margin: 0 30px;
  padding: 0px 10px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity.attrs((props) => ({}))``;

export const Icon = styled(VectorIcon).attrs((props) => ({
  color: props.primary ? props.theme.colors.primary : props.theme.colors.gray,
  size: props.primary ? 28 : 24,
}))``;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.title};
  font-weight: 600;
  text-align: left;
  align-self: stretch;
  margin-top: 20px;
`;
