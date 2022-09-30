import { makeStyles } from "@mui/styles"

export default makeStyles((theme)=>({
  scroll: {
    overflowY: 'scroll',
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      display: 'none' ,
    },
  }
  ,
  imageLink: {
    display: 'flex',
    justifyContent : 'center',
    padding: '10% 0',
  },
  image: {
    width: '70%',
  },
  links:{ 
    color: theme.palette.text.primary,
    textDecoration: 'none'
  },
  genreImage: {
    filter: theme.palette.mode === 'dark' ? 'dark' : 'invert(1)',
  }
}));