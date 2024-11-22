const paypal = require('@paypal/checkout-server-sdk');
require('dotenv').config();

const Environment = paypal.core.SandboxEnvironment;
const client = new paypal.core.PayPalHttpClient(
  new Environment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
);

exports.createOrder = async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: req.body.total,
      }
    }]
  });

  try {
    const order = await client.execute(request);
    res.status(201).json({ id: order.result.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.captureOrder = async (req, res) => {
  const { orderID } = req.body;
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    res.status(200).json({ status: 'success', capture: capture.result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
