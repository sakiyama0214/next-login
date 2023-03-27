import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import App from 'next/app'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href='/Login'>ログイン</Link>
      <Link href='Signup'>ユーザー登録</Link>
    </>
  )
}
