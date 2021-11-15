/* eslint-disable import/prefer-default-export */

export function lengthInUtf8Bytes(input) {
  return new TextEncoder().encode(input).length;
}

export function isOsMacOS() {
  return navigator.userAgentData.platform.indexOf('macOS') === 0
}
