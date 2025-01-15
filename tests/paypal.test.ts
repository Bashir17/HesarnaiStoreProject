import { generateAccessToken, paypal } from '../lib/paypal';
test('generates a PayPal access token', async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  // Should be a string that is not empty
  expect(typeof tokenResponse).toBe('string');
  expect(tokenResponse.length).toBeGreaterThan(0);
});
// Capture payment with a mock order
test('simulates capturing a PayPal order', async () => {
  const orderId = '100'; // Mock order ID

  // Mock the capturePayment function to return a successful response
  const mockCapturePayment = jest
    .spyOn(paypal, 'capturePayment')
    .mockResolvedValue({
      status: 'COMPLETED',
    });

  // Call the capturePayment function with the mock order ID
  const captureResponse = await paypal.capturePayment(orderId);
  // Ensure the capture response contains expected fields
  expect(captureResponse).toHaveProperty('status', 'COMPLETED');

  // Clean up mock
  mockCapturePayment.mockRestore();
});