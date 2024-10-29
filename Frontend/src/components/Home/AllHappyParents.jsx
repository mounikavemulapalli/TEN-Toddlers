import { useEffect, useRef, useState } from "react";
import quoteSvg from "../../assets/images/successstory/symbols/quote.svg";
import "./AllHappyPatents.css"
import {
    happyParentsReview,
  } from "../../assets/data/successData";


const AllHappyParents = () => {
    const happyParentRef = useRef(null);
    

    return(
        <section className="happy-parents-all">
        <h1>
          Happy Parents, Thriving Tots:
          <span> Witnessing Their Child&#39;s Growth</span>
        </h1>
        <h5>
          A One Stop Personalized Solution | Shift Your Baby Investments For
          Strong Future
        </h5>
          <div className="happy-parent-list-all">
            {happyParentsReview.map((review) => (
              <div key={review.id} className="happy-parents-card-all">
                <div>
                  <iframe
                    loading="lazy"
                    style={{borderRadius: "10px", margin: ".1rem"}}
                    srcDoc={review.surdoc}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                    data-gtm-yt-inspected-4="true"
                    data-gtm-yt-inspected-40611628_62="true"
                    id="72071507"
                    data-gtm-yt-inspected-14="true"
                  ></iframe>
                </div>
                <div className="quote-container-all">
                  <p className="quote-text-all">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
      </section>
    );
}

export default AllHappyParents;