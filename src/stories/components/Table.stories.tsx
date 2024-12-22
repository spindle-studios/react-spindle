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

const generateTestData = (length: number) => {
  const statuses = ['Paid', 'Pending', 'Unpaid'];
  const methods = ['Credit Card', 'PayPal', 'Bank Transfer'];

  return Array.from({ length }, (_, index) => ({
    invoice: `INV${String(index + 1).padStart(4, '0')} sdjashdjska daskjhdask jdhas hsdhaskjd haksdhsajkdhaskdhas dashdjsa hdkas dhj`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    method: methods[Math.floor(Math.random() * methods.length)],
    amount: `$${(Math.random() * (5000 - 1) + 1).toFixed(2)}`,
  }));
};

const data = generateTestData(5000);

export const Default = () => {
  const renderCell = (row: InvoiceData, columnKey: keyof InvoiceData) => {
    if (columnKey === 'status') {
      const statusColor =
        row.status === 'Paid' ? 'text-green-600' : row.status === 'Pending' ? 'text-yellow-600' : 'text-red-600';
      return <span className={statusColor}>{row.status}</span>;
    }

    return row[columnKey];
  };

  return (
    <div className="p-4 w-3/4 h-[500px] bg-background">
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
