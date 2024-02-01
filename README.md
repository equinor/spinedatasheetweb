# Spine Datasheet Web

## README

[README](https://github.com/equinor/spinedatasheetapi/blob/main/README.md) for Spine Datasheet can be found in the backend repo.

## Runbook

[Runbook](https://github.com/equinor/spinedatasheetapi/blob/main/documentation/runbook.md) is found in the backend repo.


# Folder Structure

The folder structure of our React application follows the typical React structure and naming conventions. Below is a brief overview of each major directory:

**API Folder**

This folder contains all the API functions necessary for interacting with the backend. The API functions are structured to facilitate communication with the server, handling tasks such as fetching data, posting new information, updating existing data, and deleting entries. 

**Components**

The Components directory is a standard React component directory. It includes reusable components that can be utilized throughout the application. 

**Context**

The Context folder houses all context-related files. Specifically, it contains ViewContext, which is used for managing and presenting information to the application's view layer, in situations where distribution across various components is necessary to avoid prop-drilling.

**Models**

In the Models directory, you'll find the TypeScript models. These models define the types and interfaces for the data used throughout the application. It is encouraged to define models for future data definitions to ensure type safety and make the code more predictable and less prone to runtime errors. 

**Utils**

The Utils folder is dedicated to stand-alone helper functions that are used across the application. It includes a variety of utility functions that perform common tasks, thereby avoiding code repetition. Generally, if a function is used in more than one component, it should ideally reside in this file. Additionally, this folder contains a dedicated file for agGrid functions, such as handling applied filters.

**Views**

The Views folder, a standard in React applications, contains the different views or pages of the app. Each file in this directory represents a different page or a logically distinct section of the application. 

# Component Structure

Each component file is structured for ease of understanding and navigation. The following list presents the various sections that a typical component includes, in the correct order:


* **Imports: **At the top of the file, we include all necessary imports. This includes React itself, hooks, other components, utilities, and any required assets.
* **Styled Components Definitions:** Following the imports, we define styled components using styled-components. 
* **Props Interface: **Next, we define the props interface for the component. This TypeScript interface specifies the type and structure of the props the component expects, ensuring type safety and clarity.
* **Component Definition: **Finally, the functional component itself is defined. The component adheres to the following internal structure:
    * **Context Variables:** We start by defining variables derived from Context. This ensures that all context-dependent data is readily available at the beginning of the component's logic.
    * **States and Constants: **Following this, we declare the component's state variables and constants using React's useState and other hooks for managing local state.
    * **useEffect Hooks:** After state declaration, we place any useEffect hooks. These are used for handling side effects, data fetching, and responding to changes in state or props.
    * **Component Methods: **Next, we define any methods used by the component. These methods encapsulate functionality specific to the component and help keep the JSX clean and focused.
    * **JSX Return:** At the end, we have the JSX return. This section contains the HTML-like output of the component, utilizing both the defined states and methods.

By adhering to this structured approach, our components maintain a high level of consistency and readability. 


# Coding Conventions & best practices

Our React application adheres to a specific structure and set of conventions for developing components, ensuring consistency and readability across the codebase.

**Styling with Styled-Components**

Generally, we rely on EDS components and adhere to their standard styling. However, in situations where custom CSS is necessary, we use styled-components. Inline styling within components is discouraged, as it can lead to inconsistency and difficulties in managing styles. 

**Functional Components with Arrow Functions**

Following Reacts current best practices, our components are exclusively functional, utilizing React's hooks API for state and lifecycle management. We rely on arrow functions to define these functional components.