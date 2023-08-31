const Welcome = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <p className="dashboard-heading">Dashboard</p>
      </div>
      <section className="section dashboard mt-3">
        <div className="row">
          <div className="col-12">
            <div className="card border" style={{height: '75vh',}}>
              <div className="card-body d-flex align-items-center justify-content-center ">
                <div classNameName="row ps-3 pe-2 mt-3">
                  <div classNameName="col-12 p-1 pe-2 dashbord-news-card">
                    <h3>Welcome to Admin Panel</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Page Title --> */}
    </main>
  );
};
export default Welcome;
