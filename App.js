import "./styles.css";
import Form from "./Form";
import { useState } from "react";

const url = "https://api.github.com";

const fetchData = async (input) => {
  try {
    const result = await fetch(`${url}/search/users?q=${input}`);
    const dataJson = await result.json();
    return dataJson.items;
  } catch (error) {
    throw error;
  }
};

export default function App() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = await fetchData(input);
    setUsers(data);
    console.log("users ", users);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          input={input}
        />

        {users &&
          users.map((user, ind) => {
            return (
              <div className="box" key={ind}>
                <div className="wrapper">
                  <div className="imgBx">
                    <img
                      src={user.avatar_url}
                      className="avatar-img"
                      alt="avatar-img"
                    />
                  </div>
                  <h1>{user.login}</h1>
                </div>
                <a href={user.repos_url}>
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}
