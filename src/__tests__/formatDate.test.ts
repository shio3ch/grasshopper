import { formatDate, toISODateString } from "../utils/formatDate";

describe("formatDate", () => {
  it("formats a date in Japanese locale", () => {
    const date = new Date("2026-04-30T00:00:00.000Z");
    const result = formatDate(date);
    expect(result).toMatch(/2026/);
    expect(result).toMatch(/4/);
    expect(result).toMatch(/30/);
  });

  it("returns a non-empty string", () => {
    const date = new Date("2024-01-15T12:00:00.000Z");
    const result = formatDate(date);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("toISODateString", () => {
  it("returns YYYY-MM-DD format", () => {
    const date = new Date("2026-04-30T00:00:00.000Z");
    expect(toISODateString(date)).toBe("2026-04-30");
  });

  it("pads month and day with leading zeros", () => {
    const date = new Date("2024-01-05T00:00:00.000Z");
    expect(toISODateString(date)).toBe("2024-01-05");
  });

  it("returns exactly 10 characters", () => {
    const date = new Date("2025-12-31T00:00:00.000Z");
    expect(toISODateString(date)).toHaveLength(10);
  });
});
