"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, DollarSign, CreditCard, Send, FileText, Settings, AlertTriangle } from "lucide-react"
import TransactionItem from "@/components/transaction-item"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample transaction data
const transactions = [

  {
    id: "t2",
    description: "Salary Deposit",
    amount: 5000.0,
    date: "2002-04-28",
    type: "credit",
  },
  {
    id: "t3",
    description: "Grocery Store",
    amount: -1995.75,
    date: "2004-04-27",
    type: "debit",
  },
  {
    id: "t4",
    description: "Amazon Purchase",
    amount: -2929.99,
    date: "2002-04-25",
    type: "debit",
  },
  {
    id: "t5",
    description: "Investment Dividend",
    amount: 320.5,
    date: "1998-04-20",
    type: "credit",
  },
  {
    id: "t6",
    description: "Utility Bill Payment",
    amount: -5985.33,
    date: "1998-04-18",
    type: "debit",
  },
  {
    id: "t7",
    description: "Restaurant Dinner",
    amount: -112.4,
    date: "1998-04-15",
    type: "debit",
  },
  {
    id: "t8",
    description: "Bonus Payment",
    amount: 1000.0,
    date: "1998-04-10",
    type: "credit",
  },

  {
    id: "t9",
    description: "Used Car Purchase",
    amount: -3200.0,
    date: "1997-06-12",
    type: "debit",
  },
  {
    id: "t10",
    description: "Annual Bonus",
    amount: 5200.0,
    date: "1998-01-10",
    type: "credit",
  },
  {
    id: "t11",
    description: "Home Renovation",
    amount: -6800.5,
    date: "1999-08-23",
    type: "debit",
  },
  {
    id: "t12",
    description: "Consulting Project Payment",
    amount: 7800.0,
    date: "2000-03-05",
    type: "credit",
  },
  {
    id: "t13",
    description: "Vacation",
    amount: -4100.3,
    date: "2001-07-14",
    type: "debit",
  },
  {
    id: "t14",
    description: "Tax Refund",
    amount: 3200.0,
    date: "2002-04-20",
    type: "credit",
  },


  {
    id: "t17",
    description: "Hospital Bill",
    amount: -2400.75,
    date: "1998-03-22",
    type: "debit",
  },
  {
    id: "t18",
    description: "Sold Antique Collection",
    amount: 4100.0,
    date: "1999-05-18",
    type: "credit",
  },
  {
    id: "t19",
    description: "Kitchen Upgrade",
    amount: -5100.25,
    date: "2000-09-12",
    type: "debit",
  },
  {
    id: "t21",
    description: "New Roof Installation",
    amount: -7400.0,
    date: "2002-08-29",
    type: "debit",
  },
  {
    id: "t22",
    description: "Software License Sales",
    amount: 6700.0,
    date: "2003-01-10",
    type: "credit",
  },
  {
    id: "t23",
    description: "Furniture Purchase",
    amount: -3300.4,
    date: "2004-03-06",
    type: "debit",
  },
  {
    id: "t24",
    description: "Quarterly Stock Dividends",
    amount: 2950.0,
    date: "1997-12-15",
    type: "credit",
  },
  {
    id: "t25",
    description: "Tuition Payment",
    amount: -4600.0,
    date: "1998-09-01",
    type: "debit",
  },
  {
    id: "t26",
    description: "Client Retainer Fee",
    amount: 1500.0,
    date: "1999-04-10",
    type: "credit",
  },
  {
    id: "t27",
    description: "New Laptop Purchase",
    amount: -2200.0,
    date: "2001-11-15",
    type: "debit",
  },
  {
    id: "t28",
    description: "vacation",
    amount: 4500.0,
    date: "2002-02-20",
    type: "credit",
  },
  
  {
    id: "t29",
    description: "Y2K System Upgrade",
    amount: -8700.0,
    date: "1999-12-01",
    type: "debit",
  },
  {
    id: "t30",
    description: "Dotcom Investment Return",
    amount: 5200.0,
    date: "2000-02-28",
    type: "credit",
  },
  {
    id: "t31",
    description: "Flat-Screen TV Purchase",
    amount: -1800.0,
    date: "2001-05-12",
    type: "debit",
  },
  {
    id: "t32",
    description: "eBay Auction Profit",
    amount: 2100.0,
    date: "2002-07-03",
    type: "credit",
  },
  {
    id: "t33",
    description: "Digital Camera Purchase",
    amount: -1250.0,
    date: "2003-10-25",
    type: "debit",
  },
  {
    id: "t34",
    description: "PalmPilot Bulk Order",
    amount: -3500.0,
    date: "2000-06-20",
    type: "debit",
  },
  {
    id: "t35",
    description: "Freelance Y2K Consulting",
    amount: 7200.0,
    date: "1999-11-18",
    type: "credit",
  },
  {
    id: "t36",
    description: "First Gen iPod Purchase",
    amount: -1500.0,
    date: "2002-12-05",
    type: "debit",
  },
  {
    id: "t37",
    description: "Real Estate Commission",
    amount: 9200.0,
    date: "2004-04-14",
    type: "credit",
  },
  {
    id: "t38",
    description: "Sony VAIO Laptop Purchase",
    amount: -2400.0,
    date: "2003-06-22",
    type: "debit",
  },
  {
    id: "t39",
    description: "Music Studio Equipment Sale",
    amount: 6100.0,
    date: "2001-09-19",
    type: "credit",
  },
  {
    id: "t40",
    description: "Plasma TV for Office",
    amount: -4300.0,
    date: "2004-02-11",
    type: "debit",
  },
  {
    id: "t41",
    description: "Startup Seed Investment",
    amount: -15000.0,
    date: "2000-01-15",
    type: "debit",
  },
  {
    id: "t42",
    description: "Royalty Payment for Software",
    amount: 13400.0,
    date: "2002-05-25",
    type: "credit",
  },
  {
    id: "t43",
    description: "Satellite Phone Purchase",
    amount: -2200.0,
    date: "1998-07-30",
    type: "debit",
  },
  {
    id: "t44",
    description: "Server Hosting Contract",
    amount: -4800.0,
    date: "2003-08-19",
    type: "debit",
  },
  {
    id: "t45",
    description: "Ad Revenue from Personal Blog",
    amount: 3100.0,
    date: "2004-03-03",
    type: "credit",
  },
  {
    id: "t46",
    description: "Bought Sony Handycam",
    amount: -1350.0,
    date: "2001-12-08",
    type: "debit",
  },
  {
    id: "t47",
    description: "Tech Writing Contract",
    amount: 4500.0,
    date: "1999-10-02",
    type: "credit",
  },
  {
    id: "t48",
    description: "Home Internet Setup (ISDN)",
    amount: -1700.0,
    date: "1998-04-11",
    type: "debit",
  }

]



