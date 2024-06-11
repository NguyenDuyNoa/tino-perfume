import React, { useEffect, useState } from 'react';
import { Box, Modal } from '@mui/material';

const ModalConfirm = ({
  isShow = 'false',
  onClose,
  onSave,
  text = 'Bạn có chắc chắn muốn xóa?',
  cancelLabel = 'Hủy bỏ',
  confirmLabel = 'Đồng ý',
  fontSize = 'text-lg',
  width = 300,
  height = 150
}) => {
  const [open, setOpen] = useState(isShow);

const modalConfirmStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: '21px',
    pl: '32px'
  };

  useEffect(() => {
    setOpen(isShow);
  }, [isShow]);

  return (
    <>
      <Modal open={open}>
        <Box sx={modalConfirmStyle} width={width} height={height}>
          <p className={`${fontSize} text-center mt-4 font-semibold`}>{text}</p>
          <div className='flex justify-end mt-8 font-semibold'>
              <button className='w-16 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mr-3' onClick={() => onClose()}>
                {cancelLabel}
              </button>
              <button className='w-16 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded mr-3' onClick={() => onSave()}>
                {confirmLabel}
              </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalConfirm;