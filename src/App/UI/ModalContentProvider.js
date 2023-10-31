export default class ModalContentProvider {
    constructor() {
        this.modalContents = {
            aboutMe: {
                title: 'About me',
                description: '<div style="display: flex"><div style="flex: 50%" float><img src="./images/profpic.jpeg" height="400"></div><div>As a seasoned front-end developer (over 100,000 lines of good code), I have a strong track record of launching successful websites and apps on both the Play store and App Store. I\’m passionate about emerging technologies like Flutter, React, NodeJs, WebGL and ThreeJs, and I like to combine all technologies to create amazing products.<br/><a href="./docs/cv.pdf" target="_blank" rel="noopener noreferrer"><h3 style="font-style: italic">Download Resume</h3></a><h3>Social</h3>LinkedIn: <a href="https://www.linkedin.com/in/saswatasaha/">https://www.linkedin.com/in/saswatasaha/</a><br/>Github: <a href="https://github.com/theNativeGod">https://github.com/theNativeGod</a><h3>Contact Me</h3>Mobile: +918170997368<br/>Email: digitalsaswata@gmail.com</div></div>',
            },
            projectSolar: {
                title: 'Solar System - Javascript',
                description: 'Link: <a href=\'https://thenativegod.github.io/solar_system/\'> https://thenativegod.github.io/solar_system/</a><br/>This is a fun solar system project in JavaScript. Now of course it would take a lot more work to mistake this for a Hubble telescope footage but hey! it\'s a 3d webpage. The planets are up to Mars with their moons - earth\'s moon and Phobos and Deimos of Mars. The textures are free ones(I literally saved the textures from google, haha)<br/>Now if you look carefully, its not simply a 3d object animation.I am literally dragging the mouse in all directions to view these objects from different angles. Also the light coming out from the sun here respects the laws of physics and lits up only the sun facing side of the planets.<br/>You can play with it here:<br/><a href=\'https://thenativegod.github.io/solar_system/\'>https://thenativegod.github.io/solar_system/</a>',
            },
            sterling: {
                title: 'Sterling Tours and Travels - Dart',
                description: 'Play store link: <a href=\'https://play.google.com/store/apps/details?id=com.sterling.taxi&pcampaignid=web_share\'>https://play.google.com/store/apps/details?id=com.sterling.taxi&pcampaignid=web_share</a><br/>App Store link: <a href="https://apps.apple.com/in/app/sterling-tours-and-travels-inc/id6456341851">https://apps.apple.com/in/app/sterling-tours-and-travels-inc/id6456341851</a><br/><h3>Overview</h3>The sterling app is a Taxi Booking App that was requested by a client, who works in Coca- Cola and Pepsi, to surprise his colleages and to make their everyday transportation easier.So Sterling is a Tours and Travels agency that provides various vehicle types such as Sedan, Wagon and Microcars, for various ride categories such as Full day ride, Airport ride, Half day ride, out station ride.<h3>Description of the Project</h3>Customer\'s App:<br/>This app is a simple taxi booking app that comes with a quick request form where users can enter their ride details such as date, time, pickup, destination, ride category, ride type, vehicle type and any additional notes.<br/>Once the user books a ride, The ride details appear in the current requests section in the dashboard. The current request section changes from awating to confirmed as soon as a pilot(driver) is assigned to the customer.<br/>Latest four rides are shown in the ride history as well as payment history section in dashboard. All previous rides are shown in the Trip History section.<br/>Pilot\'s App:<br/>The pilot app is integrated within the same app and opens up when the pilot\'s login credentials are entered in the login screen. Therefore, a person can be either a customer or a pilot at a time. The pilot can view their assigned customers(that is done from backend). The pilot app alsp has a history section where they can view the ride histories.<h3>Technical Analysis of the App</h3>The app is made in Flutter and a PHP back-end. I was only responsible for the front-end of this app, so I will focus on describing the front-end part.<br/>Front-end: Flutter with Provider State Management, and MVVM architecture, was used in the front-end. The trip requests, dashboard data, history page data, as well as login data are fetched from backend.<br/>Authentication: Firebase Phone OTP Authentication is used for authenticating the users.<br/>Storage: Firebase storage is used to store the user profile images.',
            },
            toya: {
                title: 'Toya',
                description: '<img src="./images/toya.png" height="200"><br/>Play store link: <a href="https://play.google.com/store/apps/details?id=com.toya.som">https://play.google.com/store/apps/details?id=com.toya.som</a><br/>App store link: <a href="https://apps.apple.com/in/app/toya/id6466505906">https://apps.apple.com/in/app/toya/id6466505906</a><br/><h3>Overview</h3>Toya is a Private Members Club App based in London. This is by far one of my favorite projects. I enjoyed as well as learned a lot while the making of this project. The purpose of this app was to form a social community for the highly smart and successful people in London. It took a total of 2 weeks to design and 3 weeks to develop the entire project.<h3>What is a private members club?</h3>A private members club is a place for the elite, accomplished and leaders to connect with each other in an exclusive, luxurious space.<br/>Toya takes a fresh outlook towards private members clubs by becoming London\’s first inclusive-exclusive members club. It is inclusive in the sense that anyone from any background can apply for membership because membership fees start at £10/month: staggeringly lower than other members clubs with memberships starting at £2,000 annually. Therefore, the club is making luxury and elite connections accessible to groups who would\’ve been unable to do so in the past: queer, trans, etc. being some of those groups.<br/><br/>But Toya is exclusive in the sense that only leaders, innovators and visionaries are accepted. Toya is also London’s first members club to provide matchmaking features, bringing to the city an innovative way to meet potential partners. Finally, the club does exclusive events at some of the finest luxury spaces of London. Toya is changing the private members club scene for the better with diversity, innovation and luxury at its core.<h3>Description of the Project</h3>So, now that we know what is a private members club, the Toya app does just that. Its basically a social app that shows events, a connections section where we can explore different people in the feed as well as send and receive connection requests. Then there is a chats section where we can chat with our connections. A personal profile section where we can manage our profile with different subsections such as bio, photos, prompts, etc. Finally there is the Bespoke section which is only available to explorer and connoisseur tier members.<h3>Bespoke Dating</h3>So this is the most interesting part of the app. Here the members of the app need to answer a list of multichoice questions. These questions are curated and designed to find you a perfect match. At the end they get to add any additional notes and then they just need to click on the submit button.<br/><br/>The Toya team then finds the members relevant matches and select a venue where both the people agree on. The matches appear on the My Date tab in the Bespoke section.<h3>Technical Analysis of the App</h3>' +
                    'Design: The app was designed to give it a fun, lovely but elegant look to it.<br/>⦁	Wireframes -> The wireframes of the app mainly consist of rounded rectangles and a few circle avatars for profile images.<br/>⦁ Spacing -> The entire app is evenly spaced with a primary spacing of 16 pixels and other multiples of 4.<br/>⦁	Color -> The coloring of the app is done with linear horizontal gradients as such to give the entire app a pastel effect. White text over contrasting colors is used to make it look stylish.<br/><br/>Front-end: The front-end of the app is made in Flutter. Agile development methodology along with Clean Architecture is used in this project.<br/>Architecture: The app follows Models-Views-View-Models (MVVM) folder structure. The API calls as well as constants such as themes are in seperate folders.<br/>State Management: Provider state management, which goes exceptionally well with MVVM, is used in this entire project. The classes with ChangeNotifier mixin is put in the view-model folders. These providers are created at the begining of material app inside the MultiProvider widget.<br/><br/>Back-end: The back-end of the app is made in Firebase. The main data is stored in Cloud Firestore whereas the photo files are stored in Storage.<br/><br/>Authentication: For authentication, The app uses Firebase Phone Authentication where the user is verified via OTP.<br/>In App Subscriptions: The app has three entitlements: free, explorer and connoisseur<br/>The free tier users get little to no access to the features of the app. It is suitable for the newcomers to have a look at the app.<br/>The Explorer has most features of the app unlocked and is the most recommended one. It is further divided into one-month, three-month and one-year plans.<br/>The Connoisseur is the most premium tier membership offered by the app. It is also further divided into one-month, three-month and one-year plans.<br/>The In App Subscriptions in AppStore and PlayStore is implemented and managed through a 3rd party service called RevenueCat.',
            },
            portfolio: {
                title: 'Portfolio - Javascript',
                description: '3D websites are buzzing a lot now a days and I had all the necessary skills to make one. So I thought why not make one for my Portfolio!<br/>So I created an interactive 3D Portfolio with Spiderman and Iron Man in it(Yeah the smart avengers) and use WASD or the arrow keys to move around. Made this in Javascript(Vite, ThreeJs/WebGL and VanillaJs as well as Rapier - for the physics engine). Also the animations and the perspective camera are frame independent as deltaTime(ie elapsedTime - previousTime) is used.So no matter what\'s the frame rate of your device, the animations are going to look the same.',
            },
        }
    }

    getModalInfo(portalName) {
        return this.modalContents[portalName];
    }
}
