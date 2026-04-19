import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// TODO about section yazilar sola dayali olsun
// TODO sectionda basliklara .js eklenmeli
// TODO ust menuye alt border eklenmeli
// TODO sayfaya max-width eklenmeli        max-width: 1280px;
// TODO ust menude Halime yazisinin stylei duzeltilmeli
// TODO experience listesinde sol sag tarafa padding ayarlanmali


