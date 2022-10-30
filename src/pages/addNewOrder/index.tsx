import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AddMobileDetails from "./components/AddMobileDetails";
import CustomerDetails from "./components/CustomerDetails";
import Success from "./components/Success";

const steps = ["Add mobile details", "Customer details", "Success"];

type Props = {};

const Index = (props: Props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const matches = useMediaQuery("(max-width:600px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid container mt={2}>
      <Typography variant="h2" mb={2}>
        Add new order
      </Typography>
      <Grid item xs={12}>
        <Stepper
          activeStep={activeStep}
          sx={{
            px: { xs: 0, md: 4 },
            ".MuiStepConnector-root": {
              top: "19px",
            },
            ".MuiStepLabel-root": {},
            position: "relative",
          }}
          alternativeLabel={matches}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  ".MuiStepLabel-label": {
                    color: "#fff",
                    fontSize:matches? "0.9rem": "1.125rem",
                    fontWeight: matches? 400 : 500
                  },
                  ".MuiStepLabel-iconContainer svg": {
                    width: "1.4em",
                    height: "1.4em",
                    color: "#232A30",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                  },
                  ".Mui-completed": {
                    color: "#4082FF !important",
                    border: "unset !important",
                  },
                  ".MuiStepLabel-iconContainer .Mui-active": {
                    color: "#4082FF !important",
                    border: "unset !important",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <Box my={2} >
            {activeStep === 0 ? (
              <AddMobileDetails
                handleNext={handleNext}
                handleBack={handleBack}
              />
            ) : activeStep === 1 ? (
              <CustomerDetails
                handleNext={handleNext}
                handleBack={handleBack}
              />
            ) : (
              <Success />
            )}
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Index;
