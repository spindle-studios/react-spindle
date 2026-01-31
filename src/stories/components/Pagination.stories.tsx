import { Pagination, PaginationData } from '@components/Pagination';
import React, { useState } from 'react';

export const Default = () => {
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(1);

  const mockData1: PaginationData = {
    page: page1,
    limit: 10,
    total: 47,
    totalPages: 5,
  };

  const mockData2: PaginationData = {
    page: page2,
    limit: 25,
    total: 250,
    totalPages: 10,
  };

  const mockData3: PaginationData = {
    page: page3,
    limit: 20,
    total: 100,
    totalPages: 5,
  };

  return (
    <div className="flex flex-col gap-8 w-[600px]">
      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Default</h3>
        <Pagination data={mockData1} onChange={setPage1} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">With first/last buttons</h3>
        <Pagination data={mockData2} onChange={setPage2} showFirstLast />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Minimal variant</h3>
        <Pagination data={mockData3} onChange={setPage3} variant="minimal" />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Without info</h3>
        <Pagination data={mockData1} onChange={setPage1} showInfo={false} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4 text-muted-foreground">Empty state</h3>
        <Pagination data={{ page: 1, limit: 10, total: 0, totalPages: 0 }} onChange={() => {}} />
      </div>
    </div>
  );
};

Default.storyName = 'Pagination';
export default { title: 'Components/Pagination' };
