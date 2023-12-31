function preload() {
    cenario = loadImage("ice02.jpg");
    bloco = loadImage("bad-ice-cream.jpg");

    pd = loadAnimation("pd1.png", "pd2.png", "pd3.png", "pd4.png");
    pl = loadAnimation("pl1.png", "pl2.png", "pl3.png", "pl4.png");
    pr = loadAnimation("pr1.png", "pr2.png", "pr3.png", "pr4.png");
    pu = loadAnimation("pu1.png", "pu2.png", "pu3.png", "pu4.png");

    rosad = loadAnimation("if1.png", "if2.png", "if3.png", "if4.png");
    rosar = loadAnimation("ig1.png", "ig2.png", "ig3.png", "ig4.png");
    rosae = loadAnimation("ih1.png", "ih2.png", "ih3.png", "ih4.png");
    rosau = loadAnimation("ij1.png", "ij2.png", "ij3.png", "ij4.png");

    verded = loadAnimation("ia1.png", "ia2.png", "ia3.png", "a4.png");
    verder = loadAnimation("ib1.png", "ib2.png", "ib3.png", "ib4.png");
    verdee = loadAnimation("ic1.png", "ic2.png", "ic3.png", "ic4.png");

    blocos = loadImage("baseblocos1.png");
    obstaculoImg = loadImage("baseblocos5.png");
}

function setup() {
    createCanvas(600, 600);
    bloco1 = createSprite(300, 300);
    bloco1.addImage(bloco);

    // personagem principal
    ice = createSprite(100, 100);
    ice.addAnimation("descendo", pd);
    ice.addAnimation("esquerda", pl);
    ice.addAnimation("direita", pr);
    ice.addAnimation("subindo", pu);
    ice.scale = 0.9;

    //inimigo rosa
    rosa = createSprite(400, 300);
    rosa.addAnimation("rosad", rosad);
    rosa.velocityX = 3;
    // inimigo verde
    verde = createSprite(200, 300);
    verde.addAnimation("verded", verded);
    verde.velocityY = 3;
    // bordas
    parede1 = createSprite(300, 22, 600, 20);
    parede1.addImage(blocos);
    parede1.scale = 0.95;

    parede2 = createSprite(580, 343, 20, 600);
    parede2.addImage(blocos);
    parede2.scale = 0.95;
    parede2.rotation = 90;

    parede3 = createSprite(20, 343, 20, 600);
    parede3.addImage(blocos);
    parede3.scale = 0.95;
    parede3.rotation = 90;

    parede4 = createSprite(300, 580, 600, 20);
    parede4.addImage(blocos);
    parede4.scale = 0.95;

    // obstaculos horizontais
    obstaculo1 = createSprite(150, 150);
    obstaculo1.addImage(obstaculoImg);

    obstaculo2 = createSprite(300, 150);
    obstaculo2.addImage(obstaculoImg);

    obstaculo3 = createSprite(450, 150);
    obstaculo3.addImage(obstaculoImg);

    obstaculo4 = createSprite(150, 450);
    obstaculo4.addImage(obstaculoImg);

    obstaculo5 = createSprite(300, 450);
    obstaculo5.addImage(obstaculoImg);

    obstaculo6 = createSprite(450, 450);
    obstaculo6.addImage(obstaculoImg);

    // obstaculos verticais

    obstaculo7 = createSprite(150, 300);
    obstaculo7.addImage(obstaculoImg);
    obstaculo7.rotation = -90;

    obstaculo8 = createSprite(450, 300);
    obstaculo8.addImage(obstaculoImg);
    obstaculo8.rotation = 90;
}

function draw() {
    background("gray");
    image(cenario, 0, 0, 600, 600);
    drawSprites();

    if (keyDown("RIGHT_ARROW")) {
        ice.position.x = ice.position.x + 4;
        ice.changeAnimation("direita", pr);
    }
    if (keyDown("LEFT_ARROW")) {
        ice.position.x = ice.position.x - 4;
        ice.changeAnimation("esquerda", pl);
    }
    if (keyDown("UP_ARROW")) {
        ice.position.y = ice.position.y - 4;
        ice.changeAnimation("subindo", pu);
    }
    if (keyDown("DOWN_ARROW")) {
        ice.position.y = ice.position.y + 4;
        ice.changeAnimation("descendo", pd);
    }

    ice.collide(parede1);
    ice.collide(parede2);
    ice.collide(parede3);
    ice.collide(parede4);
    ice.collide(obstaculo1);
    ice.collide(obstaculo2);
    ice.collide(obstaculo3);
    ice.collide(obstaculo4);
    ice.collide(obstaculo5);
    ice.collide(obstaculo6);
    ice.collide(obstaculo7);
    ice.collide(obstaculo8);
    rosa.bounceOff(parede1);
    rosa.bounceOff(parede2);
    rosa.bounceOff(parede3);
    rosa.bounceOff(parede4);
    verde.bounceOff(parede1);
    verde.bounceOff(parede2);
    verde.bounceOff(parede3);
    verde.bounceOff(parede4);
}
