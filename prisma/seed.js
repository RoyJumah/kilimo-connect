const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function seedFarms() {
  try {
    await prisma.farms.create({
      data: {
        name: "Queen Creek Olive Mill",
        location: "W Combs Rd & Ritten Rd",
        description:
          "Tour, Shop, Eat, Repeat at Queen Creek Olive Mill - Arizona's only working olive farm and mill. Family owned and operated, our 100-acre farm with over 7000 olive trees is a true blossom to bottle experience. Visitors are able to learn first-hand how olives are pressed into fresh extra virgin olive oil on our educational Olive Oil 101 tour conducted daily. Guests can taste their way through our gourmet marketplace and shop for locally made extra virgin olive oils, Balsamic vinegars, olives and other local treasures. Our Italian inspired Eatery features old-world family recipes. We use local and garden-sourced ingredients to create our healthy and delicious cuisine and showcase how extra virgin olive oil can be used best in your kitchen. Our in-house roastery, Superstition Coffee, will ensure that you'll get the freshest cup of coffee you've ever had. With plenty to taste, discover and enjoy, Queen Creek Olive Mill is a true agritourism experience!",
        duration: "2-3 hours",
        gallery: [
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(1).jpg",

          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(11).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(12).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(13).jpg?t=2023-11-15T05%3A38%3A51.312Z",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(14).jpg",
        ],
        restaurants_nearby: [
          "Queen Creek Olive Mill",
          "San Tan Flat",
          "Barnone",
        ],
      },
    });
    await prisma.farms.create({
      data: {
        name: "Caywood Farms",
        description:
          "We offer farm tours relating to local agriculture including cotton and alfalfa. Learn how cotton is grown from seed to bale. This 2 1/2 to 3 hour tour includes an indoor presentation followed by a hayride out to the field. Cotton is planted in the spring and picked in the fall. We have cotton in the field until mid-February. You will see a cotton picker, cotton module builder and a cotton rood which picks up ground cotton. If cotton is not in the ground, we still offer tours. Please call for information on dates, times and reservations. Reservations are required.",
        location: "N Sunshine Blvd & I-287",
        duration: "2-3 hours",
        gallery: [
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(15).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(2).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(3).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(4).jpg",
        ],

        restaurants_nearby: [],
      },
    });
    await prisma.farms.create({
      data: {
        name: "Martha's Gardens Medjool Date Farm",
        location: "County 10th St & Araby Blaisdell Rd",
        description:
          "Martha's Gardens Medjool Date Farm is a certified organic date farm located in Yuma, Arizona. We offer tours October through March. Our tours are 1 1/2 hours long and include a wagon ride through the date palms, a talk about the history of the farm, a talk about the history of the Medjool date, a talk about the growing cycle of the Medjool date, a talk about the harvesting of the Medjool date, a talk about the packing of the Medjool date, a talk about the nutritional value of the Medjool date, a talk about the many uses of the Medjool date, a talk about the many varieties of dates, a talk about the many products made from the Medjool date, a talk about the many health benefits of the Medjool date, a talk about the many recipes using the Medjool date, a talk about the many gift packages available, a talk about the many gift items available, a talk about the many gift baskets available, a talk about the many gift tins available, and a talk about the many gift boxes available. We also have a gift shop and a snack bar. We are open Monday through Saturday from 9:00 a.m. to 4:00 p.m. and Sunday from 10:00 a.m. to 4:00 p.m. We are closed on Thanksgiving Day, Christmas Day, and New Year's Day. We are open on all other holidays. We are open all year round. We are handicap accessible. We have a handicap accessible restroom. We have a picnic area. We have a parking lot. We have a bus parking lot. We have a bus turnaround. We have a",
        duration: "1-2 hours",
        gallery: [
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(5).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(6).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(7).jpg",
        ],
        restaurants_nearby: [
          " Da Boyz Pizza & Pasta",
          "Pizza Hut",
          "American Veteran  of Yuma",
        ],
      },
    });

    await prisma.farms.create({
      data: {
        name: "Shamrock Farms",
        location: "W Encanto Blvd & N Black Cyn Hwy",
        description:
          "Shamrock Farms is one of the largest family-owned-and-operated dairies in the country. Located in Stanfield, Arizona, we are uniquely positioned between Phoenix and Tucson, Arizona, and just 30 minutes away from the Phoenix airport. We offer tours of our farm and dairy processing facility, which includes our state-of-the-art milking barn, composting facility, and cow maternity ward. Our tours are educational, interactive, and fun for all ages. We also offer a variety of meeting spaces for corporate events, team building, and private parties. Our meeting spaces include a 5,000-square-foot event center, a 1,000-square-foot boardroom, and a 1,000-square-foot classroom. We also offer a variety of catering options, including our signature ice cream sundaes. We are open Monday through Friday from 9:00 a.m. to 3:00 p.m. and Saturday from 9:00 a.m. to 2:00 p.m. We are closed on Sunday. We are open all year round. We are handicap accessible. We have a handicap accessible restroom. We have a picnic area. We have a parking lot. We have a bus parking lot. We have a bus turnaround. We have a gift shop. We have a snack bar. We have a petting zoo. We have a playground. We have a bounce house. We have a hayride. We have a corn maze. We have a haunted house. We have a haunted corn maze. We have a haunted hayride. We have a haunted barn. We have a haunted trail. We have a haunted forest. We have a haunted graveyard.",
        duration: "1-2 hours",
        gallery: [
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(8).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500%20(9).jpg",
          "https://aigdooxkrussptkeikqq.supabase.co/storage/v1/object/public/farms/image-1000x500.jpg",
        ],
        restaurants_nearby: ["Legend at The Francisco Grande "],
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedFarms();
