import styled from 'styled-components/native';

export const Container = styled.View``;
export const TitleHolder = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.sizes.title};
  font-weight: 600;
  flex: 1;
`;
