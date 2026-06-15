import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SleepSync — Optimize Work Schedule Based on Sleep Patterns',
  description: 'Integrate with Fitbit, Oura, and Apple Health to analyze sleep data and generate personalized work schedule recommendations for peak cognitive performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cda73409-9923-4b01-a0be-f71fa4e2484b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
