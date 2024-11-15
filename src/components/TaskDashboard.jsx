import React, { useState } from "react";
import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { Typography, Grid, IconButton, Box, Button, Stack } from "@mui/material";
import { red, orange, green, grey } from "@mui/material/colors";

const TaskDashboard = ({
  tasks,
  searchQuery,
  priorityFilter,
  deleteTask,
  statusFilter,
  setEditingTask,
  updateTask,
}) => {
  const [taskFilter, setTaskFilter] = useState("All");
  const today = new Date();

  const filteredTasks = tasks.filter((task) => {
    const isPriorityMatch = priorityFilter === "All" || task.priority === priorityFilter;
    const isStatusMatch = statusFilter === "All" || task.status === statusFilter;
    const isSearchMatch = task.title.toLowerCase().includes(searchQuery.toLowerCase());

    const isFilterMatch = (filter) => {
      switch (filter) {
        case "Upcoming":
          return new Date(task.dueDate) > today && task.status !== "Completed";
        case "Overdue":
          return new Date(task.dueDate) < today && task.status !== "Completed";
        case "Completed":
          return task.status === "Completed";
        default:
          return true;
      }
    };

    return isPriorityMatch && isSearchMatch && isStatusMatch && isFilterMatch(taskFilter);
  });

  const getPriorityColor = (priority) => {
    const colors = { High: red[500], Medium: orange[500], Low: green[500] };
    return colors[priority] || grey[500];
  };

  const handleToggleComplete = (task) => {
    const updatedTask = { ...task, status: task.status === "Completed" ? "Pending" : "Completed" };
    updateTask(updatedTask);
  };

  const renderTaskList = (tasks) =>
    tasks.map((task) => (
      <Box
        key={task.id}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
          borderRadius: 2,
          bgcolor: task.status === "Completed" ? grey[200] : "white",
          boxShadow: 1,
          mb: 2,
          width: "100%",
          "&:hover": { bgcolor: grey[100], cursor: "pointer" },
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textDecoration: task.status === "Completed" ? "line-through" : "none",
              color: task.status === "Completed" ? "text.secondary" : "text.primary",
            }}
          >
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {task.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Due: {task.dueDate}
            </Typography>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                bgcolor: getPriorityColor(task.priority),
                mr: 1,
              }}
            />
            <Typography variant="body2" color="text.secondary">
              {task.priority} | {task.status}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <IconButton
            color={task.status === "Completed" ? "success" : "default"}
            onClick={() => handleToggleComplete(task)}
          >
            <CheckCircle />
          </IconButton>
          <IconButton onClick={() => setEditingTask(task)} color="primary">
            <Edit />
          </IconButton>
          <IconButton onClick={() => deleteTask(task.id)} color="error">
            <Trash2 />
          </IconButton>
        </Box>
      </Box>
    ));

  return (
    <div>
      <Stack direction="row" spacing={2} mb={3} justifyContent="center">
        <Button
          variant={taskFilter === "All" ? "contained" : "outlined"}
          onClick={() => setTaskFilter("All")}
          sx={{
            fontWeight: 500,
            padding: "6px 16px",
            borderRadius: 2,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            backgroundColor: taskFilter === "All" ? "#4CAF50" : "transparent",
            color: taskFilter === "All" ? "#fff" : "inherit",
            "&:hover": {
              bgcolor: taskFilter === "All" ? "#388E3C" : "rgba(33, 150, 243, 0.08)",
              borderColor: taskFilter === "All" ? "#388E3C" : "rgba(33, 150, 243, 0.5)",
            },
          }}
        >
          All Tasks
        </Button>
        <Button
          variant={taskFilter === "Upcoming" ? "contained" : "outlined"}
          onClick={() => setTaskFilter("Upcoming")}
          sx={{
            fontWeight: 500,
            padding: "6px 16px",
            borderRadius: 2,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            backgroundColor: taskFilter === "Upcoming" ? "#FF9800" : "transparent",
            color: taskFilter === "Upcoming" ? "#fff" : "inherit",
            "&:hover": {
              bgcolor: taskFilter === "Upcoming" ? "#F57C00" : "rgba(33, 150, 243, 0.08)",
              borderColor: taskFilter === "Upcoming" ? "#F57C00" : "rgba(33, 150, 243, 0.5)",
            },
          }}
        >
          Upcoming
        </Button>
        <Button
          variant={taskFilter === "Overdue" ? "contained" : "outlined"}
          onClick={() => setTaskFilter("Overdue")}
          sx={{
            fontWeight: 500,
            padding: "6px 16px",
            borderRadius: 2,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            backgroundColor: taskFilter === "Overdue" ? "#F44336" : "transparent",
            color: taskFilter === "Overdue" ? "#fff" : "inherit",
            "&:hover": {
              bgcolor: taskFilter === "Overdue" ? "#D32F2F" : "rgba(244, 67, 54, 0.08)",
              borderColor: taskFilter === "Overdue" ? "#D32F2F" : "rgba(244, 67, 54, 0.5)",
            },
          }}
        >
          Overdue
        </Button>
        <Button
          variant={taskFilter === "Completed" ? "contained" : "outlined"}
          onClick={() => setTaskFilter("Completed")}
          sx={{
            fontWeight: 500,
            padding: "6px 16px",
            borderRadius: 2,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            backgroundColor: taskFilter === "Completed" ? "#4CAF50" : "transparent",
            color: taskFilter === "Completed" ? "#fff" : "inherit",
            "&:hover": {
              bgcolor: taskFilter === "Completed" ? "#388E3C" : "rgba(76, 175, 80, 0.08)",
              borderColor: taskFilter === "Completed" ? "#388E3C" : "rgba(76, 175, 80, 0.5)",
            },
          }}
        >
          Completed
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {filteredTasks.length > 0 ? (
          renderTaskList(filteredTasks)
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 3,
              bgcolor: "#f9fafb",
              borderRadius: 2,
              boxShadow: 2,
              border: "1px dashed #e2e8f0",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                fontWeight: 600,
                fontSize: "1.2rem",
              }}
            >
              No tasks available
            </Typography>
          </Box>
        )}
      </Grid>
    </div>
  );
};

export default TaskDashboard;
