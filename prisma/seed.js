import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        name: "Organic Raw Cacao Butter Chunks",
        description:
          "Our award-winning cacao butter originates from Peru where the Cacao tree was sacred amongst the Mayans and Aztecs. Cacao butter is made by pressing ground, milled cacao nibs to make a cocoa paste. This process separates powder from the butter to create a velvety and rich paste that can be used as a natural alternative to processed cooking oils. Our cacao butter also dissolves beautifully onto the skin as a pure chemical-free moisturiser.",
        image:
          "https://yvqzpcvcpgibbhhpgcad.supabase.co/storage/v1/object/public/products/cacao-butter.webp",
        price: 25,
        usage:
          "Clean and pure, our cacao butter melts into a  milky rich buttery mass. With an excellent clean finish, our cacao butter is a very versatile culinary product.",
        ingredients: "100% Cacao Butter",
        stripe_id: "price_1O513JKUTnlP475Ovp0HhUpX",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Raw Cacao Paste Chunks",
        description:
          "Containing only a small amount of naturally occurring sugars and no additives, preservatives, or allergens, our 100% vegan and organic Cacao Paste Chunks are a healthier alternative to chocolate. With a luxurious dark chocolate flavour, our cacao paste chunks are made by pressing cacao nibs into a paste which is then broken into chunks. Because of this minimal processing, our cacao paste chunks retain the nutrients found within the cacao bean to create a nutritious and delicious snack.",
        image:
          "https://yvqzpcvcpgibbhhpgcad.supabase.co/storage/v1/object/public/products/cacao-paste.jpg",
        price: 24.99,
        usage:
          "With a deliciously rich dark chocolate flavour, melt our cacao paste to create decadent organic desserts or hot chocolate!",
        ingredients: "100% Cacao Paste",
        stripe_id: "price_1O516SKUTnlP475ObAazNgFa",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Raw Cacao Nibs",
        description:
          "Our cacao nibs are made by simply breaking raw cacao beans into small pieces. These nibs preserve the cacao bean's nutritional value and contain no additives resulting in a versatile and nutritious superfood snack.  Cacao nibs are rich in iron, which boosts energy and reduces tiredness, and are naturally filled with antioxidants. They're also impressively high in magnesium which supports psychological health. So take some time to enjoy those feel-good feelings that our super nibs bring.",
        image:
          "https://yvqzpcvcpgibbhhpgcad.supabase.co/storage/v1/object/public/products/cacao-nibs.webp",
        price: 12.99,
        usage:
          "With a crunchy texture and rich flavour like unsweetened dark chocolate, you can enjoy our cacao nibs directly from the pack! Or get creative and sprinkle them over cakes and dash over breakfast bowls. ",
        ingredients: "100% Cacao Nibs",
        stripe_id: "price_1O518AKUTnlP475OOa4e6Fel",
      },
    });
    await prisma.products.create({
      data: {
        name: "Organic Acerola Powder",
        description:
          "Grown in Brazil, our Acerola fruits soak up the intense South American sun to develop vibrant crimson red Cherries. We harvest and freeze-dry the cherries to preserve as much of the nutritional content as possible. This results in a superfood powder that is incredibly high in Vitamin C which supports immunity and skin health.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/28_medium.webp",
        price: 19.99,
        usage:
          "Our Acerola powder has a sweet and sour taste and can be added to smoothies, juices, and desserts.",
        ingredients: "100% Acerola Powder",
        stripe_id: "price_1O519TKUTnlP475OzxqSPZfx",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Hemp Protein Powder",
        description:
          "Our hemp protein powder is made from the highest quality raw hemp seeds that are pressed and stone ground to create a powder. With 47g of protein per 100g, it is an exceptional source of vegan protein to support your muscle growth and maintenance. Our hemp protein powder is also high in Manganese, which boosts energy, making it a perfect addition to your pre-workout shakes. It's also natural contains Omega 3 fatty acids which support cholesterol health. With a mild flavour and colour, our hemp protein powder can be conveniently added to any meal, shake or bake for a quick and easy vegan protein super boost.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/hempproteinpowderscoopsandgymgear.webp",
        price: 19.99,
        usage:
          "Our hemp protein powder has a mild flavour and colour, making it a convenient addition to any meal, shake or bake for a quick and easy vegan protein super boost.",
        ingredients: "100% Hemp Protein Powder",
        stripe_id: "price_1O51JGKUTnlP475OYxdvFVjP",
      },
    });
    await prisma.products.create({
      data: {
        name: "Organic Bee Pollen",
        description:
          "Our bee pollen is collected by bees from the flowers of the acacia tree. The bees then mix the pollen with their own nectar to create a superfood that is rich in vitamins, minerals, and amino acids. Bee pollen is a great source of protein and is also high in fibre, which supports digestive health. With a sweet and floral flavour, our bee pollen is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/Beepollenbeingserved.webp",
        price: 19.99,
        usage:
          "Our bee pollen has a sweet and floral flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Bee Pollen",
        stripe_id: "price_1O51KFKUTnlP475OG4Xih868",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Ceremonial Matcha Powder",
        description:
          "Our ceremonial matcha powder is made from the highest quality green tea leaves that are stone ground to create a fine powder. With a vibrant green colour and a smooth flavour, our matcha powder is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/ceremonialmatchapreperation.webp",
        price: 17.99,
        usage:
          "Our matcha powder has a smooth flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Matcha Powder",
        stripe_id: "price_1O51L7KUTnlP475O8u1xlDFk",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Cacao Butter Wafers",
        description:
          "Our award-winning cacao butter originates from Peru where the Cacao tree was sacred amongst the Mayans and Aztecs. Cacao butter is made by pressing ground, milled cacao nibs to make a cocoa paste. This process separates powder from the butter to create a velvety and rich paste that can be used as a natural alternative to processed cooking oils. Our cacao butter also dissolves beautifully onto the skin as a pure chemical-free moisturiser.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/10_medium.webp",
        usage:
          "Clean and pure, our cacao butter melts into a  milky rich buttery mass. With an excellent clean finish, our cacao butter is a very versatile culinary product.",
        price: 79.99,
        ingredients: "100% Cacao Butter",
        stripe_id: "price_1O51MeKUTnlP475OUIOZejyI",
      },
    });
    await prisma.products.create({
      data: {
        name: "Organic Baobab Powder",
        description:
          "Our baobab powder is made from the highest quality baobab fruits that are dried and ground to create a fine powder. With a sweet and tangy flavour, our baobab powder is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/14_medium.webp",
        price: 19.99,
        usage:
          "Our baobab powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Baobab Powder",
        stripe_id: "price_1O51QkKUTnlP475OfYIDxxHV",
      },
    });

    await prisma.products.create({
      data: {
        name: "Chia Seeds",
        description:
          "Our chia seeds are made from the highest quality chia seeds that are dried and ground to create a fine powder. With a sweet and tangy flavour, our chia seeds is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/17_medium.webp",
        price: 13.99,
        usage:
          "Our chia seeds has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Chia Seeds",
        stripe_id: "price_1O51RxKUTnlP475OFtKotApK",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Chlorella & Spirulina Tablets",
        description:
          "Our chlorella and spirulina tablets are made from the highest quality chlorella and spirulina that are dried and ground to create a fine powder. With a sweet and tangy flavour, our chlorella and spirulina tablets is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/aportionofchlorellaandspirulinatablets.webp",
        price: 19.99,
        usage:
          "Our chlorella and spirulina tablets has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Chlorella and Spirulina",
        stripe_id: "price_1O51TEKUTnlP475OZTjjhatI",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Banana Powder",
        description:
          "Our banana powder is made from the highest quality bananas that are dried and ground to create a fine powder. With a sweet and tangy flavour, our banana powder is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/Bananapowderforaproteinshake.webp",
        price: 121.99,
        usage:
          "Our banana powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Banana Powder",
        stripe_id: "price_1O51UkKUTnlP475OUxtQGyN0",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Barley Grass Powder",
        description:
          "Our barley grass powder is made from the highest quality barley grass that are dried and ground to create a fine powder. With a sweet and tangy flavour, our barley grass powder is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/barleygrassserving.webp",
        price: 19.99,
        usage:
          "Our barley grass powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Barley Grass Powder",
        stripe_id: "price_1O51W6KUTnlP475ODqoK5juA",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Beetroot Powder",
        description:
          "Our beetroot powder is made from the highest quality beetroot that are dried and ground to create a fine powder. With a sweet and tangy flavour, our beetroot powder is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/beetrootpowderonsteak.webp",
        price: 19.99,
        usage:
          "Our beetroot powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Beetroot Powder",
        stripe_id: "price_1O51XYKUTnlP475OmKqvbUi1",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Blueberry Powder",
        description:
          "Our blueberry powder is made from the highest quality blueberries that are dried and ground to create a fine powder. With a sweet and tangy flavour, our blueberry powder is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/blueberrywaffles.webp",
        price: 12.49,
        usage:
          "Our blueberry powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Blueberry Powder",
        stripe_id: "price_1O51YgKUTnlP475OfC2Chmc4",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Cacao Beans",
        description:
          "Our cacao beans are made from the highest quality cacao beans that are dried and ground to create a fine powder. With a sweet and tangy flavour, our cacao beans is a versatile superfood that can be added to smoothies, desserts, and breakfast bowls.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/cacaobeanswithmortarandpestle.webp",
        price: 11.99,
        usage:
          "Our cacao beans has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Cacao Beans",
        stripe_id: "price_1O51ZpKUTnlP475O431xu0Tx",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Cacao Paste Wafers",
        description:
          "Containing only a small amount of naturally occurring sugars and no additives, preservatives or allergens our 100% vegan and organic Cacao paste wafers are a healthier alternative to regular processed chocolate buttons. With a luxurious dark chocolate flavour, our cacao paste wafers are made by pressing cacao nibs into a paste which is then melted and moulded into buttons. Because of this minimal processing, our cacao paste wafers retain the nutrients found within the cacao bean to create a nutritious and delicious snack. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/cacaopastewafers.webp",
        price: 12.19,
        usage:
          "With a deliciously rich dark chocolate flavour, melt our cacao paste wafers to create decadent organic desserts or hot chocolate!",
        ingredients: "100% Cacao Paste",
        stripe_id: "price_1O51bAKUTnlP475OzCTi8IYF",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Camu Camu Powder",
        description:
          "Traditionally used in native diets as a natural flavouring in sweets, Camu Camu berries grow wild along the flood plains of the Amazon Rainforest. Along with its fruity flavour and fragrance, our Camu Camu powder is brilliantly high in Vitamin C, which boosts immunity, enhances energy and boasts antioxidants that protect the skin from free radicals that accelerate ageing. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/camucamupowderonspoon.webp",
        price: 19.99,
        usage:
          "Our Camu Camu powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Camu Camu Powder",
        stripe_id: "price_1O51ciKUTnlP475ObeXxtp4A",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Chaga Powder",
        description:
          "Known as 'Black Gold', Chaga is a treasure trove of nutrients and has been traditionally used as herbal medicine. Our Chaga powder is made from carefully selected premium mushrooms that have a naturally sweet taste. We use only the mushroom's fruiting body as it is the most nutrient-rich part of the mushroom. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/Chagateaset.webp",
        price: 43.99,
        usage:
          "Our Chaga powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Chaga Powder",
        stripe_id: "price_1O51diKUTnlP475OGxfAwlzC",
      },
    });
    await prisma.products.create({
      data: {
        name: "Organic Cinnamon Powder",
        description:
          "Created from the finely milled bark of Sri Lanken laurel trees, our premium quality organic cinnamon powder is deliciously sweet and fragrantly aromatic. As well as its delicate flavour and many uses, our cinnamon powder is also high in fibre! ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/cinnamonpowderinaspoon.webp",
        price: 19.99,
        usage:
          "Our cinnamon powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Cinnamon Powder",
        stripe_id: "price_1O51elKUTnlP475OsIvDiT3Y",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Coconut Sugar",
        description:
          "Coconut Sugar is a natural sweetener made by evaporating the nectar harvested from the coconut palm flower. It is rich in flavour with a hint of caramel sweetness and resembles brown sugar. Our coconut sugar is impressively high in Calcium, which supports bone and tooth health, enhances energy, helps muscle function, and aids digestion. We source our coconut sugar from ethical, sustainable and organic small cooperative farmers in the third world. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/coconutsugarinbowl.webp?t=2023-11-01T12%3A10%3A54.681Z",
        price: 122.19,
        usage:
          "Our coconut sugar has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Coconut Sugar",
        stripe_id: "price_1O51gDKUTnlP475O7c8Vxu7k",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Coconut Water Powder",
        description:
          "Our organic coconut water powder is made from fresh coconut water, which is freeze-dried then milled into a fine powder. Our coconuts are sustainably grown and harvested in the Philippines, are rich in nutrients and have a refreshing taste. Our coconut water powder is high in Potassium which supports muscle health and maintains blood pressure and high in Magnesium which enhances energy and balances the nervous system. Our coconut water is also refreshingly high in antioxidants resulting in an all-natural, low in calories, low in sugar, all-natural organic hydration drink.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/coconutwaterpowderonaspoon.webp",
        price: 12.49,
        usage:
          "Our coconut water powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Coconut Water Powder",
        stripe_id: "price_1O51h6KUTnlP475OheDYKePf",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Incan Berries",
        description:
          "Also known as the 'Golden Berry' or 'Aztek Berry', these delightfully sweet and tart berries possess a naturally golden colour and a sweet yet tart flavour. Grown in the highlands of Peru, Incan berries are harvested and hand-selected for the finest quality, then cleaned in water and dried to preserve their nutritional content. Containing a high Fibre content, these berries make a delicious super snack. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/driedgoldenincanberriesinadish.webp",
        price: 12.49,
        usage:
          "Our Incan berries has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Incan Berries",
        stripe_id: "price_1O51iCKUTnlP475OuwWOY1dk",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Gelatinised Maca Powder",
        description:
          "Dubbed the “superfood of the Andes”, Maca has long been integrated into the nutrition of the indigenous population of the Peruvian Andes. Our maca is high in calcium which supports bone and tooth health. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/GelatinisedMacadrink.webp",
        price: 11.99,
        usage:
          "Our Maca powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Maca Powder",
        stripe_id: "price_1O51kGKUTnlP475O4KJC2zVb",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Goji Berries",
        description:
          "Grown in the alkaline-rich soil of the Chinese Goji Belt, our sweet goji berries are carefully selected for quality, size and flavour to provide the most premium berries. As well as their great taste, our Goji berries are also a source of Protein and are high in Fibre, making them a perfect vegan snack.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/gojiberriesinabulb.webp",
        price: 3.99,
        usage:
          "Our Goji berries has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Goji Berries",
        stripe_id: "price_1O51lvKUTnlP475O0m489mU2",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Guarana Powder",
        description:
          "Grown in the Amazon rainforest, the skin of Guarana fruit is red whilst the inside of the white meat is surrounded by black seeds giving the appearance of a human eye. These seeds contain large amounts of Guaranine, which is a natural alternative to caffeine. Our Guarana powder is made from the highest quality hand-selected guarana seeds, which are cleaned in natural water, dried, then ground into a powder. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/guaranapowderscooped.webp",
        price: 12.49,
        usage:
          "Our Guarana powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Guarana Powder",
        stripe_id: "price_1O51njKUTnlP475OK3wrR98h",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Lucuma Powder",
        description:
          "Grown in the Peruvian Highlands, lucuma is a nutrient-dense superfruit that has been nicknamed 'Gold of The Incas'. Celebrated for its aromatic fragrance and exotic flavour, our lucuma powder is made from the highest quality selected lucuma fruits which are ground into a natural additive-free powder. Lucuma powder is popularly used as a naturally sweet ice cream flavouring in the Andes.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/lucumapowderonaspoon.jpg",
        price: 12.29,
        usage:
          "Our Lucuma powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Lucuma Powder",
        stripe_id: "price_1O51ozKUTnlP475OvzojwBA6",
      },
    });
    await prisma.products.create({
      data: {
        name: "Organic Maca Root Capsules",
        description:
          "Dubbed the “superfood of the Andes”, Maca has long been integrated into the nutrition of the indigenous population of the Peruvian Andes. Our maca is high in calcium which supports bone and tooth health. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/macarootcapsulesincutebowl.webp",
        price: 12.49,
        usage:
          "Our Maca powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Maca Powder",
        stripe_id: "price_1O51qFKUTnlP475O5ZSJKSoA",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Acai Berry Powder ",
        description:
          "Grown in the flood lands and swampy areas of the Brazilian Amazon Rainforest, Acai berries are a treasure of nutrients. Acai is naturally rich in antioxidants which contribute to the maintenance of normal skin and neutralize the damaging effects of free radicals throughout the body. Our Acai Berry powder is impressively nutrient-dense with approximately 20kg of fruit compressed to create 1kg of Rainforest Foods Acai powder. ",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/RainforestFoodsShopifyImages.webp",
        price: 12.49,
        usage:
          "Our Acai Berry powder has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Acai Berry Powder",
        stripe_id: "price_1O51rRKUTnlP475OHie3v9i7",
      },
    });
    await prisma.products.create({
      data: {
        name: "Organic Coconut Flour",
        description:
          "White flour can lead to negative health conditions like fatty liver, raised bad cholesterol and weight gain. Our coconut flour is a Gluten-Free alternative that has a finely milled consistency which makes it easy to use. Our coconut flour is unrefined which means that it retains all its nutrients. It is high in iron which supports immunity and enhances energy, high in protein which helps muscle growth and is high in fibre.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/rfcoconutflourgrinder.webp?t=2023-11-01T12%3A15%3A07.458Z",
        price: 12.49,
        usage:
          "Our Coconut Flour has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Coconut Flour",
        stripe_id: "price_1O51saKUTnlP475Oo04N3wwi",
      },
    });

    await prisma.products.create({
      data: {
        name: "Organic Chia Seeds",
        description:
          "Containing nearly 5 times more calcium than milk, and 3 times more iron than spinach, Chia Seeds are an ancient natural food and originating from South America. Enriched with a plethora of useful proteins and vitamins, Chia Seeds also contain large quantities of omega 3 fatty acids.",
        image:
          "https://qywftlydzqvuwwhibviy.supabase.co/storage/v1/object/public/stock/scoopchiaseedsinajar.webp?t=2023-11-01T12%3A15%3A27.713.Z",
        price: 12.49,
        usage:
          "Our Chia Seeds has a sweet and tangy flavour and can be added to smoothies, desserts, and breakfast bowls.",
        ingredients: "100% Chia Seeds",
        stripe_id: "price_1O51uIKUTnlP475OCHYye3C5",
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
