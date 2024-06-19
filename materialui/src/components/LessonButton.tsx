import { Button,Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const LessonButton = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="text" color="primary">
          Mavi
        </Button>
        <Button variant="text" color="secondary">
          Mor
        </Button>
        <Button variant="text" color="success">
          Yesil
        </Button>
        <Button variant="text" color="warning">
          Sari
        </Button>
        <Button variant="text" color="info">
          Acik mavi
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" color="primary">
          Mavi
        </Button>
        <Button variant="outlined" color="secondary">
          Mor
        </Button>
        <Button variant="outlined" color="success">
          Yesil
        </Button>
        <Button variant="outlined" color="warning">
          Sari
        </Button>
        <Button variant="outlined" color="info">
          Acik mavi
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          Mavi
        </Button>
        <Button variant="contained" color="secondary">
          Mor
        </Button>
        <Button variant="contained" color="success">
          Yesil
        </Button>
        <Button variant="contained" color="warning">
          Sari
        </Button>
        <Button variant="contained" color="info">
          Acik mavi
        </Button>
      </Stack>
      <Stack direction={"row"} display="block" spacing={2}>
        <Button variant="contained" size="small">
          Butonum
        </Button>
        <Button variant="contained" size="medium">
          Butonum
        </Button>
        <Button variant="contained" size="large">
          Butonum
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <AddIcon color="error" />
        <Button variant="contained" startIcon={<AddIcon />}>
          Ekle
        </Button>
        <Button variant="contained" endIcon={<AddIcon />} onClick={()=>alert("tiklandi")}>
          Ekle
        </Button>
      </Stack>
    </Stack>
  );
};

export default LessonButton
