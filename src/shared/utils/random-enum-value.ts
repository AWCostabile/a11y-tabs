export const randomEnumValue = <T extends { [K in keyof T]: string }>(
  stringEnum: T,
  keyFilters?: Array<T[keyof T] | false>,
): T[keyof T] => {
  const enumValues = Object.keys(stringEnum)
    .filter(
      (key): key is string =>
        isNaN(Number(key)) && !keyFilters?.includes(stringEnum[key as keyof T]),
    )
    .map((key) => stringEnum[key as keyof T]);

  const enumIndex = Math.floor(Math.random() * enumValues.length);

  return enumValues[enumIndex];
};
