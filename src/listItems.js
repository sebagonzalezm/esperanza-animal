import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

export const ListItemUser = (
  <div>
    <ListItem button component="a" href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Catalogo" />
    </ListItem>
    <ListItem button component="a" href="/carrito">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Carrito" />
    </ListItem>
    <ListItem button component="a" href="/conocenos">
      <ListItemIcon>
      <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="¿Quienes somos?" />
    </ListItem>
 
  </div>
);
export const ListItemAdmin = (
  <div>
    <ListItem button component="a" href="/admin/torneos">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Carrito" />
    </ListItem>
    <ListItem button component="a" href="/admin/publicar">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Publicar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Algo falta" />
    </ListItem>
 
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Esperanza Animal</ListSubheader>
    <ListItem button component="a" href="https://www.instagram.com/fundacionesperanzaanimalchile/">
      <ListItemIcon>
       <InstagramIcon/>
      </ListItemIcon>
      <ListItemText primary="Instagram" />
    </ListItem>
    <ListItem button component="a" href="https://web.facebook.com/people/Acda-Cerronavia/pfbid0GT684xq8sU5e8YZnjSRP7xBUzZrBAWEwK1YwFYeMwQtLpMhPu1ikh5DCVx5qnxE2l/?ref=xav_ig_profile_web">
      <ListItemIcon>
        <FacebookIcon/>
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
  </div>
);
