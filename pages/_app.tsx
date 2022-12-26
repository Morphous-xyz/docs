import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'

export default function MorphousDocumentation({
  Component,
  pageProps
}: AppProps): ReactElement {
  return <Component {...pageProps} />
}
