import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const imageWidth = width / 2 - 40;

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const TitleHolder = styled.View`
  padding: 10px 0;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${imageWidth}px;
  height: 120px;
`;
