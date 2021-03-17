import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import CaseWarning from "./CaseWarning";

const useStyles = makeStyles((theme) => ({
  customBorder: {
    border: `3px solid ${theme.palette.warning.main}`,
    borderRadius: 25,
  },
}));

export default function CaseWarnings() {
  const classes = useStyles();

  function handleRuleWarningSelected(rule: string) {
    console.log("hello " + rule);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.customBorder}>
          <Box border="5" borderColor="warning.main">
            <Card variant="outlined">
              <CardContent>
                <Typography gutterBottom>
                  The following rules require attention:
                </Typography>
                <CaseWarning
                  ruleName="R01-NHSNO"
                  ruleDescription="Check NHS Number"
                  onRuleWarningSelected={handleRuleWarningSelected}
                />
                <CaseWarning
                  ruleName="R04-LABC"
                  ruleDescription="Downstream lab has capacity"
                  onRuleWarningSelected={handleRuleWarningSelected}
                />
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}