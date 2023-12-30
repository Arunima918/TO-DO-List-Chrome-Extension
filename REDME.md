# TO-Do List Chrome Extension

#### Video Demo

Watch the extension in action:

#### Description

Managing tasks efficiently is crucial, and this Chrome extension aims to provide a seamless experience for users. The extension's simplicity and functionality make it a valuable tool for organizing daily tasks and improving productivity.

### Table of Contents

- [Overview](#overview)
- [Project Structure](#project_structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Overview

The TO-Do List Chrome Extension is a user-friendly task management tool designed to streamline the process of organizing daily tasks directly from the Chrome browser. This extension offers a simple yet effective interface for users to add, delete, mark tasks as done, and clear the entire task list. Its lightweight design makes it a valuable companion for users seeking a hassle-free way to manage their to-do lists.

## Project Structure

### 1. popup.html

The `popup.html` file serves as the foundation for the extension's popup. It contains input elements for adding new tasks, a list to display tasks, and buttons for task manipulation. The file establishes the structure and layout of the extension's interface.

### 2. popup.js

The `popup.js` file contains JavaScript functionalities, including:

- **Task Addition**: Allows users to add new tasks with timestamps. The tasks are stored in Chrome storage for persistence.
- **Task Deletion**: Enables users to delete individual tasks. The corresponding task is removed from the display and storage.
- **Task Completion**: Allows users to mark tasks as done, visually distinguishing them. The status is saved in Chrome storage.
- **Clear All Tasks**: Provides a button to clear the entire task list, both visually and in storage.

### 3. popup.css

The `popup.css` file enhances the visual appeal of the extension's popup. It includes styling for:

- **Overall Layout**: Adjusts the width, padding, and background color of the task container for a visually pleasing interface.
- **Input and Button Styling**: Styles the input box and buttons for a consistent and user-friendly appearance.
- **Task Styling**: Ensures that tasks are visually aligned, and added tasks are bold for emphasis.
- **Responsive Design**: Adjusts the layout for different screen sizes, enhancing the extension's usability on various devices.

## Installation

To use the TO-Do List Chrome Extension:

1. Clone the repository to your local machine using the command `git clone https://github.com/your-username/todo-list-chrome-extension.git`.

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" in the top-right corner.

4. Click on "Load unpacked" and select the folder where you cloned the repository.

5. The extension will be added to your Chrome browser.

## Usage

1. Click on the extension icon in the Chrome toolbar.

2. In the popup, use the text box to add new tasks and click the "Add" button.

3. Tasks will be displayed with timestamps. Mark them as done or delete them individually.

4. Use the "Clear All Tasks" button to remove all tasks at once.

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)

## Support

For any issues, questions, or feedback, please reach out to [arunimasarkar433@gmail.com](mailto:arunimasarkar433@gmail.com).
