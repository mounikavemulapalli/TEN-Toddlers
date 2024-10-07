import aboutImage from "/src/assets/images/1.webp";
import additionalImage from "/src/assets/images/2.webp";
import Slider from "../comman/Slider.jsx";
import Iframe from "react-iframe";
import { doctorReviews } from "../../assets/Lists/doctorReviews.js";
import "../../Styles/About.css";
import { boardMembers } from "../../assets/Lists/boardMembers.js";
import about from "../../assets/Lists/about.js"; // Importing the default export

const About = () => {
  return (
    <article>
      <div>
        <section id="Focussection">
          <p>
            We focus to personalise every child's journey at our best. We are
            obsessed for success at every family which merges with UpTodd
          </p>
        </section>

        <section id="ourgoalsection">
          <p>
            Our goal is to help every parent feel confident. Our play products
            are designed by child development experts and distilled to their
            simplest, purest purpose: to be exactly what children need at each
            stage.
          </p>
        </section>

        {/* First Image Section */}
        <section id="imagecontainer">
          <img src={aboutImage} alt="About section" className="main-image" />
        </section>

        {/* Our Story Section */}
        <section id="ourstorysection">
          <div className="ourstory-container">
            <div className="text">
              <h1>Our Story</h1>
              <img
                className="journey-background-img1"
                src="https://www.uptodd.com/images/newWebsite/journey/background-1.webp"
                onError="this.onerror=null; this.src='/images/newWebsite/journey/background-1.webp'"
                loading="lazy"
                alt="Uptodd baby growth"
              ></img>
              <h2>Welcome to the World of UpTodd early development! </h2>
              <h3>Hello, Dear Parent!</h3>
              <p>
                Welcome to the World of UpTodd early development! We are
                delighted to have you here. UpTodd was born from the dreams of
                three friends—Abhishek, Devesh, and Richa—who believed that
                every child deserves a bright and joyful start. Their journey
                began in the inspiring halls of IITs, driven by personal stories
                of resilience and hope. Sharing a common vision, they set out to
                bring a touch of wonder to early baby development.
              </p>
              <img
                className="journey-background-img3"
                src="https://www.uptodd.com/images/newWebsite/journey/background-2.webp"
                onError="this.onerror=null; this.src='/images/newWebsite/journey/background-2.webp'"
                loading="lazy"
                alt="Early baby development"
              ></img>
              <h3>The Birth of a Dream</h3>

              <p>
                In 2015, Abhishek, Devesh, and Richa launched an NGO dedicated
                to giving every child a strong start in education. They noticed
                a common desire among parents: to offer the best for their
                children's early baby development. This observation led to a
                burning question: "What if?" What if they could help parents
                provide the right meaningful pattern of UpTodd early development
                for their children? This question ignited their passion and
                curiosity, and they embarked on a journey to find answers.
              </p>
              <img
                className="journey-background-img2"
                src="https://www.uptodd.com/images/newWebsite/journey/background-3.webp"
                onError="this.onerror=null; this.src='/images/newWebsite/journey/background-3.png'"
                loading="lazy"
                alt="Uptodd baby development"
              ></img>
              <h3>Rooted in Love and Knowledge</h3>
              <p>
                To bring their vision to life, they collaborated with over 100
                leading experts and researchers in the field of personalised
                baby growth and development. They delved into more than 10,000
                research studies, driven by a passion to provide the best for
                every child. From MIT to Stanford, IITs to AIIMS, each piece of
                knowledge contributed to a recipe for an UpTodd early
                development environment filled with joy, creativity, and love.
                This collaboration led to a breakthrough understanding of the
                importance of personalised baby growth. In 2019, UpTodd early
                development was born—a place where growth and happiness meet,
                bringing personalized attention to every child.
              </p>
              <img
                className="journey-background-img4"
                src="https://www.uptodd.com/images/newWebsite/journey/background-4.webp"
                onError="this.onerror=null; this.src='/images/newWebsite/journey/background-4.png'"
                loading="lazy"
                alt="Uptodd infant growth"
              ></img>
            </div>

            <section id="imagecontainer">
              <img
                src={additionalImage}
                alt="Additional visual content"
                className="additional-image"
              />
            </section>
          </div>
        </section>
        <section id="others">
          <div>
            <h2>Understanding Parents' Hopes and Concerns</h2>

            <img
              className="journey-background-img1"
              src="https://www.uptodd.com/images/newWebsite/journey/background-2.webp"
              onerror="this.onerror=null; this.src='/images/newWebsite/journey/background-2.png'"
              loading="lazy"
              alt="Early baby development"
            ></img>
            <p>
              During their journey, they met over 5,000 parents and discovered a
              common hope in every eye: to give their children the best start
              for customised baby growth and development. However, they also
              found a common guilt about having limited time and the
              overwhelming presence of screens and technology. This revealed a
              deeper concern about providing the right start in a world filled
              with challenges. The insights gathered from these interactions led
              to a deeper understanding of the impact of UpTodd early
              development experiences through play and environment.
            </p>
            <h2>Why uptodd started</h2>
            <p>
              by these insights, UpTodd’s journey took flight in 2019,
              transforming from a single spark in India to a comforting light in
              158 countries. Viewing the world through the lens of children's
              development, they saw endless possibilities. Their mission was
              clear: to provide the best start to every baby, tailored just for
              them. UpTodd early baby development aims to create a world where
              every baby receives the right start, regardless of where they are.
            </p>
            <img
              className="journey-background-img3"
              src="https://www.uptodd.com/images/newWebsite/journey/background-1.webp"
              onError="this.onerror=null; this.src='/images/newWebsite/journey/background-1.png'"
              loading="lazy"
              alt="Uptodd baby growth"
            ></img>
            <h2>Our Growing Family</h2>

            <p>
              Building on this mission, UpTodd has grown from the first “hello”
              online to a worldwide community of over 150,000. It's a space
              where parents find support, share joyful moments, and witness
              their children's wonderful growth. Here, you'll find a community
              that’s like an extended family, celebrating every achievement with
              you.
            </p>
            <h2>Why You’ll Cherish UpTodd Early Development</h2>
            <p>
              Furthermore, our early development processes are specially
              designed for your child, making it exciting and joyful. Everything
              in baby development at Uptodd, from toys to stories, is created to
              spark curiosity and joy. Here, you'll find a supportive community
              celebrating each milestone with you. Our approach is
              scientifically sound and filled with warmth, ensuring a path of
              smiles and success for your baby.
            </p>
            <h2>Driven by Passion and Innovation</h2>
            <p>
              UpTodd’s uniquely crafted baby growth development programs are
              dedicated to offering something truly special. We provide
              everything from brain development support to nutrition and toys,
              all at an accessible cost.
            </p>
            <p>
              We're here to nurture, support, and celebrate the unique journey
              of every baby.
            </p>
            <h2>Join Our Story</h2>
            <p>
              We invite you to be part of this heartfelt journey. At Uptodd, we
              believe in the incredible potential within each child, just
              waiting to be nurtured.
            </p>

            <img
              className="journey-background-img2"
              src="https://www.uptodd.com/images/newWebsite/journey/background-4.webp"
              onError="this.onerror=null; this.src='/images/newWebsite/journey/background-4.png'"
              loading="lazy"
              alt="Uptodd infant growth"
            ></img>
            <p>
              Our promise to you is to offer everything at a price that respects
              the value you seek for your family.
            </p>

            <p>
              At the heart of UpTodd are people like you—parents, dreamers,
              believers.
            </p>

            <p>
              Our leadership team, including Richa, Abhishek, and Devesh,
              alongside our panel of experts, invites you to meet the minds
              sculpting the future.
            </p>

            <img
              className="journey-bg-img2"
              src="https://www.uptodd.com/images/newWebsite/journey/background-3.webp"
              onError="this.onerror=null; this.src='/images/newWebsite/journey/background-3.png'"
              loading="lazy"
              alt="Uptodd baby development"
            ></img>
            <p>
              Each day at UpTodd is a new beginning, filled with laughter,
              development, and love. Here's to the incredible journey ahead!
            </p>

            <p>
              Welcome to UpTodd early development, where every day is a
              celebration of growth and joy.
            </p>
          </div>
        </section>

        {/* Recommended by Top Global Experts */}

        <section className="doctor-review" id="doctorreview">
          <h1>Recommended by Top Global Experts</h1>
          <h5>
            Vetted &amp; Backed by 100+ Doctors, Educationists, Parenting
            Experts &amp; Professors
          </h5>
          <div className="doctor-review-list">
            <div className="doctor-review-container">
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/jaideep_sharma.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/jaideep_sharma.png'"
                    loading="lazy"
                    alt="Baby brain growth expert Dr.Jaideep Sharma"
                  />
                  <div>
                    <h3>Jaideep Sharma</h3>
                    <h6>Doctor, AIIMS, 1981 Batch</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    UpTodd’s parenting program for baby maximizes baby potential
                    from the womb to 5 years, offering an impressive solution
                    for early baby brain development
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/krishna_vedula.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/krishna_vedula.png'"
                    loading="lazy"
                    alt="Baby brain development specialist Krishna Vedula"
                  />
                  <div>
                    <h3>Krishna Vedula</h3>
                    <h6>Prof. MIT (USA)</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    This parenting program for baby addresses the global need
                    for early intervention, maximizing babies; learning
                    potential from prenatal to age 5
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/manoj_mondal.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/manoj_mondal.png'"
                    loading="lazy"
                    alt="Baby brain development expert Manoj Mondal"
                  />
                  <div>
                    <h3>Manoj Mondal</h3>
                    <h6>Prof. IIT Kharagpur</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    Home learning shapes success, and this parenting program for
                    baby unleashes your baby abilities, benefiting future
                    generations and informed parents
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/vaishal_sharma.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/vaishal_sharma.png'"
                    loading="lazy"
                    alt="Baby brain growth expert Vaishal Sharma"
                  />
                  <div>
                    <h3>Vaishal Sharma</h3>
                    <h6>Doctor, AIIMS, IVF Spec.</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    In the first 5 years, 90% of the baby's brain develops.
                    UpTodd is doing great tech and research work to nurture baby
                    development through their parenting program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/sudhanshu.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/sudhanshu.png'"
                    loading="lazy"
                    alt="Baby brain development specialist Sudhanshu Singh"
                  />
                  <div>
                    <h3>Sudhanshu Singh</h3>
                    <h6>Doctor, MBBS &amp; MD, CMC Vellore</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    UpTodd, backed by the expertise of over 1K professionals,
                    nurtures their genius during the first 5 years with a
                    comprehensive parenting program for baby
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/mani_kapur.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/mani_kapur.png'"
                    loading="lazy"
                    alt="Baby brain growth specialist Mani Kapur"
                  />
                  <div>
                    <h3>Mani Kapur</h3>
                    <h6>Doctor, MBBS &amp; PG, Gyno</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    Pregnancy is crucial; the baby's brain grows fastest in the
                    womb. Post-birth stimulation is also vital for nurturing the
                    baby's genius through UpTodd's baby parenting program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/saurabh_khanna.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/saurabh_khanna.png'"
                    loading="lazy"
                    alt="Baby growth specialist Saurabh Khanna"
                  />
                  <div>
                    <h3>Saurabh Khanna</h3>
                    <h6>Doctor, MBBS &amp; PG, Pedia</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    Every baby is born a genius, needing personalized care for
                    optimal growth. UpTodd excels in nurturing babies' brain
                    abilities and supporting parents through a tailored program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/sarvesh_thakur.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/sarvesh_thakur.png'"
                    loading="lazy"
                    alt="Baby Development Specialist Sarvesh Thakur"
                  />
                  <div>
                    <h3>Sarvesh Thakur</h3>
                    <h6>Doctor, MBBS &amp; PG, Pedia</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    From birth to 3-4 years, crucial developmental growth
                    occurs. UpTodd ensures perfect baby development with
                    comprehensive care in their parenting program
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/vipul_sehrawat.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/vipul_sehrawat.png'"
                    loading="lazy"
                    alt="Baby Growth Expert Vipul Sehrawat"
                  />
                  <div>
                    <h3>Vipul Sehrawat</h3>
                    <h6>Doctor, MBBS &amp; MD, MAMC</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    With expertise in fetal ultrasound, I see the importance of
                    early cognitive care. UpTodd provides the best care from
                    womb to 60 months, laying a solid foundation for your baby
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/aditya_sharma.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/aditya_sharma.png'"
                    loading="lazy"
                    alt="Infant brain growth expert Aditya Sharma"
                  />
                  <div>
                    <h3>Aditya Sharma</h3>
                    <h6>Doctor, M.Ch. &amp; MS, Apollo</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    UpTodd fosters 300% potential growth through high-quality
                    care from womb to 60 months, offering the world's first
                    one-stop solution in a parenting program for your baby
                  </p>
                </div>
              </div>
              <div className="doctor-review-card">
                <div className="doctor-review-image-part">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/doctors/rohit_kalani.webp"
                    onError="this.onError=null; this.src='/images/newWebsite/doctors/rohit_kalani.png'"
                    loading="lazy"
                    alt="Infant growth specialist Rohit Kalani"
                  />
                  <div>
                    <h3>Rohit Kalani</h3>
                    <h6>Doctor, MBBS &amp; MD, Neonatol</h6>
                  </div>
                </div>
                <div className="doctor-review-quote">
                  <img
                    src="https://www.uptodd.com/images/newWebsite/quote.svg"
                    loading="lazy"
                    alt="quote"
                  />
                  <p>
                    At NICU, we see the impact of stimulation therapy. UpTodd's
                    products support it perfectly for babies, integrated into
                    their parenting program for babies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-mentors" id="our-mentors">
          <h1>
            Meet our Mentors &amp; Curators |
            <span>100+ Curators R&amp;D Team</span>
          </h1>
          <div className="mentor-container">
            <div className="mentors-list">
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/krishna_vedula.webp"
                  loading="lazy"
                  alt="Uptodd mentor Prof.Krishna Vedula MIT"
                />
                <h3>
                  Krishna Vedula
                  <br />
                  <span>Professor, MIT, United States</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/jaideep_sharma.webp"
                  loading="lazy"
                  alt="Uptodd mentor Dr.Jaideep Sharma AIIMS"
                />
                <h3>
                  Dr. Jaideep Sharma
                  <br />
                  <span>MBBS &amp; MD, AIIMS, New Delhi</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/sudhanshu.webp"
                  loading="lazy"
                  alt="Uptodd mentor Dr.Sudhanshu Singh"
                />
                <h3>
                  Dr. Sudhanshu
                  <br />
                  <span>MD, DSMA CMC Vellore</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/manoj_mondal.webp"
                  loading="lazy"
                  alt="Uptodd mentor Prof.Manoj Mondal IIT KGP"
                />
                <h3>
                  Manoj Mondal
                  <br />
                  <span>Professor, IIT Kharagpur</span>
                </h3>
              </div>
              <div className="mentor-card">
                <img
                  src="https://www.uptodd.com/images/newWebsite/professors/PK_Mishra.webp"
                  loading="lazy"
                  alt="Uptodd mentor PK Mishra IIT BHU"
                />
                <h3>
                  Prof. PK Mishra
                  <br />
                  <span>IIT BHU</span>
                </h3>
              </div>
            </div>
            <div className="scrollbar"></div> {/* Fixed scrollbar */}
          </div>
          <h1>UpTodd™ has been Featured In</h1>
          <div className="featured-in">
            <img
              src="https://www.uptodd.com/images/newWebsite/featured-in.webp"
              loading="lazy"
              alt="Media Houses Featuring UpTodd"
            />
          </div>
        </section>

        {/* Science-Backed Approach: Rooted in Research */}

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
              onError="this.onError=null; this.src='/images/newWebsite/research-insti.png'"
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
              onError="this.onError=null; this.src='/images/newWebsite/research-insti-mobile.png'"
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
              onError="this.onError=null; this.src='/images/newWebsite/researchers/all_researchers.png'"
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
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/glenn-doman.png'"
                  loading="lazy"
                  alt="glenn-doman baby development expert"
                />
                <h3>Glenn Doman</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/maria-montessori.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/maria-montessori.png'"
                  loading="lazy"
                  alt="maria-montessori baby development expert"
                />
                <h3>Maria Montessori</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/rudolf-steiner.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/rudolf-steiner.png'"
                  loading="lazy"
                  alt="rudolf-steiner baby development expert"
                />
                <h3>Rudolf Steiner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/bf-skinner.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/bf-skinner.png'"
                  loading="lazy"
                  alt="bf-skinner baby development expert"
                />
                <h3>BF Skinner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/loris-malaguzzi.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/loris-malaguzzi.png'"
                  loading="lazy"
                  alt="loris-malaguzzi baby development expert"
                />
                <h3>Loris Malaguzzi</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/howard-gardner.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/howard-gardner.png'"
                  loading="lazy"
                  alt="howard-gardner baby development expert"
                />
                <h3>Howard Gardner</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/diana-baumrind.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/diana-baumrind.png'"
                  loading="lazy"
                  alt="diana-baumrind baby development expert"
                />
                <h3>Diana Baumrind</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/swami-vivekanand.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/swami-vivekanand.png'"
                  loading="lazy"
                  alt="swami-vivekanand"
                />
                <h3>Swami Vivekanand</h3>
              </div>
              <div>
                <img
                  src="https://www.uptodd.com/images/newWebsite/researchers/jean-piaget.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/researchers/jean-piaget.png'"
                  loading="lazy"
                  alt="jean-piaget baby development expert"
                />
                <h3>Jean Piaget</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default About;
