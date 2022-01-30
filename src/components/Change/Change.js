import  React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Table3 from "../Table/Table3";
import ModalAdd from "../Modal/ModalAdd";
import  ModalSearch2 from "../Modal/ModalSearch2";
import ModalFilter2 from "../Modal/ModalFilter2";
import ModalSettings from "../Modal/ModalSettings";
import ModalDelete from "../Modal/ModalDelete";
import FilterList from '@mui/icons-material/FilterList';
import ModalCopy from "../Modal/ModalCopy";
import ModalPast from "../Modal/ModalPast";
import ModalError from "../Modal/ModalError";
import { useDispatch } from "react-redux";
import { DescendingSort,AscendingSort } from "../../app/redux/dataSlice2";
import "./Change.css";

function Change() {
  const dispatch = useDispatch();
  return (
    <div>
     <div className="top1" style={{marginLeft:`0px`}}>
          <TextField
          id="filled-search input-with-icon-textfield"
          label="Variant Table"
          type="search"
          defaultValue="AVC-BASECMB-VXX"
          InputProps={{
            endAdornment: (
             <InputAdornment position="end">
               <SearchIcon style={{color:`black`}} />
             </InputAdornment>
            ),
          }}
          helperText="FORKLIFTER MODEL REST.XX"
          variant="filled"
          sx={{marginLeft:'50px'}}
        />
      </div>
     <div className="buttom">
      <div className="button-control" style={{display:`flex`, flexDirection: `row-reverse`,marginRight:`25px`}}>
         <ModalSettings />
         < ModalSearch2 />
         <Button onClick={() => dispatch(DescendingSort())}>
          <FilterList style={{color:`black`}}/>
        </Button>
         <Button onClick={() => dispatch(AscendingSort())}>
          <FilterList style={{transform: `rotate(-180deg)`,color:`black`}} />
        </Button>
       <ModalFilter2 />
         <ModalDelete />
         <ModalCopy/>
         <ModalAdd/>
         <ModalPast />
         <ModalError />
      </div>
      <Table3 />
      <div style={{display: `flex`,flexDirection: `row-reverse`,height: `100px`,alignItems:` center`}}>
        <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem', bgcolor:'chartreuse'}}>
           CANCEL
         </Button>
         <Button variant="contained" size="small" color="primary"  sx={{mx:'1rem' ,bgcolor:'chartreuse'}}>
            SAVE
         </Button>
      </div>
     </div>
    </div>
    
  );
}
export default Change;