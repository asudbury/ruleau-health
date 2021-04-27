// eslint-disable-next-line import/prefer-default-export
export const TestProcesses = [
  {
    id: "1",
    name: "Eligibility Pre Screen",
    desc:
      "Pre-check patients to ensure they meet the basic requirements of testing",
    casesToReview: 7,
    casesOverridden: 21,
  },
  {
    id: "2",
    name: "Validate Sample Data",
    desc:
      "Check the data on the provided blood sample is complete, accurate and within tolerance",
    casesToReview: 4,
    casesOverridden: 65,
  },
  {
    id: "3",
    name: "Pre Processing Check",
    desc: "Confirm all the data is in place to proceed with the referral",
    casesToReview: 2,
    casesOverridden: 11,
  },
];
