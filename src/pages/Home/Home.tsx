import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Header } from '~/components/header/Header.components'
import { Footer } from '~/components/footer/Footer.component'
import { Questions, Session3} from './components'
import { Session1 } from './components/Session1.components'
import { Session4 } from './components/Session4.components'
import { Session5 } from './components/Session5.components'

export const Home = () => {
  const session1Ref = useRef<HTMLDivElement>(null)
  const [session1Height, setSession1Height] = useState(0)

  useLayoutEffect(() => {
    if (session1Ref.current) {
      setSession1Height(session1Ref.current.clientHeight)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const session1 = session1Ref.current
      if (session1) {
        const defaultTop = 80
        const stopPosition = session1Height - 550

        if (scrollY < stopPosition) {
          session1.style.top = `${defaultTop - scrollY}px`
        } else {
          session1.style.top = `${defaultTop - stopPosition}px`
        }
      }
    }

    const debounceHandleScroll = debounce(handleScroll, 10)
    window.addEventListener('scroll', debounceHandleScroll)

    return () => {
      window.removeEventListener('scroll', debounceHandleScroll)
    }
  }, [session1Height])

  return (
    <div className="w-full relative overflow-hidden">
      <Header />
      <div className="h-[100px]" />
      <div ref={session1Ref} className="fixed z-10 top-24 w-full">
        <Session1 />
      </div>
      <div style={{ height: session1Height }}></div>
      <div className="relative z-20">
        {/* <Session2 /> */}
        <Session3 />
        <Session4 />
        <Session5/>
        <Questions />
        <Footer />
      </div>
    </div>
  )
}

// funcao debounce para ajudar a não ficar floodando a tela com eventos de scroll
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
): T {
  let timeout: ReturnType<typeof setTimeout>
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  } as T
}
