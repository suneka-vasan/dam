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
        Accordion: {
            baseStyle: {
                container: {
                    border: 'none',
                    backgroundColor: 'transparent',
                    _hover: {
                        backgroundColor: 'white',
                        color: 'green.500'
                    }
                },
                item: {
                    backgroundColor: "green"
                }
            }
        },
    },
    colors,
    initialColorMode: "light",
    useSystemColorMode: false,
}

export default globalTheme
