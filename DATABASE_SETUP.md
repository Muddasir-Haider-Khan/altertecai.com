# Altertec - Dynamic Portfolio Setup Guide

This guide will help you set up the Neon database and configure your application from scratch.

## Prerequisites

- Node.js and pnpm installed
- A Neon database account (https://neon.tech)

## Step 1: Install Dependencies

```bash
pnpm install
```

This will install all required packages including:

- `@prisma/client` - Prisma ORM client
- `bcryptjs` - For password hashing
- `ts-node` - For running seed scripts

## Step 2: Database Setup

Your DATABASE_URL is already configured in `.env`:

```
DATABASE_URL='postgresql://neondb_owner:npg_zLB4nSX3kteM@ep-odd-cake-ad1m5vkh-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
```

## Step 3: Generate Prisma Client

```bash
npx prisma generate
```

## Step 4: Push Schema to Database

This will create the tables in your Neon database:

```bash
pnpm db:push
```

Or:

```bash
npx prisma db push
```

This creates two tables:

- **User** - Stores user credentials for authentication
- **Portfolio** - Stores portfolio items dynamically

### Database Schema

#### User Table

```sql
CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "username" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP
);
```

#### Portfolio Table

```sql
CREATE TABLE "Portfolio" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "tags" TEXT[],
  "description" TEXT NOT NULL,
  "metrics" JSONB,
  "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP
);

CREATE INDEX "Portfolio_category_idx" ON "Portfolio"("category");
```

## Step 5: Seed Initial Data

Seed the database with sample portfolio items and create an admin user:

```bash
pnpm db:seed
```

Or:

```bash
npx ts-node prisma/seed.ts
```

This will create:

- Admin user with username: `admin` and password: `admin123`
- 6 sample portfolio items

## Step 6: Run the Application

```bash
pnpm dev
```

Visit http://localhost:3000

## Features

### For Non-Logged-In Users

- View all portfolio items
- Filter by category
- View detailed portfolio information

### For Logged-In Users

- All of the above, plus:
- Create new portfolio items
- Edit existing portfolio items
- Delete portfolio items

## Authentication

### Login

- Navigate to the login page
- Use credentials: `admin` / `admin123`
- After login, you'll be redirected to the home page
- Navigate to Portfolio to see CRUD buttons

### Logout

- Call the logout API or clear cookies

## API Endpoints

### Authentication

- `POST /api/auth/login` - Login with username and password
- `POST /api/auth/logout` - Logout
- `GET /api/auth/session` - Check authentication status

### Portfolio

- `GET /api/portfolio` - Get all portfolio items (public)
- `GET /api/portfolio?category=AI` - Filter by category (public)
- `POST /api/portfolio` - Create portfolio item (requires auth)
- `GET /api/portfolio/[id]` - Get single portfolio item (public)
- `PUT /api/portfolio/[id]` - Update portfolio item (requires auth)
- `DELETE /api/portfolio/[id]` - Delete portfolio item (requires auth)

## Database Management

### View Database in Prisma Studio

```bash
pnpm db:studio
```

This opens a GUI at http://localhost:5555 where you can:

- View all tables
- Edit data directly
- Add/remove records

### Manual SQL Queries (via Neon Console)

If you need to run SQL queries directly in Neon:

1. Go to https://console.neon.tech
2. Select your project
3. Go to SQL Editor
4. Run queries:

```sql
-- View all users
SELECT * FROM "User";

-- View all portfolio items
SELECT * FROM "Portfolio";

-- Create a new user manually
INSERT INTO "User" (id, username, password, "createdAt", "updatedAt")
VALUES (
  'custom-id-here',
  'newuser',
  '$2a$10$hashedPasswordHere',
  NOW(),
  NOW()
);

-- Delete all portfolio items
DELETE FROM "Portfolio";
```

## Creating Additional Users

To create a new user with a hashed password:

1. Open Prisma Studio: `pnpm db:studio`
2. Go to User table
3. Click "Add record"
4. For password, you need to hash it first

Or use Node.js:

```javascript
const bcrypt = require("bcryptjs");
const hashedPassword = await bcrypt.hash("yourpassword", 10);
console.log(hashedPassword);
```

Then insert into database via Prisma Studio or SQL.

## Troubleshooting

### Prisma Client Not Generated

```bash
npx prisma generate
```

### Database Connection Issues

- Check your DATABASE_URL in `.env`
- Ensure Neon database is active
- Check network connection

### Migration Issues

```bash
# Reset database (WARNING: Deletes all data)
npx prisma db push --force-reset

# Then re-seed
pnpm db:seed
```

## Production Deployment

1. Set `DATABASE_URL` in your hosting environment variables
2. Run `npx prisma generate` during build
3. Run `npx prisma db push` or migrations
4. Optionally run seed script
5. Deploy!

## Security Notes

⚠️ **Important for Production:**

- Change default admin password immediately
- Use environment variables for sensitive data
- Consider implementing JWT or session management library
- Add rate limiting to API routes
- Enable HTTPS
- Add CSRF protection
- Consider using Prisma migrations instead of db push

## Changes Made

✅ Removed admin panel routes
✅ Updated login to redirect to home page
✅ Created dynamic portfolio page with CRUD operations
✅ Protected CRUD operations with authentication
✅ Set up Prisma schema for Neon PostgreSQL
✅ Created API routes for portfolio management
✅ Added seed script for initial data

## File Structure

```
app/
  (site)/
    portfolio/
      page.tsx          # Dynamic portfolio with CRUD
  api/
    auth/
      login/route.ts    # Authentication
      logout/route.ts
      session/route.ts
    portfolio/
      route.ts          # GET all, POST create
      [id]/route.ts     # GET one, PUT update, DELETE
lib/
  prisma.ts             # Prisma client configuration
prisma/
  schema.prisma         # Database schema
  seed.ts              # Seed script
```