// Sample bills data
const bills = [
  {
    id: "b1",
    name: "Electricity Bill",
    amount: 125.5,
    dueDate: "2023-05-15",
    status: "pending",
  },
  {
    id: "b2",
    name: "Water Bill",
    amount: 45.75,
    dueDate: "2023-05-20",
    status: "pending",
  },
  {
    id: "b3",
    name: "Internet Service",
    amount: 79.99,
    dueDate: "2023-05-10",
    status: "pending",
  },
  {
    id: "b4",
    name: "Credit Card Payment",
    amount: 350.0,
    dueDate: "2023-05-25",
    status: "pending",
  },
]

export default function AccountPage() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [transferAmount, setTransferAmount] = useState("")
  const [transferRecipient, setTransferRecipient] = useState("")
  const [withdrawError, setWithdrawError] = useState("")
  const [withdrawDialogOpen, setWithdrawDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  const handleWithdraw = () => {
    // Show error message about account hold
    setWithdrawError(
      "Your account is currently on hold due to a security verification process. Please contact customer support at 1-800-123-4567 for assistance.",
    )
  }

  const handleTransfer = () => {
    // Simulate transfer processing
    alert(`Transfer of $${transferAmount} to ${transferRecipient} would be processed here.`)
    setTransferAmount("")
    setTransferRecipient("")
  }

  const handlePayBill = (billId: string) => {
    alert(`Bill payment for ID ${billId} would be processed here.`)
  }

  if (!user) {
    return (
      <div className="container py-12 flex justify-center items-center min-h-[calc(100vh-200px)]">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="bills">Bills</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Account Balance Card */}
            <Card className="col-span-full lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$2,140,1100.56</div>
                <p className="text-xs text-muted-foreground">Available Balance</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Dialog open={withdrawDialogOpen} onOpenChange={setWithdrawDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Withdraw
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Withdraw Funds</DialogTitle>
                      <DialogDescription>Enter the amount you would like to withdraw.</DialogDescription>
                    </DialogHeader>
                    {withdrawError && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Account Hold</AlertTitle>
                        <AlertDescription>{withdrawError}</AlertDescription>
                      </Alert>
                    )}
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="withdraw-amount">Amount</Label>
                        <Input
                          id="withdraw-amount"
                          placeholder="Enter amount"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleWithdraw}>Withdraw Funds</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="sm">
                  Deposit
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions */}
            <Card className="col-span-full lg:col-span-2">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common banking tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                    <Send className="h-6 w-6 mb-2" />
                    <span>Transfer</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                    <CreditCard className="h-6 w-6 mb-2" />
                    <span>Cards</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                    <FileText className="h-6 w-6 mb-2" />
                    <span>Statements</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                    <Settings className="h-6 w-6 mb-2" />
                    <span>Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions Card */}
            <Card className="col-span-full">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your last 5 transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.slice(0, 5).map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" onClick={() => setActiveTab("transactions")}>
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View all your recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transfer Money</CardTitle>
              <CardDescription>Send money to another account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input
                    id="recipient"
                    placeholder="Enter recipient name or account number"
                    value={transferRecipient}
                    onChange={(e) => setTransferRecipient(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transfer-amount">Amount</Label>
                  <Input
                    id="transfer-amount"
                    placeholder="Enter amount"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transfer-type">Transfer Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transfer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internal">Internal Transfer</SelectItem>
                      <SelectItem value="external">External Transfer</SelectItem>
                      <SelectItem value="wire">Wire Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleTransfer}>Send Money</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bills</CardTitle>
              <CardDescription>Manage and pay your bills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bills.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{bill.name}</p>
                      <p className="text-sm text-muted-foreground">Due: {bill.dueDate}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-bold">${bill.amount.toFixed(2)}</p>
                      <Button size="sm" onClick={() => handlePayBill(bill.id)}>
                        Pay Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
