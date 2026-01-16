import greetingsFrame1 from "../../assets/images/cards/badge1.svg";

export default function DiscoverSection() {
  return (
    <section className="content-section">
      <div className="section-container">
        <div className="greeting-box">
          <div className="greeting-frame">
            <img src={greetingsFrame1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
