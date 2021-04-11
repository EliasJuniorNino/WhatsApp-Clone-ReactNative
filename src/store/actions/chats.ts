export type ActionsTypes = 'SEND_MESSAGE';

export function sendMessage(
  target: string,
  message: string,
): {
  type: ActionsTypes;
  target: string;
  message: string;
} {
  return {
    type: 'SEND_MESSAGE',
    target,
    message,
  };
}
