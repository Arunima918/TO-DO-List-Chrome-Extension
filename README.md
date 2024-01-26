# TO-Do List Chrome Extension

#### Video Demo

Watch the extension: https://youtu.be/I8TOABgiJqU

#### Description

Managing tasks efficiently is a frustrating job. So, this Chrome extension provides a seamless experience for users doing the job. The extension is simple to use and the functionalities are user-friendly so that anyone can use it without any complications.

### Table of Contents

- [Overview](#overview)
- [Project Structure](#project_structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)

## Overview

The TO-Do List Chrome Extension is a user-friendly task management tool. It is designed to seamlessly organize daily tasks. Users can directly access this from the Chrome browser. This extension provides a simple interface for users to `add`, `delete`, mark tasks as `done`, and `clear` the entire task list. Also, it keeps track of `time` as when the task was added.

## Project Structure

### 1. popup.html

The `popup.html` file contains input elements for adding new tasks, a list to display tasks, and buttons for task manipulation. The file helps in building the structure and layout of the extension's interface.

### 2. popup.js

The `popup.js` file contains JavaScript functionalities, including:

- **Task Addition**: Users can add `new tasks` with `timestamps`. The tasks are stored in Chrome storage for persistence.
- **Task Deletion**: Allows users to `delete` individual tasks. The corresponding task is removed from the display and storage.
- **Task Completion**: Allows users to `mark` the completed tasks as `done`. The status is saved in Chrome storage.
- **Clear All Tasks**: Provides a button to `clear` the entire task list, both visually and in storage.

### 3. popup.css

The `popup.css` file helps in enhancing the visuals of the extension. It includes:

- **Overall Layout**: Adjusts the width, padding, and background color of the task container for a decently looking interface.
- **Input and Button Styling**: Styles the input box and buttons for an easy and user-friendly appearance.
- **Task Styling**: Ensures that tasks are visually aligned.
- **Responsive Design**: Adjusts the layout for different screen sizes, enhancing the extension's usability on various devices.

## Installation

To use the TO-Do List Chrome Extension:

1. Download the files uploaded in the repository to your device by following the link: `https://github.com/Arunima918/TO-DO-List-Chrome-Extension/tree/main`

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable `Developer mode` in the top-right corner.

4. Click on `Load unpacked` and select the folder where you cloned the repository.

5. The extension will be added to your Chrome browser.

## Usage

1. Click on the extension icon in the Chrome toolbar.

2. In the popup, use the text box to add new tasks and click the `Add` button.

3. Tasks will be displayed with timestamps. `Mark` them as `done` using the checkbox or `delete` them individually by clicking on the given button.

4. Use the `Clear All Tasks` button to remove all tasks at once.

## Support

For any issues, questions, or feedback, please reach out to [arunimasarkar433@gmail.com](mailto:arunimasarkar433@gmail.com).
