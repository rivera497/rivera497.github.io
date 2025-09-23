$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


  // TODO 2 - Create Platforms
  createPlatform(400, 700, 200, 10, "brown");
  createPlatform(500, 600, 100, 10, "brown");
  createPlatform(630, 500, 100, 210, "grey");
  createPlatform(700, 10, 1000, 210, "grey");
  createPlatform(1121, 700, 70, 40, "blue");
  createPlatform(1221, 600, 70, 40, "blue");
  createPlatform(1370, 400, 100, 10, "red");
  createPlatform(1340, 500, 100, 10, "yellow");
  createPlatform(1300, 600, 100, 10, "lime");


  // TODO 3 - Create Collectables
  createCollectable("steve", 700, 430);
  createCollectable("kennedi", 200, 170, 0.5, 0.7);
  createCollectable("database", 1173, 600);
  createCollectable("diamond", 1200, 320, 0, 0.7, 1000, 1200, 3);
  createCollectable("max", 1356, 430, 0.5, 0.7);


  // TODO 4 - Create Cannons
  createCannon("left", 400, 600);
  createCannon("top", 400, 500);
  createCannon("right", 300, 500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});