import { mode } from "@chakra-ui/theme-tools"

module.exports = {
    global: props => ({
        "*, body": {
            fontFamily: "body",
            focusVisible: false,
            // fontSize: "0.9rem",
            scrollbarColor: "var(--fe-colors-green-500) var(--fe-colors-green-100)",
            scrollbarWidth: "thin",
        },
        "a": {
            _hover: {
                textDecoration: "none",
            },
        },
        body: {
            color: "grey.500",
            bg: "grey.50",
        },
        "p, div": {
            lineHeight: "taller",
            fontSize: "sm",
        },
        "::-webkit-scrollbar": {
            width: 2,
        },
        "::-webkit-scrollbar-track": {
            background: mode("green.100", "green.100")(props),
        },
        "::-webkit-scrollbar-thumb": {
            background: mode("green.300", "green.600")(props),
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: mode("green.500", "green.700")(props),
        },
        "#nprogress .bar": {
            background: mode("green.800", "green.500")(props),
        },
        "#nprogress .spinner": {
            backgroundColor: mode("green.800", "green.500")(props),
        },
        "#nprogress .spinner-icon": {
            borderTopColor: mode("green.800", "green.500")(props),
            borderLeftColor: mode("green.800", "green.500")(props),
        },

    }),
}
