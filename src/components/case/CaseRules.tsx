/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleAccordion from "../rule/RuleAccordion";
import RuleDetails from "../rule/RuleDetails";
import SetSelectedRuleWarning from "../../services/selectors/SetSelectedRuleWarning";
import GetSelectedRuleWarningSelector from "../../services/selectors/GetSelectedRuleWarningSelector";
import { logDebug } from "../../utils/Logger";

const rulesData = [
  {
    ruleName: "R01-NHSNO",
    ruleDescription: "Check NHS Number",
    ruleSubDescription: "Confirm NHS number matches with Spine details",
    overrideMessage:
      "Must document confirmed reason for no / incorrect NHS number",
    overrideLevel: "1",
    hasWarning: true,
  },
  {
    ruleName: "R02-CNSNT",
    ruleDescription: "Consent confirmed",
    ruleSubDescription:
      "Either explicit consent has been provided or a documented reason for implicit consent exists",
    overrideMessage: "Data must be fixed upstream and case re-processed",
    overrideLevel: "NO OVERRIDE",
    hasWarning: false,
  },
  {
    ruleName: "R03-FLVL",
    ruleDescription: "Concentration of Fluid Level within tolerance",
    ruleSubDescription:
      "Fluid level as a % of total sample volume is within tolerance",
    overrideMessage:
      "Confirm no possibility of increasing sample fluid level (e.g. because its not possible to re-bleed the patient",
    overrideLevel: "2",
    hasWarning: false,
  },
  {
    ruleName: "R04-LABC",
    ruleDescription: "Downstream lab has capacity",
    ruleSubDescription:
      "The correct processing lab has been identified and has capacity to perform the test",
    overrideMessage:
      "Confirm capacity for urgent cases via phone to relevant lab",
    overrideLevel: "2",
    hasWarning: true,
  },
  {
    ruleName: "R05-DR",
    ruleDescription: "Responsible Clinician details are present",
    ruleSubDescription:
      "Contact details for hospital and clinician are all present",
    overrideMessage: "Document details via case notes if not present",
    overrideLevel: "2",
    hasWarning: false,
  },
];

export default function CaseRules(): JSX.Element {
  logDebug("CaseRules", "Start");
  const [expanded, setExpanded] = useState<string | false>("");

  const selectedRuleWarning = GetSelectedRuleWarningSelector();

  const refs = rulesData.map((rule) => {
    return {
      ruleName: rule.ruleName,
      refPointer: React.createRef<HTMLDivElement>(),
    };
  });

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    logDebug("CaseRules", "handleChange");
    SetSelectedRuleWarning("");
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    logDebug(
      "CaseRules",
      "useEffect selectedRuleWarning=" + selectedRuleWarning
    );
    if (selectedRuleWarning) {
      const ref = getRefPointer(selectedRuleWarning) as any;

      if (ref) {
        setTimeout(() => {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);

        SetSelectedRuleWarning("");
      }
    }
  }, [selectedRuleWarning]);

  function getRefPointer(
    ruleName: string
  ): React.RefObject<HTMLDivElement> | null {
    const result = refs.filter((ref) => {
      return ref.ruleName === ruleName;
    });

    if (result) {
      return result[0].refPointer;
    }

    return null;
  }

  function expandAccordion(ruleName: string): boolean {
    logDebug(
      "CaseRules",
      "expandAccordion rule=" + ruleName + " selected=" + selectedRuleWarning
    );

    return expanded === ruleName || selectedRuleWarning === ruleName;
  }

  return (
    <div>
      {rulesData.map((rule, index) => (
        <Accordion
          ref={getRefPointer(rule.ruleName)}
          expanded={expandAccordion(rule.ruleName)}
          onChange={handleChange(rule.ruleName)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <RuleAccordion
              isRuleDefinition={false}
              hasWarning={rule.hasWarning}
              ruleName={rule.ruleName}
              ruleDescription={rule.ruleDescription}
              ruleSubDescription={rule.ruleSubDescription}
            />
          </AccordionSummary>
          <AccordionDetails>
            <RuleDetails
              canBeOverridden={false}
              overrideMessage={rule.overrideMessage}
              ruleName={rule.ruleName}
              ruleDescription={rule.ruleDescription}
              ruleSubDescription={rule.ruleSubDescription}
              overrideLevel={rule.overrideLevel}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
