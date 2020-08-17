import e from "express";

export const capitalize = (word: string) =>
  word.replace(word[0], word[0].toUpperCase());

export const pluralize = (word: string): string => {
  if (/\^*y$/.test(word)) {
    return word.replace(/\^*y$/, "ies");
  } else {
    return word + "s";
  }
};
