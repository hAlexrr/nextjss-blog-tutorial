//Importing global styles to all pages
import '../styles/global.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}