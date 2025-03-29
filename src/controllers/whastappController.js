const whatsappService = require('../services/whatsappService');

exports.sendMessage = async (req, res) => {
  try {
    const response = await whatsappService.sendWhatsAppMessage();
    res.status(200).json({
      message: 'Message sent successfully',
      data: response.data
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error sending message',
      error: error.response ? error.response.data : error.message
    });
  }
};