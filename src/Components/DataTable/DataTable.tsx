
import { FaEllipsisV } from "react-icons/fa";

type DataTableProps<T> = {
  headings: string[];
  data: T[];
  renderRow: (item: T) => JSX.Element;
};

const DataTable = <T extends unknown>({ headings, data, renderRow }: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 text-left">
            {headings.map((heading, index) => (
              <th key={index} className="p-4 text-sm font-semibold text-gray-600 border-b">
                {heading}
              </th>
            ))}
            <th className="p-4 text-sm font-semibold text-gray-600 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b">
                {renderRow(item)}
                <td className="p-4">
                  <div className="relative">
                    <button className="focus:outline-none">
                      <FaEllipsisV className="text-gray-600" />
                    </button>
                    {/* Dropdown (show on hover or click) */}
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                      <ul>
                        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Edit
                        </li>
                        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                          Delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headings.length + 1} className="p-4 text-center text-sm text-gray-600">
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;