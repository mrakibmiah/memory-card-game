class Index {
    open() {
        browser.url('/');
    }

    get cards() {
        return $('.flip-card');
    }

    get firstCard() {
        return $('.flip-card:nth-child(1)');
    }

    get cardDeck() {
        return $('.card-deck');
    }

    get timer() {
        return $('.timer');
    }

    get restart() {
        return $('.restart');
    }

    get moves() {
        return $('.moves');
    }
}

export const IndexPage = new Index();
