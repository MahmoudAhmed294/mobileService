import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import CheckRounded from "@mui/icons-material/CheckRounded";
import QRCode from "qrcode.react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Success = (props: Props) => {
  const navigate = useNavigate();
  const matchesMd = useMediaQuery("(max-width:900px)");
  const matchesSm = useMediaQuery("(max-width:600px)");

  const QRCodeComponents = (
    <Stack
      direction="row"
      alignItems="flex-end"
      sx={{ width: "100%" , mt:matchesSm?3 : 0}}
      justifyContent={{ xs: "center", sm: "end" }}
    >
      <Box
        sx={{
          border: "6px solid #fff",
          width: matchesMd ? 158 : 179,
          height: matchesMd ? 158 : 179,
        }}
      >
        <QRCode
          value="https://reactjs.org/"
          renderAs="svg"
          width={"100%"}
          height={"100%"}
        />
      </Box>
    </Stack>
  );
  return (
    <div>
      <Box
        sx={{
          border: matchesSm ? "unset" : "1px solid #fff",
          borderRadius: 5,
          py: matchesSm ? 2 : 4,
          px: matchesSm ? 0 : 3,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Stack
            direction="column"
            alignItems="center"
            spacing={0}
            p={0.7}
            justifyContent="center"
            sx={{ backgroundColor: "primary.main", borderRadius: "50%" }}
          >
            <CheckRounded fontSize="medium" />
          </Stack>
          <Typography variant={matchesMd ? "h5" : "h2"}>
            Order Added Successfully
          </Typography>
        </Stack>
        <Grid container mt={3}>
          <Grid item xs={12} sm={6} md={4} sx={{ order: { xs: 1, md: 1 } }}>
            <Stack spacing={3}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Brand:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  Samsung A52
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Category:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  Broken Screen
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>Cost:</Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  500 EGP
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Date received:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  18 Oct 2022
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Cost received:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  200 EGP
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Remaining cost:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  300 EGP
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ mt: { xs: 3, md: 0 }, order: { xs: 3, md: 2 } }}
          >
            <Stack spacing={3}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Maintenance period:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  5 days
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Serial number:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  3464344632264234
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="flex-start"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Comments:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet
                </Typography>
              </Stack>
            </Stack>
                {matchesSm && QRCodeComponents}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            order={2}
            sx={{ order: { xs: 2, md: 3 } }}
          >
            <Stack spacing={3}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%", mt: matchesMd ? 3 : 0 }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Customer name:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  Mahmoud Ahmed
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ width: "100%" }}
                spacing={1}
              >
                <Typography variant={matchesMd ? "h6" : "h4"}>
                  Phone Number:
                </Typography>
                <Typography variant={matchesMd ? "body1" : "subtitle1"}>
                  01234358929
                </Typography>
              </Stack>
              {!matchesSm && QRCodeComponents}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        justifyContent="space-between"
        my={2}
        spacing={matchesMd ? 3 : 0}
      >
        <Grid item xs={6} sm={2}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={() => navigate("/")}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button variant="contained" fullWidth>
            {" "}
            Print
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Success;
