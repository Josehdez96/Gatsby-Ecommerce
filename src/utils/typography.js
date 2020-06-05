import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  //Propiedad que me da el tipo de fuente especificado a mis titulos, con este no tenemos que importar las fuentes de GoogleFonts, Typography lo hace automaticamente
  headerFontFamily: ["Helvetica", "Open Sans", "Helvetica neue", "Lato"],
  //Todo lo que no sean titulos
  bodyFontFamily: ["Helvetica", "Arial", "Roboto"],
})

export default typography
