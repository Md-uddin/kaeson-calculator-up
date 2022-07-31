import GlobalStyle from "GlobalStyle";

import Calculator from "components/Calculator";
import Layout from "components/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Calculator />
      </Layout>
    </>
  );
}

export default App;
