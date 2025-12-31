# 🔐 Text Converter

A modern, user-friendly web application for encrypting and decrypting text using Base64 encoding. Built with React, Vite, and Tailwind CSS.

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB.svg?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC.svg?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg?logo=vite)

## ✨ Features

- **🔒 Encryption**: Convert plain text to Base64 encoded strings
- **🔓 Decryption**: Decode Base64 strings back to readable text
- **📋 One-Click Copy**: Easily copy results to clipboard
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **⚡ Real-time Conversion**: Instant encoding and decoding
- **🔔 Toast Notifications**: User-friendly feedback for all actions
- **♿ Accessible**: Keyboard navigation and screen reader friendly

## 🚀 Demo

The application provides two main modes:

1. **Encryption Mode** (Green theme)
   - Input plain text
   - Get Base64 encoded output
   - Copy encrypted text with one click

2. **Decryption Mode** (Pink theme)
   - Input Base64 encoded text
   - Get decoded plain text
   - Copy decrypted text with one click

## 🛠️ Technologies

- **Frontend Framework**: [React 19.1.1](https://react.dev/)
- **Build Tool**: [Vite 7.1.7](https://vite.dev/)
- **Styling**: [Tailwind CSS 4.1.17](https://tailwindcss.com/)
- **Notifications**: [React Hot Toast 2.6.0](https://react-hot-toast.com/)
- **Linting**: [ESLint 9.36.0](https://eslint.org/)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd text-converter-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Usage

### Encrypting Text

1. Click the **Encryption** button (green theme activates)
2. Type or paste your plain text in the input field
3. Click the encrypt button
4. Copy the encoded result using the copy button

### Decrypting Text

1. Click the **Decryption** button (pink theme activates)
2. Paste your Base64 encoded text in the input field
3. Click the decrypt button
4. Copy the decoded result using the copy button

## 📁 Project Structure

```
text-converter-main/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── App.jsx         # Main application component
│   ├── App.css         # Component-specific styles
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── eslint.config.js    # ESLint configuration
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 🎨 Styling Architecture

The application uses a modern CSS architecture:

- **CSS Variables**: Centralized design system for consistency
- **Tailwind CSS**: Utility-first framework for rapid development
- **Custom Styles**: Professional animations and interactions
- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: Focus states and keyboard navigation support

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React plugin. Configuration can be modified in `vite.config.js`.

### Tailwind Configuration
Tailwind CSS is configured with the latest v4 setup using the Vite plugin.

### ESLint Configuration
Code quality rules are defined in `eslint.config.js`.

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Quality

- Follow React best practices
- Use ESLint for code linting
- Maintain consistent code formatting
- Write descriptive commit messages

## 🐛 Known Issues

- Base64 encoding may not handle all Unicode characters perfectly
- Large text inputs might affect performance
