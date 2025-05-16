import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/users/')({
  component: UsersIndexComponent,
})

function UsersIndexComponent() {
  return <div>Select a user.</div>
}
