import { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
};

const Table = ({ children }: TableProps) => {
  return (
    <div className='w-full overflow-x-auto bg-secondary-100 rounded-2xl p-4'>
      <table>{children}</table>
    </div>
  );
};

export default Table;

const TableHeader = ({ children }: TableProps) => {
  return (
    <thead>
      <tr className='border-b border-secondary-300'>{children}</tr>
    </thead>
  );
};

const TableBody = ({ children }: TableProps) => {
  return <tbody>{children}</tbody>;
};

const TableRow = ({ children }: TableProps) => {
  return (
    <tr className='border-b border-secondary-200 last:border-0'>{children}</tr>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
