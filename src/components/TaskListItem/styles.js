import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 30px;
`;

export const Time = styled.Text`
  color: ${(props) => props.theme.colors.yellow};
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${(props) => props.theme.colors.primary};
  flex: 1;
`;
export const Date = styled.Text`
  color: ${(props) => props.theme.colors.yellow};
`;
