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
        height: 100vh;
        margin: 40px auto;
        padding: 20px;
        max-width:600px;
        font-family:sans-serif;
        background-color: var(--primary);
    }
    h1 {
        margin-top:0
    }
`
