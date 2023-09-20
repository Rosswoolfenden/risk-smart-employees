# risk-smart-employees
Risk smart assesment -  Emplpyee table make with apollo graphql server/Posgresql db and a React Vite SPA.

# build 
## Build the containers
    docker-compose build
    docker-compose up -d 

## populate the database
    docker exec -it risk-smart-employees sh -c "npx prisma db push"
    docker exec -it risk-smart-employees sh -c "npx prisma db seed"
    
## Choices
    - Apollo-graphql - familiarty and easy of set up
    - Prisma/PostgreSQL - Never tried but have read good things, really like the easy of use
    - Vite/React -  what you guys use and never used before so gave it a try (I like it, espcailly the hot reboot to keep comp running)
    - Tailwind -  part of the desc
    - DaisyUi/HeadlessUi - tailwind libarys to speed up desgin and make it pretty.

## TODO : 
    - Code cleanup - tried to go to quick.
    - Seperate mutations/queries - easy to make develop upon
    - Move logic from resolvers
    - add unit tests - backend tests as well as end-to-end testing for reliablity
    - Email validation -  Currently no email validation
    - Error handling - Error messaging is poor currentlt with bad messaging and handling.
    - pagntion and search for scaleability -  As the dataset grow pagnation would be needed for slow loading time.
    - Auth - permission ect - not all users should be able to edit/add/fire employees
