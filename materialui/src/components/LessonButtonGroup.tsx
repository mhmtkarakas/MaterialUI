import React from 'react'
import { Button,Stack, ButtonGroup } from '@mui/material';

const LessonButtonGroup = () => {
  return (
    <Stack direction={"row"}>
      <ButtonGroup variant="contained">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" orientation='vertical'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" orientation='vertical' size='small'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" orientation='vertical' size='small' color='error'>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default LessonButtonGroup
