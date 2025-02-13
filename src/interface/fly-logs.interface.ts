export interface FlyLogsSerice {
  info(message: string | object, object?: string | object): void;
  debug(message: string | object, object?: string | object): void;
  error(message: string | object, object?: string | object): void;
}
