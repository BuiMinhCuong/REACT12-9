import React from "react";

function PersonalInfo({ name, age, job }) {
  return (
    <div>
      <h2>Thông Tin Cá Nhân</h2>
      <p><strong>Họ tên:</strong> {name}</p>
      <p><strong>Tuổi:</strong> {age}</p>
      <p><strong>Nghề nghiệp:</strong> {job}</p>
    </div>
  );
}


function HobbyList({ hobbies }) {
  return (
    <div>
      <h3>Sở Thích</h3>
      <ul>
        {hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const person = {
    name: "Nguyễn Văn A",
    age: 22,
    job: "Giáo viên",
    hobbies: ["Đọc sách", "Nghe nhạc"],
  };

  return (
    <div className="container">
      <PersonalInfo 
        name={person.name}
        age={person.age}
        job={person.job}
      />

      <HobbyList hobbies={person.hobbies} />
    </div>
  );
}

export default App;
