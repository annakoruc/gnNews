import { Container } from "../components";

import "../styles/pages/home_page.scss";
import gnNews from "../assets/icons/gnNews.svg";

export const HomePage = () => {
  return (
    <Container>
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
