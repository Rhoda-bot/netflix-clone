import './downloads.styles.scss';

function DownloadSection() {
  return (
    <div className="downloads py-2">
      <div className="container py-2">
        <div className="row downloads__row">
          <div className="col-md-6 downloads__col order-sm-2  order-md-2 order-lg-1">
            <img src="../assets/mobile.jpg" className="downloads__col--img img-fluid" alt="" />
          </div>
          <div className="col-md-6 downloads__col  order-md-1 order-sm-1 order-lg-2">
            <h1 className="downloads__col--title">Download your shows to watch offline.</h1>
            <h2 className="downloads__col--subtitle">Save your favorites easily and always have something to watch.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DownloadSection;
