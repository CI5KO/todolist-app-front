# ToDo App Frontend

This is the frontend application for a ToDo App. It provides a user interface for creating, updating and deleting tasks.

## Technologies

- Next.js 14
- Turbopack
- Storybook 8
- Typescript
- Tailwind CSS

## Project Structure

The project is structured as follows:

- `src`: Contains the source code for the application.
  - `app`: Contains all the pages for the application.
  - `utils`: Contains all the utilities for the application.
    - `components`: Contains all the reusable components for the application, using the atomic architecture.
      - `atoms`: Contains all the atomic components, such as buttons and inputs.
      - `molecules`: Contains all the molecules components, which are composed of atoms.
      - `organisms`: Contains all the organisms components, which are composed of molecules.
    - `context`: Contains all the context providers for managing global state.
    - `hooks`: Contains all the custom hooks used in the application.
    - `lang`: Contains the language files for internationalization.
    - `services`: Contains all the services used in the application, such as API calls and data manipulation.
    - `styles`: Contains global styles and Tailwind CSS configuration files.
  - `middleware.ts`: Middleware for fast authentication and authorization.
- `public`: Contains static assets such as images and fonts.
- `.next`: Contains the compiled code from the `src` directory. This is where you run your application from.
- `package.json`: Contains project dependencies and scripts for running the application.
- `tsconfig.json`: Configures the Typescript compiler.
- `.env.local`: File for setting environment variables.

## Setup and Installation

1. Clone this repository.
2. Install dependencies by running `npm install`.
3. Create a `.env.local` file and set your environment variables.
4. Run `npm run dev` to start the application in development mode powered by turbopack.
5. Run `npm run build` to compile the Typescript code into the `.next` directory.
6. Run `npm start` to start the application in production mode.

## Docker Configuration

This Dockerfile defines multiple stages for different environments: production, development, and documentation. Each stage is built from a Node.js base image.
This configuration ensures that each environment is optimized for its specific needs, improving development efficiency and deployment performance.

Base Image: Uses node:20.11.0.

### Production

Build

```bash
docker build --target production -t myapp-production .
```

Run

```bash
docker run -p 3000:3000 myapp-production
```

### Development

Build

```bash
docker build --target development -t myapp-development .
```

Run

```bash
docker run -p 3000:3000 -p 9230:9230 myapp-development
```

### Documentation (Storybook)

Build

```bash
docker build --target documentation -t myapp-docs .
```

Run

```bash
docker run -p 6006:6006 myapp-docs
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit and push your changes to the new branch.
4. Submit a pull request.

## License

This project is licensed under the MIT License.
You can copy and modify the code as you wish.
