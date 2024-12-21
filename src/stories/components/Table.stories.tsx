import { Table } from '@components/Table';
import React from 'react';

type InvoiceData = {
  invoice: string;
  status: string;
  method: string;
  amount: string;
};

const columns: { header: string; key: keyof InvoiceData }[] = [
  { header: 'Invoice', key: 'invoice' },
  { header: 'Status', key: 'status' },
  { header: 'Method', key: 'method' },
  { header: 'Amount', key: 'amount' },
];

const data: InvoiceData[] = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
];

export const Default = () => {
  const renderCell = (row: InvoiceData, columnKey: keyof InvoiceData, rowIndex: number) => {
    if (columnKey === 'status') {
      const statusColor =
        row.status === 'Paid' ? 'text-green-600' : row.status === 'Pending' ? 'text-yellow-600' : 'text-red-600';
      return <span className={statusColor}>{row.status}</span>;
    }

    return row[columnKey];
  };

  return (
    <div className="p-4 w-3/4 h-[200px] bg-background">
      <Table
        columns={columns}
        data={data}
        onClick={(row, index) => alert(`Row clicked: ${row.invoice}, Index: ${index}`)}
        render={renderCell}
      />
    </div>
  );
};

Default.storyName = 'Table';
export default { title: 'Components/Table' };
