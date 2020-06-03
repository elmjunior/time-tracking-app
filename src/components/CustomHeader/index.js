import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  SearchInput,
  Icon,
  Button,
  Title,
  Content,
  TitleHolder,
} from './styles';
import {useNavigation} from '@react-navigation/native';
const CustomHeader = ({back, title}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <StatusBar barStyle="light-content" />
        <Button>
          <Icon name="bars" />
        </Button>

        <SearchInput placeholder="Search..." />
        <Button>
          <Icon name="plus-circle" primary />
        </Button>
      </Content>
      <TitleHolder>
        {back && (
          <Button onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" />
          </Button>
        )}
        {title && <Title>{title}</Title>}
      </TitleHolder>
    </Container>
  );
};

export default CustomHeader;
