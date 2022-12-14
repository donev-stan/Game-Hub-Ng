import { Component, HostListener, OnInit } from '@angular/core';
import { RandomWordService } from '../services/random-word.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  alphabet: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  word: any = [];

  quertyStyle: boolean = true;

  constructor(private rndWordService: RandomWordService) {}

  ngOnInit(): void {
    this.rndWordService.word.subscribe((word) => (this.word = word));
    this.quertyStyle = window.innerWidth > 635;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.quertyStyle = window.innerWidth > 635;
  }
}
