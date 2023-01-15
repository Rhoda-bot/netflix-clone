import './enjoy.styles.scss';
const EnjoySection = () => {
    return (
        <>
            <div className="enjoy">
                <div className="container">
                    <div className="enjoy__row row">
                        <div className="enjoy__texts col-md-6">
                            <h1 className="enjoy__texts--title">Enjoy on your TV.</h1>
                            <h2 className="enjoy__texts--subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, 
                                Apple TV, Blu-ray players, and more.</h2>
                        </div>
                        <div className="enjoy__tv col-md-6">
                            <img src="../assets/tv.png" className='enjoy__tv--img' alt="" />
                            <div className="enjoy__tv--video">
                            <video autoPlay playsInline muted loop className=''>
                                <source src='../assets/video-tv-0819.m4v' type='video/mp4'/>
                            </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EnjoySection;