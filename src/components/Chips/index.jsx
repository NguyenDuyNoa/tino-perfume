import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Chips = ({name}) => {
  return (
      <Stack direction="row" spacing={1}>
        <Chip label={name} color={name === 'Nam' ? 'primary' : name === 'Nữ' ? 'secondary' : 'warning'} />
      </Stack>
  );
}

export default Chips;