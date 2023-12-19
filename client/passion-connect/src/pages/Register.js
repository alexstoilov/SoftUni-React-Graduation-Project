// Register.js
import React, { useEffect, useState } from "react";
import "./Register.css";
import { useTopics } from "../hooks/useTopics";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice.js";
import { postRegisterForm } from "../services/apiCalls";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: topics, isLoading, isError } = useTopics();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    topics: [],
    password: "",
    rePassword: "",
  });

  const [topicsOptions, setTopicsOptions] = useState([]);

  useEffect(() => {
    if (Array.isArray(topics)) {
      const options = topics.map((topic) => ({
        value: topic.id,
        label: topic.name,
      }));
      setTopicsOptions(options);
    }
  }, [topics]);

  const handleTopicsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      topics: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await postRegisterForm(formData);
      dispatch(authActions.login(response.data.token));
      navigate("/");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="rePassword">Re-enter Password:</label>
        <input
          type="password"
          id="rePassword"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleChange}
          required
        />

        <label htmlFor="topics">Topics:</label>
        <Select
          id="topics"
          name="topics"
          options={topicsOptions}
          isMulti
          onChange={handleTopicsChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
