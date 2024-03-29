export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return Array.from(set)
    .filter((element) => element && element.startsWith(startString))
    .map((element) => element.replace(startString, ''))
    .join('-');
}
