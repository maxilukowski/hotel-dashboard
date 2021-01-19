import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --primary: #417a90;
    --secondary: #ea8194;
    --card: #fdfdfd
    }

    * {
        box-sizing: border-box;
    }

    body {
        height: 100%;
        margin: 0;
        background: var(--sand);
        color:var(--checked);
        font-family:sans-serif;
        background-color: var(--primary);
    }
`
