export class Person {
  image!: string;
  nom!: string;
  tel!: string;
  email!: string;


  constructor(image: string, nom: string, tel: string, email: string) {
    this.image = image;
    this.nom = nom;
    this.tel = tel;
    this.email= email;
  }

}
