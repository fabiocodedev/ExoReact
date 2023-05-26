import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap/';
import './Formation.css';


function Formation() {

  //{/* -------------------------------------------------------------- BOX 1  ------------------------------------------------------------------ */}
  const dataFormations = [
    
    {
      id: 1,
      titre: "JAVA",
    },
    {
      id: 2,
      titre: "PYTHON",
    },
    {
      id: 3,
      titre: "C++",
    },
    {
      id: 4,
      titre: "VB",
    },
    {
      id: 5,
      titre: "PHP",
    }
    
  ];
  
  
  //{/* -------------------------------------------------------------- BOX 2  ------------------------------------------------------------------ */}
  //{/* --------------  CARDS  ------------------ */}
  
  const [data, setData] = useState(dataFormations);
  
  const handleDelete = (id) =>{

    setData(data.filter((element)=> element.id !== id));

  }
  
  //{/* --------------  MODAL  ------------------ */}
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //{/* --------------  FIELD FORM  ------------------ */}
    const [saisiTitre, setSaisiTitre] = useState();
    const handleOnChange = (event) =>{
      setSaisiTitre(event.target.value)
    }
    const [saisiId, setSaisiId] = useState();

    
    
    
    //{/* --------------  SUBMIT  ------------------ */}


    const handleUpdate = (findId, updateTitre) => {

      data.map(element => {
    
        if(element.id === findId) {
          console.log("Trouvé");
          console.log(updateTitre);
    
          const dataMaj =data.find(element=> element.id === findId);
          dataMaj.titre = updateTitre;
    
        }
      })
    
    }


    const handleSubmit = (event) =>{
      
      event.preventDefault();
      

      if (saisiId !== undefined) {
        
        console.log(saisiId);
        handleUpdate(saisiId, saisiTitre)

        handleClose();

      } else {
        const newData = data.slice();
        console.log(newData);
        
        newData.push({titre:saisiTitre});
        setData(newData);
        console.log(newData);
        
        //Fermeture du modal
        handleClose();
        
      }


    }   

    //{/* --------------  SHOW/UPDATE  ------------------ */}
    
    const handleShowUpdate = (getId) => {
      console.log(getId);
      
      //const newTab = data.filter((element))=> element.id === getId;
      const resultat = data.find(element => element.id === getId);
      console.log(resultat);
      setSaisiTitre(resultat.titre)
      setSaisiId(resultat.id)

      setShow(true);
      
    }
    

    
    //{/* -------------------------------------------------------------- BOX 3  ------------------------------------------------------------------ */}
    return (
      
      <>

      <Button variant="primary" onClick={handleShow} style={{ marginTop: 15 }}>
        Ajouter une formation
      </Button>


    {/* --------------  MODAL  ------------------ */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout formation</Modal.Title>
        </Modal.Header>
        <Modal.Body>

      {/* --------------  START FORM  ------------------ */}
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>Id</Form.Label>
              <Form.Control type="text" placeholder="Exemple" value={saisiId} onChange={handleUpdate}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTitre">
              <Form.Label>Titre</Form.Label>
              <Form.Control type="text" placeholder="Exemple" value={saisiTitre} onChange={handleOnChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImg">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" placeholder="chemin/exemple.png" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      {/* --------------  END FORM  ------------------ */}

        </Modal.Body>
      </Modal>

       {/* --------------  CARDS  ------------------ */}

      <div className="card_container">
        {data.map((element) => (
          <Card className="card"style={{ width: '18rem' }} key={element.id}>
            <div className="card-img-container">
            <Card.Img variant="top" src={`./img/${element.titre}.png`} />
            <Card.Body>
              <Card.Title>{element.titre}</Card.Title>
              <Card.Text>
                Je suis la formation : {element.titre}
              </Card.Text>
              <div class="d-flex">
              <Button variant="danger" onClick={()=>handleDelete(element.id)}>Delete</Button>
              <Button variant="warning" onClick={()=>handleShowUpdate(element.id)}>Show</Button>
              </div>
            </Card.Body>
            </div>
          </Card>
        ))}
      </div>
      </>
  )
}

export default Formation
