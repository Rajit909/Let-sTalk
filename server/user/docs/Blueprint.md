

today's plan:
    1. create a user model for user creation
    create a model dir and inside this create a user.model.ts file
    in this file we are going to create model for user 
    2. redis connection setup for data caching
    3.implementing rabbit mq
-- Docker setup:
- Rabbit mq image pulling:
docker run -d --hostname rabbitmq-host --name rabbitmq-container -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin123 -p 5672:5672 -p 15672:15672 rabbitmq:3-management

