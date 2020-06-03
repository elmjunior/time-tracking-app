import React, {useState} from 'react';

import {Container, SafeAreaView, Icon, Content, Button, Label} from './styles';

// eslint-disable-next-line no-extend-native
String.prototype.toHHMMSS = function () {
  let sec_num = parseInt(this, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

const TaskTimeTrack = () => {
  const [isPaused, setPaused] = useState(true);
  const [time, setTime] = useState(0);

  const handleTrackTime = () => {
    if (isPaused) {
      setTime((t) => t + 1);
    }
    setPaused(!isPaused);
  };

  return (
    <Container>
      <SafeAreaView>
        <Content>
          <Label>{time.toString().toHHMMSS()}</Label>
          <Button onPress={handleTrackTime}>
            <Icon isPaused={isPaused} />
          </Button>
        </Content>
      </SafeAreaView>
    </Container>
  );
};

export default TaskTimeTrack;
