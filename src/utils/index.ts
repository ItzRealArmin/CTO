/**
 * Example utility functions and helpers
 */

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Tiny utility to compose class names
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
