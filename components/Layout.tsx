import Head from "next/head"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  title: string
}

const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  )
}

export default Layout
