import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleSummary from "../rule/RuleAccordion";
import RuleDetails from "../rule/RuleDetails";

export default function CaseRules(): JSX.Element {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={true}
            ruleName="R01-NHSNO"
            ruleDescription="Check NHS Number"
            ruleSubDescription="Confirm NHS number matches with Spine details"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails
            canBeOverridden={false}
            overrideMessage="Must document confirmed reason for no / incorrect NHS number"
            ruleName="R01-NHSNO"
            ruleDescription="Check NHS Number"
            ruleSubDescription="Confirm NHS number matches with Spine details"
            overrideLevel="1"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="R02-CNSNT"
            ruleDescription="Consent confirmed"
            ruleSubDescription="Either explicit consent has been provided or a documented reason for implicit consent exists"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails
            canBeOverridden={true}
            overrideMessage="Data must be fixed upstream and case re-processed"
            ruleName="R02-CNSNT"
            ruleDescription="Consent confirmed"
            ruleSubDescription="Either explicit consent has been provided or a documented reason for implicit consent exists"
            overrideLevel="NO OVERRIDE"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="R03-FLVL"
            ruleDescription="Concentration of Fluid Level within tolerance"
            ruleSubDescription="Fluid level as a % of total sample volume is within tolerance"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails
            canBeOverridden={true}
            overrideMessage="Confirm no possibility of increasing sample fluid level (e.g. because its not possible to re-bleed the patient"
            ruleName="R03-FLVL"
            ruleDescription="Concentration of Fluid Level within tolerance"
            ruleSubDescription="Fluid level as a % of total sample volume is within tolerance"
            overrideLevel="2"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={true}
            ruleName="R04-LABC"
            ruleDescription="Downstream lab has capacity"
            ruleSubDescription="The correct processing lab has been identified and has capacity to perform the test"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails
            canBeOverridden={true}
            overrideMessage="Confirm capacity for urgent cases via phone to relevant lab"
            ruleName="R04-LABC"
            ruleDescription="Downstream lab has capacity"
            ruleSubDescription="The correct processing lab has been identified and has capacity to perform the test"
            overrideLevel="2"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="R05-DR"
            ruleDescription="Responsible Clinician details are present"
            ruleSubDescription="Contact details for hospital and clinician are all present"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails
            canBeOverridden={true}
            overrideMessage="Document details via case notes if not present"
            ruleName="R05-DR"
            ruleDescription="Responsible Clinician details are present"
            ruleSubDescription="Contact details for hospital and clinician are all present"
            overrideLevel="2"
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
