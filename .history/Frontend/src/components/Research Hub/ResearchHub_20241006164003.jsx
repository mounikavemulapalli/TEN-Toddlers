import React from 'react';
import '../co';

export default function ResearchHub() {
    const SuperDailyUspCard = (props) => {
        return (
            <div className="super-daily-usp-card">
                <img src={props.imgSrc} alt="" />
                <div>
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                </div>
            </div>
        )
    }
    return (
        <>
            <section className='research-banner'>
                <div style={{ lineHeight: '5rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '500' }}>A Dedicated Research Centre</h1>
                    <h2>Led by Top Minds from IITs, AIIMS, and MIT</h2>
                    <p style={{ lineHeight: '1.5rem' }}>UpTodd's in-house research team, composed of leading experts from IITs, AIIMS, and MIT, delves into the science behind baby brain development. Our UpTodd research-backed approach unlocks the secrets of early intervention and stimulation, ensuring that our program provides you with the best tools to nurture your child's potential.</p>
                </div>
                <div>
                    <img src="https://www.uptodd.com/images/newWebsite/research-banner-image.webp" />
                </div>
            </section>

            <section style={{ paddingBlock: '77px' }}>
                <div className="state-of-art-rnd">
                    <div className='state-of-art-text'>
                        <h2>State of the Art R&D</h2>
                        <div>
                            <p>Our state-of-the-art R&D center at UpTodd drives the science behind baby brain development. Our expert team continuously develops methodologies and research papers, ensuring we stay ahead in early childhood development and parenting</p>
                            <p>Every material, from toys to app content, is designed to match a baby's interests and developmental needs at each age. This UpTodd research-backed approach enhances attention span and promotes comprehensive development</p>
                            <p>All our toys undergo rigorous lab testing to ensure safety and engagement. Continuous research by our R&D team ensures that every aspect of our program positively impacts your baby's brain development journey.</p>
                        </div>
                    </div>
                    <img src="https://www.uptodd.com/images/newWebsite/state-of-art-rnd.webp" />
                </div>

                <div className="state-of-art-grid">
                    <div className="state-of-art-grid-item">
                        <img src="https://www.uptodd.com/images/newWebsite/oxytocin-reflective-tech.webp" />
                        <p>Oyxtocin Hormone : Reflective to increase attention span of baby</p>
                    </div>
                    <div className="state-of-art-grid-item">
                        <img src="https://www.uptodd.com/images/newWebsite/screen-free-stimulation.webp" />
                        <p>ScreenTime Solution : Audio Visual Stimulation by materials to reduce</p>
                    </div>
                    <div className="state-of-art-grid-item">
                        <img src="https://www.uptodd.com/images/newWebsite/organic-material.webp" />
                        <p>Organic Materials : Avoiding development lags due to inorganic materials</p>
                    </div>
                    <div className="state-of-art-grid-item">
                        <img src="https://www.uptodd.com/images/newWebsite/wel-tested-toys.webp" />
                        <p>Toy Testings : Making it Safe for every baby</p>
                    </div>
                </div>
            </section>

            <section className='start-now-banner'>
                <div className="start-now-banner-grid">
                    <h3>Team analysed 10,000+ research studied to derive everything in the program, ranging from Colours, Music, Touch, Sounds and every things involved.</h3>
                    <button>View White Papers</button>
                </div>
            </section>
            <section className='building-brain-impact'>
                <div className="building">
                    <iframe
                        style={{ textAlign: 'center' }}
                        loading="lazy"
                        width="853"
                        height="480"
                        srcDoc="<style>body,.full {width:100%;height:100%;margin:0;position:absolute;display:flex;justify-content:center;object-fit:cover;overflow: hidden;}</style> <a href='https://www.youtube.com/embed/VNNsN9IJkws?autoplay=1;modestbranding=1&amp;autohide=1&amp;rel=0' className='full'> <img src='https://www.uptodd.com/images/newWebsite/inside-baby-genius.webp' className='full' /> <svg version='1.1' viewBox='0 0 68 48' width='68px' style='position: absolute; top:50%; left:50%; transform:translate(-50%,-50%)'><path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path><path d='M 45,24 27,14 27,34' fill='#fff'></path></svg> </a>"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                        data-gtm-yt-inspected-4="true"
                        data-gtm-yt-inspected-40611628_62="true"
                        id="275573034"
                        data-gtm-yt-inspected-14="true">
                    </iframe>
                </div>
                <div className="building-brain-impact-text">
                    <p>1 Million neural connections forms every second in the child's brain, serve and return interactions shape brain architecture.</p>
                    <p>In a child's brain, 1 million neural connections form every second. These "serve and return" interactions are crucial in shaping brain architecture. Our UpTodd research driven program ensures these connections are fostered effectively.
                        <br /><br />
                        Providing your child with a broad range of meaningful experiences helps reinforce fundamental brain connections. The brain eliminates weak connections and strengthens those that are reinforced through a process called pruning.
                        <br /><br />
                        This makes early years a critical period for brain plasticity and development.
                    </p>
                </div>
            </section>

            <section className="research-backed">
                <h1>
                    Science-Backed Approach: <span>Rooted in Research</span>
                </h1>
                <h5>
                    Developed using research from leading Global institutions &amp;
                    Organisations
                </h5>
                <div className="insti-research">
                    <div className="insti-head">
                        <h4>Research analysed by institutions from</h4>
                    </div>
                    <img
                        src="https://www.uptodd.com/images/newWebsite/research-insti.webp"
                        loading="lazy"
                        alt="IIT,IIM,MIT,Harvard Research Institutes"
                    />
                    <p>and 35+ other top global institutions</p>
                </div>
                <div className="insti-research-mobile">
                    <div className="insti-research-mobile-head">
                        <h4>Research analysed by institutions from</h4>
                    </div>
                    <img
                        src="https://www.uptodd.com/images/newWebsite/research-insti-mobile.webp"
                        loading="lazy"
                        alt="IIT,IIM,MIT,Harvard Research Institutes"
                    />
                </div>

                <div className="theory-research">
                    <div className="theory-head">
                        <h4>Enriched with top research by</h4>
                    </div>
                    <img
                        src="https://www.uptodd.com/images/newWebsite/researchers/all_researchers.webp"
                        loading="lazy"
                        alt="Research Backed Personalised Program for Baby Development"
                    />
                    <p>and 50+ other top global experts</p>
                </div>
                <div className="theory-research-mobile">
                    <div className="theory-research-mobile-head">
                        <h4>Enriched with top research by</h4>
                    </div>
                    <div className="theory-research-mobile-list">
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/glenn-doman.webp"
                                loading="lazy"
                                alt="glenn-doman baby development expert"
                            />
                            <h3>Glenn Doman</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                                loading="lazy"
                                alt="maria-montessori baby development expert"
                            />
                            <h3>Maria Montessori</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                                loading="lazy"
                                alt="rudolf-steiner baby development expert"
                            />
                            <h3>Rudolf Steiner</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                                loading="lazy"
                                alt="bf-skinner baby development expert"
                            />
                            <h3>BF Skinner</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                                loading="lazy"
                                alt="loris-malaguzzi baby development expert"
                            />
                            <h3>Loris Malaguzzi</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                                loading="lazy"
                                alt="howard-gardner baby development expert"
                            />
                            <h3>Howard Gardner</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                                loading="lazy"
                                alt="diana-baumrind baby development expert"
                            />
                            <h3>Diana Baumrind</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                                loading="lazy"
                                alt="swami-vivekanand"
                            />
                            <h3>Swami Vivekanand</h3>
                        </div>
                        <div>
                            <img
                                src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                                loading="lazy"
                                alt="jean-piaget baby development expert"
                            />
                            <h3>Jean Piaget</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h1>UpTodd's Philosphies</h1>
                <div className='super-daily-why-upload'>
                    <SuperDailyUspCard
                        imgSrc='https://www.uptodd.com/images/newWebsite/philosophies/1.webp'
                        heading='Expert-Guided Personalisation for Your Child'
                        para='At UpTodd, we recognize that every child is unique with distinct developmental needs. Our UpTodd research-backed approach offers customized solutions designed to enhance growth by 5X.'
                    />
                </div>
            </section>
        </>
    )
}