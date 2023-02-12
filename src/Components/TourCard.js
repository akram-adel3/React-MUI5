import Paper from '@mui/material/Paper';
import {Box, createTheme, Grid, Rating, ThemeProvider, Typography} from "@mui/material";
import {AccessTime} from "@mui/icons-material";
import {Link} from "react-router-dom";

const theme= createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:'body2'
                    },
                    style:{
                        fontSize:11,
                    }
                },
                {
                    props:{
                        variant:'body3'
                    },
                    style:{
                        fontSize:9,
                    }
                },
            ]
        }
    }

})
const TourCard = ({tour , setObject})=>{

    return <Grid item xs={3} >
        <Link to={`/${tour.id}`} style={{ textDecoration: 'none' }}  onClick={()=>{
            setObject(tour)
        }}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3}>
            <img
                src={tour.image}
                alt=""
                className='img'
            />
            <Box paddingX={1}>
                <Typography variant='subtitle1' component='h2'>
                    {tour.name}
                </Typography>
                <Box sx={{
                    display:'flex',
                    alignItems:'center'
                }}>
                    <AccessTime sx={{width: 13}}/>
                    <Typography variant='body2' component='p' marginLeft={0.5}>
                        {tour.duration} hours
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center'
                    }}
                    marginTop={3}
                >
                    <Rating
                        name="read-only"
                        value={tour.rating}
                        readOnly
                        precision={0.5}
                        size='small'/>
                    <Typography variant='body2' component='p' marginLeft={0.5}>
                        {tour.rating}
                    </Typography>
                    <Typography variant='body3' component='p' marginLeft={1.5}>
                        ({tour.numberOfReviews} reviews)
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h6' component='h3' marginLeft={0}>
                        From C ${tour.price}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    </ThemeProvider>

        </Link>
    </Grid>

}
export default TourCard;
