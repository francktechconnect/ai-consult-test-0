import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Agentic Growth OS | Interactive Demo', description: 'AI-powered lead intelligence, content strategy and conversion operations. Fictional demonstration data.' }
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="en"><body>{children}</body></html> }
