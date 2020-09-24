// Write a for loop that logs every even number starting from 1000 down to 0 (you can do this a couple ways, either updating the i a certain way or by checking if the number is even inside the for loop)

for (let i = 1000; i > 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Write a for loop that starts at 0 and goes to 10000, don't log any numbers but when the for loop is 1/4 of the way done through the loops (2500), your code should alert a message that says "A quarter of the way there!" then when your loop is halfway there (5000), your code should alert a message that says "Halfway there!" Finally when it reaches the last number (10000, make sure your condition is inclusive of 10000) it should alert "The loop is done!"

for (let y = 0, y <= 10001; y++) {
  if (y = 2500) {
    alert("A quarter of the way there!");
  }
  else if (y = 5000) {
    alert("Halfway there!");
  }
  else (y = 10000) {
    alert("The loop is done!");
  }
}

//Finally write an array of your top 5 favorite tv shows (make them up if you don't have any) Loop through the array of your top 5 favorite tv shows and log to the console the following message each loop:"My # favorite tv show is "

================================== Countdown and Array of Favorite TV Shows

//Write a for loop that logs every even number starting from 1000 down to 0

for(var i= 1000; i>=0; i-=2)
   console.log(i)


//Write an array of your top 5 favorite tv shows

var shows = ["My #1 favorite tv show is The Office", "My #2 favorite tv show is 90s Charmed","My #3 favorite tv show is The Wayans Bros","My #4 favorite tv show is Living Single","My #5 favorite tv show is New Girl"];
for (var i=0; i<6; i++){
  console.log(shows[i]);
}

