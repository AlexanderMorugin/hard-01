// M O B I L E     P O P U P
const headerMenu = document.querySelector('.header__menu_open');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const popupLink = document.querySelector('.popup__link');
const popupLinkRoad = document.querySelector('.popup__link_road');
const popupLinkBike = document.querySelector('.popup__link_bike');
const popupLinkTraining = document.querySelector('.popup__link_training');
const popupToggleSwitch = document.querySelector('.toggle__switch_popup');
const darkPopupTogglePanel = document.querySelector('.popup__toggle-panel');
// Theme Dark Page
const page = document.querySelector('.page');
// Header
const headerSticks = document.querySelectorAll('.header__stick');
// Theme Dark Header
const header = document.querySelector('.header');
const headerLink = document.querySelector('.header__link');
const headerLinkRoad = document.querySelector('.header__link_road');
const headerLinkBike = document.querySelector('.header__link_bike');
const headerLinkTraining = document.querySelector('.header__link_training');
// Theme Dark Lead
const lead = document.querySelector('.lead');
const leadSubtitle = document.querySelector('.lead__subtitle');
const leadStick = document.querySelector('.lead__stick');
// Footer - Подписка на рассылку
const emailInput = document.querySelector('.footer__email-input');
const emailSubmit = document.querySelector('.footer__email-submit');
// Theme Dark Switch Desktop
const toggleSwitch = document.querySelector('.toggle__switch');
// Theme Dark Footer
const footer = document.querySelector('.footer');
const footerTitle = document.querySelector('.footer__title');
const footerCopyright = document.querySelector('.footer__copyright');
const footerTogglePanel = document.querySelector('.footer__toggle-panel');
const footerEmail = document.querySelector('.footer__email');
const footerEmailInput = document.querySelector('.footer__email-input');
const footerEmailSubmit = document.querySelector('.footer__email-submit');
// Theme Dark Drive
const drive = document.querySelector('.drive');
const driveSubname = document.querySelector('.drive__subname');
// Theme Dark Road
const roadTitle = document.querySelector('.road__title');
const roadTitleGravel = document.querySelector('.road__title_item_gravel');
const roadTitleTt = document.querySelector('.road__title_item_tt');
const roadDescription = document.querySelector('.road__description');
const roadDescriptionGravel = document.querySelector('.road__description_item_gravel');
const roadDescriptionTt = document.querySelector('.road__description_item_tt');
const roadSliderControlLeft = document.querySelector('.road__slider-control_type_left');
const roadSliderControlRight = document.querySelector('.road__slider-control_type_right'); 
// Bike Desktop
const linkBikes = document.querySelectorAll('.bike__link');
const linkBikesHighway = document.querySelector('.bike__link_highway');
const linkBikesGravel = document.querySelector('.bike__link_gravel');
const linkBikesTt = document.querySelector('.bike__link_tt');
// Bike Mobile
const sliderLinkHighway = document.querySelector('.bike__slider-link_highway');
const sliderLinkGravel = document.querySelector('.bike__slider-link_gravel');
const sliderLinkTt = document.querySelector('.bike__slider-link_tt');
const bikeSlider = document.querySelector('.bike__slider');
const mobileHighway = document.querySelector('.mobile-highway');
const mobileGravel = document.querySelector('.mobile-gravel');
const mobileTt = document.querySelector('.mobile-tt');
// Theme Dark Bike
const bikeTitle = document.querySelector('.bike__title');
const bikeLinkHighway = document.querySelector('.bike__link_highway');
const bikeLinkGravel = document.querySelector('.bike__link_gravel');
const bikeLinkTt = document.querySelector('.bike__link_tt');
const bikeAccordion = document.querySelector('.bike__accordion');
const bikePic = document.querySelector('.bike__pic');
const bikeNameCaledonia = document.querySelector('.bike__name_caledonia');
const bikeNameCannondale = document.querySelector('.bike__name_cannondale');
const bikeNameTrek = document.querySelector('.bike__name_trek');
const bikeNameAspero = document.querySelector('.bike__name_aspero');
const bikeNameDiverge = document.querySelector('.bike__name_diverge');
const bikeNameTopstone = document.querySelector('.bike__name_topstone');
const bikeNameShiv = document.querySelector('.bike__name_shiv');
const bikeNameOne = document.querySelector('.bike__name_one');
const bikeNameSeries = document.querySelector('.bike__name_series');

