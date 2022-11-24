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
    maps: "<li> The best plan for all the multi-days in Tibet, it is highly recommanded to use trekking notes and maps contained in the following two books:<a href='https://www.amazon.com/dp/0898866626' Gary McCue's Trekking in Tibet (1999) </a> & the <a href='https://www.amazon.com/Tibet-Lonely-Planet-Country-Guide/dp/174104569X' Tibet </a> Lonely Planet guide.</li> <li>All supplies can be purchased in Tingri.</li>",
    conditions: "<li>Beginning from the town of Tingri (4310m), make sure you are properly acclimatised before starting this trek. The highest point on the route is Nam-la (5250m).</li> <li>Much of the route follows little-used dirt roads, and winds its way through easy to navigate broad valleys.</li> <li>Water can be found at regular intervals along the route. All water should be treated.</li>",
    accomodation: "<li>Take a tent.</li> <li>It is possible to stay at Rongphu monastery (4920m), reputedly the world's highest and very popular with tourists who have driven up to Base Camp. Guest House accommodation and camping spaces available beside the monastery.</li> <li>There are also a lot of accommodation options at Base Camp, though one of the best is Hotel California. </li>",
    overview: "If you are well conditioned, acclimatised and possess an ample level of experience at high altitude, it is possible to continue past Base Camp all the way up to Camp 3 (6250m). See McCue's Trekking in Tibet for details of this spectacular 4-6 day route. You can continue up to Camp 2, but it is necessarily to check the weather before.",

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