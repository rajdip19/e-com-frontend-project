import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerLink}>
      <Typography variant="body2" align="center" style={{}}>
        &copy; 2023 -{' '}Rajdip Sen
      </Typography>
    </footer>
  );
};

export default Footer;
