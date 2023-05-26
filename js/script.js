var ScoreInDocument = document.querySelector(".score__number");
var Score = 0;
var ChoosedCat = "не выбран";
ScoreInDocument.textContent = Score;
var CatSurpriseBoxAvailable = false;
var CatMermaidAvailable = false;
var CatUnicornAvailable = false;
var MenuButton1 = document.querySelector(".menu__cat-image--1")
var MenuButton2 = document.querySelector(".menu__cat-image--2")
var MenuButton3 = document.querySelector(".menu__cat-image--3")
var MenuCost1 = document.querySelector(".menu__cat-cost--1")
var MenuCost2 = document.querySelector(".menu__cat-cost--2")
var MenuCost3 = document.querySelector(".menu__cat-cost--3")
MenuButton1.addEventListener('click',PurrchaseCatSurpriseBox);
MenuButton2.addEventListener('click',PurrchaseCatMermaid);
MenuButton3.addEventListener('click',PurrchaseCatUnicorn);
var MainButton = document.querySelector(".cat__click-button");
MainButton.addEventListener('click',AddScore);
var MainImage = document.querySelector(".cat_image");
MenuCost1.addEventListener('click', PickSurpriseboxCat);
MenuCost2.addEventListener('click', PickMermaidCat);
MenuCost3.addEventListener('click', PickUnicornCat);
function AddScore()
{
    Score += 5;
    ScoreInDocument.textContent = Score;
}
function PurrchaseCatSurpriseBox()
{
    if(Score >= 1000 && CatSurpriseBoxAvailable == false)
    {
        MenuCost1.textContent = "Куплено";
        Score -= 1000;
        ScoreInDocument.textContent = Score;
        CatSurpriseBoxAvailable = true;
        PurchaseAccesedSound()
    }
    else
    {
        PurchaseDeniedSound();
    }  
}
function PurrchaseCatMermaid()
{
    if(Score >= 2000 && CatMermaidAvailable == false)
    {
        MenuCost2.textContent = "Куплено";
        Score -= 2000;
        ScoreInDocument.textContent = Score;
        CatMermaidAvailable = true;
        PurchaseAccesedSound()
    }
    else
    {
        PurchaseDeniedSound();
    }
}
function PurrchaseCatUnicorn()
{
    if(Score >= 3000 && CatUnicornAvailable == false)
    {
        MenuCost3.textContent = "Куплено";
        Score -= 2000;
        ScoreInDocument.textContent = Score;
        CatUnicornAvailable = true;
        PurchaseAccesedSound()
    }
    else
    {
        PurchaseDeniedSound();
    }
}
function ClickedCatSurpriseBox()
{
    ChoosedCat = "cat-surprisebox";
    return ChoosedCat;
}
function ClickedCatMermaid()
{
    ChoosedCat = "cat-mermaid";
    return ChoosedCat;
}
function ClickedCatUnicorn()
{
    ChoosedCat = "cat-unicorn";
    return ChoosedCat;
}

function PurchaseDeniedSound()
{
    let Meow = document.querySelector(".cat-sound-2");
    Meow.currentTime = 0.2;
    Meow.play();
}
function PurchaseAccesedSound()
{
    let Meow = document.querySelector(".cat-sound-1");
    Meow.currentTime = 1.4;
    Meow.play();
}

function PickSurpriseboxCat()
{
    if(CatSurpriseBoxAvailable == true)
    {
        MainImage.src = "img/cat-surprise-box.png";
        MainImage.alt = "Новое изображение";
    }
}
function PickMermaidCat()
{
    if(CatMermaidAvailable == true)
    {
        MainImage.src = "img/cat-mermaid.png";
        MainImage.alt = "Новое изображение";
    }
}
function PickUnicornCat()
{
    if(CatUnicornAvailable == true)
    {
        MainImage.src = "img/cat-unicorn.png";
        MainImage.alt = "Новое изображение";
    }
}
  
  
  