import React, { useState } from 'react';
import "./Courses.css";
import Card from './Card';
import CoursesList from "./CoursesList";
// import Sample from "./Slider/Slider"
import RangeSlider from "./Slider/Slider"
import MultipleSelectChip from "./Select/Select"
import Check from './Check/Check';

function Courses(props) {

  // style
  const resultStyle = { 'fontSize': '18px' }

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
  const [checkedTuition, setCheckedTuition] = useState([true, false, false, true, true, true]);
  // const [matchedTuition, setMatchedTuition] = useState(
  const [matchedTuition, setMatchedTuition] = useState(
    [{ min: 0, max: 109999 },
    { min: 110000, max: 309999 },
    { min: 310000, max: 509999 },
    { min: 510000, max: 809999 },
    { min: 810000, max: 999999 },
    { min: 1000000, max: 10000000 }]);

  const ori = [{ min: 0, max: 109999 },
  { min: 110000, max: 309999 },
  { min: 310000, max: 509999 },
  { min: 510000, max: 809999 },
  { min: 810000, max: 999999 },
  { min: 1000000, max: 10000000 }]

  const TuitionChangeHandler = (checkedTuition) => {
    setCheckedTuition(checkedTuition);
    console.log('Checked changed', checkedTuition)
    const range = []
    for (let i = 0; i < checkedTuition.length; i++) {
      if (checkedTuition[i] === true) {
        range.push(ori[i])
        // console.log(matchedTuition[i].min <= tuition && tuition < matchedTuition[i].max)
        // if (matchedTuition[i].min <= tuition && tuition < matchedTuition[i].max) {
        //   console.log(matchedTuition[i])
        // }
      }
    }
    setMatchedTuition(range);
  };

  const judge = (tuition) => {
    for (let i = 0; i < matchedTuition.length; i++) {
      const result = (matchedTuition[i].min <= tuition && tuition <= matchedTuition[i].max)
      if (result) { return true };
    }
  }

  const filteredCourses = props.items.filter((course) => {
    const tuition = parseInt(course['受講料合計'].replace(/\D/g, ""));
    const term = parseInt(course['訓練期間'].replace(/\D/g, ""));
    const attend = course['実施方法'];

    return judge(tuition)
      && term >= filteredTerm[0]
      && term <= filteredTerm[1]
      && attend.split('、').filter((w) => selectedAttend.indexOf(w) !== -1).length !== 0;
  });

  return (
    <div>
      <p>Find the best course for you!</p>
      <Card className="courses">
        <Check checked={checkedTuition} onChangeChecked={TuitionChangeHandler} />
        <RangeSlider selected={filteredTerm} onChangeFilter2={rangeChangeHandler2} />
        <MultipleSelectChip items={selectedAttend} onChangeFilter={attendChangeHandler} />
        <div className='result-count'><span style={resultStyle}>{filteredCourses.length}</span> courses matched!</div>
        <CoursesList items={filteredCourses} />
      </Card>
    </div>
  );
}

export default Courses;
