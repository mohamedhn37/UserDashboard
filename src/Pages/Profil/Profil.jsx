import React, { useRef, useState } from 'react'
import './Profil.css'
import { FaEye, FaMinusCircle, FaPlusCircle } from 'react-icons/fa'


const Profil = () => {

  /*pour controller l'affichage du div introduction*/
  const [showInroContent, setShowIntroContent] = useState(false);
  const toggleIntroContent = () => {
    setShowIntroContent(!showInroContent);
  };

  /*pour controller l'affichage du div Formation*/
  const [showFormationContent, setShowFormationContent] = useState(false);
  const toggleFormationContent = () => {
    setShowFormationContent(!showFormationContent);
  };
  /*pour controller l'affichage du div Experience*/
  const [showExperienceContent, setShowExperienceContent] = useState(false);
  const toggleExperienceContent = () => {
    setShowExperienceContent(!showExperienceContent);
  };
  /*pour controller l'affichage d'input dateFinFormation*/
  const [formationStatue, setFormationStatue] = useState('FEC');
  const handleFormationStatueChange = (e) => {
    setFormationStatue(e.target.value);
  };
  /*pour controller l'affichage d'input dateFinExpereince*/
  const [ExperienceStatue, setExperienceStatue] = useState('EEC');
  const handleExperienceStatueChange = (e) => {
    setExperienceStatue(e.target.value);
  };
  /*pour controller l'affichage du CV*/
  const [cvSelected, setCvSelected] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileName = selectedFile ? selectedFile.name : '';
    setFileName(fileName);
    setCvSelected(!!selectedFile);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="CondidatInfo">
              <img src="https://placehold.co/600x600" alt="UserImg" />
              <h4>Nom Utilisateur</h4>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row mt-3 mb-5">
              <div className="col-md-12">
                <div className="sectionTitle my-3">
                  <h5>Introduction</h5>
                  <span onClick={toggleIntroContent}>
                    {showInroContent ? <FaMinusCircle className='ms-2' /> : <FaPlusCircle className='ms-2' />}
                  </span>
                </div>
                {showInroContent && (
                  <div className="UserFormations">
                    <div className='Introduction'>
                      <div className="row my-3">
                        <div className="col-md-12">
                          <label htmlFor="Description" className='form-label'>A propos de moi <span className='text-danger'>*</span></label>
                          <textarea name="Description" id="Description" className="form-control" required rows={5}></textarea>
                        </div>
                      </div>
                      <button className='btn btn-primary'>Enregistrer</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="row mt-3 mb-5">
              <div className="col-md-12">
                <div className="sectionTitle my-3">
                  <h5>Formation</h5>
                  <span onClick={toggleFormationContent}>
                    {showFormationContent ? <FaMinusCircle className='ms-2' /> : <FaPlusCircle className='ms-2' />}
                  </span>
                </div>
                {showFormationContent && (
                  <div className="UserFormations">
                    <form className='FormationForm'>
                      <div className="row my-3">
                        <div className="col-md-12">
                          <input type="radio" id="FEC" name="Formation statue" value="FEC"
                            checked={formationStatue === 'FEC'}
                            onChange={handleFormationStatueChange} className='me-2' />
                          <label htmlFor="FEC">Formation en cours</label><br />
                          <input type="radio" id="FF" name="Formation statue" value="FF"
                            checked={formationStatue === 'FF'}
                            onChange={handleFormationStatueChange}
                            className='me-2' />
                          <label htmlFor="FF">Formation finie</label><br />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6">
                          <label htmlFor="nom" className='form-label'>Nom<span className='text-danger'>*</span></label>
                          <input type='text' id="nom" required className="form-control" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="etablissement" className='form-label'>Etablissement<span className='text-danger'>*</span></label>
                          <input type='text' id="etablissement" required className="form-control" />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6">
                          <label htmlFor="DateDébut" className='form-label'>Date de début<span className='text-danger'>*</span></label>
                          <input type='date' id="DateDébut" required className="form-control" />
                        </div>
                        {formationStatue === 'FF' && (
                          <div className="col-md-6">
                            <label htmlFor="DateFin" className='form-label'>Date de fin<span className='text-danger'>*</span></label>
                            <input type='date' id="DateFin" required className="form-control" />
                          </div>
                        )}

                      </div>
                      <div className="row my-3">
                        <div className="col-md-12">
                          <label htmlFor="Description" className='form-label'>Description<span className='text-danger'>*</span></label>
                          <textarea name="Description" id="Description" className="form-control" required rows={5}></textarea>
                        </div>
                      </div>
                      <button className='btn btn-primary'>Enregistrer</button>
                    </form>
                  </div>
                )}

              </div>
            </div>
            <div className="row mt-3 mb-5">
              <div className="col-md-12">
                <div className="sectionTitle my-3">
                  <h5>Expériences</h5>
                  <span onClick={toggleExperienceContent}>
                    {showExperienceContent ? <FaMinusCircle className='ms-2' /> : <FaPlusCircle className='ms-2' />}
                  </span>
                </div>
                {showExperienceContent && (
                  <div className="UserFormations">
                    <form className='ExperienceForm'>
                      <div className="row my-3">
                        <div className="col-md-12">
                          <input type="radio" id="EEC" name="Experience statue" value="EEC"
                            checked={ExperienceStatue === 'EEC'}
                            onChange={handleExperienceStatueChange}
                            className='me-2' />
                          <label htmlFor="EEC">Expérience en cours</label><br />
                          <input type="radio" id="EP" name="Experience statue" value="EP"
                            checked={ExperienceStatue === 'EP'}
                            onChange={handleExperienceStatueChange}
                            className='me-2' />
                          <label htmlFor="EP">Expérience passée</label><br />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6">
                          <label htmlFor="post" className='form-label'>Post<span className='text-danger'>*</span></label>
                          <input type='text' id="post" required className="form-control" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="Entreprise" className='form-label'>Entreprise<span className='text-danger'>*</span></label>
                          <input type='text' id="Entreprise" required className="form-control" />
                        </div>
                      </div>
                      <div className="row my-3">
                        <div className="col-md-6">
                          <label htmlFor="DateDébut" className='form-label'>Date de début<span className='text-danger'>*</span></label>
                          <input type='date' id="DateDébut" required className="form-control" />
                        </div>
                        {ExperienceStatue === 'EP' && (
                          <div className="col-md-6">
                            <label htmlFor="DateFin" className='form-label'>Date de fin<span className='text-danger'>*</span></label>
                            <input type='date' id="DateFin" required className="form-control" />
                          </div>
                        )}
                      </div>
                      <div className="row my-3">
                        <div className="col-md-12">
                          <label htmlFor="Description" className='form-label'>Description<span className='text-danger'>*</span></label>
                          <textarea name="Description" id="Description" className="form-control" required rows={5}></textarea>
                        </div>
                      </div>
                      <button className='btn btn-primary'>Enregistrer</button>
                    </form>
                  </div>
                )}

              </div>
            </div>
            <div className="row mt-3 mb-5">
              <div className="col-md-12">
                <div className="sectionTitle my-3">
                  <h5>Mon CV</h5>
                </div>
                <div className="UserFormations">

                  <div className="cv">
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      required="required"
                      placeholder="Choisir Un CV"
                      accept="application/pdf, image/jpg, image/jpeg, image/png, .doc,.docx"
                      format="document"
                      multiple="multiple"
                      onChange={handleFileInputChange}
                      ref={fileInputRef}
                    />
                    <div className="CvPlaceholder">Choisir un fichier</div>
                  </div>
                  <p className="my-3">
                    <b>formats acceptés :</b> pdf, doc, png ou jpeg
                  </p>
                  <button className="btn btn-primary">Enregistrer</button>
                  {cvSelected && (
                    <div className="fileNameContent my-4">
                      <p className="fileName">{fileName}</p>
                      <div className="cvicon">
                        <FaEye />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="UserFormations">
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="InfosPersonnel">
                    <div className="sectionTitle my-3">
                      <h5>Infos Personnel</h5>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="DateNaissance" className='form-label'>Date de naissance<span className='text-danger'>*</span></label>
                      <input type='date' id="DateNaissance" required className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Adresse" className='form-label'>Adresse<span className='text-danger'>*</span></label>
                      <input type='text' id="Adresse" required className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Phone" className='form-label'>téléphone<span className='text-danger'>*</span></label>
                      <input type='text' id="Phone" required className="form-control" placeholder='0600000000' />
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="Experience">
                    <div className="sectionTitle my-3">
                      <h5>Expérience</h5>
                    </div>
                    <select id="Expérience" name="Expérience" title="Choisir les années d'expérience" className="form-select">
                      <option value="Choisir les années d'expérience">Choisir les années d'expérience</option>
                      <option value="Aucun">Aucun</option>
                      <option value="Moins d'un an">Moins d'un an</option>
                      <option value="Entre 1 et 2 ans">Entre 1 et 2 ans</option>
                      <option value="Entre 2 et 5 ans">Entre 2 et 5 ans</option>
                      <option value="Plus de 5 ans">Plus de 5 ans</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="NiveauEtude">
                  <div className="sectionTitle my-3">
                      <h5>Niveau d'étude</h5>
                    </div>
                    <select id="NiveauEtude" name="Domaine" title="Choisir un Secteur" className="form-select">
                      <option value="Niveau d'étude">Niveau d'étude</option>
                      <option value="Aucun diplôme">Aucun diplôme</option>
                      <option value="BAC">BAC</option>
                      <option value="BAC+1">BAC+1</option>
                      <option value="BAC+2">BAC+2</option>
                      <option value="BAC+3">BAC+3</option>
                      <option value="BAC+5">BAC+5</option>
                      <option value="BAC+5 et Plus">BAC+5 et Plus</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="Secteur">
                    <div className="sectionTitle my-3">
                      <h5>Secteur rechercher</h5>
                    </div>
                    <select id="Secteur" name="Secteur" title="Choisir un Secteur" className="form-select">
                      <option value="Choisir un Secteur">Secteur</option>
                      <option value="1">Achats</option><option value="2">Administratif</option>
                      <option value="3">Assistanat de direction</option>
                      <option value="4">Commercial / Support commercial</option>
                      <option value="5">Communication</option>
                      <option value="6">Contrôle et risque</option>
                      <option value="7">Finance</option>
                      <option value="8">Gestion de projets / Etudes</option>
                      <option value="9">Juridique</option>
                      <option value="10">IT/ Informatique</option>
                      <option value="11">Marketing</option>
                      <option value="12">Méthode / Organisation / Process</option>
                      <option value="13">Moyens Généraux / Logistique</option>
                      <option value="14">Qualité</option>
                      <option value="15">Réseau Agence bancaires</option>
                      <option value="16">Ressources Humaines</option>
                      <option value="17">Santé / Social</option>
                      <option value="18">Système d'Information / AMOA</option>
                      <option value="Autres">Autres</option></select>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="Langue">
                    <div className="sectionTitle my-3">
                      <h5>Langue parlées</h5>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="Arabe" id="Arabe" />
                      <label className="form-check-label" htmlFor="Arabe">Arabe</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="Français" id="Français" />
                      <label className="form-check-label" htmlFor="Français">Français</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="Anglais" id="Anglais" />
                      <label className="form-check-label" htmlFor="Français">Anglais</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="Autre" id="Autre" />
                      <label className="form-check-label" htmlFor="Autre">Autre</label>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-2">
                <div className="col-md-12">
                  <div className="ReseauxSociaux">
                    <div className="sectionTitle my-3">
                      <h5>Réseaux sociaux</h5>
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="LinkedIn" className='form-label'>LinkedIn</label>
                      <input type='text' id="LinkedIn" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Twitter" className='form-label'>Twitter</label>
                      <input type='text' id="Twitter" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="Github" className='form-label'>Github</label>
                      <input type='text' id="Github" className="form-control" />
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="WebSite" className='form-label'>WebSite</label>
                      <input type='text' id="WebSite" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <button className='btn btn-primary my-3'>Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profil