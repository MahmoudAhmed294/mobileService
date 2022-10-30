import { IconButton, Stack } from "@mui/material";
import { Mode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DeleteModel from "./DeleteModel";

type Props = {};

const Action = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" alignItems="center">
      <IconButton
        sx={{ color: "#EDEDED" }}
        onClick={() => navigate("/updateOrderDetails")}
      >
        <Mode />
      </IconButton>
      <DeleteModel />
    </Stack>
  );
};

export default Action;
