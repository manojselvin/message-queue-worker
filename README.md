## RabbitMQ Worker/Consumer Project
This is consumer project and if you haven't cloned the producer project for RabbitMQ. follow the `How does this work ?` instructions below.

## How Does this Work ?
1. Clone Producer Repository by running `git clone https://github.com/manojselvin/message-queue-producer`
2. Clone this Consumer Repository `git clone https://github.com/manojselvin/message-queue-worker`
3. Run Both the projects by following the steps mentioned to run the project in each projects `README.md` file.

## Steps to Run Consumer Project
1. Clone this project by running `git clone https://github.com/manojselvin/message-queue-worker`
2. `cd` into `project dir`
3. Complete `Steps to generate Connection URL for RabbitMQ`. 
4. run `npm install` to install all dependencies
5. run `npm start` to run the consumer to start listening for new messages into to queue.
6. If any new message in sent in the queue then it will be logged into the console log.

## Steps to generate Connection URL for RabbitMQ
---
Note: (Skip if already followed this on Producer Project setup)
1. Go to https://www.cloudamqp.com/plans.html
2. Select `free plan`.
3. Sign up for a `free account`.
4. Create a new instance in the `regions` listed.
5. Create a `new queue` and note down the `name of the queue`.
6. `Click on the instance` and from `side navigation` `click on Details` then `copy` the `AMQP URL`.
7. Paste the connection url and queue name in `config/config.json` file.