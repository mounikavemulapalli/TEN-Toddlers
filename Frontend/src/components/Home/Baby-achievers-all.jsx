import { useEffect, useRef, useState } from "react";
import quoteSvg from "../../assets/images/successstory/symbols/quote.svg";
import "./AllHappyPatents.css"
import {
    cards,
  } from "../../assets/data/successData";

const BabyAchieversAll = () => {

    return(
        <section className="happy-parents-all">
        <h1>
          The Proof is in the Play:<span>Watch How Babies Thrive!</span>
        </h1>
        <h5>
          Busy Parents, Smart Choice: Invest 10 Mins a day to a Brighter
          Tomorrow
        </h5>
          <div className="happy-parent-list-all">
          {cards.map((card, index) => (
              <div className="happy-parents-card-all" key={index}>
                <iframe
                    loading="lazy"
                    style={{borderRadius: "10px", margin: ".1rem"}}
                    src={card.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    width={"100%"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    data-gtm-yt-inspected-4="true"
                    data-gtm-yt-inspected-40611628_62="true"
                    id="72071507"
                    data-gtm-yt-inspected-14="true"
                  ></iframe>
                <h3>{card.title}</h3>
                {card.description && <p>{card.description}</p>}
              </div>
            ))}
          </div>
      </section>
    );
}

export default BabyAchieversAll;