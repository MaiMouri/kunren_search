import React, { useState } from 'react';
import Courses from "./components/Courses";
// import NewExpense from "./components/NewExpense/NewExpense";
import { BiSearch } from 'react-icons/bi';

const jsonData = require('./Courses.json');


function App() {
  const [courses, setCourses] = useState(jsonData);

  return (
    <div className='main-container'>
      <h2 className='text-white'>第4次産業革命スキル習得講座検索</h2>
      <BiSearch /> <a href='https://www.kyufu.mhlw.go.jp/kensaku/SCM/SCM101Scr02X/SCM101Scr02XInit.form'>[厚生労働省]教育訓練給付金検索はこちら</a><br />
      <BiSearch /> <a href='https://www.meti.go.jp/policy/economy/jinzai/reskillprograms/pdf/kouzaichiran.pdf'>[経済産業省]Reスキル講座はこちら</a>
      {/* <NewExpense onAddExpense={addExpensesHandler} /> */}
      {/* <Expenses items={expenses} /> */}
      <Courses items={courses} />
    </div>
  );
}

export default App;
