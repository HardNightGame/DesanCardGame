class CardFactory {
    constructor(scene) {
        this.scene = scene;
        this.cardFace = {
            image: 'card', src: 'img/cardnew.jpg'
        };
        this.skuCardImages = [
            {image: 'card1', src: 'img/card2.png'},
            {image: 'card2', src: 'img/card3.png'},
            {image: 'card3', src: 'img/card4.png'},
            {image: 'card4', src: 'img/card5.png'},
            {image: 'card5', src: 'img/card6.png'},
            {image: 'card6', src: 'img/card7.png'},
            {image: 'card7', src: 'img/card8.png'},
            {image: 'card8', src: 'img/card9.png'},
            {image: 'card9', src: 'img/card10.png'},
            {image: 'card10', src: 'img/card11.png'},
            {image: 'card11', src: 'img/card12.png'},
            {image: 'card12', src: 'img/card13.png'},
            {image: 'card13', src: 'img/card14.png'},
            {image: 'card14', src: 'img/card15.png'},
            {image: 'card15', src: 'img/card16.png'},
            {image: 'card16', src: 'img/card17.png'},
            {image: 'card17', src: 'img/card18.png'},
            {image: 'card18', src: 'img/card19.png'},
            {image: 'card19', src: 'img/card20.png'},
        ];
        this.badCardImages = [
            {image: 'card101', src: 'img/card101.png'},
            {image: 'card102', src: 'img/card102.png'}
        ]

        this.questionCardImages = {
            image: 'card201', src: 'img/card201.png'
        };
        this.InitNewPack();
    }

    GetAllImageSource(){
        let _return = [];
        _return.push(...this.skuCardImages);
        _return.push(...this.badCardImages);
        _return.push(this.questionCardImages);
        _return.push(this.cardFace)
        return _return;
    }

    InitNewPack() {
        this.avaliavebleSkuCards = Phaser.Utils.Array.Shuffle(this.skuCardImages.map(e => e.image));
        this.avaliavebleBadCards = Phaser.Utils.Array.Shuffle(this.badCardImages.map(e => e.image));
    }

    CreateSkuCardPair(value) {
        let texture = new CardTexture(this.avaliavebleSkuCards.pop(), this.cardFace.image);
        let _returnArrPair = [];
        _returnArrPair.push(new SkuCard(this.scene, value,texture));
        _returnArrPair.push(new SkuCard(this.scene, value,texture));
        return _returnArrPair;
    }

    CreateBadCard() {
        return new BadCard(this.scene, new CardTexture(this.avaliavebleBadCards.pop(), this.cardFace.image));
    }

    CreateQuestionCard(question) {
        return new QuestionCard(this.scene,
            new CardTexture(this.questionCardImages.image, this.cardFace.image), question);
    }

}
