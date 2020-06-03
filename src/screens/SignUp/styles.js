import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const Container = styled.ImageBackground`
  flex: 1;
  background-color: ${(props) => props.theme.colors.black};
`;
export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: ${(props) =>
    props.white ? props.theme.colors.white : props.theme.colors.primary};
  font-size: 60px;
  font-weight: 800;
`;
export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width * 0.5}px;
  margin: 20px;
`;
