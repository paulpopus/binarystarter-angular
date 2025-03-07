# Angular 16, Payload CMS, ExpressJs - Free Open-Source Full-Stack Boilerplate
**✨ Professional Web Application Development Starter without the complexity.**

Secure, Stable, Automated.



**[Join Discord Community](https://discord.gg/ERPCG8W6)**

<div style="display: flex; flex-direction: row; justify-content: space-between;">
      <img src="https://binarystarter.com/assets/images/angular/free-architecture-nodejs.png" width="380px" style="width: '100%'; height: auto;"/>
      <img src="https://binarystarter.com/assets/images/angular/free-architecture-angular.png" width="380px" style="width: '100%'; height: auto;"/>
</div>


# Features
- Payload CMS (headless open-source CMS)
- I18n
- TailwindCSS
- Angular Material
- Lazy Loading
- Server Side Rendering App
- Client Side App
- Authentication, Authorization
- Lazy loaded Dashboard for authenticated users
- Standalone Components
- Pnpm, esbuild

<img src="https://binarystarter.com/assets/images/angular/dashboard-payload.png" width="420px"/>


# Installation
For full documentation refer to https://binarystartercom.notion.site/Documentation-binarystarter-angular-87b451a08050465e83bb47fc124a9029?pvs=4

#### Resources

- [Intro to nx](https://nx.dev/getting-started/intro)
- [Install nx](https://nx.dev/getting-started/installation)
- [Why nx?](https://nx.dev/getting-started/why-nx)
- [nx: Run Tasks](https://nx.dev/core-features/run-tasks)
- [nx: Mental Model](https://nx.dev/concepts/mental-model)
- [pnpm commands](https://github.com/nvm-sh/nvm#usage)

#### Prerequisites:

- [Install pnpm](https://pnpm.io/installation)
- [Install nx cli globally](https://nx.dev/getting-started/installation#installing-nx-globally)
- Install nodejs v18

Let’s get started! 🚀

#### Clone GitHub Repository

Run in a terminal `git clone https://github.com/binarystarter/binarystarter-angular.git`. To specify another folder name, you can do a direct `git clone https://github.com/binarystarter/binarystarter-angular.git <project_name>`. 

### Install modules

Run `pnpm install`.

### Start the app
Documentation: https://binarystartercom.notion.site/Documentation-binarystarter-angular-87b451a08050465e83bb47fc124a9029?pvs=4

# The app

### Angular
The angular app can be accessed using http://localhost:4200 - the Server Side Rendered app
The Angular client-side app can be accessed at HTTP://localhost:4200/app/... and HTTP://localhost:4200/auth/...

### Payload CMS
The payloadcms administration panel can be accessed at HTTP://localhost:8080/admin

### ExpressJS
ExpressJS endpoints can be accessed from HTTP://localhost:8080/...

# Out-of-the-box

## Authentication and Authorization

The authentication system is based on Passport Js.

Out of the box you get the following pages in Angular, connected with the ExpressJs and Payload CMS.

## Angular SSR and Dashboard App

Angular comes with separated modules for the static pages and the single page application.

Separation of concerns is very important at this stage of development of the Angular Universal.

Static Pages are encapsuled in their modules and they don’t interact with browser APIs hungry components.

## DRY - Shared Types between the Backend and Frontend

The Backend TypeScript types should not be available on the Frontend.

What most developers do is create the same types on both frontend and backend APIs, which makes a bad precedence of duplicated code.

This problem is solved by using a mono repository.

Managed by nx.dev tools - now extending TypeScript types from the Backend or creating them from scratch can be done in a single shared library between your Angular app and ExpressJs Backend.

## ExpressJs Server integrated with Payload CMS out of the box

We get all the benefits of a monorepository out of the box.

ExpressJs is tightly integrated with PayloadCMS, but you can still add your own routes, outside of Payload.

We believe in TypeScript, hence everything is based on TypeScript.


# Connect with me

- [Twitter](https://twitter.com/florinmtsc)
- [Website](https://binarycentrum.com/)
