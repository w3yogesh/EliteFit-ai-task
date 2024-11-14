import React, { useState, useEffect } from "react";
import TaskDashboard from "./components/TaskDashboard";
import SearchBar from "./components/SearchBar";
import PriorityFilter from "./components/PriorityFilter";
import StatusFilter from "./components/StatusFilter";
import TaskForm from "./components/TaskForm";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Modal,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Load tasks from localStorage with error handling and debugging
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);

        if (Array.isArray(parsedTasks)) {
          console.log("Loaded tasks from localStorage:", parsedTasks);
          setTasks(parsedTasks);
        } else {
          console.error("Stored tasks are not in the correct format.");
          setTasks([]);
        }
      } catch (error) {
        console.error("Failed to parse tasks from localStorage:", error);
        setTasks([]);
      }
    } else {
      console.log("No tasks found in localStorage");
      setTasks([]);
    }
  }, []);

  // Save tasks to localStorage whenever `tasks` state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      console.log("Saved tasks to localStorage:", tasks);
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), status: "Pending" };
    console.log("Adding new task:", newTask);

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowForm(false);
  };

  const updateTask = (updatedTask) => {
    console.log("Updating task:", updatedTask);

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
    setShowForm(false);
  };

  const deleteTask = (id) => {
    console.log("Deleting task with id:", id);

    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      console.log("Updated tasks after deletion:", updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "grey.100" }}>
      {/* Header Section */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Management
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Controls Section */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          {/* Search Bar */}
          <Box sx={{ flexGrow: 1 }}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Box>

          {/* Filter and Add Button */}
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            {/* Filter Button (Mobile) */}
            <IconButton
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <FilterListIcon />
            </IconButton>

            {/* Filter Options */}
            <Drawer
              anchor="right"
              open={isFilterMenuOpen}
              onClose={() => setIsFilterMenuOpen(false)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Box p={2}>
                <PriorityFilter
                  priorityFilter={priorityFilter}
                  setPriorityFilter={setPriorityFilter}
                />
                <StatusFilter
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                />
              </Box>
            </Drawer>

            <Box sx={{ display: { xs: "none", md: "flex" }, ml: 2 }}>
              <PriorityFilter
                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
              />
            </Box>

            {/* Add Task Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowForm(true)}
              sx={{ ml: 2 }}
            >
              + Add Task
            </Button>
          </Box>
        </Box>

        {/* Task Form Modal */}
        <Modal
          open={showForm}
          onClose={() => setShowForm(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 1,
              boxShadow: 24,
            }}
          >
            <TaskForm
              setTasks={setTasks}
              addTask={addTask}
              updateTask={updateTask}
              editingTask={editingTask}
              closeForm={() => setShowForm(false)}
            />
          </Box>
        </Modal>

        {/* Task Dashboard */}
        <Box sx={{ bgcolor: "white", borderRadius: 1, boxShadow: 1 }}>
          <TaskDashboard
            tasks={tasks}
            searchQuery={searchQuery}
            priorityFilter={priorityFilter}
            statusFilter={statusFilter}
            deleteTask={deleteTask}
            setEditingTask={(task) => {
              setEditingTask(task);
              setShowForm(true);
            }}
            updateTask={updateTask}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
