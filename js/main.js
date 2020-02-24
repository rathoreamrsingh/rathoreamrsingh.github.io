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

const loadTechBlogs = () => {
    console.log("I am loaded!!!");
    const data = '{"tech_blog":[{"name":"Software Development a sad story","image":"./img/soft-dev-sad-story.jpg"},{"name":"Software Development a sad story 2","image":"./img/soft-dev-sad-story2.jpg"}]}';
    const jsonData = JSON.parse(data);
    for (let i = 0; i < jsonData.tech_blog.length; i++) {
        console.log(jsonData.tech_blog[i]);
    }
};