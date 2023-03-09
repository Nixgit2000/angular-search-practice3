import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  data = [
  {title: "The Royal Tenenbaums", title2: "",url:  "https://www.youtube.com/watch?v=caMgokYWboU",   actor: "Owen Wilson, Gene Hackman, Ben Stiller, Luke Wilson, Gwyneth Paltrow, Bill Murray, Anjelica Huston, Danny Glover, Alec Baldwin", backgroundPos: "center center",  pic: "../assets/ASSETS/RT1.png"},
  {title: "The Grand Buhapest Hotel", title2: "",url:  "https://www.youtube.com/watch?v=1Fg5iWmQjwk",    actor: "Ralph Fiennes, Bill Murray, Tilda Swinton, Tony Revolori, Edward Norton, Adrien Brody, Owen Wilson, Willem Dafoe", backgroundPos: "center center",  pic: "../assets/ASSETS/RT2.png"},
  {title: "Captain Fantastic", title2: "",url:  "https://www.youtube.com/watch?v=D1kH4OMIOMc",    actor: "Viggo Mortensen, Samantha Isler, George MacKay, Annalise Basso", backgroundPos: "center center",  pic: "../assets/ASSETS/CF1.png"},
  {title: "Into the Wild", title2: "",url:  "https://www.youtube.com/watch?v=lwtZgBFKlzs",    actor: "Emile Hirsch, Kristen Stewart, Vince Vaughn", backgroundPos: "center center",  pic: "../assets/ASSETS/CF2.png"},
  {title: "Rudolph the Red Nosed Reindeer", title2: "",url:  "https://www.youtube.com/watch?v=amuEMNzIt6g",    actor: "Burl Ives, Billie Mae Richards", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR1.png"},
  {title: "Scrooge: A Christmas Carol", title2: "",url:  "https://www.youtube.com/watch?v=k3SjIk3uphI",    actor: "Alastais Sim, Kathleen Harrison", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR2.png"},
  {title: "Office Space", title2: "",url:  "https://www.youtube.com/watch?v=dMIrlP61Z9s",    actor: "Mike Judge, Ron Livingston, Jennifer Aniston", backgroundPos: "center center",  pic: "../assets/ASSETS/OS1.png"},
  {title: "Idiocracy", title2: "",url:  "https://www.youtube.com/watch?v=6lai9QhBibk",    actor: "Luke Wilson, Maya Rudolph, Dax Shepard, Terry Crews", backgroundPos: "center center",  pic: "../assets/ASSETS/OS2.png"},
  {title: "Hot Fuzz", title2: "",url:  "https://www.youtube.com/watch?v=ayTnvVpj9t4",    actor: "Simon Pegg, Nick Frost", backgroundPos: "center center",  pic: "../assets/ASSETS/SP1.png"},
  {title: "At World's End", title2: "",url:  "https://www.youtube.com/watch?v=n__1Y-N5tQk",    actor: "Simon Pegg, Nick Frost", backgroundPos: "center center",  pic: "../assets/ASSETS/SP3.png"},
  {title: "Shaun of the Dead", title2: "",url:  "https://www.youtube.com/watch?v=cqDy3dXLBO8",    actor: "Simon Pegg, Nick Frost", backgroundPos: "center center",  pic: "../assets/ASSETS/SP4.png"},
  {title: "Harry Potter", title2: "and the Sorcerer's Stone", url:"https://www.youtube.com/watch?v=VyHV0BRtdxo",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "54% 60%",  pic: "../assets/ASSETS/HP1.png"},
{title: "Harry Potter", title2: "and the Chamber of Secrets",url:"https://www.youtube.com/watch?v=1bq0qff4iF8",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "65% 60%",  pic: "../assets/ASSETS/HP2.png"},
{title: "Harry Potter", title2: "and the Prisoner of Azkaban",url:"https://www.youtube.com/watch?v=lAxgztbYDbs",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/HP3.png"},
{title: "Harry Potter", title2: "and the Goblet of Fire",url:"https://www.youtube.com/watch?v=3EGojp4Hh6I",   actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "75% 60%",  pic: "../assets/ASSETS/HP4.png"},
{title: "Harry Potter", title2: "and the Order of the Phoenix",url:"https://www.youtube.com/watch?v=y6ZW7KXaXYk", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling",backgroundPos: "38% 60%",   pic: "../assets/ASSETS/HP5.png"},
{title: "Harry Potter", title2: "and the Half Blood Prince",url:"https://www.youtube.com/watch?v=tAiy66Xrsz4", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "23% 60%",  pic: "../assets/ASSETS/HP6.png"},
{title: "Harry Potter", title2: "and the Deathly Hallows: Part I",url:"https://www.youtube.com/watch?v=MxqsmsA8y5k", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 90%",  pic: "../assets/ASSETS/HP7.png"},
{title: "Harry Potter", title2: "and the Deathly Hallows: Part II",url:"https://www.youtube.com/watch?v=5NYt1qirBWg", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling", backgroundPos: "10% 60%",  pic: "../assets/ASSETS/HP8.png"},
{title: "Lord of the Rings", title2: "the Fellowship of the Ring",url: "https://www.youtube.com/watch?v=V75dMMIW2B4", font: "LOTR", fontSize: "1vw", fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "center center",  pic: "../assets/ASSETS/LOTR1.png"},
{title: "Lord of the Rings", title2: "the Two Towers",url: "https://www.youtube.com/watch?v=hYcw5ksV8YQ",  font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/LOTR2.png"},
{title: "Lord of the Rings", title2: "the Return of the King",url: "https://www.youtube.com/watch?v=y2rYRu8UW8M",  font: "LOTR", fontSize: "1vw",fontSize2: ".7vw", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/LOTR3.png"},
{title: "The Hobbit", title2: "an Unexpected Journey",url: "https://www.youtube.com/watch?v=SDnYMbYB-nU",     actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/H1.png"},
{title: "The Hobbit", title2: "the Desolation of Smaug",url: "https://www.youtube.com/watch?v=fnaojlfdUbs",     actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/H2.png"},
{title: "The Hobbit", title2: "the Battle of the Five Armies",url: "https://www.youtube.com/watch?v=iVAgTiBrrDA", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/H3.png"},
{title: "Fantastic Beasts", title2: "and Where to Find Them",url: "https://www.youtube.com/watch?v=ViuDsy7yb8M",    actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Colin Farrell, Johnny Depp",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB1.png"},
{title: "Fantastic Beasts", title2: "and Where to Find Them",url:  "https://www.youtube.com/watch?v=8bYBOVWLNIs",    actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Jude Law, Johnny Depp",backgroundPos: "50% 60%",   pic: "../assets/ASSETS/FB2.png"},
{title: "Fantastic Beasts", title2: "and Where to Find Them",url:  "https://www.youtube.com/watch?v=Y9dr2zw-TXQ",    actor: "Mads Mikkelsen, Eddie Redmayne, Jude Law, Ezra Miller, Katherine Wilson", backgroundPos: "20% 60%",  pic: "../assets/ASSETS/FB3.png"},

]
}
