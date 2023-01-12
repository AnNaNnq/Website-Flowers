import { Component,OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  persones!: Person[];
  anton!: Person;
  anna!: Person;
  loic!: Person;

  ngOnInit() {
    this.anton = new Person(
      './assets/unknown.png',
      'Schaich Anton',
      '+33 6 24 62 37 67',
      'anton.schaich17@gmail.com'
    );
    this.anna= new Person(
      './assets/unknown.png',
      'Sarbiewski Anna',
      '+33 6 28 07 45 52',
      'anna.sarbiewski@gmail.com'
    );
    this.loic = new Person(
      './assets/unknown.png',
      'Kuntz Loïc',
      '+33 6 31 18 26 40',
      'kuntz.loic57@gmail.com'
    );
    this.persones = [this.anton,this.anna,this.loic];
  }

}
