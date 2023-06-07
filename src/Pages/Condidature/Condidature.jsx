import React from 'react'
import './Condidature.css'
import { FaSearch, FaSortAmountUp } from 'react-icons/fa'

const Condidature = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h3>Suivi de mes candidatures</h3>
          </div>
          <div className="col-md-12 my-4">
            <div className="UserFormations">
              <div className="condidatureContent table-responsive">
                <div className="condidaSearch">
                  <h4>Mes candidatures</h4>
                  <div className="form-group position-relative">
                    <FaSearch className='iconSearch' />
                    <input type='search' id="CondidatureSearch" className="form-control ps-4" />
                  </div>
                  <FaSortAmountUp className='iconFilter' />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Infos d'offre</th>
                      <th>Date de postulation</th>
                      <th>Statue</th>
                      <th>Suivi Condidature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <ul className="jobInfo">
                          <li>
                            <span className='fw-bold'>Offre:</span>
                            <p>Développeur Front-End H/F</p>
                          </li>
                          <li>
                            <span className='fw-bold'>Société:</span>
                            <p>Atos</p>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p className='fw-bold'>16-06-2023</p>
                      </td>
                      <td><span className="Condidatestatue">En cours</span></td>
                      <td>
                        <button className="btn btn-danger">Annuler</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="jobInfo">
                          <li>
                            <span className='fw-bold'>Offre:</span>
                            <p>Développeur Front-End H/F</p>
                          </li>
                          <li>
                            <span className='fw-bold'>Société:</span>
                            <p>Atos</p>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p className='fw-bold'>16-06-2023</p>
                      </td>
                      <td><span className="Condidatestatue">En cours</span></td>
                      <td>
                        <button className="btn btn-danger">Annuler</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ul className="jobInfo">
                          <li>
                            <span className='fw-bold'>Offre:</span>
                            <p>Développeur Front-End H/F</p>
                          </li>
                          <li>
                            <span className='fw-bold'>Société:</span>
                            <p>Atos</p>
                          </li>
                        </ul>
                      </td>
                      <td>
                        <p className='fw-bold'>16-06-2023</p>
                      </td>
                      <td><span className="Condidatestatue">Traité</span></td>
                      <td>
                        <div className="Suivi">
                          <button className='btn btn-success'>Voir Réponse</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Condidature