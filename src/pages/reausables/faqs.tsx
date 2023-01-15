import './faqs.styles.scss';
const Faqs = () => {
    return(
        <>
        <div className="faqs" id="faqs">
            <div className="container ">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="faqs--title pb-5 text-white">Frequently Asked Questions</div>
                    <div className="col-md-8 p-3">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                      <div className="p-3 text-start">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>What is Terrinova?</b>
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">TERRINOVA GROUP is a modern mill line Agro-Processing company that produces and packages high-quality, ready-for-consumption biofortified cassava and maize flours.</div>
                          </div>
                        </div>
                      </div>
                  <div className="p-3 text-start">
                  <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <b>What do we offer</b>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">We produce nutritionally improved Maize and Cassava flour that's ready for consumption. We also supply bio-fortified grains to farmers and industries like breweries.</div>
                </div>
              </div>
              </div>
                <div className="p-3">
                <div className="accordion-item text-start">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <b>Who are the founders?</b>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Abdoul Raouf Sayadi Maazou and Espérance Déo Gratias are the co-founders of The Terrinova Group. They are both PAULESI Research fellows, exploring plant breeding at the International Institute of Tropical Agriculture (IITA).
                    </div>
                  </div>
                </div>
                </div>
                <div className="p-3">
                <div className="accordion-item text-start">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                      <b>What is our motivation?</b>
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    In low income countries, too many people are malnutritioned, 
                    experience food poisoning and their farmers  do not have access to improved varieties of crops, 
                    despite the abundance in laboratories and research institutes. Ids the force that drives us. 
                    </div>
                  </div>
                </div>
                </div>
                <div className="p-3">
                <div className="accordion-item text-start">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                      <b>Who are our Partners?</b>
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    Our partners are Ennovate Lab, a Startup foundry and innovation hub,
                     Afrilabs, GIZ and Pan-African University,
                     with a network organisation of over 300 Innovation
                      centres across 50 African countries.
                    </div>
                  </div>
                </div>
                </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Faqs;