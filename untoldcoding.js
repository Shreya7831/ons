var i = 0;
var txt1 =
  "Hi Handsome and pure soul ...  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me and I felt so connected < And that happened two years ago <<      Yup Distance can play it's silent role, But love and a flame have always warm the soul <<             And just as you came into my life  < that was purely magical < I am still living that magical moments with you ....! <<                          < I don't know the reason why your thoughts always resonates inside my mind, With you it felt very safe < My soul felt heard and understood  < Understanding not with words but with energies and that strengthen the comfort between both of our hearts ...!                                                   > When I met you, I dive into your eyes An there I found my paradise..!                     << When the thought of you comes in my mind, my hearts races and calms with you only << you are the reason I believe in magic and in power of destiny.<< The city of destiny really worked ...!                                                     > I may not be perfect with my words that you already knows but my love for you is more than ever any words could convey ....!                 << I want to continue this fairytale with you till infinity and beyond ....!              << Would you be mine ? ";
var speed = 100;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
