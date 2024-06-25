import Table from "./components/Table";
import { tableHeading } from "./constants/tableHeading";
import { tableData } from "./data/tableData";

const App = () => {
  return (
    <div
      dir='rtl'
      className='bg-secondary-800 h-screen flex items-center justify-center'
    >
      <div className='container max-w-screen-lg px-2'>
        <Table>
          <Table.Header>
            {tableHeading.map((item) => {
              return <th key={item.id}>{item.heading}</th>;
            })}
          </Table.Header>
          <Table.Body>
            {tableData.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <td>
                    {new Date(data.createdAt).toLocaleDateString("fa-IR")}
                  </td>
                  <td>{data.tradeType}</td>
                  <td>{data.price.toLocaleString()} تومان</td>
                  <td>{data.wage} تومان</td>
                  <td>-</td>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default App;
