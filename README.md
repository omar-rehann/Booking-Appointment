# Doctor Book Appointment

A modern full-stack web application for booking doctor appointments.

## 🚀 Features

### User Features
- Secure authentication with **Clerk**
- Browse doctors by specialty
- View doctor details (experience, about, social media)
- Book appointments with date & time selection
- Manage my bookings (view, cancel)
- Browse clinic services
- Read medical articles
- Contact the clinic

### Admin Features
- Powerful **Strapi CMS** backend
- Manage doctors, specialties, services, articles
- Full control over content and appointments

### Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Authentication**: Clerk
- **Backend/CMS**: Strapi (Headless CMS)
- **Database**: PostgreSQL / SQLite
- **Styling**: Tailwind CSS + Shadcn/ui (optional)
- **Deployment**: Vercel (Frontend) + Strapi Cloud / Self-hosted

## 📁 Project Structure

```
doctor-book-appointment/
├── frontend/              # Next.js Application
│   ├── app/
│   ├── components/
│   └── lib/
├── strapi/                # Strapi CMS
│   ├── src/api/
│   └── config/
└── README.md
```

## 🛠 Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd doctor-book-appointment
```

### 2. Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env.local
```

Configure your Clerk keys in `.env.local`

### 3. Strapi Setup
```bash
cd strapi
npm install
cp .env.example .env
npm run develop
```

### 4. Run the project
```bash
# Terminal 1 - Strapi
cd strapi && npm run develop

# Terminal 2 - Next.js
cd frontend && npm run dev
```

## 🔑 Environment Variables

**Frontend (.env.local)**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
```

**Strapi (.env)**
```env
DATABASE_CLIENT=postgres
DATABASE_URL=...
JWT_SECRET=...
```

## 📋 Content Types (Strapi)

- Specialty
- Doctor
- Appointment
- Service
- Article
- Clinic

## 🚀 Main Pages

- `/` - Homepage (Hero + Specialties)
- `/doctors` - All doctors
- `/doctor/[slug]` - Doctor details + Booking
- `/my-bookings` - User bookings
- `/services` - Clinic services
- `/articles` - Medical articles
- `/contact` - Contact us
- `/admin` - Strapi Dashboard

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push and open a Pull Request

## 📄 License

MIT License

---
##  Live Demo

Live Demo:https://booking-appointment-rho.vercel.app/

**Made with ❤️ for better healthcare access**