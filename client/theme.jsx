import { createTheme } from '@material-ui/core/styles' 

const theme = createTheme({ 
typography: {
fontFamily: 'Poppins, sans-serif', 
},
palette: {

primary: {
light: '#4758d6', 
main: '#ea3a3a', 
dark: '#201c1c', 
contrastText: '#eeeded',
},
secondary: {
light: '#e1811f', 
main: '#4758d6', 
dark: '#201c1c', 
contrastText: '#eeeded',
},
openTitle: '#4758d6', 
protectedTitle:'#ea3a3a' , 
type: 'light'
} 
})
export default theme