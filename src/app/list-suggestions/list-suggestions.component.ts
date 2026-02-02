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
            id: 1,
            title: 'Organiser une journée team building',
            description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
            category: 'Événements',
            date: new Date('2025-01-20'),
            status: 'acceptee',
            nbLikes: 10
        },
        {
            id: 2,
            title: 'Améliorer le système de réservation',
            description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
            category: 'Technologie',
            date: new Date('2025-01-15'),
            status: 'refusee',
            nbLikes: 0
        },
        {
            id: 3,
            title: 'Créer un système de récompenses',
            description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
            category: 'Ressources Humaines',
            date: new Date('2025-01-25'),
            status: 'refusee',
            nbLikes: 0
        },
        {
            id: 4,
            title: 'Moderniser l\'interface utilisateur',
            description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
            category: 'Technologie',
            date: new Date('2025-01-30'),
            status: 'en_attente',
            nbLikes: 0
        },
    ];

    favoris: Suggestion[] = [];

    addToFavoris(s: Suggestion) {
        if (!this.favoris.includes(s)) {
            this.favoris.push(s);
            console.log('Favoris:', this.favoris);
        }
    }

    incrementLikes(s: Suggestion) {
        s.nbLikes++;
    }

    filteredSuggestions: Suggestion[] = [];
    searchTerm: string = '';

    filterSuggestions() {
        if (!this.searchTerm) {
            this.filteredSuggestions = this.suggestions;
        } else {
            const term = this.searchTerm.toLowerCase();
            this.filteredSuggestions = this.suggestions.filter(s =>
                s.title.toLowerCase().includes(term) ||
                s.category.toLowerCase().includes(term)
            );
        }
    }

    constructor() { }

    ngOnInit(): void {
        this.filteredSuggestions = this.suggestions;
    }

}
