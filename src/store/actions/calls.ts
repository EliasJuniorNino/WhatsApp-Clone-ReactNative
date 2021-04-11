export type ActionsTypes = 'CALL_TO';

export function callTo(
  target: string,
  message: string,
): {
  type: ActionsTypes;
  target: string;
  message: string;
} {
  return {
    type: 'CALL_TO',
    target,
    message,
  };
}
