export function isUrl(str: string) {
  const urlPattern =
    /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

  return !!urlPattern.test(str);
}
