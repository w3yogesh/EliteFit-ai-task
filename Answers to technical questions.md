# Task Management Application

## Q1. How long did you spend on the coding test?

I spent approximately **6 hours** on the coding test. This included understanding the requirements, designing the layout and functionality of the application, coding the features, and performing basic testing to ensure functionality.

---

## Q2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

## Most Useful Feature Added in Latest JavaScript Version (ES2023)

The most useful feature added to the latest version of JavaScript (ES2023) that I have used in my task management application is **Logical Assignment Operators**. These operators combine logical operations with assignment, making the code more concise and easier to read.

In my app, I utilized the **`??=`** (Nullish Coalescing Assignment) operator to simplify the handling of default values for certain state variables. This operator assigns a value to a variable only if it is `null` or `undefined`. It reduces the need for writing extra conditional statements or using the ternary operator.

### Example Usage in the Task Management App

Here’s a snippet of how I used the **Nullish Coalescing Assignment** operator to set default values for certain filters when they’re not already defined:

```javascript
import React, { useState } from 'react';

const TaskDashboard = () => {
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');

  priorityFilter ??= 'All'; 
  statusFilter ??= 'All';  
  return (
    <div>
      <h1>Task Dashboard</h1>
      <p>Priority Filter: {priorityFilter}</p>
      <p>Status Filter: {statusFilter}</p>
    </div>
  );
};

export default TaskDashboard;

```

## Q3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production, I would follow these steps:

1. **Check Logs**: Start by reviewing the logs from the production environment to identify any unusual activity or errors.
2. **Monitor Server Metrics**: Utilize monitoring tools like New Relic or Datadog to observe server performance metrics, such as CPU and memory usage.
3. **Profile API Requests**: Analyze API request logs for slow responses or bottlenecks. Tools like AWS CloudWatch and Render's built-in monitoring help track these issues.
4. **Identify Resource Constraints**: Identify any resource constraints, such as database query performance, external API calls, or server scaling limitations.

Since I used Render and AWS for hosting, I would also utilize their integrated metrics dashboard and log files to analyze and optimize performance.

---

## Q4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time, I would consider adding the following features and improvements to the task management application:

1. **User Authentication & Authorization**: Implementing user authentication (using JWT or OAuth) to allow users to have personalized task dashboards and settings.
   
2. **Task Prioritization with Visual Indicators**: Adding a visual representation for task priority (e.g., color coding for High, Medium, Low) and due dates to make tasks more distinguishable and easier to manage.

3. **Collaborative Task Management**: Allowing users to assign tasks to other users, enabling collaboration within teams and groups, with notifications about task updates.

4. **Task History and Analytics**: Adding a feature to track completed tasks over time, and generating simple reports/analytics about task completion rates, overdue tasks, etc.

5. **Drag-and-Drop Functionality**: Introducing a drag-and-drop interface for better task management, allowing users to easily reorder tasks or move them between categories (e.g., from 'Upcoming' to 'Completed').

6. **Dark Mode**: Adding a dark mode for better usability in low-light environments.

7. **Mobile Responsiveness**: Optimizing the user interface to be fully responsive and mobile-friendly, allowing users to manage their tasks on the go.

These enhancements would significantly improve the usability, flexibility, and scalability of the application, providing a more personalized and collaborative user experience.
