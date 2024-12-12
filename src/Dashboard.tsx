// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./components/ui/table";
// import { ThemeProvider } from "./components/theme-provider";
// import GlassNavbar from "./components/glass-navbar";
// import { Button } from "./components/ui/button";
// import { Pie, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import { useInView } from 'react-intersection-observer';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const initialInvoices = [
//   {
//     invoice: "INV001",
//     paymentStatus: "Paid",
//     totalAmount: 250.0,
//     paymentMethod: "Credit Card",
//   },
  // {
  //   invoice: "INV002",
  //   paymentStatus: "Pending",
  //   totalAmount: 150.0,
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV003",
  //   paymentStatus: "Unpaid",
  //   totalAmount: 350.0,
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV004",
  //   paymentStatus: "Paid",
  //   totalAmount: 450.0,
  //   paymentMethod: "Credit Card",
  // },
  // {
  //   invoice: "INV005",
  //   paymentStatus: "Paid",
  //   totalAmount: 550.0,
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV006",
  //   paymentStatus: "Pending",
  //   totalAmount: 200.0,
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV007",
  //   paymentStatus: "Unpaid",
  //   totalAmount: 300.0,
  //   paymentMethod: "Credit Card",
  // },
// ];

// function Dashboard() {
//   const [invoices, setInvoices] = useState(initialInvoices);
//   const { ref: pieRef, inView: pieInView } = useInView({ triggerOnce: true });
//   const { ref: barRef, inView: barInView } = useInView({ triggerOnce: true });

//   const handleAmountChange = (index: number, delta: number) => {
//     const newInvoices = [...invoices];
//     newInvoices[index].totalAmount += delta;
//     setInvoices(newInvoices);
//   };

//   const totalAmount = invoices.reduce(
//     (total, invoice) => total + invoice.totalAmount,
//     0
//   );

//   const paymentMethodData = {
//     labels: ['Credit Card', 'PayPal', 'Bank Transfer'],
//     datasets: [
//       {
//         label: 'Payment Methods',
//         data: ['Credit Card', 'PayPal', 'Bank Transfer'].map(method => 
//           invoices.filter(invoice => invoice.paymentMethod === method).length
//         ),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   const paymentStatusData = {
//     labels: ['Paid', 'Pending', 'Unpaid'],
//     datasets: [
//       {
//         label: 'Payment Status',
//         data: ['Paid', 'Pending', 'Unpaid'].map(status => 
//           invoices.filter(invoice => invoice.paymentStatus === status).length
//         ),
//         backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
//         hoverBackgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
//       },
//     ],
//   };

//   return (
//     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
//       <div>
//       <nav>
//         <GlassNavbar />
//       </nav>
//       </div>
//       <div className="flex flex-row mt-[20px] w-full justify-between">
//         <div className="w-[800px] pr-4">
//           <Table className="w-full border-2 border-slate-600 rounded-[399px]">
//             <TableCaption className="caption-top font-bold pb-4 text-lg">A list of your recent invoices.</TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[100px]">Invoice</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Method</TableHead>
//                 <TableHead className="text-right">Amount</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {invoices.map((invoice, index) => (
//                 <TableRow key={invoice.invoice}>
//                   <TableCell className="font-medium">{invoice.invoice}</TableCell>
//                   <TableCell>{invoice.paymentStatus}</TableCell>
//                   <TableCell>{invoice.paymentMethod}</TableCell>
//                   <TableCell className="text-right">
//                     <Button variant='outline' className="mx-2" onClick={() => handleAmountChange(index, -10)} >-</Button>
//                     {` $${invoice.totalAmount.toFixed(2)} `}
//                     <Button variant='outline' className="mx-2" onClick={() => handleAmountChange(index, 10)} >+</Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TableCell colSpan={3}>Total</TableCell>
//                 <TableCell className="text-right">
//                   ${totalAmount.toFixed(2)}
//                 </TableCell>
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </div>
//         <div className="w-[300px] flex flex-col justify-center pl-5">
//           <div className="w-[250px] mb-8" ref={pieRef}>
//             <h2 className="text-center text-xl">Payment Methods</h2>
//             {pieInView && <Pie data={paymentMethodData} />}
//           </div>
//           <div className="w-[250px]" ref={barRef}>
//             <h2 className="text-center text-xl mb-4">Payment Status</h2>
//             {barInView && <Bar data={paymentStatusData} />}
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default Dashboard;

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
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const initialInvoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: 250.0,
    paymentMethod: "Credit Card",
  },
  // ...other initial invoices
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
  // {
  //   invoice: "INV004",
  //   paymentStatus: "Paid",
  //   totalAmount: 450.0,
  //   paymentMethod: "Credit Card",
  // },
  // {
  //   invoice: "INV005",
  //   paymentStatus: "Paid",
  //   totalAmount: 550.0,
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV006",
  //   paymentStatus: "Pending",
  //   totalAmount: 200.0,
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV007",
  //   paymentStatus: "Unpaid",
  //   totalAmount: 300.0,
  //   paymentMethod: "Credit Card",
  // },
];

