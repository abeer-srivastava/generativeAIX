# GenerativeAix Frontend

A modern React + Vite frontend for GenerativeAix, offering AI-powered solutions for businesses. This project features a responsive UI, Tailwind CSS, and a suite of AI-driven tools and services.

## Features

- ⚡ Fast development with [Vite](https://vitejs.dev/)
- ⚛️ Built with [React](https://react.dev/)
- 🎨 Styled using [Tailwind CSS](https://tailwindcss.com/)
- 🧩 Modular component structure
- 📦 Modern ES module setup
- 🧑‍💻 ESLint integration for code quality
- 🖼️ Rich UI with SVG icons and illustrations

## Project Structure

```
genaiX/
├── public/                # Static assets (images, SVGs)
├── src/
│   ├── components/        # React components (common, pages, sections, ui)
│   ├── data/              # Static data (services, team, portfolio, timeline)
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global and component CSS
│   ├── utils/             # Utility functions and constants
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point
│   └── index.css          # Tailwind CSS import
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/generativeaix-frontend.git
   cd genaiX
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build

To build for production:

```sh
npm run build
# or
yarn build
```

### Lint

To check code quality:

```sh
npm run lint
# or
yarn lint
```

## Customization

- Update company info and navigation in [`src/utils/constants.js`](src/utils/constants.js)
- Add or modify services in [`src/data/services.js`](src/data/services.js)
- Update team members in [`src/data/team.js`](src/data/team.js)
- Adjust global styles in [`src/styles/globals.css`](src/styles/globals.css)

## License

This project is licensed under the MIT License.

---

Made with ❤️ by the GenerativeAix Team