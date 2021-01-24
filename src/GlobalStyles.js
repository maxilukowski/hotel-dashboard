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
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 40px auto;
        padding: 20px;
        max-width:700px;
        font-family:sans-serif;
        background-color: var(--primary);
        color: rgb(68, 68, 68)
    }
    h1 {
        margin-top:0;
        margin-bottom:0;
    }
`
