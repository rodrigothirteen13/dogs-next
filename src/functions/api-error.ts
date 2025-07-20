export default function apiError(error: unknown): {
  data: null;
  ok: false;
  erro: string;
} {
  if (error instanceof Error) {
    return { data: null, ok: false, erro: error.message };
  } else {
    return { data: null, ok: false, erro: 'Erro genérico.' };
  }
}
