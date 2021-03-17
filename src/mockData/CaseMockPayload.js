export const CaseMockPayload = {
  request: {
    date_last_submitted: "2018-03-19",
    referral_id: "p19-2078",
    priority: {
      codesystem_uri: "priority",
      code: "routine",
    },
    approval_status: {
      codesystem_uri: "approval_status",
    },
    patient: [
      {
        uid: "cd31c91c-1e26-4e34-2bg8-b09a1365f1d71",
        disease_status: {
          codesystem_uri: "disease_status",
          code: "unaffected",
        },
        patient: {
          administrative_gender: {
            codesystem_uri: "administrative_gender",
            code: "M",
          },
          ethnicity: {
            codesystem_uri: "ethnicity",
            code: 1,
          },
          karyotypic_sex: {
            codesystem_uri: "karyotypic_sex",
            code: "XO",
          },
          life_status: {
            codesystem_uri: "life_status",
            code: "alive",
          },
          phenotypic_sex: {
            codesystem_uri: "phenotypic_sex",
            code: "FEMALE",
          },
          date_of_birth: "1992-05-12",
          human_readable_id: "p12345",
          is_foetal_patient: false,
        },
      },
    ],
    test: "88a4ab37-7c3b-4eca-8b24-14dde17b7955",
    tumour: {
      uid: "998b3ce1-d663-4e5d-9031-e9be3a33bdc3",
      tumour_diagnosis_date: "2015-10-22",
    },
  },
};
