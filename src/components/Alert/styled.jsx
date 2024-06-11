import { styled, Snackbar } from '@mui/material';

export const StyledSnackbar = styled(Snackbar)(() => ({
  top: '10px !important',
  right: '10px !important',
  position: 'absolute',
  alignItems: 'start'
}));

export const StyledAlert = styled(Snackbar)(({ margintop = '20px' }) => ({
  position: 'absolute',
  alignItems: 'start',
  left: '42% !important',
  top: '10% !important',
  marginTop: margintop
}));