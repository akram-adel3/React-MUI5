import Container from "@mui/material/Container";
import cities from "../data.json";
import {Grid, Typography} from "@mui/material";
import TourCard from "../Components/TourCard";

const Home = ({setObjFunction})=> {
    return (
        <>
    <div className="App">
        <Container sx={{marginY: 5}}>
            {cities.map((city) => (
                <>
                    <Typography
                        variant='h4'
                        component='h2'
                        marginTop={5}
                        marginBottom={3}
                    >
                        Top {city.name} Tours
                    </Typography>
                    <Grid container spacing={5}>

                        {city.tours.map((tour, index) => (

                            <TourCard tour={tour} key={index} city={city} setObject={setObjFunction} />

                        ))}

                    </Grid>
                </>
            ))}

        </Container>
    </div>
        </>
    )

}
export default Home;
