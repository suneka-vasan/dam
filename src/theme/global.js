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
            background: mode("teal.100", "teal.100")(props),
        },
        "::-webkit-scrollbar-thumb": {
            background: mode("teal.500", "teal.600")(props),
        },
        "::-webkit-scrollbar-thumb:hover": {
            background: mode("teal.600", "teal.700")(props),
        },
        "#nprogress .bar": {
            background: mode("teal.800", "teal.500")(props),
        },
        "#nprogress .spinner": {
            backgroundColor: mode("teal.800", "teal.500")(props),
        },
        "#nprogress .spinner-icon": {
            borderTopColor: mode("teal.800", "teal.500")(props),
            borderLeftColor: mode("teal.800", "teal.500")(props),
        },

    }),
}
