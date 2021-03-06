import React, { useState } from "react";

import './CourseItem.css';
import Card from './Card';

function CourseItem(props) {
  // const [title, setTitle] = useState(props.title);
  // const [name, setName] = useState(props.name);
  // 当てはまる全てのコースを表示
  // console.log(props);

  // const clickHandler = () => {
  //   setName('Updated!');
  //   console.log(name);
  // };

  return (
    <li className="course-items">
      <Card className="course-item-container">
        {/* <courseDate date={props.date}/> */}
        <div className="card-text">
          <div className="course-item">
            <div className="course-item__description">
              <h2>{props.name}</h2>
              <div className="course-item__price">{props.tuition}</div>
            </div>
            {/* <button onClick={clickHandler}>Change</button> */}
          </div>
          <div className="course-item__details">
            {props.details}
            <div className="course-item__term">
              指定番号： {props.number}
              <div className="course-item__company">
                <p>{props.school_name}</p>
                {props.zipcode} {props.address}
              </div>
            </div>
          </div>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="type">term</div>
            <div className="value">{props.term}<sup></sup></div>
          </div>
          <div className="stat border">
            <div className="type"><sup>attend</sup></div>
            <div className="value">{props.attend}</div>
          </div>
          <div className="stat">
            <div className="type">company</div>
            <div className="value">{props.company}</div>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default CourseItem;
