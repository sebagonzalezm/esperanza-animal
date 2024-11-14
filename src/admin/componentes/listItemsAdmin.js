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
    <ListItem button component="a" href="/proxtorneos">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Próximos torneos" />
    </ListItem>
    <ListItem button component="a" href="/mistorneos">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mis torneos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Resultados" />
    </ListItem>
 
  </div>
);
export const ListItemAdmin = (
  <div>
    <ListItem button component="a" href="/admin/stock">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Manejo de stock" />
    </ListItem>
    <ListItem button component="a" href="/admin/agregarproducto">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Agregar producto" />
    </ListItem>
    <ListItem button component="a" href="/admin/registrodecompras">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Registro de compras" />
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
