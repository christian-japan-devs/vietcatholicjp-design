/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-youth-event': "url('/youth_event/youth-event-1.jpeg')",
        'hero-index': "url('/vietcatholic_cover_mua_chay.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      maxWidth: {
        'ticket': '370px',
      },
      spacing: {
        'bl': '190px',
        'll': '136px',
        'bs': '180px',
        'ls': '124px',
        'tbl': '78px',
        'tll': '136px',
        'tbs': '64px',
        'tls': '124px',
      }
    },
  },
  plugins: [require("daisyui")],
}
