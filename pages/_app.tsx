import '../styles/globals.css'
import { QuizProvider } from "../providers/QuizProvider"

function MyApp({ Component, pageProps }) {
    return (
        <> 
            <QuizProvider>
                <Component { ...pageProps } />
            </QuizProvider>
        </>
        ) 
    }

export default MyApp