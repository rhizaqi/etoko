import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Categories() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$250.00",
      paymentMethod: "Credit Card",
      totalSales: "25",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$150.00",
      paymentMethod: "PayPal",
      totalSales: "12",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$350.00",
      paymentMethod: "Bank Transfer",
      totalSales: "19",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$450.00",
      paymentMethod: "Credit Card",
      totalSales: "15",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$550.00",
      paymentMethod: "PayPal",
      totalSales: "11",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$200.00",
      paymentMethod: "Bank Transfer",
      totalSales: "10",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      imageUrl:
        "https://images.unsplash.com/photo-1742445134107-f88f41be10ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$300.00",
      paymentMethod: "Credit Card",
      totalSales: "17",
    },
  ];
  return (
    <div>
      <div className="flex justify-center text-xl font-bold">
        {" "}
        List Categories
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Sales</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <td>
                <img
                  src={invoice.imageUrl}
                  alt=""
                  className="w-20 h-20 rounded-2xl"
                />
              </td>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.totalSales}</TableCell>
              <TableCell className="text-right">{invoice.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
