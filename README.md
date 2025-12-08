# Shawn McMahon - Portfolio

A modern, responsive portfolio website built with Next.js 15 and Tailwind CSS, featuring a beautiful neomorphic design with light/dark mode support.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** Vercel

## ✨ Features

- 🌓 Light/Dark mode with system preference detection
- 🎨 Modern neomorphic UI design
- 📱 Fully responsive across all devices
- ⚡ Optimized images with Next.js Image component
- 🔍 SEO optimized with metadata
- ♿ Accessible navigation and components

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shawnmcmahon/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Home page
│   ├── portfolio/       # Portfolio page
│   ├── contact/         # Contact page
│   └── not-found.tsx    # 404 page
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── TechStack.tsx    # Technologies section
│   ├── Portfolio.tsx    # Projects showcase
│   ├── ProjectCard.tsx  # Individual project card
│   ├── Contact.tsx      # Contact information
│   └── ThemeProvider.tsx # Dark/light mode context
├── lib/                 # Utility functions and data
│   └── projects.ts      # Project data
├── public/              # Static assets
│   ├── images/          # Site images
│   ├── icons/           # Tech stack icons
│   ├── fonts/           # Custom fonts (Prompt)
│   └── projects/        # Project screenshots
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Design System

The design uses a custom Tailwind configuration with:

- **Neomorphic shadows** for depth and visual interest
- **Custom color palette** for light and dark modes
- **Prompt font family** for a modern, clean look
- **Responsive spacing** and typography

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shawn McMahon**

- GitHub: [@shawnmcmahon](https://github.com/shawnmcmahon)
- LinkedIn: [shawnpmcmahon](https://www.linkedin.com/in/shawnpmcmahon/)
- Email: shawnmcmahondev@gmail.com
