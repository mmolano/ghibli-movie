
# Ghibli's 'WebApp
<table>
<tr>
<td>
  This web application retrieves every movie provided by Ghibli's API.
</td>
</tr>
</table>

## Demo
There is a working live demo available for this project at the Environments section. 

## Built with 

- ![NuxtJs](https://img.shields.io/badge/Nuxt.js-16181D.svg?style=for-the-badge&logo=nuxtdotjs&logoColor=#191A1A)
- ![Typescript](https://img.shields.io/badge/Typescript-16181D.svg?style=for-the-badge&logo=typescript&logoColor=blue)
- ![JavaScript](https://img.shields.io/badge/Javascript-16181D.svg?style=for-the-badge&logo=javascript&logoColor=yellow)

## dependencies

- Font-awesome : https://fontawesome.com/
- Nuxt-Tailwind: https://tailwindcss.nuxtjs.org/
- Axios: https://axios.nuxtjs.org/
- Cypress: https://www.cypress.io/
- Sass: https://sass-lang.com

### .env file

A `.env` file has to be created.
For that, you can copy / paste the `.env.example` to `.env`.
- Put the corresponding BASE_URL of the API

## Build Setup

```bash
# Install dependencies
$ npm i

# Serve with hot reload at localhost:3000
$ npm run dev
```
## Cypress Usage

```bash
# Open cypress environment
$ npx cypress open
```

### Development Usage

- Props must be declared with `type` and `default` attributes.
- API calls must be done in the store file 
- Axios requests must be done in store actions
