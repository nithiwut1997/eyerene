import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const DialogError = (props: any) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="alert-dialog-title"
      aria-descripbedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"เกิดข้อผิดพลาด"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          autoFocus
          onClick={props.onClickButton}
        >
          ตกลง
        </Button>
      </DialogActions>
    </Dialog>
  );
};
