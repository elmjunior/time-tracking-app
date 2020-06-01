import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
`;

export const SearchInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  height: 30px;
  background-color: ${(props) => props.theme.colors.transparentGray};
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0px 10px;
  text-align: center;
`;
