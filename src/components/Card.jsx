function Card({ value }) {
  return (
    <div className="card" style={{ width: 20 + "em" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email : {value.email}</li>
        <li className="list-group-item">Password : {value.password}</li>
      </ul>
    </div>
  );
}

export default Card;
