# Charitha Rayalu Thirumalasetty - Personal Portfolio

A modern, professional, and fully responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with white and purple theme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle animations and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js for optimal performance
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── sections/            # Main sections
│       │   ├── Hero.tsx         # Hero section with CTA
│       │   ├── About.tsx        # About section with skills
│       │   ├── Education.tsx    # Education timeline
│       │   ├── Projects.tsx     # Projects showcase
│       │   ├── Contact.tsx      # Contact form and info
│       │   └── Footer.tsx       # Footer with social links
│       └── ui/
│           └── Navigation.tsx   # Sticky navigation
├── public/                      # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel/Netlify ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Required

Before deploying, please update the following:

### 1. Profile Image
- Add your profile image as `profile-placeholder.jpg` in the `/public` folder
- Recommended size: 400x400px or larger, square aspect ratio
- Supported formats: JPG, PNG, WebP

### 2. Resume
- Add your resume as `resume.pdf` in the `/public` folder
- The download link in the Hero section will work automatically

### 3. Project Information
Update the Projects section in `/src/components/sections/Projects.tsx`:
- Replace placeholder project details with your actual projects
- Update GitHub and live demo links
- Add project descriptions and tech stacks

### 4. Social Media Links
Update placeholder links in `/src/components/sections/Footer.tsx`:
- Twitter/X link (currently placeholder)
- YouTube link (currently placeholder)
- Verify other social media links are correct

### 5. Contact Form
The contact form is currently using a placeholder submission handler. To make it functional:
- Integrate with a form service (Formspree, Netlify Forms, etc.)
- Update the form submission logic in `/src/components/sections/Contact.tsx`

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Import the project
4. Vercel will automatically detect Next.js and deploy

**Or using Vercel CLI:**
```bash
npm i -g vercel
vercel
```

### Deploy on Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

**Manual deployment:**
```bash
npm run build
npm run export
```
Then upload the `out` folder to Netlify.

## 📱 Sections Overview

### Hero Section
- Full name and tagline
- Value proposition
- Call-to-action buttons
- Profile image with animations
- Resume download link

### About Section
- Professional summary
- Current status and education
- Technical skills organized by category
- Personal highlights (problem solving, leadership, teamwork)

### Education Section
- Timeline-style layout
- Current BTech at Apollo University
- Key focus areas and academic highlights
- Future goals and aspirations

### Projects Section
- Grid layout with project cards
- Featured project (DriveHub) with larger card
- Tech stack tags
- GitHub and live demo links
- Placeholders for additional projects

### Contact Section
- Contact information
- Working contact form with validation
- Professional contact details
- Quick response promise

### Footer
- Social media links
- Quick navigation
- Technical stack information
- Copyright and attribution

## 🎨 Color Scheme

- **Primary Purple**: #8b5cf6 (purple-500)
- **Purple Variations**: #a78bfa, #7c3aed, #e9d5ff
- **Text**: #111827 (gray-900)
- **Background**: #ffffff (white)
- **Accents**: Various gray shades

## ⚡ Performance Features

- Optimized images with Next.js Image component
- Smooth scrolling navigation
- Hover animations and transitions
- Responsive design for all screen sizes
- Fast loading with code splitting

## 📞 Contact Information

This portfolio belongs to:
- **Name**: Thirumalasetty Charitha Rayalu
- **Email**: charitharayaluthirumalasetty@gmail.com
- **Phone**: +91 93467 32991
- **Location**: Nandyal, India

## 📄 License

This project is open source and available under the [MIT License](https://choosealicense.com/licenses/mit/).

## 🤝 Contributing

If you'd like to contribute to this project or use it as a template:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ by Charitha using Next.js and Tailwind CSS**
