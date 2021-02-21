export enum DateFormats {
  // 1:26 AM
  Time12Hr = 'LT',

  // 1:26:32 AM
  Time12HrFull = 'LTS',

  // 02/22/2021
  LocaleDateZeros = 'L',

  // 2/22/2021
  LocaleDate = 'l',

  // February 22, 2021
  LocaleMonthDate = 'LL',

  // Feb 22, 2021
  LocaleMonthDateAbr = 'll',

  // February 22, 2021 1:26 AM
  LocaleMonthDateTime = 'LLL',

  // Feb 22, 2021 1:26 AM
  LocaleMonthDateTimeAbr = 'lll',

  // Monday, February 22, 2021 1:26 AM
  LocaleDayMonthDateTime = 'LLLL',

  // Mon, Feb 22, 2021 1:26 AM
  LocaleDayMonthDateTimeAbr = 'llll',
}
