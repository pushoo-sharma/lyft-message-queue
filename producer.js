const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue");

async function init() {
  const res = await notificationQueue.add("Email to Pushpak", {
    email: "pushpak",
    subject: "Receipt Email",
    body: '$12.22 for the ride!',
  });
  console.log(`Job #${res.id} added to the queue`);
}

init();
