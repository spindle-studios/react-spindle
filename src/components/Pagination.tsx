import clsx from 'clsx';
import React from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export type PaginationData = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore?: boolean;
};

export const Pagination: React.FC<{
  data: PaginationData;
  onChange: (page: number) => void;
  showInfo?: boolean;
  showFirstLast?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
  className?: string;
}> = ({ data, onChange, showInfo = true, showFirstLast = false, size = 'sm', variant = 'default', className }) => {
  const { page, limit, total, totalPages, hasMore } = data;

  const canGoPrevious = page > 1;
  const canGoNext = hasMore !== undefined ? hasMore : page < totalPages;

  const startItem = total > 0 ? (page - 1) * limit + 1 : 0;
  const endItem = Math.min(page * limit, total);

  if (variant === 'minimal') {
    return (
      <div className={clsx('flex items-center gap-2', className)}>
        <Button variant="ghost" size={size} onClick={() => onChange(page - 1)} disabled={!canGoPrevious} type="button">
          <Icon name="ChevronLeft" size={16} />
        </Button>
        <span className="text-sm text-muted-foreground tabular-nums">
          {page} / {totalPages}
        </span>
        <Button variant="ghost" size={size} onClick={() => onChange(page + 1)} disabled={!canGoNext} type="button">
          <Icon name="ChevronRight" size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className={clsx('flex items-center justify-between gap-4', className)}>
      <div className="flex items-center gap-1">
        {showFirstLast && (
          <Button
            variant="outline"
            size={size}
            onClick={() => onChange(1)}
            disabled={!canGoPrevious}
            type="button"
            className="gap-1"
          >
            <Icon name="ChevronsLeft" size={16} />
          </Button>
        )}
        <Button
          variant="outline"
          size={size}
          onClick={() => onChange(page - 1)}
          disabled={!canGoPrevious}
          type="button"
          className="gap-2"
        >
          <Icon name="ArrowLeft" size={16} />
          <span className="hidden sm:inline">Back</span>
        </Button>
      </div>

      {showInfo && (
        <div className="text-sm text-muted-foreground tabular-nums">
          {total > 0 ? (
            <>
              Showing {startItem}-{endItem} of {total}
            </>
          ) : (
            'No results'
          )}
        </div>
      )}

      <div className="flex items-center gap-1">
        <Button
          variant="outline"
          size={size}
          onClick={() => onChange(page + 1)}
          disabled={!canGoNext}
          type="button"
          className="gap-2"
        >
          <span className="hidden sm:inline">Next</span>
          <Icon name="ArrowRight" size={16} />
        </Button>
        {showFirstLast && (
          <Button
            variant="outline"
            size={size}
            onClick={() => onChange(totalPages)}
            disabled={!canGoNext}
            type="button"
            className="gap-1"
          >
            <Icon name="ChevronsRight" size={16} />
          </Button>
        )}
      </div>
    </div>
  );
};
