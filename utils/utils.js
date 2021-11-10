/* eslint-disable import/prefer-default-export */

export function lengthInUtf8Bytes(input) {
  return new TextEncoder().encode(input).length;
}
