
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import { Link ,useNavigate   } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import WomanIcon from '@mui/icons-material/Woman';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {CartContext} from 'CartContext';
import Badge from '@material-ui/core/Badge';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import {
  
    TextField,
  
  } from '@material-ui/core';

import {
 
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container
  } from "reactstrap";
import { ShoppingCart } from '@material-ui/icons';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Drawer2 = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const navigate = useNavigate()
    const logout =()=>
    {
    
    
        localStorage.removeItem('token');
        navigate('/')
    }
    const {cart} = React.useContext(CartContext);
  return (
    <div>



<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{   backgroundColor:"white", boxShadow: "0 6px 10px -4px rgb(0 0 0 / 15%)"}}>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{}}>
          <Typography variant="h6" noWrap component="div" style={{float:""}}>
           
         <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
         <TextField style={{width:"390px"}} label="RECHERCHER" type="text"  ></TextField>

<SearchIcon style={{color:"#6c757d",marginTop:"25px"}}/>

         </div>
           
            {/* <i style={{color:"#9A9A9A "}} className="fa fa-facebook-square" />
            <i style={{color:"#9A9A9A "}} className="fa fa-instagram" />
           
            <i style={{color:"#9A9A9A "}} className="fa fa-shopping-cart"></i> */}
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <Nav navbar style={{marginLeft:"900px",flexDirection:"row",justifyContent:"space-around"}}>
            <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://www.facebook.com/CreativeTim?ref=creativetim"
              target="_blank"
              title="Like us on Facebook"
            >
              {/* <i style={{color:"#9A9A9A "}} className="fa fa-facebook-square" />
              <p className="d-lg-none">Facebook</p> */}
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
              target="_blank"
              title="Follow us on Instagram"
            >
              {/* <i style={{color:"#9A9A9A ",marginLeft:"10px"}} className="fa fa-instagram" />
              <p className="d-lg-none">Instagram</p> */}
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
              data-placement="bottom"
              href="https://www.github.com/CreativeTimOfficial/paper-kit-react?ref=creativetim"
              target="_blank"
              title="Star on GitHub"
            >
              {/* <i style={{color:"#9A9A9A ",marginLeft:"10px"}} className="fa fa-shopping-cart" />
              <p className="d-lg-none">Panier</p> */}

            </NavLink>
          


            </NavItem>
          
             

            </Nav>
            <Link to='/cart'>
            <Badge color='secondary' badgeContent={cart.itemsCount}>
                <ShoppingCartIcon style={{color:"#6c757d",marginLeft:"100px",marginTop:"-18px"}}/>
            </Badge>
            </Link>
            <LogoutIcon onClick={()=>logout()} style={{color:"#9A9A9A",marginLeft:"300px",float:"left",marginTop:"-20px"}}/>
</div>
          </Typography>
          </div>
        
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Homme'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <Link to="/admin"><AccessibilityNewIcon /></Link>
                 
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Femme', 'Bébé '].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <Link to="/list"><WomanIcon  /></Link> : <Link to="/listProduct"><ChildCareIcon /></Link>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Main>
    </Box>
    </div>
  )
}

export default Drawer2