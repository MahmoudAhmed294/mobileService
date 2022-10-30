import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  useMediaQuery,
} from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import Stack from "@mui/material/Stack/Stack";
import { Add, QrCodeScanner, Search, Tune } from "@mui/icons-material";
import DatePicker from "react-datepicker";

import { useNavigate } from "react-router-dom";
import MobileFilter from "./MobileFilter";

type Props = {};

const OrdersFilter = (props: Props) => {
  const [dateRange, setDateRange] = useState([new Date(), null]);
  const [startDate, endDate] = dateRange;
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:600px)");
  const [openMobileFilter, setOpenMobileFilter] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMobileFilter(newOpen);
  };

  return (
    <div>
      <Typography mb={2} variant={matches? "h5":"h2"}>Orders</Typography>

      <Grid
        container
        spacing={3}
        alignItems="flex-end"
        justifyContent={matches ? "flex-end" : "start"}
        p={0}
      >
        <Grid item sm={12} md={4}>
          <Stack direction="row" spacing={1.5} alignItems="baseline">
            <TextField
              placeholder="Search part by name or code"
              sx={{
                "&.MuiFormControl-root:before": {
                  content: "unset",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "gray.font",
                      svg: {
                        fontSize: "22px",
                      },
                    }}
                  >
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Scan code"
              sx={{
                "&.MuiFormControl-root:before": {
                  content: "unset",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      color: "gray.font",
                      svg: {
                        fontSize: "22px",
                      },
                    }}
                  >
                    <QrCodeScanner />
                  </InputAdornment>
                ),
              }}
              fullWidth={false}
            />
          </Stack>
        </Grid>
        <Grid item xs={5} sm={8} md={5}>
          <Stack direction="row" spacing={2} alignItems="center">
            {!matches ? (
              <>
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }} htmlFor="Status">
                    Status
                  </FormLabel>
                  <Select
                    labelId="Status"
                    id="demo-simple-select"
                    defaultValue={"All"}
                  >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"Under Process"}>Under Process</MenuItem>
                    <MenuItem value={"Success"}>Success</MenuItem>
                    <MenuItem value={"Not in stock"}>Not in stock</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }} htmlFor="Category">
                    Category
                  </FormLabel>
                  <Select
                    labelId="Category"
                    id="demo-simple-select"
                    defaultValue={10}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Sumsung</MenuItem>
                    <MenuItem value={30}>Realme 7 Pro</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1 }} htmlFor="date">
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
                    customInput={<TextField />}
                    dateFormat={`MMM  d`}
                  />
                </FormControl>
              </>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ width: "100%" }}
              >

                <Box sx={{ width: "43.45px", height: "44.68px", mr: 2 }}>
                  <Button
                    sx={{ fontWeight: 500, fontSize: "1rem", height: "100%" }}
                    onClick={toggleDrawer(true)}

                  >
                    <Tune sx={{ fontSize: "1.5rem" }} />
                  </Button>
                </Box>
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item xs={7} sm={4} md={3}>
          <Stack justifyContent="flex-end">
            <Button
              sx={{ fontWeight: 400, fontSize: matches ? "0.9rem" : "1rem" }}
              onClick={() => navigate("/addNewOrder")}
            >
              <Add sx={{ fontSize: matches ? "1.3rem" : "1.5rem" }} />
              Add order
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {matches && <MobileFilter openMobileFilter={openMobileFilter} toggleDrawer={toggleDrawer}  />}
    </div>
  );
};

export default OrdersFilter;
