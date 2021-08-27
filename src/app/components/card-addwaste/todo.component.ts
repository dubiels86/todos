import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {  FormGroup } from "@angular/forms";
import { NgOption } from "@ng-select/ng-select";
import { createPopper } from "@popperjs/core";
import { Observable } from "rxjs";

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { ToastrService } from "ngx-toastr";

import Swal from "sweetalert2";
import { TODO } from "src/app/model/todo.interface";
import { TodoService } from "src/app/services/todo.service";


@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  

})
export class TodoComponent implements OnInit {

    showAlert = false;   

    todo: TODO =  new TODO();
    todos = [{
      "id": 1,
      "title": "One",
      "isComplete": true 
    },
    {
      "id": 2,
      "title": "Two",
      "isComplete": false 
    },
    {
      "id": 3,
      "title": "Three",
      "isComplete": false 
    },
    {
      "id": 4,
      "title": "For",
      "isComplete": true 
    }]    ;
    
    toUpdate = false;
    wUpdateId = 0;
    
    
  constructor(private readonly _todoService:TodoService,  private toastr: ToastrService) {
    //this.downloadPDF();
  }

  ngOnInit(): void {
    this._todoService.getTodo()
    .subscribe((res:any) => {
      this.todos = res}) ;
      console.log(this.todos);
  }

  
  
}
