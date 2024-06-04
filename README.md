# Task Master

A Personal Task Management System

# features

- User Authentication and Authorization
- Profile Management
- Create task
- Update task
- Delete task
- Search and Filtering task

## how to set up and run the project locally?

To set up this project locally you need to clone this project.

```
git clone https://github.com/omarfaruktaj/task-master-frontend.git task-master

```

Then go to project directory

```
cd task-master
```

Then you need to create .env file and add firebase configuration environment variables Like this:

```
VITE_APIKEY=
VITE_AUTHDOMAIN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDERID=
VITE_APPID=

```

Then run

```
yarn install
```

to install require packages.

then run

```
yarn dev
```

The project will run locally.
