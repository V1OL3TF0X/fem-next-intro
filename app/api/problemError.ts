export type ProblemOpts<T extends Record<string, unknown> = {}> = {
  title: string;
  status: number;
  type: string;
  detail?: string;
} & T;
export class ProblemError<T extends Record<string, unknown> = {}> extends Error {
  constructor(public opts: ProblemOpts<T>) {
    super(opts.title);
  }
}
