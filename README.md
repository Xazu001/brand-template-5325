# Brand Template

## Description

**Brand Template XN**  
This is just a template that you can easily clone, modify, and deploy on Cloudflare Pages.

## Basic Setup

1. **Create a `wrangler.toml` file** and add the following content:
   ```toml
   name = "(Your own name)"
   compatibility_date = "2023-10-30"
   pages_build_output_dir = "./build/client"

   [vars]
   RESEND_KEY = "(Your own Resend key from resend.com)"
   FROM_EMAIL = "(Your sending email)"
   TO_EMAIL = "(Target email for sending)"
   ```

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repository.git
   ```

2. **Install dependencies**:
   Install all required dependencies using npm or Yarn.
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the application**:
   To start the application in development mode:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Technologies Used

- **React** – Used for building the user interface.
- **Remix** – Framework for building web applications.
- **Cloudflare Pages** – For deploying the application.
- **Resend** – For sending emails.
