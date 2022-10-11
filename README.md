# Lendsqr Assessment test

Lendsqr is a Lending-as-a-Service solution. Lendsqr provide a platform for lenders to create and manage their lending products. Lendsqr also provide a platform for borrowers to apply for loans and manage their loan accounts.

# Getting Started

Navigate to directory on your machine:

```bash
cd folder/to/clone-into/
```

Clone repository:

```bash
git clone https://github.com/Onyelaudochukwuka/lendsqrassessment
```

Install all dependencies:

```bash
npm i
# or
yarn install
```

run the development server:

```bash
npm run start
# or
yarn start
```

# Project Structure
    
    src
    ├── ...
    ├── pages # contains all page components
    ├── components  ├── molecule # contains all super components
                    ├── atom # contains all sub components
    ├── utils  ├── hooks   # All custom hooks
               ├── functions # All helper functions
               ├── redux # redux store, slices and api connection
    ├── assets # Images
                ├── icons # contains all icons
    ├── testing utils # helpers for tests
    ├──sass # reset and value partials
    └── ... └──package.json # Contains all dependencies

## Implemented Features
The features described in the assessment test were implemented. as well as the following:
 - [x] All Buttons are interactive
 - [x] Users can filter details on the user dashboard
 - [x] Users can view details of a single user 
 - [x] single user details is stored in local storage on visiting page, the data stored updates whenever a response goes through.
 - [x] Users can navigate through users using the pagination buttons
 - [x] Users can choose how many user details they want to see at a time
 - [x] Users can blacklist a user on the dashboard
 - [x] Users can activate a blacklisted user on the dashboard
 - [x] Users can view the details of a blacklisted user
 - [x] Other pages on the side bar are accessible
 - [x] A 404 page for pages that doesn't exists
 - [x] inputs on the login page is validated using regex
 - [x] Users can login (Login data is not being stored)

## Performance tests
- tests were Performed with JEST and React testing library

![Screen Shot 2022-10-11 at 10 19 18 AM](https://user-images.githubusercontent.com/82924100/195051191-9da5a882-9186-4f01-8157-54270be40dda.png)
![Screen Shot 2022-10-11 at 10 15 56 AM](https://user-images.githubusercontent.com/82924100/195051255-b8527455-08e2-4e3d-97af-e6bb26fd268a.png)

- The above are performance reports from web.dev and google lighthouse which goes to say my application is performant, accessible and SEO friendly as well as obey best semantic practices


## Technologies Used
- React
- Typescript

- Redux
- Redux Toolkit
- React Router
- EsLint
- Prettier
- Sass
- React Testing Library
- Jest

## Author
Onyela Udochukwuka

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
