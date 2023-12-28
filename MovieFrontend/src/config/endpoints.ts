export const endpoints = {
  movies: {
    all: '/api/Movies/',
    single: (id: string) => `/api/Movies/${id}`,
  }
}