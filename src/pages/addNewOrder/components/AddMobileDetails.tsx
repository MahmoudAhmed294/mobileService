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
import Status from "../../../components/Status";
import EventIcon from "@mui/icons-material/Event";
type Props = {
  handleNext: any;
  handleBack: any;
};

const AddMobileDetails = ({ handleBack, handleNext }: Props) => {
  const [startDate, setStartDate] = useState();

  return (
    <div>
      <Stack alignItems="flex-end">
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
                <Typography>Out of warranty?</Typography>
                <RadioGroup row>
                  <FormControlLabel
                    value={true}
                    control={<Radio sx={{ color: "gray.font" }} />}
                    label="Yes"
                  />
                  <FormControlLabel
                    sx={{ ml: 12 }}
                    value={false}
                    control={<Radio sx={{ color: "gray.font" }} />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Cost">
                  Cost
                </FormLabel>
                <TextField id="Cost" placeholder="Enter Cost" />
              </FormControl>
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
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Model">
                  Model
                </FormLabel>
                <TextField id="Model" placeholder="Enter model" />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Cost received">
                  Cost received
                </FormLabel>
                <TextField
                  id="Cost received"
                  placeholder="Enter Cost received"
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Maintenance period">
                  Maintenance period
                </FormLabel>
                <TextField id="Maintenance period" placeholder="Ex. 5 days" />
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
          <Grid item xs={12} md={4}>
            <Stack spacing={1.5}>
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
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Serial Number">
                  Serial Number
                </FormLabel>
                <TextField
                  id="Serial Number"
                  placeholder="Enter Serial Number"
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Remaining cost">
                  Remaining cost
                </FormLabel>
                <TextField
                  id="Remaining cost"
                  placeholder="Enter Remaining cost"
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="date">
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
                      <FormLabel sx={{ mb: 0.5 }} htmlFor="Engineer name">
                      Engineer name
                      </FormLabel>
                      <TextField
                        id="Engineer name"
                        placeholder="Enter Engineer name"
                      />
                    </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => handleBack()}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={() => handleNext()} sx={{ mr: 1 }}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default AddMobileDetails;
