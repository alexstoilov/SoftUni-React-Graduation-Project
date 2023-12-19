import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice.js";
import { createArticle } from "../services/apiCalls";

function CreateArticleForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    authorName: "",
    topics: [],
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleTopicsChange = (event) => {
    setFormData({ ...formData, topics: event.target.value.split(",") });
  };

  const handleEditorChange = (content, editor) => {
    setFormData({ ...formData, content });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postArticleForm(formData);
      // handle response
    } catch (error) {
      console.error("Article creation failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <Editor
        apiKey="vtwqe0f83pt5o64hevv2yb2duoqyk6pfuzt8wd1jst5r63d6"
        value={formData.content}
        onEditorChange={handleEditorChange}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
        }}
      />
      <input
        name="authorName"
        value={formData.authorName}
        onChange={handleChange}
        placeholder="Author Name"
        required
      />
      <input
        name="topics"
        value={formData.topics.join(",")}
        onChange={handleTopicsChange}
        placeholder="Topics (comma-separated)"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

async function postArticleForm(formData) {
  const response = await createArticle(formData);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return await response.json();
}

export default CreateArticleForm;
