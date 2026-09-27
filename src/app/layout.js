import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Next.js is fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col'>
        {/* Navigation bar */}
        <Navigation />

        {/* Page content */}
        <main className='flex-grow p-5'>
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
