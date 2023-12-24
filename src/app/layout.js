
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <header>HEADER</header>
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  )
}
