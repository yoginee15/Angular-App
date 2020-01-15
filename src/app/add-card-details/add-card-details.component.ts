import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-card-details',
  templateUrl: './add-card-details.component.html',
  styleUrls: ['./add-card-details.component.css']
})
export class AddCardDetailsComponent implements OnInit {

  isEdit: boolean = false;
  updatingObj:FormGroup;

  form = new FormGroup({
    cards : new FormArray([]),
    card : new FormGroup({
      name : new FormControl(''),
      number : new FormControl('')
    })
  })

  constructor() { }

  ngOnInit() {
  }


  get cards(){
    return this.form.get('cards') as FormArray;
  }

  get card(){
    return this.form.get('card') as FormGroup;
  }

  get cardName(){
    return this.form.get('card.name').value;

  }

  get cardNo(){
    return this.form.get('card.number').value;

  }

  addCard(){
    this.cards.push(new FormGroup({name:new FormControl(this.cardName),number:new FormControl(this.cardNo)}));
    this.form.get('card').reset();
  }

  removeCard(card:FormGroup){
    let index = this.cards.controls.indexOf(card);
    this.cards.removeAt(index);
  }

  setCard(card:FormGroup){
    this.isEdit = true;
    let name = (card.controls.name as FormControl).value;
    let number = (card.controls.number as FormControl).value;
    (this.card).setValue({
      name:name,
      number:number
    })
    this.updatingObj = card;
  }

  updateCard(){
    // console.dir(this.cards.controls);
    // console.log("current card",this.updatingObj);
    let index = this.cards.controls.find((card:FormGroup) =>
      card.value.name == this.updatingObj.value.name && 
      card.value.number == this.updatingObj.value.name
    );
    // console.log("index",index);
    let name = (this.card.controls.name as FormControl).value;
    let number = (this.card.controls.number as FormControl).value;
    index.setValue({
      name:name,
      number:number
    });
    this.isEdit = false;
    this.form.get('card').reset();
  }
}
