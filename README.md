
# Automated WhatsApp Message Sender

This project is a Node.js server designed to send automated WhatsApp messages to a specific number at a predefined time of day. It leverages the Meta (Facebook) Graph API to interact with the WhatsApp Business API.

✨ Features
Sends automated WhatsApp messages to a specified recipient.

Uses predefined templates to personalize message content.

Built using Node.js, Axios, and the Meta Graph API.

Environment variable support for configuration.

🛠️ How It Works

The core functionality of this project is to send a templated WhatsApp message using a predefined template. Here’s a brief overview of how the code works:

Environment Variables:

PHONE_NUMBER_ID: Your WhatsApp Business phone number ID.

ACCESS_TOKEN: Your Meta (Facebook) access token.

WHATSAPP_TO: The recipient's phone number in international format.

TEMPLATE_NAME: The name of the WhatsApp message template you’ve configured.

Message Payload: The message is constructed using the template and customized with dynamic values (e.g., the name “Juanita”).

Sending the Message: The sendWhatsAppMessage() function sends the payload to the WhatsApp Business API endpoint using Axios.

ts
Copy
Edit
sendWhatsAppMessage()
  .then(response => {
    console.log("Message sent successfully:", response.data);
  })
  .catch(error => {
    console.error("Failed to send message:", error.response ? error.response.data : error.message);
  });

🚀 Getting Started

1. Clone the repository

bash
git clone https://github.com/mbcorvalan/Latin.git
cd whatsapp-message-scheduler

2. Install dependencies
bash
npm install

3. Set up your .env file
PHONE_NUMBER_ID=your_phone_number_id
ACCESS_TOKEN=your_access_token
WHATSAPP_TO=recipient_number
TEMPLATE_NAME=your_template_name

4. Run the script
bash
node index.js

⏰ Scheduling Messages

This repository sends a message immediately when executed. To schedule it at a specific time, you can use tools like cron jobs or task schedulers depending on your environment.

📘 Requirements

WhatsApp Business Account

Approved Message Templates on Meta

Valid Meta API credentials

