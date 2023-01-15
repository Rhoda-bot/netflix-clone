import axios from "axios";
import { useEffect } from "react";
import './hero.styles.scss';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const Hero = () => {
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/certification/movie/list?api_key=a495d3cd0cf478c71fd3590344b481b9").then(res => {
            console.log(res.data);
            
        })
    })
    return(
        <>
            <div className="hero">
                            {/* <video autoPlay playsInline muted loop className="hero__video">
                                <source src="../assets/videos/file.mp4" type='video/mp4'/>
                            </video> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 hero__banner">
                             <div className="row">
                                <div className="col-md-6">
                                    <h1>Good Hool</h1>
                                </div>
                             </div>
                        </div>
                        <div className="col-md-12 mt-5 my-5">
                        <OwlCarousel items={6}  
                            className="owl-theme"  
                            loop  
                            nav  
                            margin={5} autoplay>  
                            <div>
                            <div ><img  className="img" src= {'assets/t2.png'}/></div>  
                            <div><img  className="img" src= {'assets/t4.png'}/></div>  
                            <div><img  className="img" src= {'assets/t6.png'}/></div>  
                            <div><img  className="img" src= {'assets/t3.png'}/></div>  
                            <div><img className="img" src= {'assets/t2.png'}/></div>  
                            <div><img className="img" src= {'assets/tv8.png'}/></div>  
                            <div><img className="img" src= {'assets/tv9.png'}/></div>  
                            </div>
                        </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;