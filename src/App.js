import ExpenseItems from "./components/ExpenseItems";
import './App.css';

function App() {
  //const date = 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's start</h1>
      </header>
      <ExpenseItems date={new Date('2022-01-10')} title={'Android TV'} price={'$750'}></ExpenseItems>
      <ExpenseItems date={new Date('2020-07-01')} title={'iPad'} price={'$250'}></ExpenseItems>
      <ExpenseItems date={new Date('2021-12-12')} title={'Air Conditioner'} price={'$85'}></ExpenseItems>
      <ExpenseItems date={new Date('2022-04-10')} title={'Book'} price={'$7'}></ExpenseItems>
    </div>
  );
}

export default App;
