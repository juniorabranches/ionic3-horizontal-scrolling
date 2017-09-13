import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categorias = [{
    title: 'Teste',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4vDtrS1JJjSXbiTbAgd9IkZuYVHj0bv44NLmwMVFB9aI8NmqYw'
  },{
    title: 'Teste1',
    thumb: 'https://abrilveja.files.wordpress.com/2016/05/alx_mundo-cidades-japao-osaka-20140711-001_original1.jpeg?quality=70&strip=info&w=817'
  },{
    title: 'Teste2',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-HmeBXVv9_UityqKl01AeKHtA7fawrd1L8Mf_zauFQ6IomzT'
  },{
    title: 'Teste3',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtAC5wCFSorttbGSxhHSfv1u1ra_dsIrPaxDxLk62SBO2nwQx'
  },{
    title: 'Teste4',
    thumb: 'https://abrilveja.files.wordpress.com/2016/05/alx_mundo-cidades-japao-osaka-20140711-001_original1.jpeg?quality=70&strip=info&w=817'
  },{
    title: 'Teste5',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4vDtrS1JJjSXbiTbAgd9IkZuYVHj0bv44NLmwMVFB9aI8NmqYw'
  },{
    title: 'Teste6',
    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-HmeBXVv9_UityqKl01AeKHtA7fawrd1L8Mf_zauFQ6IomzT'
  }]
  constructor(public navCtrl: NavController) {

  }

  loadData(categoria){
    alert(categoria.title);
  }

}
