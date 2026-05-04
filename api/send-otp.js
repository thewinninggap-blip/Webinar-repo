export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email } = req.body ?? {}
  if (!email) return res.status(400).json({ success: false, errors: ['Email is required'] })

  try {
    const r = await fetch('https://users.api.lecturehead.com/v0/user/otp/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.LECTUREHEAD_API_KEY,
      },
      body: JSON.stringify({ email }),
    })
    const data = await r.json()
    return res.status(r.status).json(data)
  } catch {
    return res.status(500).json({ success: false, errors: ['Network error contacting OTP service'] })
  }
}
