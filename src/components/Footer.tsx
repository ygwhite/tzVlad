import React from 'react'
import { Container } from './Container'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footerInner">
        <div style={{ fontSize: 14, color: 'rgba(11, 27, 20, 0.7)' }}>
          © {new Date().getFullYear()} ООО «Агрофорвард»
        </div>
        <div style={{ fontSize: 14, color: 'rgba(11, 27, 20, 0.6)' }}>
          Политика конфиденциальности — по запросу
        </div>
      </Container>
    </footer>
  )
}

