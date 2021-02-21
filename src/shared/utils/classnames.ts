type ClassNameType = string | false | null | undefined;

export const classNames = (...classNameList: ClassNameType[]) =>
  Array.from(classNameList)
    .filter((arg) => !!arg)
    .join(' ');
