export const fetchHomeData=()=>{
    return fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=AIzaSyBEg17Y6F3Wg0c_LbXLoiffyTz6N2rugAE');
}

export const fetchSearchData=(data)=>{
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&safeSearch=strict&maxResults=15&type=video&key=AIzaSyBEg17Y6F3Wg0c_LbXLoiffyTz6N2rugAE`);
}