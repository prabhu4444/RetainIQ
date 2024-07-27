# Frontend Developer Assignment: UI Implementation

## Overview

This project demonstrates the implementation of a dynamic and interactive UI table structure using React (with Next.js) and a range of supporting libraries. The table allows users to manage product states and variant columns with various functionalities, including adding/removing states, reordering rows, and inserting designs into columns.

## Features

- **Add/Delete State Rows**: Dynamically add or remove state rows from the table.
- **Add/Delete Variant Columns**: Dynamically add or remove columns for different design variants.
- **Row Reordering**: Reorder state rows using drag-and-drop functionality.
- **Design Insertion**: Insert designs into specific variant columns with an integrated search filter for easier design selection.
- **Responsive Design**: The UI adjusts based on the number of variant columns, with scrolling functionality if necessary.

## Live Demo

You can view the live demo of the project [here](https://your-vercel-deployment-url.vercel.app).

## Getting Started

To set up and run the project locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd your-repository-name
    ```

3. **Install Dependencies**

    Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies:

    ```bash
    npm install
    ```

4. **Run the Development Server**

    Start the development server:

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Adding/Removing States**: Use the "Add State" and "Delete State" buttons to manage rows.
- **Adding/Removing Variant Columns**: Use the "Add Variant" and "Delete Variant" buttons to manage columns.
- **Reordering Rows**: Drag and drop rows to reorder them.
- **Inserting Designs**: Insert designs into specific variant columns using the integrated search filter for easier selection.
- **Search Filter**: Utilize the search filter to find and select designs when inserting them into columns.

## Technology Stack

- **Frontend Framework**: [React](https://reactjs.org/), [Next.js](https://nextjs.org/)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Drag and Drop**: [@dnd-kit/core](https://www.npmjs.com/package/@dnd-kit/core), [@dnd-kit/sortable](https://www.npmjs.com/package/@dnd-kit/sortable)
- **UI Components**: [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog), [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu)
- **Data Management**: [@tanstack/react-table](https://www.npmjs.com/package/@tanstack/react-table)
- **Styling**: [tailwind-merge](https://www.npmjs.com/package/tailwind-merge), [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)
- **Utilities**: [uuid](https://www.npmjs.com/package/uuid), [clsx](https://www.npmjs.com/package/clsx), [lucide-react](https://www.npmjs.com/package/lucide-react)
- **TypeScript**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)

## Code Quality

- Clean, maintainable code adhering to best practices.
- Properly documented components and functionalities.

## Contributing

If you have suggestions or improvements, feel free to open an issue or submit a pull request.


