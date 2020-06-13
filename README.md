# Nexus Aurora Website

The official GitHub repo for [https://nexusaurora.com/](https://nexusaurora.com/).

<img src="https://camo.githubusercontent.com/ab6e05361377d123e44c817daf69890c98398fcc/687474703a2f2f68323834373736362e73747261746f7365727665722e6e65742f707964696f2f7075626c69632f3239326364613338652f646c2f5370616365537569742d43616c69442d42616e6e65722e706e673f63743d74727565" />

## What is Nexus Aurora?

Nexus Aurora is a collaboration between multiple volunteers on the web looking to submit a proposal for the Mars City State Design Competition organized by The Mars Society. Feel free to discuss any subject related to engineering a viable Mars habitat that can sustain a city of 1 million people.

## Setup

```bash
git clone https://github.com/Nexus-Aurora/web-portal.git
cd web-portal
npm install
npm start
```

This will start Gatsby in development mode and code changes made will be automatically refelected.

## Building

To run a static production build of the site simply run:

```bash
npm run build
```

This will spit out a `/public` folder in the root of the project with a static version of the site in.

This folder can be uploaded to a hosting provider or fire up a local server to preview the build like this:

```bash
npm run serve
```

## Tooling

We are using various peices of tooling to keep code consistency. Including:

- [Prettier](https://prettier.io/) - To keep coding conventions enforced.
- [ESLint](https://eslint.org/) - Catch common coding errors.
- [import-sort](https://github.com/renke/import-sort) - To keep module import order consistent.

You can run all the linting steps in one command:

```bash
npm run lint
```

or granularly:

```bash
npm run lint:format
```

You can also let the system try and automatically fix the errors in this tool chain:

```bash
npm run fix
```

## Planning

Please visit the [Issues](https://github.com/Nexus-Aurora/web-portal/issues) and [Milestones](https://github.com/Nexus-Aurora/web-portal/projects) to see where you can contribute.

## Contribution

Anyone is permitted to contribute! Make sure to remember that this is CCv4.0 licensed and have a blast!

### Steps to contribute:

1. Press the `fork` button.
2. Go to setup steps and come back once you're done, **replacing Nexus-Aurora with your GitHub username**.
3. Read up on the <a href="#directories">Directories</a> if needed.
4. Add your code and test it (you learnt this in setup steps).
5. Open a PR with your new code!

## Directories

### .circleci

Contains the config files for CircleCi, do not touch unless you are an administrator and know what you're doing.

### data

Read [this Gatsby article](https://www.gatsbyjs.org/tutorial/part-four/) for more information.

### src

This is where the fun begins. In here, find five different directories, each with it's own purpose. Read the Gatsby documentation for more.

## Where can I get in on the fun?

All the talk for the _whole_ project is currently on the Discord server. Private Message [SpaceInstructor](https://reddit.com/u/SpaceInstructor/) on Reddit to access it.
