import React from 'react';
import { cn } from '../utils/cn';

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
  headerClassName?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  className?: string;
}

export function Table<T>({ columns, data, onRowClick, className }: TableProps<T>) {
  return (
    <div className={cn("bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-sm", className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-[#151b26] border-b border-slate-200 dark:border-border-dark">
              {columns.map((column, idx) => (
                <th
                  key={idx}
                  className={cn(
                    "px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap",
                    column.headerClassName
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-border-dark text-sm">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((item, rowIdx) => (
                <tr
                  key={rowIdx}
                  onClick={() => onRowClick?.(item)}
                  className={cn(
                    "hover:bg-slate-50 dark:hover:bg-[#1e2634] transition-colors group",
                    onRowClick && "cursor-pointer"
                  )}
                >
                  {columns.map((column, colIdx) => (
                    <td key={colIdx} className={cn("px-6 py-4 whitespace-nowrap", column.className)}>
                      {typeof column.accessor === 'function'
                        ? column.accessor(item)
                        : (item[column.accessor] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
