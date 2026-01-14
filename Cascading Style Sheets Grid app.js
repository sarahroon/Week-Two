* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100vh;
  font-family: monospace;
  color: black;
  background-color: yellow;

display: grid;

grid-template-columns: 1fr 2fr 1fr;    // SET AMOUNT OF COLUMNS // 1fr 2fr 1fr IS THE FRACTION UNIT
grid-template-rows: 1fr 3fr 1fr;      // SET AMOUNT OF ROWS // 1fr 3fr 1fr IS THE FRACTION UNIT
}

header {                             // MOVING THE ELEMENT
grid-column-start: 1;               // TELLING PROGRAM WHAT ROW HEADER SHOULD BE IN  
grid-column-start: 2;
grid-column-end: 3;
}

main {
   grid-row: 2 / 3;
   grid-column: 2 / 3 ;

   background-color: orange;
}

footer {
    grid-row: 3 / 4;
    grid-columns: 2 / 3;

    background-color: purple;
}


a: visited {
  color: blue;
}

a {
  text-decoration: none;
  color: green;
}


