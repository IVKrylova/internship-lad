const TOKENS: string[] = [
  "QpwL5tke4Pnpja7X1",
  "QpwL5tke4Pnpja7X2",
  "QpwL5tke4Pnpja7X3",
  "QpwL5tke4Pnpja7X4",
  "QpwL5tke4Pnpja7X5",
  "QpwL5tke4Pnpja7X6",
  "QpwL5tke4Pnpja7X7",
  "QpwL5tke4Pnpja7X8",
  "QpwL5tke4Pnpja7X9",
  "QpwL5tke4Pnpja7X10",
  "QpwL5tke4Pnpja7X11",
  "QpwL5tke4Pnpja7X12",
];

export const checkAuth = (token: string): boolean => {
  return TOKENS.includes(token);
};

