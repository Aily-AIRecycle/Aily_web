# Aily Web

This project is the web interface for Aily's recycle bin, built using [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [License](#license)

## Tech Stack

### Frontend

- **React.js (v18.2.0)**: JavaScript library for building declarative and efficient UI.
- **Next.js (v13.4.12)**: React-based framework providing server-side rendering and routing.
- **Redux (v4.2.1) & Redux Toolkit (v1.9.5)**: State management library and convenient tools for Redux usage.
- **Tailwind CSS (v3.3.2)**: Utility-first CSS framework for rapid styling.
- **Sass (v1.63.6)**: CSS extension language for styling using an extended syntax.

### Chart Libraries

- **ApexCharts (v3.41.0)**: Chart library offering various chart types.
- **react-apexcharts (v1.4.1)**: React wrapper component for ApexCharts.

### Networking

- **Axios (v1.5.1)**: Library for making HTTP requests.

### Styling

- **Styled-components**: CSS-in-JS library for writing styles within JavaScript.

### Build Tools

- **Webpack**: Tool for module bundling and resource management.
- **Babel**: Transpiler for converting the latest JavaScript syntax to previous versions.

### Code Quality

- **ESLint (v8.44.0)**: Linter for checking syntax errors and consistency in JavaScript and JSX.
- **Prettier**: Code formatting tool.

### Other

- **TypeScript (v5.1.6)**: JavaScript language with static typing support.

## Project Structure
```bash
📦src
┣ 📂app
┃ ┣ 📂boards
┃ ┃ ┗ 📂[category]
┃ ┃ ┃ ┣ 📂[id]
┃ ┣ 📂dict
┃ ┃ ┣ 📂[category]
┃ ┃ ┃ ┣ 📂[id]
┃ ┣ 📂join
┃ ┣ 📂location
┃ ┣ 📂login
┃ ┣ 📂my-page
┃ ┃ ┗ 📂[menu]
┃ ┣ 📂statistics
┣ 📂components
┃ ┣ 📂Board
┃ ┣ 📂Dict
┃ ┣ 📂HomePage
┃ ┣ 📂Location
┃ ┃ ┣ 📂styles
┃ ┣ 📂MyPage
┃ ┃ ┣ 📂Dashboard
┃ ┣ 📂StatisStics
┃ ┗ 📂UI
┣ 📂hooks
┗ 📂store
```

## Installation and Setup

Follow these steps to run the project locally:

1. Clone this repository:

```bash
   git clone https://github.com/Aily-AIRecycle/Aily_web.git
```

2. Navigate to the project directory:

```bash
cd Aily_web
```

3. Install dependencies:

```bash
npm install
```

4. Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the [MIT License](LICENSE).
