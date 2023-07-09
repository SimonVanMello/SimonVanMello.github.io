let pageHeight, langagesData;

$(document).ready(() => {
    $(document).scroll(() => handleScroll($(document).scrollTop()));
    $(".contactInformationText").on("click", (e) => handleContactInformationTextClick(e.target));
    $(".langageImage").on("mouseenter", (e) => handleLangageImageClick(e.target));
    fetch("data.json")
        .then(r => r.json())
        .then(json => langagesData = json);
});

function handleScroll(scrollPos){
    updateScrollIndicator(scrollPos);
}

function updateScrollIndicator(scrollPos){
    pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPos/pageHeight)*100;
    $("div#scrollProgressBar").css("width", `${scrolled}%`);
    // if at the top of the page => hide scrollbar's border
    if (scrolled === 0){
        $("div#scrollProgressBar").css("border-width", "0");
    } else{
        $("div#scrollProgressBar").css("border-width", "1px");
    }
}

function handleContactInformationTextClick(e){
    navigator.clipboard.writeText(e.innerText);
    // displayCopiedPopup(e);
    // console.log(e);
}

function handleLangageImageClick(e){
    const hovered = langagesData[e.id];
    $("div#langageDescriptionContainer > h2").text(hovered.name);
    $("div#langageDescriptionContainer > p").text(hovered.text);
}

// async function displayCopiedPopup(e){
//     const popup = $("#copiedPopup");
//     popup.css("top", e.offsetTop-20);
//     popup.css("left", e.offsetLeft+e.offsetWidth/2-parseInt(popup.css("width"))/2);
//     popup.css("display", "block");
//     await sleep(2000);
//     popup.css("display", "none");
// }