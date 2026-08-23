export const companyStats = [
  { value: 100, suffix: "+", label: "Running Projects" },
  { value: 1000, suffix: "+", label: "Completed Projects" },
  { value: 500, suffix: "+", label: "AMC Clients" },
  { value: 2000, suffix: "+", label: "Happy Clients" },
] as const;

export const companyStatLabels = companyStats.map(
  (stat) => `${stat.value.toLocaleString("en-US")}${stat.suffix} — ${stat.label}`,
);
