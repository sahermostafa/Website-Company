import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Table4 from "../Table/Table4";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux"; 


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
export default function ModalFilter2(props) {
  const {table2} = useSelector(state => state.table2);
  const [value, setValue] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data,setData]=useState(table2);
  useEffect(() => {
    totalTable();
    }
  , [value]);
 const totalTable = () => {
    const datats = table2.filter((row) => {
     if( row.LifterModel.includes(value))
     return row;
     if( row.PowerSource.includes(value))
     return row;
     if( row.WheelType.includes(value) )
     return row;
     if( row.counterweight.includes(value))
     return row;
    });
    if(datats){    
    setData(datats);
    }
  }
    return (
    <div>
        <Stack direction="row" spacing={1} onClick={handleOpen}>
          <Button size="small"  variant="contained" color="primary" sx={{ textTransform: 'none',width:`10px`,mx:'1rem',marginBottom:'20px',bgcolor:'black'}}>
           Filter
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
                      Filter
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
         </Box>
         <div style={{marginBottom:`3%`,display:`flex`,justifyContent:`space-around`}}>
           <TextField id="outlined-basic" label="Filter" variant="outlined" value={value}  onChange={(e) => setValue(e.target.value)} />
         </div>
      
         <Table4 data={data} />
          <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
            <Button variant="contained" size="small" color="primary" onClick={handleClose} sx={{ marginTop:'4rem',bgcolor:'chartreuse'}}>CANCEL</Button>
          </div>
          
        </Box>
     </Modal>
    </div>
    );
  }