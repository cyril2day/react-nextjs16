import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ThemeProvider from '@/context/ThemeContext'

export const metadata = {
  title: 'Create Next App',
  description: 'Next.js is fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100'>
        <ThemeProvider>
          {/* Navigation bar */}
          <Navigation />

          {/* Page content */}
          <main className='flex-grow p-5'>
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
