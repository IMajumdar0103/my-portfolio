# Indrani Majumdar - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Elements**: Hover effects and micro-animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Built with Next.js for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind imports
│   │   ├── layout.tsx           # Root layout with fonts and metadata
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── Navbar.tsx           # Navigation component
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About section with skills
│       ├── Resume.tsx           # Resume section with timeline
│       ├── Projects.tsx         # Projects showcase
│       ├── Contact.tsx          # Contact form and info
│       └── Footer.tsx           # Footer with social links
├── public/
│   ├── profile-placeholder.jpg  # Profile photo (replace with your image)
│   └── resume.pdf              # Resume PDF (replace with your file)
├── tailwind.config.ts           # Tailwind configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Profile Photo**: Replace `public/profile-placeholder.jpg` with your photo
- **Resume**: Replace `public/resume.pdf` with your actual resume
- **Personal Details**: Update contact information in `src/components/Contact.tsx`
- **Social Links**: Update GitHub, LinkedIn, and email links in components
- **Skills**: Modify the skills array in `src/components/About.tsx`
- **Projects**: Update the projects array in `src/components/Projects.tsx`
- **Experience**: Modify education and work experience in `src/components/Resume.tsx`

### Colors and Styling

The portfolio uses a consistent color scheme defined in `src/app/globals.css`:

- **Background**: #F9FAFB (Light gray)
- **Primary**: #2563EB (Blue)
- **Text Primary**: #1F2937 (Dark gray)
- **Text Secondary**: #4B5563 (Medium gray)

You can customize these colors by updating the CSS variables in `globals.css`.

### Fonts

The portfolio uses:
- **Inter** for body text
- **Poppins** for headings

You can change fonts by updating the font imports in `src/app/layout.tsx`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and Tailwind CSS**
