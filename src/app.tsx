import { AttendeeList } from "./components/attendee-list"
import { Header } from "./components/header"

export function App() {
  return (
    <div className="max-w-[1200px] mx-auto py-5 flex flex-col gap-2">
      <Header />
      <AttendeeList />
    </div>
  )
}
