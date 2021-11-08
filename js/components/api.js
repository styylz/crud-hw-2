const serverURL = "http://localhost:3000";

class API {
  static getToys = (success, failure) => {
    fetch(`${serverURL}/Toy`)
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  };

  static deleteToys = (id, success, failure) => {
    fetch(`${serverURL}/Toy/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(success)
      .catch(failure);
  };
}

//test
// API.getToys(
//   (data) => console.log("gavau", data),
//   (error) => console.log("klaida", error)
// );

// API.deleteToys(
//   "100",
//   (data) => console.log("gavau", data),
//   (error) => console.error("klaida", error)
// );
