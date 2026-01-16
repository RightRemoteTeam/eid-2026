import { Parallax } from "react-scroll-parallax";
import greetingsFrame1 from "../../assets/images/cards/greetings-frame-1.svg";
import greetingsFrame2 from "../../assets/images/cards/greetings-frame-2.svg";

export default function GreetingCardsSection() {
  return (
    <section className="content-section greeting-cards-section">
      <div className="section-container">
        <div className="cards-row">
          <Parallax speed={3} className="greeting-card">
            <img src={greetingsFrame1} alt="بطاقة معايدة" />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button className="cta-button">أضف معايدتك وشاركها</button>
            </div>
          </Parallax>

          <Parallax speed={4} className="greeting-card">
            <img src={greetingsFrame2} alt="بطاقة معايدة" />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button className="cta-button">بطاقة معايدتك</button>
            </div>
          </Parallax>
        </div>

        <p className="section-subtitle">
          تحميل بطاقات المعايدة<br />
          لتشارك الفرح مع أحبائك
        </p>
      </div>
    </section>
  );
}