const list = document.querySelector('.list')
const listHighway = document.querySelector('.list-highway')
const listGravel = document.querySelector('.list-gravel')
const listTt = document.querySelector('.list-tt')

const cards = document.querySelectorAll('.card')
const select = document.querySelector('select');
// Theme Dark Training
const trainingTitle = document.querySelector('.training__title');
const trainingSubtitle = document.querySelector('.training__subtitle');
const trainingLinkStrava = document.querySelector('.training__link_strava');
const trainingLinkKomoot = document.querySelector('.training__link_komoot');

// Функции Универсальные - Mobile - Модальное окно
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

// Функции - Theme Dark Popup
function themeDarkPopup(darkPopup) {
  darkPopup.classList.toggle('popup_theme_dark');
};

function themeDarkPopupLinkRoad(darkPopupLinkRoad) {
  darkPopupLinkRoad.classList.toggle('popup__link_road_theme_dark');
};

function themeDarkPopupLinkBike(darkPopupLinkBike) {
  darkPopupLinkBike.classList.toggle('popup__link_bike_theme_dark');
};

function themeDarkPopupLinkTraining(darkPopupLinkTraining) {
  darkPopupLinkTraining.classList.toggle('popup__link_training_theme_dark');
};

function themeDarkPopupClose(darkPopupClose) {
  darkPopupClose.classList.toggle('popup__close_theme_dark');
};

function themeDarkPopupTogglePanel(darkPopupTogglePanel) {
  darkPopupTogglePanel.classList.toggle('popup__toggle-panel_theme_dark');
};

// Функции - Theme Dark Page
function themePage(page) {
  page.classList.toggle('page_theme_dark');
};

// Функции Header
function themeHeaderStick(headerSticks) {
  headerSticks.forEach((headerStick) => {
    headerStick.classList.toggle('header__stick_theme_dark')
  })  
};

// Функции - Theme Dark Header
function themeHeader(header) {
  header.classList.toggle('header_theme_dark');
};

function themeHeaderLink(headerLink) {
  headerLink.classList.toggle('header__link_theme_dark');
};

// Функции - Theme Dark Drive
function themeDrive(drive) {
  drive.classList.toggle('drive_theme_dark');
};

function themeSubname(driveSubname) {
  driveSubname.classList.toggle('drive__subname_theme_dark');
};

// Функции - Theme Dark Training
function themeTrainingTitle(trainingTitle) {
  trainingTitle.classList.toggle('training__title_theme_dark');
};

function themeTrainingSubtitle(trainingSubtitle) {
  trainingSubtitle.classList.toggle('training__subtitle_theme_dark');
};

function themeTrainingLinkStrava(trainingLinkStrava) {
  trainingLinkStrava.classList.toggle('training__link_strava_theme_dark');
};

function themeTrainingLinkKomoot(trainingLinkKomoot) {
  trainingLinkKomoot.classList.toggle('training__link_komoot_theme_dark');
};

// Функции Footer - Подписка на рассылку
function openSubmit(emailSubmit) {
  emailSubmit.classList.add('footer__email-submit_visible');
};

function closeSubmit(emailSubmit) {
  emailSubmit.classList.remove('footer__email-submit_visible');
};

// Функция - Footer - Подписка на рассылку
function addItem() { // Функция создания placeholder
  document.querySelector('.footer__email-input').value = 'Круто!';  
};

// Функции - Theme Dark Footer
function themeFooter(footer) {
  footer.classList.toggle('footer_theme_dark');
};

function themeFooterTitle(footerTitle) {
  footerTitle.classList.toggle('footer__title_theme_dark');
};

function themeFooterCopyright(footerCopyright) {
  footerCopyright.classList.toggle('footer__copyright_theme_dark');
};

function themeFooterTogglePanel(footerTogglePanel) {
  footerTogglePanel.classList.toggle('footer__toggle-panel_theme_dark');
};

function themeFooterEmail(footerEmail) {
  footerEmail.classList.toggle('footer__email_theme_dark');
};

function themeFooterEmailInput(footerEmailInput) {
  footerEmailInput.classList.toggle('footer__email-input_theme_dark');
};

function themeFooterEmailSubmit(footerEmailSubmit) {
  footerEmailSubmit.classList.toggle('footer__email-submit_theme_dark');
};

// Функции - Theme Dark Lead
function themeLead(lead) {
  lead.classList.toggle('lead_theme_dark');
};

function themeSubtitle(leadSubtitle) {
  leadSubtitle.classList.toggle('lead__subtitle_theme_dark');
};

function themeStick(leadStick) {
  leadStick.classList.toggle('lead__stick_theme_dark');
};

// Функции - Theme Dark Road
function themeRoadTitle(roadTitle) {
  roadTitle.classList.toggle('road__title_theme_dark');
};

function themeRoadTitleGravel(roadTitleGravel) {
  roadTitleGravel.classList.toggle('road__title_item_gravel_theme_dark');
};

function themeRoadTitleTt(roadTitleTt) {
  roadTitleTt.classList.toggle('road__title_item_tt_theme_dark');
};

function themeRoadDescription(roadDescription) {
  roadDescription.classList.toggle('road__description_theme_dark');
};

function themeRoadDescriptionGravel(roadDescriptionGravel) {
  roadDescriptionGravel.classList.toggle('road__description_item_gravel_theme_dark');
};

function themeRoadDescriptionTt(roadDescriptionTt) {
  roadDescriptionTt.classList.toggle('road__description_item_tt_theme_dark');
};

function themeSliderControlLeft(roadSliderControlLeft) {
  roadSliderControlLeft.classList.toggle('road__slider-control_type_left_theme_dark');
};

function themeSliderControlRight(roadSliderControlRight) {
  roadSliderControlRight.classList.toggle('road__slider-control_type_right_theme_dark');
};

// Функции Универсальные - Bike Desktop
function openBikeDesktop(bikeDesktop) {
  bikeDesktop.classList.add('bike__desktop_view');
};

function closeBikeDesktop(bikeDesktop) {
  bikeDesktop.classList.remove('bike__desktop_view');
};

function addBold(linkBikes) {
  linkBikes.classList.add('bike__link_active');
};

function reduceBold(linkBikes) {
  linkBikes.classList.remove('bike__link_active');
};

// Функции Универсальные - Bike Mobile
function openBikeMobile(bikeSlider) {
  bikeSlider.classList.add('bike__slider_view');
};

function closeBikeMobile(bikeSlider) {
  bikeSlider.classList.remove('bike__slider_view');
};

function openList(list) {
  list.classList.remove('none');
};

// Функции - Theme Dark Bike
function themeBikeTitle(bikeTitle) {
  bikeTitle.classList.toggle('bike__title_theme_dark');
};

function themeBikeLinkHighway(bikeLinkHighway) {
  bikeLinkHighway.classList.toggle('bike__link_highway_theme_dark');
};

function themeBikeLinkGravel(bikeLinkGravel) {
  bikeLinkGravel.classList.toggle('bike__link_gravel_theme_dark');
};

function themeBikeLinkTt(bikeLinkTt) {
  bikeLinkTt.classList.toggle('bike__link_tt_theme_dark');
};

function themeBikeAccordion(bikeAccordion) {
  bikeAccordion.classList.toggle('bike__accordion_theme_dark');
};

function themeBikePic(bikePic) {
  bikePic.classList.toggle('bike__pic_theme_dark');
};

function themeBikeNameCaledonia(bikeNameCaledonia) {
  bikeNameCaledonia.classList.toggle('bike__name_caledonia_theme_dark');
};

function themeBikeNameCannondale(bikeNameCannondale) {
  bikeNameCannondale.classList.toggle('bike__name_cannondale_theme_dark');
};

function themeBikeNameTrek(bikeNameTrek) {
  bikeNameTrek.classList.toggle('bike__name_trek_theme_dark');
};

