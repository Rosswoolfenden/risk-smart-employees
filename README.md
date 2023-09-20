# risk-smart-employees
Risk smart assesment


### build 
# Build the containers
docker-compose build
# Start the container
docker-compose up -d 
docker exec -it risk-smart-employees sh -c "npx prisma db push"

# populate the database
docker exec -it risk-smart-employees sh -c "npx prisma db seed"


TODO : 
    Code cleanup - tried to go to quick.
    Seperate mutations/queries
    Move logic from resolvers
    add unit tests
    Email validation
    Error handling and messaging
    pagntion and search for scaleability
    Auth - permission ect
    
# Choices
    - Apollo-graphql - familiarty and easy of set up
    - Prisma/PostgreSQL - Never tried but have read good things, really like the easy of use
    - Vite/React -  what you guys use and never used before so gave it a try (I like it, espcailly the hot reboot to keep comp running)
    - Tailwind -  part of the desc
    - DaisyUi/HeadlessUi - tailwind libarys to speed up desgin and make it pretty.