function Dashboard() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [newInvoice, setNewInvoice] = useState({
    invoice: "",
    paymentStatus: "",
    totalAmount: 0 as number,
    paymentMethod: "",
  });
  const { ref: pieRef, inView: pieInView } = useInView({ triggerOnce: true });
  const { ref: barRef, inView: barInView } = useInView({ triggerOnce: true });
  
  const handleAmountChange = (index: number, delta: number) => {
    const updatedInvoices = [...invoices];
    updatedInvoices[index].totalAmount += delta;
    setInvoices(updatedInvoices);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewInvoice((prev) => ({ ...prev, [name]: name === "totalAmount" ? parseFloat(value) : value }));
  };

  const addInvoice = () => {
    if (
      newInvoice.invoice &&
      newInvoice.paymentStatus &&
      newInvoice.totalAmount > 0 &&
      newInvoice.paymentMethod
    ) {
      setInvoices((prev) => [...prev, newInvoice]);
      setNewInvoice({ invoice: "", paymentStatus: "", totalAmount: 0, paymentMethod: "" });
    }
  };
  const deleteInvoice = (index: number) => {
    const updatedInvoices = invoices.filter((_, i) => i !== index);
    setInvoices(updatedInvoices);
  };
  

  const totalAmount = invoices.reduce(
    (total, invoice) => total + invoice.totalAmount,
    0
  );

  const paymentMethodData = {
    labels: ["Credit Card", "PayPal", "Bank Transfer"],
    datasets: [
      {
        label: "Payment Methods",
        data: ["Credit Card", "PayPal", "Bank Transfer"].map((method) =>
          invoices.filter((invoice) => invoice.paymentMethod === method).length
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const paymentStatusData = {
    labels: ["Paid", "Pending", "Unpaid"],
    datasets: [
      {
        label: "Payment Status",
        data: ["Paid", "Pending", "Unpaid"].map((status) =>
          invoices.filter((invoice) => invoice.paymentStatus === status).length
        ),
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  const handleNewInvoiceChange = (field: string, value: any) => {
    setNewInvoice((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <nav>
          <GlassNavbar />
        </nav>
      </div>
      <div className="flex flex-row mt-[20px] w-full justify-between">
        <div className="w-[800px] pr-4">
          <div className="overflow-auto max-h-[400px] custom-scrollbar">
            <Table className="w-full border-2 border-slate-600 rounded-[399px]">
              <TableCaption className="caption-top font-bold pb-4 text-lg">
                A list of your recent invoices.
              </TableCaption>
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
                    <TableCell className="text-right">
                      <Button variant="outline" className="mx-2" onClick={() => handleAmountChange(index, -10)}>
                        -
                      </Button>
                      {` $${invoice.totalAmount.toFixed(2)} `}
                      <Button variant="outline" className="mx-2" onClick={() => handleAmountChange(index, 10)}>
                        +
                      </Button>
                      <Button variant="outline" onClick={() => deleteInvoice(index)} className="absolute top-1/2 right-2 transform -translate-y-1/2 hidden group-hover:block" title="Delete Invoice">
                        <FontAwesomeIcon icon="trash" />
                    </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">${totalAmount.toFixed(2)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div className="mt-6 p-4 border-2 border-gray-700 rounded-md">
            <h2 className="font-bold text-lg mb-4">Add New Invoice</h2>
            <div className="grid grid-cols-4 gap-4">
              <input
                type="text"
                name="invoice"
                placeholder="Invoice ID"
                value={newInvoice.invoice}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 col-span-1"
              />
              <select
                name="paymentStatus"
                value={newInvoice.paymentStatus}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 col-span-1"
              >
                <option value="">Select Status</option>
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Unpaid">Unpaid</option>
              </select>
              <select
                name="paymentMethod"
                value={newInvoice.paymentMethod}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 col-span-1"
              >
                <option value="">Select Method</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
              <input
                placeholder="Amount"
                type="number"
                name="totalAmount"
                value={newInvoice.totalAmount}
                onChange={handleInputChange}
                className="border rounded-md px-2 py-1 col-span-1"
              />
            </div>
            <Button className="mt-4" onClick={addInvoice}>
              Add Invoice
            </Button>
          </div>
        </div>
        <div className="w-[300px] flex flex-col justify-center pl-5">
          <div className="w-[250px] mb-8" ref={pieRef}>
            <h2 className="text-center text-xl">Payment Methods</h2>
            {pieInView && <Pie data={paymentMethodData} />}
          </div>
          <div className="w-[250px]" ref={barRef}>
            <h2 className="text-center text-xl mb-4">Payment Status</h2>
            {barInView && <Bar data={paymentStatusData} />}
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4caf50 #2a2a2a;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4caf50;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background-color: #2a2a2a;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default Dashboard;

