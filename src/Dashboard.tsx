import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { ThemeProvider } from "./components/theme-provider";
import GlassNavbar from "./components/glass-navbar";

import { Button } from "./components/ui/button";

const initialInvoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: 250.0,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: 150.0,
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: 350.0,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: 450.0,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: 550.0,
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: 200.0,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: 300.0,
    paymentMethod: "Credit Card",
  },
];

function Dashboard() {
  const [invoices, setInvoices] = useState(initialInvoices);

  const handleAmountChange = (index: number, delta: number) => {
    const newInvoices = [...invoices];
    newInvoices[index].totalAmount += delta;
    setInvoices(newInvoices);
  };

  const totalAmount = invoices.reduce(
    (total, invoice) => total + invoice.totalAmount,
    0
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <nav>
        <GlassNavbar />
      </nav>
      <Table className="w-full border-2 border-slate-600 rounded-[399px]">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right ">
                <Button variant='outline' className="mx-2" onClick={() => handleAmountChange(index, -10)} >-</Button>
                {` $${invoice.totalAmount.toFixed(2)} `}
                <Button variant='outline' className="mx-2" onClick={() => handleAmountChange(index, 10)} >+</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              ${totalAmount.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ThemeProvider>
  );
}

export default Dashboard;
