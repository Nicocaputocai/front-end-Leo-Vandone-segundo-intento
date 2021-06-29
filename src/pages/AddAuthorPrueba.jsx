import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const history = useHistory();
  const [data, setData] = useState({
    img: "",
    name: "",
    description: ""
  });
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("img", data.img);
      formData.append("name", data.name);
      formData.append("description", data.description)

      const res = await fetch(`http://localhost:4000/api/authors/create`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "", description: ""});
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter a description"
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange("description")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="img/*"
          name="img"
          onChange={handleChange("img")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;