import { Container } from "../components";
import { Logo } from "../components/UI";

import "../styles/pages/home_page.scss";
import gnNews from "../assets/icons/gnNews.svg";
// import Iframe from "react-iframe";

export const HomePage = () => {
  const url =
    "https://wydarzenia.interia.pl/kraj/news-donald-tusk-wskazuje-na-szpitale-prawie-wszedzie-slyszelismy,nId,6682781";
  // const url =
  //   "https://wydarzenia.interia.pl/kraj/news-donald-tusk-wskazuje-na-szpitale-prawie-wszedzie-slyszelismy,nId,6682781";

  // const onLoadIframe = () => {
  //   const iframe = document.getElementById("iframe");

  //   return iframe.innerHTML;
  // // };
  // const onLoadIframe = () => {
  //   if (document.getElementById("iframe") !== null) {
  //     let iframe = document.getElementById("iframe");

  //     iframe.contentDocument
  //       ? console.log(iframe.contentDocument)
  //       : console.log(iframe.contentWindow.document);
  //   }
  // };

  return (
    <Container>
      {/* <iframe
        title="iframe"
        onLoad={onLoadIframe}
        src={url}
        width="640px"
        height="320px"
        id="iframe"
        // className=""
        // display="block"
        // position="relative"
      /> */}
      <div className="home_page">
        <img src={gnNews} alt="icon" />
        <div>
          <h1>Twoje źródło informacji ze świata !</h1>
          <h3>Wybierz kraj aby wyświetlić najświeższe artykuły</h3>
        </div>
      </div>
    </Container>
  );
};
