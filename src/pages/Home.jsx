import Header from "../components/Header";
import Card from "../components/Card";
import users from "../components/users";

export default function Home() {
  return (
    <div className="content">
      <Header />

      <div className="card-container">
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            age={user.age}
            city={user.city}
            profession={user.profession}
            profilePhoto={user.profilePhoto}
          />
        ))}
      </div>
    </div>
  );
}
