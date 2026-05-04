export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, otp, name, phoneNumber } = req.body ?? {}
  if (!email || !otp) {
    return res.status(400).json({ success: false, errors: ['Email and OTP are required'] })
  }

  // Step 1: verify OTP → get auth token
  let token
  try {
    const r = await fetch('https://users.api.lecturehead.com/v0/user/otp/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.LECTUREHEAD_API_KEY,
      },
      body: JSON.stringify({ email, otp, name, phoneNumber }),
    })
    const data = await r.json()
    if (!r.ok || !data.success) return res.status(r.status).json(data)
    token = data.data.token
  } catch {
    return res.status(500).json({ success: false, errors: ['Network error verifying OTP'] })
  }

  // Step 2: generate payment/checkout URL
  try {
    const r = await fetch('https://users.api.lecturehead.com/v0/payment-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.LECTUREHEAD_API_KEY,
      },
      body: JSON.stringify({ token, courseId: 3 }),
    })
    const data = await r.json()
    if (!r.ok || !data.success) return res.status(r.status).json(data)

    return res.status(200).json({
      success: true,
      redirectUrl: data.data.data.redirectUrl,
      hasAccess: data.data.data.hasAccess,
    })
  } catch {
    return res.status(500).json({ success: false, errors: ['Failed to generate payment link'] })
  }
}
