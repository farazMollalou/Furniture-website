import "./AdvantagesSection.scss"
import advantagesList from "./Advantages.json"

function AdvantagesSection() {
  return (
    <section className="advantages-section">
      <div className="advantages-wrapper">
        {
          advantagesList.advantages.map((adv, i) => (
            <div className="advantage-item" key={i}>
              <img src={`../../../../public/general_images/${adv.imgFileName}`} alt={adv.title} />
              <div className="detail-box">
                <strong className="adv-title">{adv.title}</strong>
                <p className="adv-message">{adv.message}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AdvantagesSection