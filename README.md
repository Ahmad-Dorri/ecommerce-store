# Full Stack PERSIAN E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL, 2023

For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

This is a repository for a Full Stack <strong>PERSIAN</strong> E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL

## MAKE SURE YOU HAVE [ADMIN](https://github.com/Ahmad-Dorri/ecommerce-admin) SETUP FIRST!

Key Features:

- We will be using <a href='https://www.bing.com/ck/a?!&&p=42a34e6cf0fc1fa0JmltdHM9MTY5MTc5ODQwMCZpZ3VpZD0zZGQzMjg3ZC03Mjk1LTZhMWQtMWYzZC0zYWQ0NzM0NzZiZmYmaW5zaWQ9NTE0MQ&ptn=3&hsh=3&fclid=3dd3287d-7295-6a1d-1f3d-3ad473476bff&psq=shadcn&u=a1aHR0cHM6Ly91aS5zaGFkY24uY29tLw&ntb=1' >shadcn-ui</a> for the Admin!
  <img/>
- Our admin dashboard is going to serve as both CMS, Admin and API!

- You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- You will be able to create, update and delete categories!
- You will be able to create, update and delete products!
- You will be able to upload multiple images for products, and change them whenever you want!
- You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
- You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
- You will be able to control which products are "featured" so they show on the homepage!
- You will be able to see your orders, sales, etc.
- You will be able to see graphs of your revenue etc.
- You will learn Clerk Authentication!
- Order creation
- Stripe checkout
- Stripe webhooks
- MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/Ahmad-Dorri/ecommerce-store.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_API_URL=
### Connect to PlanetScale and Push Prisma
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Technologies Used

The project utilizes the following technologies:

- Next.js 13 App Router
- React
- Shadcn UI + Tailwind CSS
- Stripe
- Typescript
- AXIOS
- ZUSTAND

For a complete list of dependencies, you can refer to the `package.json` file.

## License

The project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the codebase as per the terms of the license.

## Documentation

For detailed documentation and usage guidelines, please refer to the [project wiki](#insert_link_to_wiki).

---
