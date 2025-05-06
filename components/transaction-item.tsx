import { formatCurrency, formatDate } from "@/lib/utils"
import { ArrowDownLeft, ArrowUpRight } from "lucide-react"

interface Transaction {
  id: string
  description: string
  amount: number
  date: string
  type: "credit" | "debit"
}

interface TransactionItemProps {
  transaction: Transaction
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const { description, amount, date, type } = transaction

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-4">
        <div
          className={`p-2 rounded-full ${type === "credit" ? "bg-green-100 dark:bg-green-900" : "bg-red-100 dark:bg-red-900"}`}
        >
          {type === "credit" ? (
            <ArrowDownLeft className={`h-4 w-4 text-green-600 dark:text-green-400`} />
          ) : (
            <ArrowUpRight className={`h-4 w-4 text-red-600 dark:text-red-400`} />
          )}
        </div>
        <div>
          <p className="font-medium">{description}</p>
          <p className="text-xs text-muted-foreground">{formatDate(date)}</p>
        </div>
      </div>
      <div
        className={`font-medium ${type === "credit" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
      >
        {type === "credit" ? "+" : ""}
        {formatCurrency(amount)}
      </div>
    </div>
  )
}
