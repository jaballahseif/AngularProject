import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../model/suggestion';

@Component({
    selector: 'app-list-suggestions',
    templateUrl: './list-suggestions.component.html',
    styleUrls: ['./list-suggestions.component.css']
})
export class ListSuggestionsComponent implements OnInit {

    placeholder: string = 'Rechercher une suggestion...';
    suggestions: Suggestion[] = [
        {
            id: '1',
            title: 'Suggestion 1',
            description: 'Description de la suggestion 1',
            director: 'Director 1',
            date: new Date(),
            status: 'pending',
            nbLikes: 10
        },
        {
            id: '2',
            title: 'Suggestion 2',
            description: 'Description de la suggestion 2',
            director: 'Director 2',
            date: new Date(),
            status: 'accepted',
            nbLikes: 20
        },
        {
            id: '3',
            title: 'Suggestion 3',
            description: 'Description de la suggestion 3',
            director: 'Director 3',
            date: new Date(),
            status: 'refused',
            nbLikes: 5
        }
    ];

    addToFavoris(s: Suggestion) {
        alert('Ajouté aux favoris : ' + s.title);
    }
    constructor() { }

    ngOnInit(): void {
    }

}
