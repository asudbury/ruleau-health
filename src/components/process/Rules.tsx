import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleAccordion from "../rule/RuleAccordion";
import RuleSource from "../rule/RuleSource";
import RuleDocumentation from "../rule/RuleDocumentation2";

export default function Rules() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="R01-NHSNO-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={true}
            ruleName="R01-NHSNO"
            ruleDescription="Check NHS Number"
            ruleSubDescription="Confirm NHS number matches with Spine details"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation
              showSwitch={true}
              ruleName="R01-NHSNO"
              ruleDescription="Check NHS Number"
              ruleSubDescription="Confirm NHS number matches with Spine details"
              overrideLevel="1"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="R02-CNSNT"
            ruleDescription="Consent confirmed"
            ruleSubDescription="Either explicit consent has been provided or a documented reason for implicit consent exists"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation
              showSwitch={true}
              ruleName="R02-CNSNT"
              ruleDescription="Consent confirmed"
              ruleSubDescription="Either explicit consent has been provided or a documented reason for implicit consent exists"
              overrideLevel="NO OVERRIDE"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="R03-FLVL"
            ruleDescription="Concentration of Fluid Level within tolerance"
            ruleSubDescription="Fluid level as a % of total sample volume is within tolerance"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation
              showSwitch={true}
              ruleName="R03-FLVL"
              ruleDescription="Concentration of Fluid Level within tolerance"
              ruleSubDescription="Fluid level as a % of total sample volume is within tolerance"
              overrideLevel="2"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={true}
            ruleName="R04-LABC"
            ruleDescription="Downstream lab has capacity"
            ruleSubDescription="The correct processing lab has been identified and has capacity to perform the test"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation
              showSwitch={true}
              ruleName="R04-LABC"
              ruleDescription="Downstream lab has capacity"
              ruleSubDescription="The correct processing lab has been identified and has capacity to perform the test"
              overrideLevel="2"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="R05-DR"
            ruleDescription="Responsible Clinician details are present"
            ruleSubDescription="Contact details for hospital and clinician are all present"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation
              showSwitch={true}
              ruleName="R05-DR"
              ruleDescription="Responsible Clinician details are present"
              ruleSubDescription="Contact details for hospital and clinician are all present"
              overrideLevel="2"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
