# Vande Digital - Design System & Blog Platform

A comprehensive design system built with Next.js 15 and integrated with a Strapi CMS for content management and blog functionality.

## 🚀 Features

- ✅ **Complete Design System** - Built with Next.js 15 and Tailwind CSS 4
- ✅ **Blog Functionality** - Rich text and markdown support with Strapi CMS
- ✅ **Search Functionality** - Site-wide search across posts, pages, and FAQs
- ✅ **Dynamic Sitemap** - SEO-optimized XML sitemap generation
- ✅ **Dark Mode Support** - System preference detection with smooth transitions
- ✅ **Responsive Design** - Mobile-first approach with modern UI components
- ✅ **SEO Optimization** - Structured data, meta tags, and performance optimized
- ✅ **Component Library** - Reusable UI components with TypeScript support

## 📁 Project Structure

```
vande/
├── frontend/          # Next.js frontend application
│   ├── app/          # App router pages and API routes
│   ├── components/   # Reusable UI components
│   ├── lib/         # Utility libraries
│   └── public/      # Static assets
└── backend/         # Strapi CMS backend
    ├── src/         # Strapi source code
    ├── config/      # Configuration files
    └── data/        # Sample data and uploads
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vande012/vande-digital.git
   cd vande-digital
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Environment Setup**
   
   Create `.env.local` in the frontend directory:
   ```env
   NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
   STRAPI_API_TOKEN=your-api-token
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
   
   Create `.env` in the backend directory:
   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=your-app-keys
   API_TOKEN_SALT=your-api-token-salt
   ADMIN_JWT_SECRET=your-admin-jwt-secret
   TRANSFER_TOKEN_SALT=your-transfer-token-salt
   JWT_SECRET=your-jwt-secret
   ```

### Development

1. **Start the Backend (Strapi CMS)**
   ```bash
   cd backend
   npm run develop
   ```
   The Strapi admin panel will be available at http://localhost:1337/admin

2. **Start the Frontend (Next.js)**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at http://localhost:3000

## 🎨 Design System

The design system includes:

- **Typography** - Comprehensive text hierarchy with semantic headings
- **Color Palette** - Base, semantic, and brand colors with dark mode support
- **Components** - Buttons, cards, badges, and navigation components
- **Layout** - Responsive grid system and spacing utilities
- **Icons** - Lucide React icon library integration

### Available Routes

- `/` - Design system showcase and homepage
- `/blog` - Blog post listing with filtering and sorting
- `/blog/[slug]` - Individual blog post pages
- `/blog/category/[slug]` - Posts filtered by category
- `/search` - Site-wide search functionality
- `/sitemap.xml` - Dynamic XML sitemap

## 🔧 Key Technologies

### Frontend
- **Next.js 15** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type safety and better DX
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library

### Backend
- **Strapi v5** - Headless CMS
- **Node.js** - Runtime environment
- **TypeScript** - Type safety for backend

### Integrations
- **Rich Text Rendering** - Support for Strapi rich text and markdown
- **Search Engine** - Cross-content search functionality
- **SEO Tools** - Meta tags, structured data, sitemaps

## 📝 Content Management

The Strapi CMS includes these content types:

- **Blog Posts** - Articles with rich text, categories, and SEO
- **Categories** - Blog post categorization
- **Pages** - Static pages with flexible content sections
- **FAQs** - Frequently asked questions
- **Global** - Site-wide settings and navigation

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
npm run start
```

### Backend (Railway/Heroku)
```bash
cd backend
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://vande-digital.vercel.app) (if deployed)
- [Design System Documentation](https://vande-digital.vercel.app) 
- [Strapi Documentation](https://docs.strapi.io)
- [Next.js Documentation](https://nextjs.org/docs)

---

Built with ❤️ by the Vande Digital team

