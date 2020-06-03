import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const W100 = height * 0.1;
const W50 = height * 0.05;

export const Container = styled.View``;

export const SafeAreaView = styled.SafeAreaView``;

export const Content = styled.View`
  margin: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Button = styled.TouchableOpacity`
  width: ${W100}px;
  height: ${W100}px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: ${W100}px;
`;

export const Icon = styled(VectorIcon).attrs((props) => ({
  size: W50,
  name: props.isPaused ? 'ios-play' : 'ios-square',
  color: props.theme.colors.black,
}))``;
export const Label = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 30px;
`;
