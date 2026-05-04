//Side Banners
window.onload = function () {

// Loading Images
    const leftImages = [
        "barcabanner1.jpg",
        "barcabanner2.jpg",
        "barcabanner3.jpg",
        "barcabanner4.jpg"
    ];

    const rightImages = [
        "barcabanner1.jpg",
        "barcabanner2.jpg",
        "barcabanner3.jpg",
        "barcabanner4.jpg"
    ];
    let leftIndex = 0;
    let rightIndex = 0;
    const leftBanner = document.getElementById("leftbannerImage");
    const rightBanner = document.getElementById("rightbannerImage");

// Presenting Images
    leftBanner.src = leftImages[leftIndex];
    rightBanner.src = rightImages[rightIndex];

    function rotateLeft() {
        leftIndex = (leftIndex + 1) % leftImages.length;
        leftBanner.style.opacity = 0;
        setTimeout(() => {
            leftBanner.src = leftImages[leftIndex];
            leftBanner.style.opacity = 1;
        }, 500);
    }

    function rotateRight() {
        rightIndex = (rightIndex + 1) % rightImages.length;
        rightBanner.style.opacity = 0;
        setTimeout(() => {
            rightBanner.src = rightImages[rightIndex];
            rightBanner.style.opacity = 1;
        }, 500);
    }

// Rotating every 5 seconds
    setInterval(rotateLeft, 5000);
    setInterval(rotateRight, 5000);
};

// Quiz Script
function gradingQuiz() {
    let Score = 0;   // score before converting to %
    let maxscore = 4 + 2;  
    // 4 questions each with one correct answer  + 2 correct checkboxes in Question 5

    let output = "";

    // Correct Answers:
    const correctSeason = "25/26";
    const correctTeam = "Women";
    const correctLeague = "LaLiga";
    const correctCopa = "2025";
    const correctTopics = ["acl", "menstruation"];

    //Grading for Question 1
    let season = document.querySelector("input[name='season']").value;

    let message1 = "";
    if (season === correctSeason) {
        Score++
    message1 = "<span style='color:green;'>Correct!</span>";
    } else {
    message1 = "<span style='color:red;'>Incorrect!</span>";
    }
    output += "<p><strong>1] Season:</strong> " 
        + message1 
        + " (Correct Answer: 25/26)<br></p>";

     //Grading for Question 2
    let team = document.querySelector("input[name='team']:checked");
    team = team ? team.value : "";

    let message2 = "";
    if (team === correctTeam) {
        Score++;
    message2 = "<span style='color:green;'>Correct!</span>";
    } else {
    message2 = "<span style='color:red;'>Incorrect!</span>";
    }
    output += "<p><strong>2] Team:</strong> " 
        + message2 
        + " (Correct Answer: Women)<br></p>";

    //Grading for Question 3
    let league = document.querySelector("input[name='league']:checked");
    league = league ? league.value : "";

    let message3 = "";
    if (league === correctLeague) {
    Score++;
    message3 = "<span style='color:green;'>Correct!</span>";
    } else {
    message3 = "<span style='color:red;'>Incorrect!</span>";
    }
    output += "<p><strong>3] League:</strong> " 
        + message3 
        + " (Correct Answer: LaLiga)<br></p>";

     //Grading for Question 4
    let copa = document.querySelector("input[name='copa']:checked");
    copa = copa ? copa.value : "";

    let message4 = "";
    if (copa === correctCopa) {
    Score++;
    message4 = "<span style='color:green;'>Correct!</span>";
    } else {
    message4 = "<span style='color:red;'>Incorrect!</span>";
    }
    output += "<p><strong>4] Copa de la Reina:</strong> " 
        + message4 
        + " (Correct Answer: 2025)<br></p>";
    

    //Grading for Question 5
    let Question5Score = 0;

    if (document.getElementById("topicACL").checked) Question5Score++;
    if (document.getElementById("topicMenst").checked) Question5Score++;

    // Counting how many boxes were selected
    let selectedBox = 0;
    if (document.getElementById("topicACL").checked) selectedBox++;
    if (document.getElementById("topicMenst").checked) selectedBox++;
    if (document.getElementById("topicEat").checked) selectedBox++;
    if (document.getElementById("topicSleep").checked) selectedBox++;

    if (Question5Score === 2 && selectedBox === 2) {
        Score += 2;
        message5 = "<span style='color:green;'>Correct!</span>";
    }   
        else {
            message5 = "<span style='color:red;'>Incorrect!</span>";
    }

    output += "<p><strong>5] Innovation Topics:</strong> " 
        + message5
        + " (Correct Answers: Recovery of ACL Injuries in Women's Soccer, Menstruation and Injury Correlation in Female Footballers )</p>";

    //Convert Score to Percentage
    let percent = Math.round((Score / maxscore) * 100);
    let pass;
    let color;
        if (percent >= 70) {
            pass = "PASS!";
            color = "green";
        } else {
            pass = "FAIL!";
            color = "red";
        } 

    output += `<h2 style="color:${color};">Result: ${pass}</h2>`;
    output += `<h3>Score: ${percent}%</h3>`;
    output += "</div>";

    document.getElementById("results").innerHTML = output;

    // Display reset button after results
    document.getElementById("resetbutton").style.display = "inline-block";
    
}

function resetQuiz() {
    document.getElementById("quiz").reset();
    document.getElementById("results").innerHTML = "";
    document.getElementById("resetbutton").style.display = "none";
}



