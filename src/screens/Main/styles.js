import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const iconSize = width * 0.3;
export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${iconSize}px;
  width: ${iconSize}px;
  margin-left: -15px;
  flex: 1;
`;
