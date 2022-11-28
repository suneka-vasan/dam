import Button from "./Button"
import colors from "./colors"
import global from "./global"
import '@fontsource/alexandria'

const globalTheme = {
    config: {
        cssVarPrefix: "dam",
    },
    fonts: {
        body: "Alexandria",
        heading: "Alexandria",
        mono: "Alexandria",
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
