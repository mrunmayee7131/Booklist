import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useTable } from 'react-table';
import { fetchBookDescription } from '../utils/nytapi';

const BookTable = ({ books }) => {
  const [descriptions, setDescriptions] = useState({});

 
  const fetchAllDescriptions = useCallback(async (booksList) => {
    const saved = localStorage.getItem('bookDescriptions');
    const initialDescriptions = saved ? JSON.parse(saved) : {};
    setDescriptions(initialDescriptions);

    const newDescriptions = { ...initialDescriptions };
    let updated = false;

    for (const book of booksList) {
      if (!newDescriptions[book.title]) {
        const summary = await fetchBookDescription(book.title);
        newDescriptions[book.title] = summary;
        updated = true;
      }
    }

    if (updated) {
      setDescriptions(newDescriptions);
      localStorage.setItem('bookDescriptions', JSON.stringify(newDescriptions));
    }
  }, []); 

  useEffect(() => {
    if (books.length > 0) {
      fetchAllDescriptions(books); 
    }
  }, [books, fetchAllDescriptions]);

  const columns = useMemo(() => [
    { Header: '#', accessor: 'index' },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Author', accessor: 'author' },
    { Header: 'Language', accessor: 'language' },
    { Header: 'Description', accessor: 'description' },
  ], []);

  const data = useMemo(() =>
    books.map((book, index) => ({
      ...book,
      index: index + 1,
      description: descriptions[book.title] || 'Loading...',
    })),
    [books, descriptions]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  if (books.length === 0) return <p>No books found.</p>;

  return (
    <table {...getTableProps()} style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} style={{ backgroundColor: '#eee' }}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{ padding: '10px', border: '1px solid #ccc' }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{ padding: '10px', border: '1px solid #ddd' }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(BookTable);
