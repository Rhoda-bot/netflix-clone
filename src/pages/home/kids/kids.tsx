import './kids.styles.scss';
const KidsSection = () => {
    return (
        <>
            <div className="kids">
                <div className="container">
                    <div className="row kids__row">
                        <div className="col-md-6 kids__col">
                            <img src="../assets/kids.png" className='img-fluid kids__col-img' alt="" />
                        </div>
                        <div className="col-md-6 kids__col">
                            <h1 className="kids__col--title">Create profiles for kids.</h1>
                            <h2 className="kids__col--subtitle">Send kids on adventures with their favorite characters in 
                            a space made just for them— <br/>free with your membership.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default KidsSection;