function themeBikeNameAspero(bikeNameAspero) {
  bikeNameAspero.classList.toggle('bike__name_aspero_theme_dark');
};

function themeBikeNameDiverge(bikeNameDiverge) {
  bikeNameDiverge.classList.toggle('bike__name_diverge_theme_dark');
};

function themeBikeNameTopstone(bikeNameTopstone) {
  bikeNameTopstone.classList.toggle('bike__name_topstone_theme_dark');
};

function themeBikeNameShiv(bikeNameShiv) {
  bikeNameShiv.classList.toggle('bike__name_shiv_theme_dark');
};

function themeBikeNameOne(bikeNameOne) {
  bikeNameOne.classList.toggle('bike__name_one_theme_dark');
};

function themeBikeNameSeries(bikeNameSeries) {
  bikeNameSeries.classList.toggle('bike__name_series_theme_dark');
};

function filter(category, items) {
  items.forEach((item) => {
    const isItemFiltered = !item.classList.contains(category)
    if (isItemFiltered) {
      item.classList.add('anime')
    } else {
      item.classList.remove('anime')
    }
  })
}

// Слушатели событий
// Mobile - Модальное окно header menu
headerMenu.addEventListener('click', () => {
  openPopup(popup);
});

popupClose.addEventListener('click', () => {
  closePopup(popup);
});

popupLinkRoad.addEventListener('click', () => {
  closePopup(popup);
});

popupLinkBike.addEventListener('click', () => {
  closePopup(popup);
});

popupLinkTraining.addEventListener('click', () => {
  closePopup(popup);
});

// Footer - Подписка на рассылку
emailInput.addEventListener('click', () => {
  openSubmit(emailSubmit);
});

emailSubmit.addEventListener('click', () => {
  closeSubmit(emailSubmit);
  addItem();
});

// Bike Desktop
linkBikes.forEach(button => {
  button.addEventListener('click', () => {
    const currentCategory = button.dataset.filter
    filter(currentCategory, cards)
    console.log(currentCategory)
  })
})

// Bike Desktop
linkBikesHighway.addEventListener('click', () => {
  addBold(linkBikesHighway);
  reduceBold(linkBikesGravel);
  reduceBold(linkBikesTt);
});

linkBikesGravel.addEventListener('click', () => {
  addBold(linkBikesGravel);
  reduceBold(linkBikesHighway);
  reduceBold(linkBikesTt);
});

linkBikesTt.addEventListener('click', () => {
  addBold(linkBikesTt);
  reduceBold(linkBikesGravel);
  reduceBold(linkBikesHighway);
});

// Bike Mobile
select.addEventListener('change', function () {
  if (select.value === 'mobile-gravel') {
    openBikeMobile(mobileTt);
    openBikeMobile(mobileHighway);
    closeBikeMobile(mobileGravel);
    openList(listGravel);
  } else if (select.value === 'mobile-highway') {
    openBikeMobile(mobileTt);
    openBikeMobile(mobileGravel);
    closeBikeMobile(mobileHighway);
    openList(listHighway);
  } else if (select.value === 'mobile-tt') {
    openBikeMobile(mobileGravel);
    openBikeMobile(mobileHighway);
    closeBikeMobile(mobileTt);
    openList(listTt);
  }
})

