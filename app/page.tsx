import Link from 'next/link'

export default function Page(){
  return (
    <div style={{ padding: 20 }}>
      <h1>Blue Elephant Media — Demo</h1>
      <p>Welcome! This page proves your Next.js app is set up.</p>
      <p><Link href="/pricing">Go to Pricing</Link></p>
    </div>
  )
}
