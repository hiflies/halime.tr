import {useState, useEffect} from 'react'

export const colorSchemes: Record<string, string> = {
    DARK: '(prefers-color-scheme: dark)',
    LIGHT: '(prefers-color-scheme: light)',
}

export default function useDetectColorScheme(defaultScheme = 'light') {
    const [scheme, setScheme] = useState(defaultScheme)

    useEffect(() => {
        if (!window.matchMedia) {
            return
        }

        const listener = (e: MediaQueryListEvent|MediaQueryList) => {
            if (!e || !e.matches) {
                return
            }

            const schemeNames = Object.keys(colorSchemes)
            for (let i = 0; i < schemeNames.length; i++) {
                const schemeName = schemeNames[i]

                if (e.media === colorSchemes[schemeName]) {
                    setScheme(schemeName.toLowerCase())
                    break
                }
            }
        }

        const activeMatches: MediaQueryList[] = []
        Object.keys(colorSchemes).forEach((schemeName) => {
            const mq = window.matchMedia(colorSchemes[schemeName])

            mq.addEventListener("change", listener)
            activeMatches.push(mq)
            listener(mq)
        })

        return () => {
            activeMatches.forEach((mq) => mq.removeEventListener("change", listener))
        }
    }, [])

    return scheme
}