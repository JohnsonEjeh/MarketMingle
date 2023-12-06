import { createTheme } from '@material-ui/core/styles' 
import { pink } from '@material-ui/core/colors'
const theme = createTheme({ 
typography: {
useNextVariants: true, 
},
palette: {
primary: {
light: '#4758d6', 
main: '#e1811f', 
dark: '#201c1c', 
contrastText: '#eeeded',
},
secondary: {
light: '#ff79b0', 
main: '#ff4081', 
dark: '#c60055', 
contrastText: '#000',
},
openTitle: '#3f4771', 
protectedTitle: pink['400'], 
type: 'light'
} 
})
export default theme