import { Grid, GridItem } from "@chakra-ui/react";
import Description from './Description'


export default function Descriptions() {
    return (
        <Grid
            templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={["10", "32"]}
            mx="auto"
            maxW="1160px"
            gap={[1, 5]}
        >

            <GridItem>
                <Description icon="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
                <Description icon="surf" text="praia" />
            </GridItem>
            <GridItem>
                <Description icon="building" text="moderno" />
            </GridItem>
            <Description icon="museum" text="clássico" />
            <GridItem colSpan={[2, 2, 2, 1]}>
                <Description icon="earth" text="e mais..." />
            </GridItem>
        </Grid>
    )
}