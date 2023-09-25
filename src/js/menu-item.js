class MenuItem {
    constructor(name, description, price){
        this.name = name;
        this.description = description; 
        this.price = price;
    }
    
    showPrice(){
       
        return this.price + " €"
    }
    showDescription(){
        return this.description
    }
    showName(){
        return this.name
    }
}

let margarita = new MenuItem("Margarita", "The simple mixture of tequila, triple sec and lime juice blended with ice.", 5.5)
let mojito = new MenuItem("Mojito", "The Mojito complimenting summer perfectly with a fresh minty taste.", 5)
let pinaColada = new MenuItem("Piña Colada", "A tropical delight made with rum, coconut cream, and pineapple juice, blended with ice for a creamy, refreshing taste.", 6.50);
let cosmopolitan = new MenuItem("Cosmopolitan", "A classic cocktail with vodka, triple sec, cranberry juice, and a splash of lime, offering a delightful balance of sweet and tart flavors.", 7.00);
let maiTai = new MenuItem("Mai Tai", "Transport yourself to a beachside paradise with this cocktail featuring light and dark rum, orange liqueur, lime juice, and orgeat syrup.", 8.00);
let moscowMule = new MenuItem("Moscow Mule", "A zesty and spicy blend of vodka, ginger beer, and fresh lime juice, served in a copper mug for an extra chill.", 7.50);
let blueLagoon = new MenuItem("Blue Lagoon", "A vibrant blue cocktail made with vodka, blue curaçao, and lemonade, providing a visually striking and refreshing drink.", 6.75);
let cocktailsList = [margarita, mojito, pinaColada, cosmopolitan, maiTai, moscowMule, blueLagoon]

let coronaExtra = new MenuItem("Corona Extra", "A light and refreshing Mexican lager with a mild, crisp flavor and a touch of citrus.", 5.50);
let modeloEspecial = new MenuItem("Modelo Especial", "A Mexican lager with a clean, crisp taste and a slightly sweet finish, great for beach sipping.", 5.25);
let pacificoClara = new MenuItem("Pacifico Clara", "A light and easy-drinking Mexican lager with a subtle maltiness, ideal for sunny beach days.", 5.00);
let landsharkLager = new MenuItem("LandShark Lager", "A smooth and refreshing island-style lager with a hint of citrus, perfect for beachfront enjoyment.", 5.75);
let coronaPremier = new MenuItem("Corona Premier", "An even lighter option from Corona, with a smooth and crisp taste, great for staying refreshed at the beach.", 5.75);
let beachBlondeAle = new MenuItem("Beach Blonde Ale", "A light and sessionable ale with a touch of citrus and a crisp finish, designed for beachgoers.", 6.00);
let beersList = [coronaExtra, modeloEspecial, pacificoClara, landsharkLager, coronaPremier, beachBlondeAle]

export { MenuItem, cocktailsList, beersList }