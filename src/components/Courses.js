import React, { useState } from 'react';
import "./Courses.css";
import Card from './Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import CoursesList from "./CoursesList";
// import Sample from "./Slider/Slider"
import RangeSlider from "./Slider/Slider"
import MultipleSelectChip from "./Select/Select"
import Check from './Check/Check';

function Courses(props) {
  console.log(props);
  const [filteredTuition, setFilteredTuition] = useState([150000, 200000]);

  const rangeChangeHandler = (selectedTuition) => {
    console.log(selectedTuition);
    setFilteredTuition(selectedTuition);
  };

  // Term
  const [filteredTerm, setFilteredTerm] = useState([2, 6]);

  const filterChangeHandler = (selectedTerm) => {
    setFilteredTerm(selectedTerm);
  };

  const rangeChangeHandler2 = (selectedTerm) => {
    setFilteredTerm(selectedTerm);
  };

  // Attend
  const [selectedAttend, setSelectedAttend] = useState(['通学（昼間）',
    '通学（夜間）',
    '通学（土日）',
    'eラーニング',
    '通信']);

  const attendChangeHandler = (selectedAttend) => {
    console.log('Attend way changed', selectedAttend)
    setSelectedAttend(selectedAttend);
  };

  // Tuition
  const [checkedTuition, setCheckedTuition] = useState([true, false, false, true, true]);

  const TuitionChangeHandler = (checkedTuition) => {
    setCheckedTuition(checkedTuition);
    console.log('Checked changed', checkedTuition)
  };

  const filteredCourses = props.items.filter((course) => {
    // console.log(course['受講料合計'].replace(/\D/g, ""))
    const tuition = parseInt(course['受講料合計'].replace(/\D/g, ""))
    const term = parseInt(course['訓練期間'].replace(/\D/g, ""))
    const attend = course['実施方法']
    return tuition <= filteredTuition[1]
      && tuition >= filteredTuition[0]
      && term <= filteredTerm[1]
      // && attend === 'eラーニング';
      && attend.split('、').filter((w) => selectedAttend.indexOf(w) !== -1).length !== 0;
  });

  return (
    <div>
      <p>Find the best course for you!</p>
      <Card className="courses">
        <Check checked={checkedTuition} onChangeChecked={TuitionChangeHandler} />
        <RangeSlider selected={filteredTerm} onChangeFilter={rangeChangeHandler} onChangeFilter2={rangeChangeHandler2} />
        <MultipleSelectChip items={selectedAttend} onChangeFilter={attendChangeHandler} />
        {/* <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} /> */}
        {filteredCourses.length} courses
        <CoursesList items={filteredCourses} />
      </Card>
    </div>
  );
}

export default Courses;
