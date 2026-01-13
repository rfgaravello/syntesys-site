import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localeDetection: false // 🔥 ISSO resolve o problema
})

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|images|.*\\..*).*)"
  ]
}
