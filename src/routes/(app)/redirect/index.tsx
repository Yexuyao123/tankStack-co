import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/redirect/')({
  beforeLoad: async () => {
    throw redirect({
      to: '/posts',
    })
  },
})
