import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Table5 from "../Table/Table5";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
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
export default function ModalSearch() {
  const [values, setValues] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {table1} = useSelector(state => state.table1);
  const [datas,setDatas]=useState(table1);
  useEffect(() => {
    totalTables();
    }
  , [values]);
 const totalTables = () => {
    const datatss = table1.filter((row) => {
      if( row.VariantTable === values )
      return row;
      if ( row.Description === values)
      return row; 
    });
    if(datatss){    
    setDatas(datatss);
    }
  }
    return (
    <div>
        <Stack direction="row" spacing={1} onClick={handleOpen}>
          <SearchIcon style={{color:`black`}}/>
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
                      Search
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
         </Box>
         <div style={{marginBottom:`3%`,display:`flex`,justifyContent:`space-around`}}>
           <TextField id="outlined-basic" label="Search" variant="outlined" value={values}  onChange={(e) => setValues(e.target.value)} />
         </div>
      
         <Table5 data={datas} />
          <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
            <Button variant="contained" size="small" color="primary" onClick={handleClose} sx={{ marginTop:'4rem',bgcolor:'chartreuse'}}>CANCEL</Button>
          </div>
          
        </Box>
     </Modal>
    </div>
    );
  }