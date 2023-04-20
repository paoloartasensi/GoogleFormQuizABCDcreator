////////////////////////////////
// Author: Artasensi Paolo
// Year: 2023
// Name: Google Form ® Quiz A+BCD creator
// Version: 1.0
// Use: SPDX: LGPL-3.0-or-later
/////////////////////////////////

// Create a spreadsheet first, rename sheet "questions" and fill
// column with:
// A) the quesion, B) the "correct answer", C) the third with "Incorrect1", D) and the fouth with "Incorrect2"

function main() {

      var spreadsheetId = "WRITE_HERE_ID_SPREADSHEET"; // replace with the ID of your spreadsheet
      var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName("questions"); // replace "Sheet1" 
      var data = sheet.getRange(1, 1, sheet.getLastRow(), 4).getValues(); // assuming 4 columns, change if necessary
      var dict = {};
      for (var i = 0; i < data.length; i++) {
        var key = data[i][0];
        var valueList = [data[i][1], data[i][2], data[i][3]];
        dict[key] = valueList;
        }

// SELECT GOOGLE FORM
      var form = FormApp.getActiveForm();
          // Create and go to page 2
          form.addPageBreakItem();

    // Shuffle answers list function
    function shuffleArray(array) {
      array.sort(function() {
        return Math.random() - 0.5;
      });
    }
function addMultipleChoiceQuestions(){
            question = form.addMultipleChoiceItem();
            question.setTitle(quest);
            question.setChoices(choises_list)
         }

    for (var key in dict) {
      // Add MultipleChoise -- Firts is the correct one
      var quest = form.addMultipleChoiceItem();
      quest.setTitle(key)
      var choices = [quest.createChoice(dict[key][0],true),
                     quest.createChoice(dict[key][1]),
                     quest.createChoice(dict[key][2])];
      shuffleArray(choices);
      quest.setChoices(choices)
      .setPoints(1)
      //setRequired(True) --> if you prefeer
      ; 
       }

}
