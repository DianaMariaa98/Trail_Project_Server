const Mountain = require("../models/Mountain.model");


const mountains = [
    {mountain_name: "Everest", 
    image: "../images/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
    description: "Mount Everest is a peak in the Himalaya mountain range. It is located between Nepal and Tibet, an autonomous region of China. At 8,849 meters (29,032 feet), it is considered the tallest point on Earth. In the nineteenth century, the mountain was named after George Everest, a former Surveyor General of India.",
    distance: "37.3 miles (60 km)",
    average_time: "3 days",
    start_point: "Tingri",
    end_point: "Everest Base Camp",
    season: "April - October",
    difficulty: "Challenging to extremly difficult",
    maps: "The best plan for all the multi-days in Tibet, it is highly recommanded to use trekking notes and maps contained in the following two books:<a href='https://www.amazon.com/dp/0898866626' Gary McCue's Trekking in Tibet (1999) </a> & the <a href='https://www.amazon.com/Tibet-Lonely-Planet-Country-Guide/dp/174104569X' Tibet </a> Lonely Planet guide.",
    maps_second_li:"All supplies can be purchased in Tingri.",
    conditions: "<li>Beginning from the town of Tingri (4310m), make sure you are properly acclimatised before starting this trek. The highest point on the route is Nam-la (5250m).</li> <li>Much of the route follows little-used dirt roads, and winds its way through easy to navigate broad valleys.</li> <li>Water can be found at regular intervals along the route. All water should be treated.</li>",
    accomodation: "<li>Take a tent.</li> <li>It is possible to stay at Rongphu monastery (4920m), reputedly the world's highest and very popular with tourists who have driven up to Base Camp. Guest House accommodation and camping spaces available beside the monastery.</li> <li>There are also a lot of accommodation options at Base Camp, though one of the best is Hotel California. </li>",
    overview: "If you are well conditioned, acclimatised and possess an ample level of experience at high altitude, it is possible to continue past Base Camp all the way up to Camp 3 (6250m). See McCue's Trekking in Tibet for details of this spectacular 4-6 day route. You can continue up to Camp 2, but it is necessarily to check the weather before.",

},

{mountain_name: "Annapurna Sanctuary", 
image: "../images/anna_purna.jpg",
description: "The Annapurna Sanctuary is a high glacial basin lying 40 km directly north of Pokhara. This oval-shaped plateau sits at an altitude of over 4000 metres, and is surrounded by a ring of mountains, the Annapurna range, most of which are over 7000 metres.",
distance: "115 km (71.5 mi)",
average_time: "7 to 9 days",
start_point: "Phedi",
end_point: "Naya Pul",
season: "<li> October - May </li> <li> October/November - March/April are best weather-wise. Go for the latter if you want to avoid the big crowds.</li> <li> December to February can be brutally cold, and the trail above Doban will often be closed due to heavy snow.</li>",
difficulty: "Moderate to challenging",
maps: "<li> It is highly recommanded to take trekking notes from Lonely Planet's <a href='https://www.amazon.com/Trekking-Himalaya-Walking-Bradley-Mayhew/dp/1741041880/ref=pd_sim_b_1' Trekking in the Nepal Himalaya </a> </li> <li>In addition, you can use Nepa Maps 1:150,000 Around Annapurna Pocket map. An excellent map, containing all the detail you will need for both the Circuit and the Sanctuary treks. It is widely available in Kathmandu, and at around US$3 represents very good value. </li> <li>If for planning purposes you would like to purchase a map online before arriving in Nepal, try the <a href='https://www.amazon.com/National-Geographic-Annapurna-Illustrated-Adventure/dp/1566951259'National Geographic Annapurna Map</a>.</li> <li>All meals and supplies can be bought along the way. Accommodation can be found at the often atmospheric and always affordable teahouses. In other words, there is absolutely no reason why you should be carrying a heavy pack on this walk.</li>",
conditions: "<li> A wonderfully diverse trek, the trail up to the Annapurna Sanctuary winds its way through Gurung villages, bamboo and Rhododendron forests, rice terraces, and glacial moraine.</li> <li>The trail is well marked and easy to follow.</li> <li>The highlight of the trek is the Annapurna Sanctuary itself. Situated below the south face of Annapurna, the Sanctuary is a mountain-ringed amphitheatre which in clear weather provides some of the most spectacular high altitude scenery imaginable. Don't miss the sunrise.</li> <li>Hikers with knee problems should note that there are a lot of stone steps on this trek. Keeping your pack weight to a minimum will definitely help reduce stress on your joints. The hot springs at Jhinu Danda offer some welcome relief.</li>",
accomodation: "<li> Leave the tent at home, and enjoy the hospitality, good food, and occasional hot shower on offer at the Tea Houses.</li> <li> Some of the top rated places to stay are the upper part of Chomrong (great views and nice food) and the Annapurna base camp. Note that views at the base camp are generally best early morning.</li>",
overview: "<li> It's recommanded linking the Annapurna Sanctuary together with the Annapurna Circuit for a fantastic 17/18 day (average time for fit walker carrying a small pack) trek.</li> <li> If you are short on time and have to choose between the two, try the Sanctuary Trek, due to fewer crowds (particularly in April/May) and no dirt roads.</li>",

}


]

async function seeds () {
    try {

    let createdMountain = await Mountain.create(mountains);

    } catch (error) {
        console.log(error);
    }
}

seeds();