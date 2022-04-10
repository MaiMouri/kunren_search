import React from "react";
import CourseItem from "./CourseItem";

import './CoursesList.css'

const CoursesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="courses-list__fallback">Found no courses.</h2>;
  }


  return (
    <ul className="courses-list">
      {props.items.map((course) => (
        <CourseItem
          school_name={course['スクール名']}
          company={course['実施者']}
          admin_term={course['指定期間']}
          number={course['指定番号']}
          total_hours={course['訓練時間']}
          term={course['訓練期間']}
          details={course['講座内容']}
          name={course['講座名称']}
          open={course['開講月']}
          attend={course['実施方法']}
          tuition={course['受講料合計']}
          zipcode={course['zipcode']}
          address={course['address']}
          tel={course['tel']}
        />
        // <CourseItem
        //   key={course.id}
        // />
      ))}
    </ul>
  );
};

export default CoursesList;
