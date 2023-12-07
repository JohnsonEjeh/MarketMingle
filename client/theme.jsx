import { createTheme } from '@material-ui/core/styles' 
import { pink } from '@material-ui/core/colors'
const theme = createTheme({ 
typography: {
fontFamily: 'Poppins, sans-serif', 
},
palette: {

primary: {
light: '#B3A492', 
main: '#A9A9A9', 
dark: '#2E4374', 
contrastText: '#eeeded',
},
secondary: {
    light: '#B3A492', 
    main: '#A9A9A9', 
    dark: '#2E4374', 
    contrastText: '#eeeded',
},
openTitle: 'black', 
protectedTitle:'black' , 
type: 'light'
}, 
overrides:{
    MuiCard:{
        root:{
            backgroundColor: '#A9A9A9'
        }
    }
}
})
export default theme