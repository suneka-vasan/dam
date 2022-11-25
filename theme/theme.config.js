import Button from "./Button"
import colors from "./colors"
import global from "./global"

const globalTheme = {
    config: {
        cssVarPrefix: "dam",
    },
    fonts: {
        body: "Poppins",
        heading: "Montserrat",
        mono: "Menlo, monospace",
    },
    styles: global,
    components: {
        Button,
    },
    colors,
    initialColorMode: "light",
    useSystemColorMode: false,
}

export default globalTheme
