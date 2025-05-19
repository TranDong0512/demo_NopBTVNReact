import React, { useState } from "react";
import { dataStudent } from "./data";
function hocLuc(avg) {
  if (Number(avg) >= 8) return "Gioi";
  if (Number(avg) >= 6.5) return "Kha";
  if (Number(avg) >= 5) return "Trung Binh";
  if (Number(avg) < 5) return "Yeu";
}

function Task44() {
  const [searchName, setSearchName] = useState("");
  const [avgFilter, setAvgFilter] = useState("all");
  const [avgHocLuc, setAvgHocLuc] = useState("all");
  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };
  const handleAvgFilter = (event) => {
    setAvgFilter(event.target.value);
  };
  const handleHocLuc = (event) => {
    setAvgHocLuc(event.target.value);
  };
  const searchStudents = dataStudent.filter((student) => {
    const search = student.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const avg = (
      (student.math + student.literature + student.english) /
      3
    ).toFixed(2);
    const mathesAvg =
      avgFilter === "all" ||
      (avgFilter === "duoi5" && Number(avg) < 5) ||
      (avgFilter === "5to6" && Number(avg) >= 5 && Number(avg) <= 6) ||
      (avgFilter === "6to8" && Number(avg) > 6 && Number(avg) <= 8) ||
      (avgFilter === "tren8" && Number(avg) > 8);

    const hocLucAvg =
      avgHocLuc === "all" ||
      (avgHocLuc === "gioi" && Number(avg) >= 8) ||
      (avgHocLuc === "kha" && Number(avg) >= 6.5 && Number(avg) < 8) ||
      (avgHocLuc === "tb" && Number(avg) >= 5 && Number(avg) < 6.5) ||
      (avgHocLuc === "yeu" && Number(avg) < 5 < 5);
    return search && mathesAvg && hocLucAvg;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên..."
        value={searchName}
        onChange={handleSearch}
      />
      <select value={avgFilter} onChange={handleAvgFilter}>
        <option value="all">Tất cả</option>
        <option value="duoi5">Dưới 5</option>
        <option value="5to6">5 - 6</option>
        <option value="6to8">6 - 8</option>
        <option value="tren8">Trên 8</option>
      </select>
      <select value={avgHocLuc} onChange={handleHocLuc}>
        <option value="all">Tất cả</option>
        <option value="gioi">Gioi</option>
        <option value="kha">Khá</option>
        <option value="tb">Trung Bình</option>
        <option value="yeu">Yếu</option>
      </select>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Toán</th>
            <th>Văn</th>
            <th>Tiếng Anh</th>
            <th>Điểm TB</th>
            <th>Học Lực</th>
          </tr>
        </thead>
        <tbody>
          {searchStudents.map((value) => {
            const avg = (
              (value.math + value.literature + value.english) /
              3
            ).toFixed(2);
            const academi = hocLuc(avg);

            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.math}</td>
                <td>{value.literature}</td>
                <td>{value.english}</td>
                <td>{avg}</td>
                <td>{academi}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Task44;
