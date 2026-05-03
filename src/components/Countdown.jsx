import { useState, useEffect } from 'react'
import './Countdown.css'

// Next Sunday at 10:00 AM IST
function getNextSunday() {
  const now = new Date()
  const day = now.getDay() // 0=Sun
  const daysUntilSunday = day === 0 ? 7 : 7 - day
  const next = new Date(now)
  next.setDate(now.getDate() + daysUntilSunday)
  next.setHours(10, 0, 0, 0)
  // Adjust for IST (UTC+5:30)
  const localOffset = now.getTimezoneOffset() * 60000
  const istOffset = 5.5 * 3600000
  return new Date(next.getTime() - localOffset - istOffset + localOffset)
}

function calcTime(target) {
  const diff = Math.max(0, target - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  }
}

export default function Countdown() {
  const [target] = useState(() => getNextSunday())
  const [time, setTime] = useState(() => calcTime(target))

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const cells = [
    { num: String(time.days).padStart(2, '0'), lbl: 'Days' },
    { num: String(time.hours).padStart(2, '0'), lbl: 'Hours' },
    { num: String(time.mins).padStart(2, '0'), lbl: 'Min' },
    { num: String(time.secs).padStart(2, '0'), lbl: 'Sec' },
  ]

  return (
    <div className="countdown">
      {cells.map(({ num, lbl }) => (
        <div key={lbl} className="countdown-cell">
          <span className="countdown-num">{num}</span>
          <span className="countdown-lbl">{lbl}</span>
        </div>
      ))}
    </div>
  )
}
