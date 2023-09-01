import message from "../../assets/img/messages-1.jpg";
import defaultImage from '../../assets/img/defaultImage.jpg'
import { useNavigate } from "react-router-dom";
import '../../App.css'

const DashboardHeader = () => {
  const navigate = useNavigate()
  const signOut = () =>{
    localStorage.removeItem('email')
    navigate('/login')
  }
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle " href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>

          {/* <!-- End Messages Nav --> */}

          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <div className="d-flex flex-column user pe-3">
                <div className="user-name">Muklasar Rahaman</div>
                <div className="user-role">Admin</div>
              </div>
              <img src={defaultImage} alt="Profile" className="rounded-circle" />
            </a>
            {/* <!-- End Profile Iamge Icon --> */}

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="pages-faq.html"
                >
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item d-flex align-items-center">
                  <i className="bi bi-box-arrow-right"></i>
                  <span onClick={signOut}>Sign Out</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;
