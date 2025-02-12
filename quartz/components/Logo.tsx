import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface LogoOptions {
  height?: string
}

export default ((opts: LogoOptions = {}) => {
  function Logo(props: QuartzComponentProps) {
    // Function to update the logo based on the theme
    function updateLogo(theme: string) {
      console.log("Updating logo for theme:", theme) // Debug log
      const logoPath = theme === "dark" ? "/static/icon.png" : "/static/light-icon.png"
      // Check if document is defined before accessing it
      if (typeof document !== "undefined") {
        setTimeout(() => {
          // Add a delay
          const logoImg = document.querySelector("#logo") as HTMLImageElement
          if (logoImg) {
            logoImg.src = logoPath
            console.log("Logo updated to:", logoPath) // Debug log
          } else {
            console.log("Logo image not found!") // Debug log
          }
        }, 100) // Adjust delay as needed
      }
    }

    // Event listener for themechange
    if (typeof document !== "undefined") {
      document.addEventListener("themechange", (e: CustomEvent) => {
        updateLogo(e.detail.theme)
      })
    }

    return (
      <a href="/">
        {" "}
        {/* Add a link to the home page */}
        <img
          id="logo"
          src="/static/icon.png"
          alt="Innovation Hub Logo"
          style={{
            height: opts.height || "2rem",
            width: "auto",
            margin: "3 auto",
          }}
        />
      </a>
    )
  }

  return Logo
}) satisfies QuartzComponentConstructor
