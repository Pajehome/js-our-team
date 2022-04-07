// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
let teamContainer = document.querySelector('.team-container')
let teamCard = document.querySelector('.team-card');
let cardImage = document.querySelector('.card-image');
let img = document.querySelector('img');
let cardText = document.querySelector('.card-text');
let h3 = document.querySelector('h3');
let p = document.querySelector('.card-text p');

let personale = [
    {
       Foto: 'img/wayne-barnett-founder-ceo.jpg',
       Nome: 'Wayne Barnett',
       Ruolo: 'Founder & CEO'
    },
    {
        Foto: 'img/angela-caroll-chief-editor.jpg',
        Nome: 'Angela Caroll',
        Ruolo: 'Chief Editor'
    },
    {
        Foto: 'img/walter-gordon-office-manager.jpg',
        Nome: 'Walter Gordon',
        Ruolo: 'Office Manager'
    },
    {
        Foto: 'img/angela-lopez-social-media-manager.jpg',
        Nome: 'Angela Lopez',
        Ruolo: 'Social Media Manager'  
    },
    {
        Foto: 'img/scott-estrada-developer.jpg',
        Nome: 'Scott Estrada',
        Ruolo: 'Developer'
    },
    {
        Foto: 'img/barbara-ramos-graphic-designer.jpg',
        Nome: 'Barbara Ramos',
        Ruolo: 'Graphic Designer'
    }
]


 
 for(let i=0; i<personale.length; i++){

        teamContainer += `
           <div class="team-card">
              <div class="card-image">
                <img
                 ${personale[i].Foto}
                />
              </div>
              <div class="card-text">
                <h3> ${personale[i].Nome}</h3>
                 <p> ${personale[i].Ruolo}</p>
              </div>
            </div>
        `
     console.log(teamContainer)   
     
 }
 

