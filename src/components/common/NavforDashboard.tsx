import React from 'react'
import {
    Grid, GridItem
} from '@chakra-ui/react'

export default function NavforDashboard() {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"`}
            gridTemplateRows={'50px 1fr'}
            gridTemplateColumns={'300px 1fr'}
            minH='100vh'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' bg='white' area={'header'} borderBottom='1px' borderBottomColor={'grey.100'}>
                Header
            </GridItem>
            <GridItem pl='2' bg='teal.500' area={'nav'}
                bgImage={bgPattern.src}>

            </GridItem>
            <GridItem pl='2' bg='grey.50' area={'main'}>
                Main
            </GridItem>
        </Grid>
    )
}