'use server';
import { db } from '@/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export const newTodo = async (content: Prisma.TodoCreateInput['content']) => {
  if (!content) {
    return;
  }
  await db.todo.create({
    data: { content },
  });
  revalidatePath('/todos');
};

export const submitNewTodo = async (data: FormData) => newTodo((data.get('todo-content') as string) ?? undefined);

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath('/todos');
};
