import Container from "@mui/material/Container";
import {BottomNavigation, Box, Typography} from "@mui/material";
import ImageList from '../Components/ImageList'
import CustomizedAccordions from "../Components/Accordian";
import Paper from "@mui/material/Paper";
import BasicModal from "../Components/Modal";


const Tour = ( {obj}) => {
    return <Container sx={{width: 900}}>
        <Typography variant='h3' component='h1' marginTop={3}>
            Explore {obj.name}
        </Typography>
        <Box marginTop={3} sx={{display: 'flex'}}>
            <img src={obj.image}
                 alt=""
                 height={320}
                 width={600}
            />
            <ImageList/>
        </Box>
        <Box>
            <Typography variant='h6' component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis culpa deleniti dolores earum eligendi illo ipsam laboriosam libero necessitatibus
                nemo nihil,
                numquam odit porro quis sequi! Architecto commodi, corporis eos libero perferendis tempore.
                A animi facere odio possimus, recusandae similique.
            </Typography>
        </Box>
        <Box>
            <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                Frequently Asked Questions
            </Typography>
            <CustomizedAccordions/>
        </Box>
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation>
                <BasicModal/>
            </BottomNavigation>
        </Paper>
    </Container>
}

export default Tour;
