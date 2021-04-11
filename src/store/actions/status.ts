export type ActionsTypes = 'SEND_STATUS';

export function sendStatis(): {
  type: ActionsTypes;
} {
  return {
    type: 'SEND_STATUS',
  };
}
