import { Parallax } from "react-scroll-parallax";
import corporatePrints from "../../assets/images/cards/corporate-prints.svg";
import homePrints from "../../assets/images/cards/home-prints.svg";
import greetingCard from "../../assets/images/cards/greeting-card.svg";
import eventsBooklet from "../../assets/images/cards/events-booklet.svg";

export default function DownloadCardsSection() {
  const cards = [
    {
      title: "مطبوعات الشركات",
      image: corporatePrints,
      color: "yellow",
    },
    {
      title: "مطبوعات المنازل",
      image: homePrints,
      color: "green",
    },
    {
      title: "بطاقة معايدة",
      image: greetingCard,
      color: "cyan",
    },
    {
      title: "كتيب فعاليات العيد",
      image: eventsBooklet,
      color: "orange",
    },
  ];

  return (
    <section className="content-section">
      <div className="section-container">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <Parallax key={index} speed={3 + index} className="download-card">
              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>
              <h3 className={`card-title ${card.color}`}>{card.title}</h3>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
