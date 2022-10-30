import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  MenuItem,
  Select,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Status from "../../components/Status";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";
type Props = {};

const Index = (props: Props) => {
  const [startDate, setStartDate] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h3" my={3}>
        Order details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack spacing={1.5}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="date">
                Invoice ID
              </FormLabel>

              <TextField
                sx={{
                  "&:before": {
                    content: "unset",
                  },
                  '& input[type="text"]:disabled': {
                    backgroundColor: "#AAAAAA",
                  },
                  "& input::placeholder": {
                    color: "#232A30 !important",
                    textFillColor: "#232A30",
                  },
                }}
                disabled
                placeholder="#352674733"
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1 }} htmlFor="date">
                Date
              </FormLabel>

              <DatePicker
                id="date"
                selected={startDate}
                onChange={(date: any) => {
                  setStartDate(date);
                }}
                placeholderText="Enter date received"
                customInput={
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ color: "gray.font" }}
                        >
                          <EventIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                }
              />
            </FormControl>

            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Cost">
                Cost
              </FormLabel>
              <TextField id="Cost" placeholder="Enter Cost" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={1.5}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Brand">
                Brand
              </FormLabel>

              <Select
                labelId="Brand"
                id="demo-simple-select"
                placeholder="select your brand"
                displayEmpty
                value={""}
              >
                <MenuItem value="">Select your brand</MenuItem>

                <MenuItem value={20}>Sumsung</MenuItem>
                <MenuItem value={30}>Realme 7 Pro</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 1 }} htmlFor="Engineer name">
                Engineer name
              </FormLabel>
              <TextField id="Engineer name" placeholder="Enter Engineer name" />
            </FormControl>

            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Maintenance period">
                Maintenance period
              </FormLabel>
              <TextField id="Maintenance period" placeholder="Ex. 5 days" />
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            spacing={1.5}
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Category">
                Category
              </FormLabel>

              <Select
                labelId="Category"
                id="demo-simple-select"
                placeholder="select your category"
                displayEmpty
                value={""}
              >
                <MenuItem value="">Select your Category</MenuItem>

                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Sumsung</MenuItem>
                <MenuItem value={30}>Realme 7 Pro</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Status">
                Status
              </FormLabel>
              <Select
                labelId="Status"
                placeholder="select your Status"
                displayEmpty
                value={"Success"}
              >
                {["Success", "Under Process", "failed"].map((value) => (
                  <MenuItem value={value} key={value}>
                    <Box sx={{ position: "relative", top: -8 }}>
                      <Status type={value} />
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={12} md={7}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Comments">
                Comments
              </FormLabel>
              <TextField
                id="Comments"
                placeholder="add your comment"
                multiline
                rows={3}
                maxRows={5}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
            <FormControl fullWidth>
              <FormLabel sx={{ mb: 0.5 }} htmlFor="Comments">
                Spare Parts
              </FormLabel>
              <TextField
                id="Comments"
                placeholder="add your comment"
                multiline
                rows={3}
                maxRows={5}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" mb={2} my={4}>
        <Grid item xs={12} sm={2} sx={{mb:{xs:3, sm:"unset"}}}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" fullWidth>
            {" "}
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
