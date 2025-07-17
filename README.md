# OceanLink Landing

OceanLink is a comprehensive CRM platform designed specifically for the maritime industry, streamlining talent acquisition, job management, and compliance for shipping companies and maritime professionals.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

OceanLink revolutionizes maritime talent acquisition with cutting-edge technology and deep industry expertise, connecting the best maritime professionals with leading shipping companies worldwide.

- **Founded:** 2020
- **Companies Served:** 500+
- **Maritime Professionals:** 15,000+
- **Countries:** 50+
- **Client Satisfaction:** 98%

### Mission

To bridge the gap between exceptional maritime talent and leading shipping companies through innovative technology, comprehensive compliance management, and personalized service that drives the maritime industry forward.

### Vision

To become the global standard for maritime recruitment, creating a world where every maritime professional finds their ideal career opportunity and every shipping company has access to the best talent available.

### Core Values

- **Safety First:** Ensuring the highest safety standards and certifications.
- **Excellence:** Delivering superior service and results.
- **Partnership:** Building lasting relationships with candidates and companies.
- **Maritime Focus:** Deep industry expertise for specialized recruitment solutions.

## Features

- **Talent Search & Matching:** Advanced filters and AI-powered matching for maritime professionals.
- **Job Management:** Create and manage job postings with industry-specific templates.
- **Certification Tracking:** Monitor certifications and receive alerts for expiring credentials.
- **Analytics & Reporting:** Data-driven insights on hiring metrics and trends.
- **Compliance & Security:** GDPR compliant, AES-256 encryption, and role-based access controls.
- **Maritime Expertise:** Built for the unique needs of the maritime industry.

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (v8 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/clouddo-team/ocean-link-landing.git
   cd ocean-link-landing/oceanlink/project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root of `oceanlink/project` and add the required environment variables (see below).
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```
SENDGRID_API_KEY=your_sendgrid_api_key
MAIL_TO=your_verified_email@example.com
```

- `SENDGRID_API_KEY`: Your SendGrid API key for sending emails from the contact form.
- `MAIL_TO`: The email address to receive contact form submissions (must be a verified sender in SendGrid).

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript, React 18
- **Styling:** Tailwind CSS, shadcn/ui, Lucide React icons
- **Email:** SendGrid API
- **State Management:** React hooks
- **Other:** Supabase, Zod, Radix UI, Recharts

## Folder Structure

- `app/` — Main application pages and API routes
- `components/` — Reusable UI and feature components
- `lib/` — Utility functions and API clients
- `hooks/` — Custom React hooks
- `public/` — Static assets (images, logos)

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

[MIT](LICENSE)

## Contact

For questions, partnership inquiries, or support, please use the contact form on the landing page or email us at the address specified in the `.env` file.
