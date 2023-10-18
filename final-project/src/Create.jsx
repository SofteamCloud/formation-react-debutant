import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`http://localhost:3004/posts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="create">
      <h2>Add new form</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title</label>
        <input
          type="text"
          value={form.title}
          name="title"
          onChange={handleFormChange}
        />

        <label>Blog body</label>
        <textarea
          type="text"
          value={form.body}
          name="body"
          onChange={handleFormChange}
        />

        <label>Blog author</label>
        <select name="author" value={form.author} onChange={handleFormChange}>
          <option value="Yacouba">Yacouba</option>
          <option value="Malek">Malek</option>
          <option value="Hassen">Hassen</option>
        </select>

        <button type="submit">Add post</button>
      </form>
    </div>
  );
}
