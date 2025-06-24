
let getHomePage= (req , res) =>{
    return res.render('homepage.ejs');
}

// object:{
//     ket: ""
//     Value: ""
// }
module.exports = {
    getHomePage: getHomePage,
}