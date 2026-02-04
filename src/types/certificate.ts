export type CertificateRecord = {
  "Cert ID": string;
  Name: string;
  Course: string;
  "Issue Date": string;
  Unique_ID: string;
};

export type CertificateResult = CertificateRecord & {
  type: "student" | "mentor";
};
