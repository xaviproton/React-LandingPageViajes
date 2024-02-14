import Main1 from "../components/main1";//Componente
import Nav1 from "../components/head";//Componente
import Footer from "../components/footer";//Componente

// En "Home" importas tres componentes: Main1 desde el archivo "../components/main1",
//  Nav1 desde el archivo "../components/head", y Footer desde el archivo "../components/footer".
// Cuando este componente se utiliza en la aplicación,
//  renderiza tres subcomponentes: "Nav1," "Main1", y "Footer."
// Finalmente, el componente Home se exporta usando export default, 
// lo que significa que puede ser importado y utilizado en otros archivos de tu aplicación.

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav1 />
        <Main1 />
        <Footer />
      </div>
    </>
  );
}
