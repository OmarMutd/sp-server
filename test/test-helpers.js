
function cleanTables(db) {
    return db.transaction(trx =>
        trx.raw(
            `TRUNCATE
            gourmet,
            pasta,
            soups_and_salads,
            subs,
            wings_and_things,
            more_for_kids,
            desserts,
            beverages`
        )
            .then(() =>
                Promise.all([
                    trx.raw(`ALTER SEQUENCE gourmet_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE pasta_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE soups_and_salads_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE subs_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE wings_and_things_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE more_for_kids_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE desserts_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`ALTER SEQUENCE beverages_id_seq minvalue 0 START WITH 1`),
                    trx.raw(`SELECT setval('gourmet_id_seq', 0)`),
                    trx.raw(`SELECT setval('pasta_id_seq', 0)`),
                    trx.raw(`SELECT setval('soups_and_salads_id_seq', 0)`),
                    trx.raw(`SELECT setval('subs_id_seq', 0)`),
                    trx.raw(`SELECT setval('wings_and_things_id_seq', 0)`),
                    trx.raw(`SELECT setval('more_for_kids_id_seq', 0)`),
                    trx.raw(`SELECT setval('desserts_id_seq', 0)`),
                    trx.raw(`SELECT setval('beverages_id_seq', 0)`),

                ])
            )
    )
}




function makePastaArray() {
    return [
        {
            "id": 43,
            "title": "Lasagna",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Cheese, Veggie, or Meat Sauce.",
            "url": "https://i.imgur.com/2RVqrKL.jpg"
        },
        {
            "id": 44,
            "title": "Cheese or Beef Ravioli",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "",
            "url": "https://imgur.com/gallery/oiQNPO1"
        },
        {
            "id": 45,
            "title": "Eggplant, Veal or Chicken Parmigiana",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "",
            "url": ""
        },
        {
            "id": 46,
            "title": "Manicotti",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "",
            "url": "https://i.imgur.com/v4H0BPV.jpg"
        },
        {
            "id": 47,
            "title": "Cannelloni",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "",
            "url": "https://i.imgur.com/gipX1pd.jpg"
        },
        {
            "id": 48,
            "title": "Spaghetti or Fettuccini",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Red sauce, Meat Sauce, or Alfredo.",
            "url": "https://i.imgur.com/urw9tKt.jpg"
        },
        {
            "id": 49,
            "title": "Fettuccini Chicken Alferdo",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "",
            "url": "https://i.imgur.com/6pQyExC.jpg"
        },
        {
            "id": 50,
            "title": "Trio Pasta",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Manicotti, Lasagna, Cheese or Beef Ravioli.",
            "url": ""
        },
        {
            "id": 51,
            "title": "Baked Ziti",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Ricotta, Meat Sauce, Red Sauce, or Alfredo.",
            "url": "https://i.imgur.com/TPa1HJj.jpg"
        },
        {
            "id": 52,
            "title": "Linguini Toscana",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Grilled chicken, Mushrooms, Spinach, Garlic, Sautéed in a lemon garlic butter sauce.",
            "url": "https://i.imgur.com/HL2Widw.jpg"
        },
        {
            "id": 53,
            "title": "Sopranos Murphy Chicken",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Chicken, Tomatoes, Mushrooms, Green Peppers, Onions & Penne Pasta.",
            "url": "https://i.imgur.com/dPVURU5.jpg"
        },
        {
            "id": 54,
            "title": "Chicken Florentines",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Grilled Chicken, Tomatoes, Spinach, Mushrooms, Garlic, Sautéed with creamy sauce,Topped with mozzarella, Served with Penne Pasta.",
            "url": ""
        },
        {
            "id": 55,
            "title": "Angel Hair Chicken Mushroom Alfredo",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Grilled Chicken, Mushrooms, Sautéed in Alfredo sauce, Mozzarella Cheese.",
            "url": ""
        },
        {
            "id": 56,
            "title": "Chicken Carciofi",
            "category": "pasta",
            "price": "$9.99",
            "ingredients": "Grilled chicken, Artichokes, Sautéed with Soprano’s red & creamy sauce.",
            "url": ""
        }
    ]
}

function makeGourmetArray() {
    return [
        {
            "id": 37,
            "title": "Margarita",
            "category": "gourmet",
            "ingredients": "Olive oil, garlic butter, tomatoes, mozzarella & fresh basil.",
            "url": ""
        },
        {
            "id": 38,
            "title": "Polio's Classic",
            "category": "gourmet",
            "ingredients": "Grilled Chicken, tomatoes, garlic, mozzarella & fresh basil.",
            "url": ""
        },
        {
            "id": 39,
            "title": "Olivia's Favorite",
            "category": "gourmet",
            "ingredients": "Grilled chicken, tomatoes, spinach, mozzarella & freshbasil.",
            "url": ""
        },
        {
            "id": 40,
            "title": "Johnny Boy (Chicken Alfredo)",
            "category": "gourmet",
            "ingredients": "Grilled Chicken, Alfredo sauce, parmesan & mozzarella.",
            "url": ""
        },
        {
            "id": 41,
            "title": "Furio's (Supreme)",
            "category": "gourmet",
            "ingredients": "Pepperoni, sausage, green peppers, onions, mushrooms & mozzarella.",
            "url": ""
        },
        {
            "id": 42,
            "title": "BBQ Grilled Chicken",
            "category": "gourmet",
            "ingredients": "Grilled Chicken sauteed in bbq sauce, covered with mozzarella cheese.",
            "url": ""
        },
        {
            "id": 43,
            "title": "Garden Veggies",
            "category": "gourmet",
            "ingredients": "Tomatoes, onions, green peppers, mushrooms, black olives, basil & mozzarella.",
            "url": ""
        },
        {
            "id": 44,
            "title": "Carciofi (Artichoke Deluxe",
            "category": "gourmet",
            "ingredients": "Artichokes, tomatoes, onions, green peppers, black olives, mozzarella.",
            "url": ""
        },
        {
            "id": 45,
            "title": "Hawaiian (Five-O)",
            "category": "gourmet",
            "ingredients": "Ham, pineapple, parmesan, provolone & mozzarella cheese.",
            "url": ""
        },
        {
            "id": 46,
            "title": "Al Capone's (All Meat)",
            "category": "gourmet",
            "ingredients": "Pepperoni, sausage, ham, beef, parmesan & mozzarella.",
            "url": ""
        },
        {
            "id": 47,
            "title": "Tony's Favorite (Deluxe)",
            "category": "gourmet",
            "ingredients": "Pepperoni, ham, sausage, beef, green peppers, onions, black olives, jalapenos, mushrooms Sopranos red sauce, creamy sauce, basil & mozzarella.",
            "url": ""
        },
        {
            "id": 48,
            "title": "Mediterranean",
            "category": "gourmet",
            "ingredients": "Tomatoes, mushrooms, spinach, green olives, red onions, Artichoke hearts, feta cheese, olive oil, basil, mozzarella.",
            "url": ""
        }
    ]
}

function makeSoupSaladArray() {
    return [
        {
            "id": 22,
            "title": "Soup of the Day - Bowl",
            "category": "soup",
            "price": "$5.95",
            "url": ""
        },
        {
            "id": 23,
            "title": "Garden Salad",
            "category": "salad",
            "price": "$3.50",
            "url": "Lettuce, Tomatoes, Green Peppers, Onions & croutons."
        },
        {
            "id": 24,
            "title": "Greek Salad wih Feta Cheese",
            "category": "salad",
            "price": "$7.99",
            "url": ""
        },
        {
            "id": 25,
            "title": "Caesar Salad",
            "category": "salad",
            "price": "$6.99",
            "url": ""
        },
        {
            "id": 26,
            "title": "Grill Chicken Caesar Salad",
            "category": "salad",
            "price": "$8.99",
            "url": ""
        },
        {
            "id": 27,
            "title": "Crispy Chicken Salad",
            "category": "salad",
            "price": "$7.99",
            "url": ""
        },
        {
            "id": 28,
            "title": "Chef Salad",
            "category": "salad",
            "price": "$8.99",
            "url": ""
        }
    ]

}

function makeSubsArray() {
    return [
        {
            "id": 31,
            "title": "*1. - Ham & Cheese",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "",
            "url": ""
        },
        {
            "id": 32,
            "title": "*2. - Submarine Sub",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Pepperoni, Ham.",
            "url": ""
        },
        {
            "id": 33,
            "title": "*3. - Deluxe",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Pepperoni, Ham, Mushrooms.",
            "url": ""
        },
        {
            "id": 34,
            "title": "*4. - Combo Meat",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Ham, Pepperoni, Beef & Sausage.",
            "url": ""
        },
        {
            "id": 35,
            "title": "*5. - Turkey Sub",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "",
            "url": ""
        },
        {
            "id": 36,
            "title": "*6. - Grilled Chicken Sub",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "",
            "url": ""
        },
        {
            "id": 37,
            "title": "*7. - Veggie Sub",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Black olives, Green olives, Tomatoes, Mushrooms, Green Peppers, Onions.",
            "url": ""
        },
        {
            "id": 38,
            "title": "8. - Eggplant or Chicken or Veal Parmesan",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Covered with Soprano's red sauce and mozzarella.",
            "url": ""
        },
        {
            "id": 39,
            "title": "9. - Meatball Cheese Sub",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Covered with Soprano's red sauce and mozzarella.",
            "url": ""
        },
        {
            "id": 40,
            "title": "10. - Philly Cheese Steak Sub",
            "category": "sub",
            "price": "$7.99",
            "ingredients": "Green peppers, Onions & Mushrooms.",
            "url": ""
        }
    ]
}

function makeWingsArray() {
    [
        {
            "id": 19,
            "title": "Hot Mild Lemon Pepper BBQ Teriyaki Hot Garlic",
            "category": "wings",
            "url": "https://i.imgur.com/HKu17ML.jpg"
        },
        {
            "id": 20,
            "title": "Mozzarella Sticks",
            "category": "things",
            "url": "https://i.imgur.com/sE6a4zZ.jpg"
        },
        {
            "id": 21,
            "title": "Fried Mushrooms",
            "category": "things",
            "url": "https://i.imgur.com/pvl5KPq.jpg"
        },
        {
            "id": 22,
            "title": "Bread Sticks",
            "category": "things",
            "url": "https://i.imgur.com/BIp7QOP.jpg"
        },
        {
            "id": 23,
            "title": "Sicilian Cheese Squares",
            "category": "things",
            "url": "https://i.imgur.com/hEsmHPn.jpg"
        },
        {
            "id": 24,
            "title": "Fries",
            "category": "things",
            "url": "https://i.imgur.com/aCfbHou.jpg"
        }
    ]

}

function makeKidsArray() {
    return [
        {
            "id": 13,
            "title": "Kids Cheese or Pepperoni Pizza",
            "category": "kids",
            "price": "$4.99",
            "url": "https://i.imgur.com/fFgozCX.jpg"
        },
        {
            "id": 14,
            "title": "Kids Lasagna, Spaghetti OR Angel Hair",
            "category": "kids",
            "price": "$4.99",
            "url": "https://i.imgur.com/T43I8na.jpg"
        },
        {
            "id": 15,
            "title": "Chicken Fingers with French Fries",
            "category": "kids",
            "price": "$4.99",
            "url": "https://i.imgur.com/jU6zzGA.jpg"
        },
        {
            "id": 16,
            "title": "Chicken Nuggets with French Fries",
            "category": "kids",
            "price": "$4.99",
            "url": "https://i.imgur.com/scNkLBB.jpg"
        }
    ]
}

function makeDessertsArray() {
    return [
        {
            "id": 16,
            "title": "Brownie (plain)",
            "category": "desserts",
            "price": "$2.99",
            "url": "https://i.imgur.com/qAX1QsL.jpg"
        },
        {
            "id": 17,
            "title": "New York Cheesecake",
            "category": "desserts",
            "price": "$3.95",
            "url": "https://i.imgur.com/yErl1kX.jpg"
        },
        {
            "id": 18,
            "title": "Cannoli (1)",
            "category": "desserts",
            "price": "$2.99",
            "url": "https://i.imgur.com/OlZgYmr.jpg"
        },
        {
            "id": 19,
            "title": "Rocky Road Brownie",
            "category": "desserts",
            "price": "$4.25",
            "url": "https://i.imgur.com/sYqLG5d.jpg"
        },
        {
            "id": 20,
            "title": "Tiramisu",
            "category": "desserts",
            "price": "$4.25",
            "url": "https://i.imgur.com/oLEsLew.jpg"
        }
    ]
}

function makeBeveragesArray() {
    return [
        {
            "id": 19,
            "title": "2-Liter",
            "category": "beverage",
            "price": "$2.99",
            "url": "https://i.imgur.com/Zq55K3F.jpg"
        },
        {
            "id": 20,
            "title": "6-Pack",
            "category": "beverage",
            "price": "$3.99",
            "url": "https://i.imgur.com/uqKGZGR.jpg"
        },
        {
            "id": 21,
            "title": "Single can",
            "category": "beverage",
            "price": "$1.29",
            "url": "https://i.imgur.com/CfU3Z6N.jpg"
        },
        {
            "id": 22,
            "title": "Iced Tea",
            "category": "beverage",
            "price": "$1.99",
            "url": "https://i.imgur.com/uewYyS8.jpg"
        },
        {
            "id": 23,
            "title": "Coffee",
            "category": "beverage",
            "price": "$1.50",
            "url": "https://i.imgur.com/o0R0ktF.jpg"
        },
        {
            "id": 24,
            "title": "Large Fountain",
            "category": "beverage",
            "price": "$1.99",
            "url": "https://i.imgur.com/Pthll9M.jpg"
        }
    ]
}

function seedGourmet(db, gourmet) {
    return db.into('users').insert(gourmet)
        .then(() =>
            db.raw(
                `SELECT setval('gourmet_id_seq', ?)`,
                [gourmet[gourmet.length - 1].id],
            )
        )
}

function seedPasta(db, pasta) {
    return db.into('pasta').insert(pasta)
        .then(() =>
            db.raw(
                `SELECT setval('pasta_id_seq', ?)`,
                [pasta[pasta.length - 1].id],
            )
        )
}

function seedSubs(db, subs) {
    return db.into('subs').insert(subs)
        .then(() =>
            db.raw(
                `SELECT setval('subs_id_seq', ?)`,
                [subs[subs.length - 1].id],
            )
        )
}

function seedSoupSalad(db, soupsalad) {
    return db.into('soups_and_salads').insert(soupsalad)
        .then(() =>
            db.raw(
                `SELECT setval('soupsalad_id_seq', ?)`,
                [soupsalad[soupsalad.length - 1].id],
            )
        )
}

function seedSubs(db, subs) {
    return db.into('subs').insert(subs)
        .then(() =>
            db.raw(
                `SELECT setval('subs_id_seq', ?)`,
                [subs[subs.length - 1].id],
            )
        )
}

function seedWings(db, wings) {
    return db.into('wings_and_things').insert(wings)
        .then(() =>
            db.raw(
                `SELECT setval('wings_id_seq', ?)`,
                [wings[wings.length - 1].id],
            )
        )
}

function seedKids(db, kids) {
    return db.into('more_for_kids').insert(kids)
        .then(() =>
            db.raw(
                `SELECT setval('kids_id_seq', ?)`,
                [kids[kids.length - 1].id],
            )
        )
}

function seedDesserts(db, desserts) {
    return db.into('desserts').insert(desserts)
        .then(() =>
            db.raw(
                `SELECT setval('desserts_id_seq', ?)`,
                [desserts[desserts.length - 1].id],
            )
        )
}

function seedBeverages(db, beverages) {
    return db.into('beverages').insert(beverages)
        .then(() =>
            db.raw(
                `SELECT setval('beverages_id_seq', ?)`,
                [beverages[beverages.length - 1].id],
            )
        )
}

function seeds(db, pasta, gourmet, soups_and_salads, subs, wings_and_things, more_for_kids, desserts, beverages) {
    return db.transaction(async trx => {
        await seedGourmet(trx, gourmet),
            await seedPasta(trx, pasta),
            await seedSubs(trx, subs),
            await seedSoupSalad(trx, soups_and_salads)
        await seedKids(trx, more_for_kids)
        await seedWings(trx, wings_and_things)
        await seedDesserts(trx, desserts)
        await seedBeverages(trx, beverages)
    })
}


function makeFixtures() {
    const testPasta = makePastaArray()
    const testGourmet = makeGourmetArray()
    const testSoupSalad = makeSoupSaladArray()
    const testSubs = makeSubsArray()
    const testWings = makeWingsArray()
    const testKids = makeKidsArray()
    const testDesserts = makeDessertsArray()
    const testBeverages = makeBeveragesArray()
    return { testPasta, testGourmet, testSoupSalad, testSubs, testWings, testKids, testDesserts, testBeverages }
}


module.exports = {
    makeFixtures,
    seeds,
    cleanTables,
    makePastaArray,
    makeGourmetArray,
    makeSoupSaladArray,
    makeSubsArray,
    makeWingsArray,
    makeKidsArray,
    makeDessertsArray,
    makeBeveragesArray,
    seedGourmet,
    seedPasta,
    seedSubs,
    seedSoupSalad,
    seedKids,
    seedWings,
    seedDesserts,
    seedBeverages
}