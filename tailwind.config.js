module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "coundown-linear-gradient":
          "linear-gradient(180deg, rgba(255, 144, 149, 0.15) 0%, rgba(255, 216, 192, 0.15) 100%)",
      },
      boxShadow: {},
      colors: {
        alert4: "#C79005",
        primary1: "#F0F9FC",
        primary4: "#8EE2FF",
        primary5: "#00BFFF",
        primary6: "#04A9E0",
        stroke1: "#F5F6F7",
        stroke2: "#EEF0F2",
        stroke3: "#DBDFE3",
        stroke4: "#DCE3FF66",
        surface: "#FAFBFC",
        blue1: "#ECF2FB",
        blue5: "#4C87D9",
        red4: "#EE2F2F",
        red5: "#D94C51",
        gray1: "#F4F6F4",
        gray2: "#EEF0F2",
        gray3: "#BCC8BC",
        gray4: "#BCC2C8",
        gray5: "#A5ADB6",
        gray6: "#8F98A3",
        gray7: "#6E7987",
        gray8: "#535B65",
        gray9: "#003D52",
        green1: "#EFFBF6",
        green2: "#CFF3D3",
        green3: "#52CE92",
        green4: "#038546",
        green5: "#02733C",
        green7: "#44AF82",
        brown1: "#F8EFE6",
        brown6: "#8F5C28",
        yellow4: "#FFD800",
        purple4: "#1274F6",
        senmaticred1: "#FFF5F5",
        senmaticred2: "#FFD6D6",
        error3: "#E55C5C",
        success1: "#EDFCF1",
        success4: "#1C9946",
        neutral6: "#747373",
        neutral7: "#525252",
        accent6: "#1C9B47",
        infor1: "#EEF5FC",
        infor3: "#46A3ED",
        infor4: "#287BBF",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const scrollbarUtilities = {
        ".hide-scrollbar": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Chrome, Safari, Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(scrollbarUtilities);
    },
  ],
};
