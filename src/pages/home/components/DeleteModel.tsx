import * as React from "react";
import {
  IconButton,
  Stack,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { Delete, Close } from "@mui/icons-material";

export default function DeleteModel() {
  const [open, setOpen] = React.useState(false);
  const matchesSm = useMediaQuery("(max-width:600px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton color="error" onClick={handleClickOpen}>
        <Delete />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"lg"}
      >
        <DialogTitle id="alert-dialog-title">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ color: "#333" }} gutterBottom>
              Delete order
            </Typography>
            <IconButton sx={{ color: "#333" }} onClick={handleClose}>
              <Close />
            </IconButton>
          </Stack>
          <Divider />
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ color: "#333" }}
          >
            <Typography
              variant={matchesSm ? "h5" : "h1"}
              align="center"
              mb={4}
              mt={1}
            >
              Are you sure you want to delete {!matchesSm && <br />} this order?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{ p: 2, justifyContent: matchesSm ? "space-between" : "flex-end" }}
        >
          <Button
            onClick={handleClose}
            size="small"
            sx={{ backgroundColor: "#C6C6C6", mr: 2 }}
          >
            {!matchesSm && " No,"} cancel
          </Button>
          <Button onClick={handleClose} size="small" color="error">
            {!matchesSm && " Yes,"} delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
