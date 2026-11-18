/** Career start date — keep this as the single source of truth. */
export const CAREER_START = new Date(2024, 0, 29); // 29 Jan 2024

export function getExperienceDuration(startDate = CAREER_START, endDate = new Date()) {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) {
    return { years: 0, months: 0, totalMonths: 0 };
  }

  return {
    years,
    months,
    totalMonths: years * 12 + months,
  };
}

export function formatExperience({ years, months }, { compact = false } = {}) {
  const yearLabel = compact
    ? `${years} yr${years === 1 ? "" : "s"}`
    : `${years} year${years === 1 ? "" : "s"}`;
  const monthLabel = compact
    ? `${months} mo${months === 1 ? "" : "s"}`
    : `${months} month${months === 1 ? "" : "s"}`;

  if (years > 0 && months > 0) return `${yearLabel} ${monthLabel}`;
  if (years > 0) return yearLabel;
  return monthLabel;
}

export function getExperienceLabel(options) {
  return formatExperience(getExperienceDuration(), options);
}
