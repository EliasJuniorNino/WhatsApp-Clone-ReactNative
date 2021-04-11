export type ActionsTypes = 'LOGIN';

export function login(
  username: string,
): {
  type: ActionsTypes;
  username: string;
} {
  return {
    type: 'LOGIN',
    username,
  };
}