// Слушатели Toggle Desktop
toggleSwitch.addEventListener('click', () => {
  themePage(page);
  themeHeader(header);
  themeHeaderLink(headerLinkRoad);
  themeHeaderLink(headerLinkBike);
  themeHeaderLink(headerLinkTraining); 

  themeLead(lead);
  themeSubtitle(leadSubtitle);
  themeStick(leadStick);

  themeDrive(drive);
  themeSubname(driveSubname);

  themeRoadTitle(roadTitle);
  themeRoadTitleGravel(roadTitleGravel);
  themeRoadTitleTt(roadTitleTt);
  themeRoadDescription(roadDescription);
  themeRoadDescriptionGravel(roadDescriptionGravel);
  themeRoadDescriptionTt(roadDescriptionTt);
  themeSliderControlLeft(roadSliderControlLeft);
  themeSliderControlRight(roadSliderControlRight);

  themeBikeTitle(bikeTitle);
  themeBikeLinkHighway(bikeLinkHighway);
  themeBikeLinkGravel(bikeLinkGravel);
  themeBikeLinkTt(bikeLinkTt);
  themeBikeAccordion(bikeAccordion);
  themeBikePic(bikePic);
  themeBikeNameCaledonia(bikeNameCaledonia);
  themeBikeNameCannondale(bikeNameCannondale);
  themeBikeNameTrek(bikeNameTrek);
  themeBikeNameAspero(bikeNameAspero);
  themeBikeNameDiverge(bikeNameDiverge);
  themeBikeNameTopstone(bikeNameTopstone);
  themeBikeNameShiv(bikeNameShiv);
  themeBikeNameOne(bikeNameOne);
  themeBikeNameSeries(bikeNameSeries);

  themeTrainingTitle(trainingTitle);
  themeTrainingSubtitle(trainingSubtitle);
  themeTrainingLinkStrava(trainingLinkStrava);
  themeTrainingLinkKomoot(trainingLinkKomoot);

  themeFooter(footer);
  themeFooterTitle(footerTitle);
  themeFooterCopyright(footerCopyright);
  themeFooterTogglePanel(footerTogglePanel);
  themeFooterEmail(footerEmail);
  themeFooterEmailInput(footerEmailInput);
  themeFooterEmailSubmit(footerEmailSubmit);
});

// Слушатели Toggle Mobile
popupToggleSwitch.addEventListener('click', () => {
  themeDarkPopup(popup);
  themeDarkPopupLinkRoad(popupLinkRoad);
  themeDarkPopupLinkBike(popupLinkBike);
  themeDarkPopupLinkTraining(popupLinkTraining);
  themeDarkPopupClose(popupClose);
  themeDarkPopupTogglePanel(darkPopupTogglePanel);

  themePage(page);
  themeHeader(header);
  themeHeaderLink(headerLinkRoad);
  themeHeaderLink(headerLinkBike);
  themeHeaderLink(headerLinkTraining);

  themeHeaderStick(headerSticks);   

  themeLead(lead);
  themeSubtitle(leadSubtitle);
  themeStick(leadStick);

  themeDrive(drive);
  themeSubname(driveSubname);

  themeRoadTitle(roadTitle);
  themeRoadTitleGravel(roadTitleGravel);
  themeRoadTitleTt(roadTitleTt);
  themeRoadDescription(roadDescription);
  themeRoadDescriptionGravel(roadDescriptionGravel);
  themeRoadDescriptionTt(roadDescriptionTt);
  themeSliderControlLeft(roadSliderControlLeft);
  themeSliderControlRight(roadSliderControlRight);

  themeBikeTitle(bikeTitle);
  themeBikeLinkHighway(bikeLinkHighway);
  themeBikeLinkGravel(bikeLinkGravel);
  themeBikeLinkTt(bikeLinkTt);
  themeBikeAccordion(bikeAccordion);
  themeBikePic(bikePic);
  themeBikeNameCaledonia(bikeNameCaledonia);
  themeBikeNameCannondale(bikeNameCannondale);
  themeBikeNameTrek(bikeNameTrek);
  themeBikeNameAspero(bikeNameAspero);
  themeBikeNameDiverge(bikeNameDiverge);
  themeBikeNameTopstone(bikeNameTopstone);
  themeBikeNameShiv(bikeNameShiv);
  themeBikeNameOne(bikeNameOne);
  themeBikeNameSeries(bikeNameSeries);

  themeTrainingTitle(trainingTitle);
  themeTrainingSubtitle(trainingSubtitle);
  themeTrainingLinkStrava(trainingLinkStrava);
  themeTrainingLinkKomoot(trainingLinkKomoot);

  themeFooter(footer);
  themeFooterTitle(footerTitle);
  themeFooterCopyright(footerCopyright);
  themeFooterTogglePanel(footerTogglePanel);
  themeFooterEmail(footerEmail);
  themeFooterEmailInput(footerEmailInput);
  themeFooterEmailSubmit(footerEmailSubmit);
})