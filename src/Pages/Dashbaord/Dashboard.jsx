import React from 'react'
import './Dashboard.css'
import { NavLink } from 'react-router-dom';
import { FaBookmark, FaBriefcase, FaEye, FaFileAlt, FaPenAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="DashHome px-4">
              <div className="row my-4">
                <div className="col-md-12">
                  <h3 className='my-4'>Bonjour 'Nom Utilisateur'</h3>
                </div>
                <div className="col-md-4">
                  <NavLink to="#" className='text-decoration-none'>
                    <div className="dashNavigate text-primary">
                      <FaBriefcase className='fs-1' />
                      <h4 className='mb-0'>Offre D'emploi</h4>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-4">
                  <NavLink to="#" className='text-decoration-none'>
                    <div className="dashNavigate text-danger">
                      <FaFileAlt className='fs-1' />
                      <h4 className='mb-0'>Nos Conseil</h4>
                    </div>
                  </NavLink>
                </div>
                <div className="col-md-4">
                  <NavLink to="#" className='text-decoration-none'>
                    <div className="dashNavigate text-warning">
                      <FaBookmark className='fs-1' />
                      <h4 className='mb-0'>F.A.Q</h4>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-12">
                  <div className="UserFormations">
                    <h3 className='my-4'>Mes infos personnelles</h3>
                    <div className="profilInfos">
                      <p className='fw-bold'>Nom Complet</p>
                      <p>jhon doe</p>
                    </div>
                    <div className="profilInfos">
                      <p className='fw-bold'>Email</p>
                      <p>jhon.doe@gmail.com</p>
                    </div>
                    <div className="profilInfos">
                      <p className='fw-bold'>Télélphone</p>
                      <p>0600000000</p>
                    </div>
                    <div className="profilInfos">
                      <p className='fw-bold'>Adresse</p>
                      <p>123, Avenue Mohammed VI, Casablanca 20000, Maroc</p>
                    </div>
                    <div className="profilInfos">
                      <p className='fw-bold'>Mon CV</p>
                      <div className="cvIcon">
                        <NavLink to="#"><FaEye className='text-black'/></NavLink>
                        <NavLink to="#"><FaPenAlt className='ms-3 text-black'/></NavLink>
                      </div>
                    </div>
                    <button className='btn btn-warning'>
                      <NavLink to='/Profil' className='text-decoration-none text-black fw-bold'>Modifier</NavLink> 
                    </button>
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


export default Dashboard;
