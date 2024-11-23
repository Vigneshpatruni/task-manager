import React, { useState } from 'react';
import './index.css'

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // State to manage the list of tasks

  const [title, setTitle] = useState(''); // State for title input
  const [description, setDescription] = useState(''); // State for description input
  const [date, setDate] = useState(''); // State for date input
  const [status, setStatus] = useState('pending'); // State for dropdown selection

  // Handle input changes
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);
  const handleStatusChange = (event) => setStatus(event.target.value);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure required fields are not empty
    if (!title || !description || !date) {
      alert('Please fill out all fields!');
      return;
    }

    // Create a new task
    const newTask = {
      id: Date.now(), // Generate a unique ID for the task
      title,
      description,
      date,
      status,
    };

    // Add the new task to the tasks state
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear the form fields
    setTitle('');
    setDescription('');
    setDate('');
    setStatus('pending');
  };

  // Handle task removal
  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='background'>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <h4>Title</h4>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={handleTitleChange}
        />

        <p>Description</p>
        <textarea
          id="description"
          value={description}
          rows="4"
          cols="50"
          placeholder="Add a description..."
          onChange={handleDescriptionChange}
        />

        <p>Date</p>
        <input type="date" value={date} onChange={handleDateChange} />

        <p>Status</p>
        <select value={status} onChange={handleStatusChange}>
          <option value="Pending">Pending</option>
          <option value="InProgress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <button type="submit">Add Task</button>
      </form>

      <h2>Tasks List</h2>
      <div >
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Date: {task.date}</p>
              <p>Status: {task.status}</p>
              <button onClick={() => handleRemoveTask(task.id)}>Remove Task</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks added yet.</p>
      )}
      </div>
    </div>
  );
};

export default Tasks;
