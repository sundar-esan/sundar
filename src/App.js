import "./App.css";

export default function App() {
  const users = [
    {
      name: "Sundar",
      profile:
        "https://www.andhrawishesh.com/media/k2/items/src/Arjun-Reddy-Movie-Sequel.jpg"
    },
    {
      name: "Vijay",
      profile:
        "https://filmfare.wwmindia.com/content/2021/sep/shahrukhkhan21631161651.jpg"
    },
    {
      name: "Ajith",
      profile:
        "https://www.filmibeat.com/img/2015/02/12-1423727271-yennaiarindhaalboxoffice.jpg"
    }
  ];
  return (
    <div className="App">
      {users.map((ele) => (
        <Welcome name={ele.name} profile={ele.profile} />
      ))}
    </div>
  );
}
function Welcome({ name, profile }) {
  return (
    <div>
      <img className="pro-pic" src={profile} alt="profile-pic" />
      <h1>hi, {name} 😍❤💕🎉👍!!!!</h1>
    </div>
  );
}