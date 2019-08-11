const menuSelect = (event, menu) => {
    removeAllSelectedMenu(event);
    $("#" + menu + "-menu").addClass("active");
};

const removeAllSelectedMenu = (event) => {
    $("#home-menu").removeClass("active");
    $("#about-menu").removeClass("active");
    $("#skills-menu").removeClass("active");
    $("#projects-menu").removeClass("active");
    $("#experience-menu").removeClass("active");
    $("#achievements-menu").removeClass("active");
};