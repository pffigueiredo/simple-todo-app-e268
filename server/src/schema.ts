import { z } from 'zod';

// Task schema with proper type handling
export const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().nullable(), // Can be null but not undefined
  completed: z.boolean(),
  created_at: z.coerce.date(), // Automatically converts string timestamps to Date objects
  updated_at: z.coerce.date()
});

export type Task = z.infer<typeof taskSchema>;

// Input schema for creating tasks
export const createTaskInputSchema = z.object({
  title: z.string().min(1, 'Task title is required'), // Validate non-empty title
  description: z.string().nullable().optional() // Can be null, undefined, or omitted
});

export type CreateTaskInput = z.infer<typeof createTaskInputSchema>;

// Input schema for updating tasks
export const updateTaskInputSchema = z.object({
  id: z.number(),
  title: z.string().min(1).optional(), // Optional but must be non-empty if provided
  description: z.string().nullable().optional(), // Can be null, undefined, or omitted
  completed: z.boolean().optional() // Optional completion status update
});

export type UpdateTaskInput = z.infer<typeof updateTaskInputSchema>;

// Input schema for deleting tasks
export const deleteTaskInputSchema = z.object({
  id: z.number()
});

export type DeleteTaskInput = z.infer<typeof deleteTaskInputSchema>;

// Input schema for getting a single task
export const getTaskInputSchema = z.object({
  id: z.number()
});

export type GetTaskInput = z.infer<typeof getTaskInputSchema>;