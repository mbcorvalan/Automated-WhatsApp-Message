require('dotenv').config(); 
import { post } from 'axios';

const phoneNumberId = process.env.PHONE_NUMBER_ID;
const accessToken = process.env.ACCESS_TOKEN;
const to = process.env.WHATSAPP_TO;
const templateName = process.env.TEMPLATE_NAME;

const url = `https://graph.facebook.com/v14.0/${phoneNumberId}/messages`;

const data = {
  messaging_product: "whatsapp",
  to,
  type: "template",
  template: {
    name: templateName,
    language: {
      code: "es_AR"
    },
    components: [
      {
        type: "body",
        parameters: [
          {
            type: "text",
            text: "Juanita"
          }
        ]
      }
    ]
  }
};

const config = {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
};

export function sendWhatsAppMessage() {
  return post(url, data, config);
}

sendWhatsAppMessage()
  .then(response => {
    console.log("Mensaje enviado correctamente:", response.data);
  })
  .catch(error => {
    console.error("Error al enviar el mensaje:", error.response ? error.response.data : error.message);
  });
