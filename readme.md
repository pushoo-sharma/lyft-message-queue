
# Lyft Canada: In-App Communication with Message Queue

  

## Overview

  

This repository demonstrates the use of a message queue for facilitating in-app communication between Lyft Canada and its drivers. The implementation uses BullMQ, a Node.js library for handling distributed job queues with Redis.

  

## Prerequisites

  

Before running the application, ensure that you have the following dependencies installed:

  

- Node.js

- Redis server

  

## Installation

  

1.  **Clone the repository:**

  

```bash

git clone https://github.com/your-username/lyft-message-queue.git

cd lyft-message-queue

```

  

2.  **Install dependencies:**

  

```bash

npm install

```

  
  

3.  **Configure Redis connection details:**

  

Update the Redis connection details in both init.js and worker.js files:

  

```bash

{ connection: { host: '127.0.0.1', port: 6379 } }

```

  

# Lyft Canada Use Case

  

## Problem Statement

  

Lyft Canada requires an efficient way to communicate with its drivers in real-time. Traditional synchronous communication mechanisms may not scale well and can introduce latency. Therefore, a message queue system is proposed to handle asynchronous communication.

  

## Solution

  

-  **Message Queue**: Utilizing BullMQ as the message queue system to handle communication jobs asynchronously.

  

-  **Job Processing**: A worker is implemented to process incoming jobs, simulating the sending of email notifications to drivers.