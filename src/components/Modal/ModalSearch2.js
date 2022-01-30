import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};
export default function ModalSearch2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [whell, setWhell] = React.useState('');
  const [operature, setOperature] = React.useState('');
  const [cushion, setCushion] = React.useState('');
  const [value, setValue] = React.useState('');
  const [operature2, setOperature2] = React.useState('');
  const [caracteristic, setCaracteristic] = React.useState('');

  const handleChange1 = (event) => {
    setWhell(event.target.value);
  };
  const handleChange2 = (event) => {
    setOperature(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue(event.target.value);
  };
  const handleChange4 = (event) => {
    setCushion(event.target.value);
  };
  const handleChange5 = (event) => {
    setOperature2(event.target.value);
  };
  const handleChange6 = (event) => {
    setCaracteristic(event.target.value);
  };

  return (
    <div>
      <Stack direction="row" spacing={1} onClick={handleOpen}>
            <Button >
                <SearchIcon style={{color:`black`}} />
            </Button>
        </Stack>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                      <MenuIcon />
                   </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Search and Replace
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
         </Box>
        <Typography variant="h6" component="div" gutterBottom sx={{marginLeft:'7%'}}>
                Search
        </Typography>
        <div style={{display:`flex`,justifyContent:`space-around`}}>
            <TextField  label="Characteristic" id="fullWidth" />
            <TextField  label="value" id="fullWidth" />
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Condition" />
            </FormGroup>
        </div>
           
          <Typography variant="h6" component="div" gutterBottom sx={{marginLeft:'7%'}} >
            Replace by
        </Typography>
        <TextField  label="Term" id="fullWidth" sx={{marginLeft:'7%'}} />
    <hr/>
    <div style={{display:`flex`,justifyContent:`space-around`}}>
        <Typography variant="h6" component="div" gutterBottom >
            Condition
        </Typography>
        <div className="icons" >
            <AddIcon />
            <DeleteIcon />
        </div>
    </div>
    <div style={{display:`flex`,justifyContent:`space-around`}}>
       <Checkbox {...label} defaultChecked />
       <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">WHEEL TYPE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={whell}
          label="WHEEL TYPE"
          onChange={handleChange1}
        >
           <MenuItem value={90}>WHEEL TYPE</MenuItem>
        </Select>
       </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Operature</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={operature}
          label="Operature"
          onChange={handleChange2}
        >
           <MenuItem value={80}>Operature</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">CUSHION</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cushion}
          label="CUSHION"
          onChange={handleChange3}
        >
           <MenuItem value={70}>CUSHION</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div style={{display:`flex`,justifyContent:`space-around`}}>
    <Checkbox {...label} defaultChecked />
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">CHARACTERISTIC</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={caracteristic}
          label="CHARACTERISTIC"
          onChange={handleChange4}
        >
           <MenuItem value={60}>CHARACTERISTIC</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Operature</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={operature2}
          label="Operature"
          onChange={handleChange5}
        >
           <MenuItem value={10}>+</MenuItem>
           <MenuItem value={20}>-</MenuItem>
           <MenuItem value={30}>IN</MenuItem>
           <MenuItem value={40}>NOT IN</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">VALUE</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="VALUE"
          onChange={handleChange6}
        >
           <MenuItem value={50}>VALUE</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
        <Button variant="contained" size="small" color="primary" onClick={handleClose}  sx={{mx:'1rem',height:'30px' ,bgcolor:'chartreuse'}}>
           CANCEL
         </Button>
         <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem',height:'30px' ,bgcolor:'chartreuse'}}>
            REPLACE
         </Button>
      </div>
        </Box>
         
    </Modal>
  </div>
    );
}