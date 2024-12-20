import clsx from 'clsx';
import React, { useRef } from 'react';

export function Table<T>({
  columns,
  data,
  className,
  render,
  onClick,
}: {
  data: T[];
  columns: { header: string; key: keyof T }[];
  className?: string;
  render?: (row: T, columnKey: keyof T) => React.ReactNode;
  onClick?: (row: T, rowIndex: number) => void;
}) {
  const ref = useRef<HTMLTableSectionElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableRowElement>, rowIndex: number) => {
    const rows = ref.current?.querySelectorAll<HTMLTableRowElement>('tr[tabindex="0"]');
    if (!rows) return;

    const currentRow = e.currentTarget;
    const currentIndex = Array.from(rows).indexOf(currentRow);

    const focusRow = (index: number) => rows[index]?.focus();

    switch (e.key) {
      case 'Tab': {
        e.preventDefault();
        if (e.shiftKey) {
          focusRow((currentIndex - 1 + rows.length) % rows.length);
        } else {
          focusRow((currentIndex + 1) % rows.length);
        }
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        focusRow((currentIndex + 1) % rows.length);
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        focusRow((currentIndex - 1 + rows.length) % rows.length);
        break;
      }
      case 'Enter': {
        e.preventDefault();
        onClick?.(data[rowIndex], rowIndex);
        break;
      }
    }
  };

  return (
    <div className={clsx('relative w-full overflow-auto', className)}>
      <table className="w-full text-sm">
        <thead className="[&_tr]:border-b [&_tr]:border-b-muted">
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody ref={ref} className="[&_tr:last-child]:border-0">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, rowIndex)}
              onClick={() => onClick?.(row, rowIndex)}
              className={clsx(
                'border-b border-b-muted transition-colors focus:outline-none',
                'hover:bg-muted/50 focus:bg-muted/50 cursor-pointer',
              )}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="p-4 align-middle">
                  {render ? render(row, col.key) : String((row as any)[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
