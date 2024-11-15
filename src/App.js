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
  Divider,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        setTasks(Array.isArray(parsedTasks) ? parsedTasks : []);
      } catch (error) {
        console.error("Failed to parse tasks from localStorage:", error);
        setTasks([]);
      }
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), status: "Pending" };
    console.log(newTask);
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
    setShowForm(false);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setShowForm(false);
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f0f4f8" }}>
      <AppBar position="sticky" sx={{ bgcolor: "#1A202C", boxShadow: 2 }}>
        <Toolbar sx={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
          <Typography variant="h5" sx={{ flexGrow: 1, color: "#E2E8F0" }}>
            Task Manager
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setShowForm(true)}
            sx={{ display: { xs: "none", sm: "inline-block" } }}
          >
            <AddIcon /> Add Task
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", mb: 2, width: "100%" }}
        >
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowForm(true)}
            startIcon={<AddIcon />}
            sx={{
              fontWeight: 600,
              bgcolor: "#4CAF50",
              ":hover": { bgcolor: "#388E3C" },
              padding: "8px 16px",
              borderRadius: 2,
              minWidth: "15%", 
              fontSize: "0.875rem", 
            }}
          >
            Add Task
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
            bgcolor: "#ffffff",
            p: 1,
            borderRadius: 1,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            width: "auto",
          }}
        >
          <PriorityFilter
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
            sx={{ mr: 2 }}
          />
          <StatusFilter
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </Box>

        <Drawer
          anchor="right"
          open={isFilterMenuOpen}
          onClose={() => setIsFilterMenuOpen(false)}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box p={3} sx={{ width: 280 }}>
            <PriorityFilter
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
            />
            <Divider sx={{ my: 2 }} />
            <StatusFilter
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
            />
          </Box>
        </Drawer>

        <Modal
          open={showForm}
          onClose={() => setShowForm(false)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(3px)",
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 4,
              borderRadius: 3,
              boxShadow: 10,
              width: "90%",
              maxWidth: 600,
            }}
          >
            <TaskForm
              setTasks={setTasks}
              addTask={addTask}
              updateTask={updateTask}
              editingTask={editingTask}
              setEditingTask={setEditingTask}
              closeForm={() => setShowForm(false)}
            />
          </Box>
        </Modal>

        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 2,
            boxShadow: 2,
            p: 3,
            minHeight: "50vh",
          }}
        >
          <TaskDashboard
            tasks={tasks}
            searchQuery={searchQuery}
            priorityFilter={priorityFilter}
            statusFilter={statusFilter}
            deleteTask={deleteTask}
            updateTask={updateTask}
            setEditingTask={(task) => {
              setEditingTask(task);
              setShowForm(true);
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
