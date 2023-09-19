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
    Seperate mutations/queries
    Move logic from resolvers
    add unit tests
    
# Choices
    - Apollo-graphql - familiarty and easy of set up
    - Prisma/PostgreSQL - Never tried but have read good things, really like the easy of use.
    - Vite/React -  what you guys use and never used before so gave it a try (I like it)