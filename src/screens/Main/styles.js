import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.black};
`;
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width * 0.8}px;
  margin: 20px;
`;
