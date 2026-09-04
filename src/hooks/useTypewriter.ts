import { useEffect, useState } from 'react'

interface TypewriterOptions {
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseMs?: number
}

/** Cycles through `words`, typing and deleting one character at a time. */
export function useTypewriter(words: string[], options: TypewriterOptions = {}): string {
  const { typingSpeedMs = 70, deletingSpeedMs = 40, pauseMs = 1800 } = options
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    if (words.length === 0) return

    const current = words[wordIndex % words.length]

    if (phase === 'typing') {
      if (text.length < current.length) {
        const id = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeedMs)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => setPhase('pausing'), pauseMs)
      return () => clearTimeout(id)
    }

    if (phase === 'pausing') {
      const id = setTimeout(() => setPhase('deleting'), pauseMs)
      return () => clearTimeout(id)
    }

    if (text.length > 0) {
      const id = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeedMs)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setWordIndex((i) => (i + 1) % words.length)
      setPhase('typing')
    }, deletingSpeedMs)
    return () => clearTimeout(id)
  }, [text, phase, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs])

  return text
}
