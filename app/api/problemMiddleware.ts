import { NextRequest, NextResponse } from 'next/server';
import { ProblemError } from './problemError';

export function withProblemError<T = unknown>(next: (req: NextRequest, opts: { params: T }) => Promise<NextResponse>) {
  return (req: NextRequest, opts: { params: T }) =>
    next(req, opts).catch((e) => {
      const instance = req.url.replace(/^(?:\/\/|[^/]+)*\//, '');
      let response: NextResponse;
      if (e instanceof ProblemError) {
        response = NextResponse.json(
          {
            instance,
            ...e.opts,
          },
          { status: e.opts.status ?? 500 }
        );
      } else {
        response = NextResponse.json(
          {
            instance,
            type: 'Internal server error',
          },
          { status: 500 }
        );
      }
      response.headers.set('Content-Type', 'application/problem+json');
      return response;
    });
}
