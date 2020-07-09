// jshint esversion:6

const express = require("express");
const parseJson = require('parse-json');
var keyword_extractor = require("keyword-extractor");
const app = express();

const json = '{"name": "Sandeep","rollno": "1729010140","section": "3cs-c"}';
var sentence = "President Obama woke up Monday facing a Congressional defeat that many in both parties believed could hobble his presidency."
var extraction_result = keyword_extractor.extract(sentence,{
                                                                language:"english",
                                                                remove_digits: true,
                                                                return_changed_case:true,
                                                                remove_duplicates: false

                                                           });


var d = JSON.parse(json);
console.log("Your RollNo:"+d.rollno);
console.log(extraction_result);


// This shows that server is running
app.listen(3000, function(req, res) {
  console.log("Server is running on port 3000");
});
