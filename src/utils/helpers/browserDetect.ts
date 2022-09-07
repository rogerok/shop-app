export const convertBrowserName = (agent: string): string => {
  const userAgent = agent.toLowerCase();
  if (userAgent.indexOf("edg") !== -1) return "Edge";
  if (userAgent.indexOf("chrome") !== -1) return "Chrome";
  if (userAgent.indexOf("firefox") !== -1) return "Firefox";
  if (userAgent.indexOf("ppr") !== -1) return "Opera";
  if (userAgent.indexOf("safari") !== -1) return "Safari";
  return "Unknown";
};

export const browserDetect = () => {
  const { userAgent } = navigator;
  return convertBrowserName(userAgent);
};
