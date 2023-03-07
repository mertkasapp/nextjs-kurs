import styles from "./styles.module.css";
import "./styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {

  return (
    <html lang="tr">
      <body className={styles.container}>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
       <Footer />
      </body>
    </html>
  )
}
