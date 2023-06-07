import React from 'react'
import './Setting.css'
import { FaExclamationCircle } from 'react-icons/fa'


const Setting = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <h3>Gestion de mon compte et de mes données de connexion</h3>
          </div>
          <div className="col-md-12 my-4">
            <div className="UserFormations">
              <h4> Mes données personnelles</h4>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group mt-3">
                    <label htmlFor="Civilité" className='form-label'>Civilité<span className='text-danger'>*</span></label>
                    <select id="Civilité" name="Civilité" title="Civilité" className="form-select">
                      <option value="Civilité">Civilité</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                      <option value="Autres">Autres</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mt-3">
                    <label htmlFor="nom" className='form-label'>Nom<span className='text-danger'>*</span></label>
                    <input type='text' id="nom" required className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mt-3">
                    <label htmlFor="Prénom" className='form-label'>Prénom<span className='text-danger'>*</span></label>
                    <input type='text' id="Prénom" required className="form-control" />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group mt-3">
                    <label htmlFor="email" className='form-label'>Email<span className='text-danger'>*</span></label>
                    <input type='email' id="Phone" required className="form-control" />
                  </div>
                </div>
                <button className='btn btn-primary w-auto m-4'>Valider</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-4">
            <div className="UserFormations">
              <h4>Modification de mot de passe</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="MotDePasseAct" className='form-label'>Votre mot de passe actuel<span className='text-danger'>*</span></label>
                    <input type='password' id="MotDePasseAct" placeholder="Renseignez ici votre mot de passe actuel" required className="form-control p-3" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="MotPassNouveau" className='form-label'>Votre nouveau mot de passe<span className='text-danger'>*</span></label>
                    <input type='password' id="MotPassNouveau" required placeholder="Renseignez ici votre nouveau mot de passe actuel" className="form-control p-3" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="MotPassConfirme" className='form-label'>Confirmer votre nouveau mot de passe <span className='text-danger'>*</span></label>
                    <input type='password' id="MotPassConfirme" required placeholder='Renseignez encore votre nouveau mot de passe pour le confirmer' className="form-control p-3" />
                  </div>
                </div>
                <button className='btn btn-primary w-auto m-4'>Valider</button>
              </div>
            </div>
          </div>
          <div className="col-md-12 my-4">
            <div className="UserFormations">
              <h4>Supprimer Mon Compte</h4>
              <div className="supprimeContent">
                <FaExclamationCircle className='text-danger fs-1 my-3' />
                <h3>Etes-vous sûr de vouloir supprimer votre compte ?</h3>
                <p>cette action est irréversible et entraînera la suppression de toutes vos données personnelles!</p>
                <div className="btn btn-danger me-3">je confirme</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting
