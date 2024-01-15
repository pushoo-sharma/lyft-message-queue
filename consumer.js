const { Worker } = require("bullmq");

const worker = new Worker("email-queue", async (job) => {
  // Your worker logic here
  console.log(`Received message with ID: ${job.id}`);
  console.log("Processing message");
  console.log(`Sending email to ${job.data.email}`);
}, { connection: { host: '127.0.0.1', port: 6379 } });  // Provide your Redis connection details

worker.run();
