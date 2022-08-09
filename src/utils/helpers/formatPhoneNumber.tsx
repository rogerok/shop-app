export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = `${phoneNumber}`.replace(/\D/g, "");
  const match = cleaned.match(/^(7|)?(\d{3})(\d{3})(\d{4})$/);
  if (!match) return "";
  const code = match[1] === "+7" ? "" : "+7";

  return [code, "(", match[2], ") ", match[3], "-", match[4]].join("");
};
