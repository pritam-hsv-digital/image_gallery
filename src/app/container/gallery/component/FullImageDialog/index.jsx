import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Zoom from '@mui/material/Zoom';
import { TransitionProps } from '@mui/material/transitions';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Zoom direction="up" ref={ref} {...props} />;
// });

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom    ref={ref} {...props} />;
});


export default function FullImageDialog(props) {
  const { open, setOpen ,src , alt ,user} = props
  console.log(alt);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{backgroundColor: "rgba(0,0,0,0.3)" ,display:"flex", flexDirection:"column" , height:"100vh"}}
      >
        <AppBar sx={{ position: "fixed", backgroundColor : "rgba(0,0,0,0.3)" ,}}>
          <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
        
            <Typography sx={{ textAlign : "center"  ,width:"90%"}} variant="h6" component="div">
              { alt}
            </Typography> 
               <IconButton component="div"
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>

        </AppBar>
        <div className="w-full py-[20%]  md:px-[10%] md:py-0  bg-[rgba(0,0,0,0.3)]">
          <img src={src} alt={alt} />

           <Typography sx={{ textAlign : "center"  ,width:"90%"}} variant="h6" component="div">
             capture by  { user}
            </Typography> 
          </div>
        
       
      </Dialog>
    </div>
  );
}
