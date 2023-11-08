import { Component } from '@angular/core';

@Component({
  selector: 'app-exos-directive',
  templateUrl: './exos-directive.component.html',
  styleUrls: ['./exos-directive.component.scss']
})
export class ExosDirectiveComponent {

// Tableau de la liste de course
public listCourse : listCourse[] = [{nom : '', nombre : 0, dateDajout : new Date()}]
public course! : listCourse
public produit! : string
public nombre! : number
public estValide : boolean = false
public showPannier : boolean = false


CheckValidity() :boolean //-> pour afficher le bouton ajouter
{
    if(this.nombre > 5) return this.estValide = false
      
    if(this.nombre > 0)
    {
      if(this.produit !== '') return this.estValide = true
    }  

    return this.estValide = false 
}

AddProduct() {
  // Récupérer l'index du produit dans le tableau
  let currentProductIndex = this.listCourse.findIndex(item => item.nom.toUpperCase() === this.produit.toUpperCase());

  if (currentProductIndex !== -1) {
    // Le produit existe déjà, mettre à jour la quantité
    this.listCourse[currentProductIndex].nombre += this.nombre;
    this.listCourse[currentProductIndex].dateDajout = new Date();
  } else {
    // Le produit n'existe pas, ajouter un nouvel élément à la liste
    this.course = { nom: this.produit, nombre: this.nombre, dateDajout: new Date() };
    this.listCourse.push(this.course);
  }

  // Réinitialiser les champs
  this.produit = '';
  this.nombre = 0;
  this.estValide = false;
}


RemoveItem(index : number){
  const delBtn = confirm(" Voulez-vous supprimer le produit de la liste ?");
  if ( delBtn == true ) {
    this.listCourse.splice(index, 1 );
  }   
}

displayPannier(){
  this.showPannier = !this.showPannier
}

}



class listCourse{
  nom : string = ''
  nombre : number = 0
  dateDajout! : Date
}