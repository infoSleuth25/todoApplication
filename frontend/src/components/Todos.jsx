import React from "react";

export function Todos({ todos }) {
  function clickHandler(id) {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async function (res) {
        const json = await res.json();
      })
      .catch((err) => console.error("Error updating todo:", err));
  }

  // Inline styles for components
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      padding: "10px",
      border: "1px solid #ddd",
    },
    button: {
      padding: "8px 12px",
      fontSize: "1em",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      backgroundColor: "#007BFF",
      color: "#fff",
      transition: "background-color 0.3s ease",
    },
    buttonCompleted: {
      backgroundColor: "#28a745",
    },
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td style={styles.td}>{todo.title}</td>
              <td style={styles.td}>{todo.description}</td>
              <td style={styles.td}>{todo.completed ? "Completed" : "Pending"}</td>
              <td style={styles.td}>
                <button
                  style={
                    todo.completed
                      ? { ...styles.button, ...styles.buttonCompleted }
                      : styles.button
                  }
                  onClick={() => clickHandler(todo._id)}
                >
                  {todo.completed ? "Completed" : "Mark as complete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
