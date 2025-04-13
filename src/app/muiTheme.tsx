import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";

const themeOptions: ThemeOptions = {};

const preparedTheme = createTheme(themeOptions);
export const muiTheme = responsiveFontSizes(preparedTheme);
