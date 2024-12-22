import clsx from 'clsx';
import React, { useRef } from 'react';
import { useVirtual } from 'react-virtual';
import { Scrollable } from './Scrollable';

export function Table<T>({
  columns,
  data,
  className,
  disableScrollbar,
  render,
  onClick,
}: {
  data: T[];
  columns: { header: string; key: keyof T }[];
  className?: string;
  disableScrollbar?: boolean;
  render?: (row: T, columnKey: keyof T, rowIndex: number) => React.ReactNode;
  onClick?: (row: T, rowIndex: number) => void;
}) {
  const parentRef = useRef<HTMLDivElement>(null);

  // Virtualization logic
  const rowVirtualizer = useVirtual({
    parentRef,
    size: data.length,
    overscan: 10, // Render extra rows for smoother scrolling
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableRowElement>, rowIndex: number) => {
    const rows = parentRef.current?.querySelectorAll<HTMLTableRowElement>('tr[tabindex="0"]');
    if (!rows) return;

    const currentRow = e.currentTarget;
    const currentIndex = Array.from(rows).indexOf(currentRow);

    const focusRow = (index: number) => rows[index]?.focus();

    if (e.key === 'Tab') {
      e.preventDefault();
      e.shiftKey
        ? focusRow((currentIndex - 1 + rows.length) % rows.length)
        : focusRow((currentIndex + 1) % rows.length);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusRow((currentIndex + 1) % rows.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusRow((currentIndex - 1 + rows.length) % rows.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      onClick?.(data[rowIndex], rowIndex);
    }
  };

  return (
    <Scrollable ref={parentRef} className="h-full" disableScrollbar={disableScrollbar}>
      <table className="w-full text-sm border-collapse table-fixed">
        <thead className="sticky top-0 bg-background shadow-sm z-10">
          <tr className="[&_th]:border-b [&_th]:border-b-muted">
            {columns.map((col) => (
              <th key={String(col.key)} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={clsx('relative', className)} style={{ height: `${rowVirtualizer.totalSize}px` }}>
          {rowVirtualizer.virtualItems.map((virtualRow) => {
            const row = data[virtualRow.index];
            return (
              <tr
                key={virtualRow.index}
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, virtualRow.index)}
                onClick={() => onClick?.(row, virtualRow.index)}
                className={clsx(
                  'border-b border-b-muted transition-colors absolute left-0 right-0',
                  'hover:bg-muted/50 focus:bg-muted/50 cursor-pointer focus:outline-none',
                )}
                style={{ top: `${virtualRow.start}px`, height: `${virtualRow.size}px` }}
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="p-4 align-middle">
                    {render ? render(row, col.key, virtualRow.index) : String(row[col.key])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Scrollable>
  );
}
