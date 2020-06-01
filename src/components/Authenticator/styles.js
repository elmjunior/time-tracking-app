import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 20px;
`;

export const SignUpButton = styled.Button.attrs((props) => ({
  color: props.theme.colors.primary,
}))`
  font-size: 20px;
  font-weight: 600;
`;
