import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Table2 from "../Table/Table2";
import AddIcon from '@mui/icons-material/Add';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};
export default function ModalAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [caracteristic, setCaracteristic] = React.useState('');

  const handleChange1 = (event) => {
    setCaracteristic(event.target.value);
  };

  return (
    <div>
        <Stack direction="row" spacing={1} onClick={handleOpen}>
          <Button >
            <AddIcon style={{color:`black`}}/>
          </Button>
        </Stack>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Search and Replace
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
         </Box>
            <TextField type="text"  defaultValue="Cushion"  id="fullWidth" />
            <Checkbox {...label} />
            <Typography variant="overline"  gutterBottom>
                Explicit term
            </Typography>
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">SEARACH IN</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={caracteristic}
              label="CHARACTERISTIC"
              onChange={handleChange1}
              >
                <MenuItem value={60}>Characteristic</MenuItem>
                <MenuItem value={70}>Cell</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Table2 />
          <hr/>
          <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
            <Button variant="contained" size="small" color="primary" onClick={handleClose} sx={{ marginTop:'4rem',bgcolor:'chartreuse'}}>CANCEL</Button>
            <Button variant="contained" size="small" color="primary"  sx={{ mx:'1rem',marginTop:'4rem',bgcolor:'chartreuse'}}>REPLACE</Button>
            <Button variant="contained" size="small" color="primary"  sx={{ mx:'1rem',marginTop:'4rem',bgcolor:'chartreuse'}}>SEARCH</Button>
          </div>
        </Box>
     </Modal>
    </div>
    );
  }