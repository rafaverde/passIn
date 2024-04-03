import { ComponentProps } from "react"

interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <table className="w-full border border-white/10" {...props} />
    </div>
  )
}
