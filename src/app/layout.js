import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Next.js is fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* Navigation bar */}
        <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <nav>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/about/team'>Out Team</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Page content */}
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
