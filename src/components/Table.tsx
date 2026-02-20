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
      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-slate-200 dark:divide-border-dark">
        {data.length === 0 ? (
          <div className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
            No data available
          </div>
        ) : (
          data.map((item, rowIdx) => (
            <div
              key={rowIdx}
              onClick={() => onRowClick?.(item)}
              className={cn(
                "p-4 space-y-3",
                onRowClick && "cursor-pointer active:bg-slate-50 dark:active:bg-[#1e2634]"
              )}
            >
              {columns.map((column, colIdx) => (
                <div key={colIdx} className="flex justify-between items-start gap-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0">
                    {column.header}
                  </span>
                  <div className={cn("text-sm text-right overflow-hidden break-words", column.className)}>
                    {typeof column.accessor === 'function'
                      ? column.accessor(item)
                      : (item[column.accessor] as React.ReactNode)}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
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
