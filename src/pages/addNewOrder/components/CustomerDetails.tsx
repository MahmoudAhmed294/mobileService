
import { Box, Button, FormControl, FormLabel, Grid, TextField, useMediaQuery } from "@mui/material";

type Props = {
  handleNext: any;
  handleBack: any;
};

const CustomerDetails = ({ handleBack, handleNext }: Props) => {
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <div>
      <Grid container spacing={3} sx={{height:matches ? '100%' :"60vh" ,mb:matches? 4 : 2}}>
        <Grid item xs={12} md={6} lg={4} >
        <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Comments">
                Customer name
                </FormLabel>
                <TextField
                  id="Comments"
                  placeholder="Enter Customer name"
                />
              </FormControl>

        </Grid>
        <Grid item xs={12} md={6} lg={4}>
        <FormControl fullWidth>
                <FormLabel sx={{ mb: 0.5 }} htmlFor="Mobile number">
                Mobile number
                </FormLabel>
                <TextField
                  id="Mobile number"
                  placeholder="Enter Mobile number"
                />
              </FormControl>

        </Grid>
      </Grid>
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

export default CustomerDetails;
