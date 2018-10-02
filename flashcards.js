//global variables
		var currentWord = new Array();
		var testList = new Array();
		var correctList = new Array();

		var debugflag=false;

		function startup()
		{
		  // We start with OptionsDiv visible and WorkDiv hidden
		  document.getElementById('WorkDiv').style.visibility = 'visible';

			// Set visibility of debug div
			if (debugflag) {
				document.getElementById('DebugDiv').style.visibility = 'visible';
			} else {
				document.getElementById('DebugDiv').style.visibility = 'hidden';
			}

		  // fill the testList and randomize it
		  testList = ["1 x 1", "1 x 2", "1 x 3", "1 x 4", "1 x 5", "1 x 6", "1 x 7", "1 x 8", "1 x 9", "1 x 10", "1 x 11", "2 x 1", "2 x 2", "2 x 3", "8 x 5", "2 x 4", "2 x 5", "2 x 6", "2 x 7", "2 x 8", "2 x 9", "2 x 10", "2 x 11", "3 x 1", "3 x 2", "3 x 3", "3 x 4", "3 x 5", "3 x 6", "3 x 7", "3 x 8", "3 x 9", "3 x 10", "3 x 11", "4 x 1", "4 x 2", "4 x 3", "4 x 4", "4 x 5", "4 x 6", "4 x 7", "4 x 8", "4 x 9", "4 x 10", "4 x 11", "5 x 1", "5 x 2", "5 x 3", "5 x 4", "5 x 5", "5 x 6", "5 x 7", "5 x 8", "5 x 9", "5 x 10", "5 x 11", "6 x 1", "6 x 2", "6 x 3", "6 x 4", "6 x 5", "6 x 6", "6 x 7", "6 x 8", "6 x 9", "6 x 10", "6 x 11", "7 x 1", "7 x 2", "7 x 3", "7 x 4", "7 x 5", "7 x 6", "7 x 7", "7 x 8", "7 x 9", "7 x 10", "7 x 11", "8 x 1", "8 x 2", "8 x 3", "8 x 4", "8 x 5", "8 x 6", "8 x 7", "8 x 8", "8 x 9", "8 x 10", "8 x 11", "9 x 1", "9 x 2", "9 x 3", "9 x 4", "9 x 5", "9 x 6", "9 x 7", "9 x 8", "9 x 9", "9 x 10", "9 x 11", "10 x 1", "10 x 2", "10 x 3", "10 x 4", "10 x 5", "10 x 6", "10 x 7", "10 x 8", "10 x 9", "10 x 10", "10 x 11", "11 x 1", "11 x 2", "11 x 3", "11 x 4", "11 x 5", "11 x 6", "11 x 7", "11 x 8", "11 x 9", "11 x 10", "11 x 11"]

		  testList.sort(function() {return 0.5 - Math.random()});

		  // set the initial word
		  newWord();

		  // set the intial stats
		  updateStats()
		}

		function newWord()
		{
			// Get the next word, and fill the screen
			currentWord = testList.shift();
			document.getElementById("word").innerHTML=currentWord;

			// When debugging, set the debug values
			if (debugflag) {
				document.getElementById("debug_currentWord").innerHTML="currentWord: " + currentWord;
				document.getElementById("debug_testList").innerHTML="testList: " + testList;
				document.getElementById("debug_correctList").innerHTML="correctList: " + correctList;
			}
		}

		function correct()
		{
			// add correct answer to correcList, get a new word
			correctList.push(currentWord);

			if (testList.length) {
				newWord();
			} else {
				// Let the user know they are done
				document.getElementById("word").innerHTML="Yeah, You did it!";
				document.getElementById("Buttons").style.visibility="hidden";
			}
			//Let the user know how they are doing.
			updateStats()
		}

		function incorrect()
		{
			// add the incorrect word onto the end of the list
			testList.push(currentWord);

			// Get a new word and
			newWord();

			//Let the user know how they are doing.
			updateStats()
		}

		function updateStats()
		{
			//
			var messageString = "Left: " + testList.length + "  Correct: " + correctList.length;
			document.getElementById("mystats").innerHTML=messageString;
		}