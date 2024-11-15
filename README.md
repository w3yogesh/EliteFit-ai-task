## Overview

The **Task Management Application** is a web-based platform designed to help users organize and track their tasks. Built using **React**, this application offers a clean and intuitive user interface for managing tasks efficiently. Users can create new tasks, edit existing ones, and delete tasks when they are completed.

[Live](https://elitefit-ai-task.onrender.com/)

### Screenshots
Home 
![screencapture-elitefit-ai-task-onrender-2024-11-15-12_50_15](https://github.com/user-attachments/assets/88ec9341-a5a8-4da1-883a-35b106b3e454)

Add Task
![screencapture-elitefit-ai-task-onrender-2024-11-15-12_51_32](https://github.com/user-attachments/assets/eda8c599-93ea-4da4-9566-e17e08164e44)

Status Filter
![screencapture-elitefit-ai-task-onrender-2024-11-15-12_51_21](https://github.com/user-attachments/assets/6961c773-dbbc-4c30-8cb4-ec561345ae01)

Priority Filter
![screencapture-elitefit-ai-task-onrender-2024-11-15-12_51_10](https://github.com/user-attachments/assets/fa473398-5c9a-4d17-908e-cd821c6eae51)

Search Filter
![screencapture-elitefit-ai-task-onrender-2024-11-15-12_50_43](https://github.com/user-attachments/assets/5eae7691-082b-4550-9bdb-36273e8063ef)

Upcoming overdue and completed filter
![screencapture-elitefit-ai-task-onrender-2024-11-15-12_55_20](https://github.com/user-attachments/assets/253a2acb-4634-487a-897d-5cc38f07ffdb)



Key features of the app include:

- **Task Filters**: Users can filter tasks by status (e.g., completed, pending) and priority (e.g., High, Medium, Low).
- **Priority Management**: Users can assign priority levels to tasks for better organization.
- **Persistent Data**: The application utilizes **local storage** to store task data, ensuring that it persists across browser sessions.
- **Task Dashboard**: The dashboard displays tasks grouped by status (upcoming, overdue, completed) to help users quickly assess their to-do list.

The application is designed to be simple and user-friendly, making it easy for anyone to start managing their tasks right away. Whether you need to organize work tasks, personal projects, or other responsibilities, this app helps you stay on top of things.



## Setup Instructions

Follow the steps below to set up the **Task Management Application** on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 14 or higher. You can download it from [here](https://nodejs.org/).
- **npm**: Node package manager comes with Node.js, but you can install it separately if needed.

### Clone the Repository

1. Open a terminal window and run the following command to clone the repository:

   ```bash
   git clone https://github.com/w3yogesh/EliteFit-ai-task.git

   ```

2. Navigate to the project directory:

  ```bash
  cd task-management-app

  ```

3. Install Dependencies
  ```bash
    npm install
  ```

4. Start the Application
  ```bash
    npm start
  ```

Running the App
Open your browser and visit http://localhost:3000 to view the Task Management Application in action. You should see the task dashboard, where you can manage your tasks.

### Local Storage
The application uses local storage to persist task data. This means that your tasks will remain saved even after you refresh the page or close and reopen the browser.

### Additional Information
Languages and Tools Used:
React for the front-end framework
JavaScript (ES2023) for programming logic
CSS for styling the UI
Folder Structure:
src/: Contains all React components and logic.
public/: Static files like images and the index.html file.
