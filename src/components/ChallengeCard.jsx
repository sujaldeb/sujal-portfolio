import { useState, useEffect, useRef } from 'react'

const AUTO_ADVANCE_MS = 6000

const ChallengeCard = ({ challenges, accent }) => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused || challenges.length <= 1) return
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % challenges.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, challenges.length])

  const current = challenges[active]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: `0.5px solid ${accent}33`,
        borderTop: `2px solid ${accent}`,
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ padding: '20px 22px 0' }}>
        <span style={{
          display: 'inline-block', background: accent + '25', color: accent,
          fontSize: '10px', fontWeight: '500', letterSpacing: '0.5px',
          padding: '4px 10px', borderRadius: '6px',
        }}>
          PROBLEM-SOLVING · {active + 1}/{challenges.length}
        </span>
      </div>

      <div style={{ padding: '18px 22px 8px', flex: 1 }}>
        <div style={{ fontSize: '10px', letterSpacing: '2px', color: accent, textTransform: 'uppercase', fontWeight: '500', marginBottom: '8px' }}>
          The problem
        </div>
        <p style={{ color: '#F3F4F6', fontSize: '14px', lineHeight: '1.6', fontWeight: '400', margin: '0 0 18px' }}>
          {current.problem}
        </p>

        <div style={{ fontSize: '10px', letterSpacing: '2px', color: accent, textTransform: 'uppercase', fontWeight: '500', marginBottom: '8px' }}>
          The fix
        </div>
        <p style={{ color: '#C9D1D9', fontSize: '13.5px', lineHeight: '1.7', fontWeight: '300', margin: 0 }}>
          {current.fix}
        </p>
      </div>

      <div style={{
        margin: '0 22px 20px', padding: '14px 16px',
        background: accent + '15', border: `0.5px solid ${accent}30`,
        borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '12px',
      }}>
        <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: '300', flexShrink: 0 }}>Result</span>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: '700', color: accent, textAlign: 'right' }}>
          {current.result}
        </span>
      </div>

      <div style={{ padding: '0 22px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        {challenges.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to challenge ${i + 1}`}
            style={{
              width: active === i ? '18px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: active === i ? accent : accent + '40',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'width 0.2s, background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ChallengeCard