# URLShortly Frontend - With Next.js

![URLShortly Website Screenshot](https://ucarecdn.com/26078d0f-8b2e-43f1-ad27-b0792103beb7/-/preview/1000x512/)

URLShortly is a modern and responsive web application for shortening URLs, built using Next.js and a variety of front-end libraries and tools. The frontend integrates with the URLShortly backend API to generate short URLs and provide an intuitive user interface.

## Features

- **Shorten URLs:** Users can input a long URL and optionally add a custom slug to create a shortened URL.
- **Copy & Open Short URLs:** The generated short URL can be copied to the clipboard or opened directly with a button click.
- **Reset Form:** Users can reset the form to clear inputs and the generated short URL.
- **Loading Animations:** Smooth loading animations when creating and resetting URLs.
- **Responsive Design:** Works seamlessly across all devices, including mobile, tablet, and desktop.

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [React Query](https://tanstack.com/query/v3)
- [Formik](https://formik.org/docs)

## Prerequisites

Before you start, ensure you have the following installed on your system:

- **Node.js** (version >= 18.x): [Download here](https://nodejs.org/en/download/)
- **npm** (Node Package Manager): Automatically included with Node.js, or [install here](https://www.npmjs.com/)

## Installation

### 1. Clone the repository:
To get started, clone the repository from GitHub to your local machine.
```bash
git clone https://github.com/handikatriarlan/URLShortly-fe.git
```

### 2. Navigate to the Project Directory
Once the repository has been cloned, navigate to the project directory using the terminal:
```bash
cd URLShortly-fe
```

### 3. Install the dependencies
Next, install all the project dependencies. This command will read the package.json file and install everything necessary for the project to run.
```bash
npm install
```

### 4. Create a `.env` file at the root of your project
Create a local environment configuration file where your API endpoint and other sensitive configurations will be stored. Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

### 5. Add your backend URL and access token
In the newly created `.env` file, add your backend URL and the API access token. These values allow your frontend to communicate with the backend.
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api/short-link
NEXT_PUBLIC_API_ACCESS_TOKEN=abc
```
### 6. Run the development server:
Finally, start the development server. This will compile and serve your Next.js application locally.
```bash
npm run dev
```
The app will be running at `http://localhost:3000`.
