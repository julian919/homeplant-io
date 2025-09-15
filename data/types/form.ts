export type FormState = {
  status: 'error' | 'success';
  message: string;
  errors?: Record<string, string[] | undefined>;
};
