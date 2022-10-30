import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import DatePicker from "react-datepicker";

const drawerBleeding = -20;

interface Props {
  window?: () => Window;
  openMobileFilter: boolean;
  toggleDrawer: Function;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function MobileFilter(props: Props) {
  const [dateRange, setDateRange] = React.useState([new Date(), null]);
  const [startDate, endDate] = dateRange;

  const { window, openMobileFilter, toggleDrawer } = props;

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: "visible",
            width: "90%",
            margin: "0 auto",
            borderRadius: "12px",
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={openMobileFilter}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            top: -drawerBleeding,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            visibility: "visible",
            width: "100%",
            p: 2,
          }}
        >
          <Stack sx={{ width: "100%" }} spacing={3}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1, color: "#383F45" }} htmlFor="Status">
                Status
              </FormLabel>
              <Select
                labelId="Status"
                id="demo-simple-select"
                defaultValue={"All"}
                sx={{
                  "& , .MuiSvgIcon-root": {
                    color: "#383F45",
                  },

                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: " #383F45 ",
                  },
                }}
              >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Under Process"}>Under Process</MenuItem>
                <MenuItem value={"Success"}>Success</MenuItem>
                <MenuItem value={"Not in stock"}>Not in stock</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1, color: "#383F45" }} htmlFor="Category">
                Category
              </FormLabel>
              <Select
                labelId="Category"
                id="demo-simple-select"
                defaultValue={10}
                sx={{
                  "& , .MuiSvgIcon-root": {
                    color: "#383F45",
                  },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: " #383F45 ",
                  },
                }}
              >
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Sumsung</MenuItem>
                <MenuItem value={30}>Realme 7 Pro</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1, color: "#383F45" }} htmlFor="date">
                Date
              </FormLabel>

              <DatePicker
                id="date"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update: any) => {
                  setDateRange(update);
                }}
                customInput={
                  <TextField
                    sx={{
                      input: {
                        color: "#383F45",
                      },
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: " #383F45 ",
                      },
                    }}
                  />
                }
                dateFormat={`MMM  d`}
              />
            </FormControl>
            <Stack py={3} direction="row" alignItems="center" justifyContent={"space-between"} spacing={2}>
                <Button fullWidth variant="outlined">Reset</Button>
                <Button fullWidth  >Confirm</Button>
            </Stack>
          </Stack>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
