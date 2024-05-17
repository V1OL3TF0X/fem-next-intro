import { db } from '@/db';
import { NextResponse } from 'next/server';
import { ProblemError } from '../problemError';
import { withProblemError } from '../problemMiddleware';

export const GET = withProblemError(async (_req: Request) => {
  const data = await db.todo.findMany({});
  return NextResponse.json({ data });
});

export const POST = withProblemError(async (req: Request) => {
  const data = await req.json();
  try {
    const todo = await db.todo.create({ data });
    return NextResponse.json(todo);
  } catch (e: any) {
    throw new ProblemError({
      title: 'Unprocessable Entity',
      status: 422,
      detail: e.message,
      type: 'https://http.dev/422#:~:text=The%20422%20Unprocessable%20Entity%20status,the%20server%2C%20but%20semantically%20invalid.',
    });
  }
});
