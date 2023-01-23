import axios from "axios";
import { useEffect, useState } from "react";

const CardSlider = () => {
    const [apiImages, setApiImages] = useState<any>();
    useEffect(() => {
        const Api = async() =>{
            try{
                const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=a495d3cd0cf478c71fd3590344b481b9&sort_by=popularity.desc").then(res => {
                    setApiImages(res.data.results);
                    
                })
                return response;
            }catch(err){
                console.log(err)
            }
        }
        Api();
        
         
    }, [])

    return(
        <>
            <div className="card">
            </div>
        </>
    )
}
export default CardSlider;