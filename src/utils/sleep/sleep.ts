/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
