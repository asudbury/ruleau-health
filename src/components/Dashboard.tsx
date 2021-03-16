import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ProcessCard from "./process/ProcessCard";

export default function Dashboard() {
  return (
    <Box p={5}>
      <Grid container spacing={5} direction="column">
        <Grid item>
          <Box fontWeight="fontWeightBold">
            <Typography variant="h4" gutterBottom>
              Welcome to your Ruleau Dashboard
            </Typography>
          </Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid item>
          <Box fontWeight="fontWeightMedium">
            <Typography variant="h5">My Processes</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <ProcessCard
            processId={1}
            title="Platinum Credit Card"
            userDescription="Our premiere credit card offering"
            casesToReviewCount={10}
            casesOverriddenCount={4}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ProcessCard
            processId={2}
            title="Entry Level Credit Card"
            userDescription="Student friendly credit offering"
            casesToReviewCount={10}
            casesOverriddenCount={4}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ProcessCard
            processId={3}
            title="1.49% Fixed 60% LTV 2 year Mortgage 2021"
            userDescription="2 Year Fixed Fee saver"
            casesToReviewCount={10}
            casesOverriddenCount={4}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
