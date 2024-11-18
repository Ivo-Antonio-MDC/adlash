import { createWebHistory, createRouter } from "vue-router";

import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
import ProjectManagementPage from "../pages/Dashboard/ProjectManagementPage.vue";
import SupportDeskPage from "../pages/Dashboard/SupportDeskPage.vue";
import LMSCoursesPage from "../pages/Dashboard/LMSCoursesPage.vue";
import CRMSystemPage from "../pages/Dashboard/CRMSystemPage.vue";
import FileManagerPage from "../pages/FileManagerPage.vue";
import ChangelogPage from "../pages/ChangelogPage.vue";
import CalendarPage from "../pages/CalendarPage.vue";
import ChatPage from "../pages/ChatPage.vue";
import ChatGroupPage from "../pages/ChatGroupPage.vue";
import ChatContactPage from "../pages/ChatContactPage.vue";
import LeadsPage from "../pages/CRM/LeadsPage.vue";
import LeadDetailsPage from "../pages/CRM/LeadDetailsPage.vue";
import ContactsListPage from "../pages/CRM/ContactsListPage.vue";
import CustomersListPage from "../pages/CRM/CustomersListPage.vue";
import EmailsPage from "../pages/Emails/EmailsPage.vue";
import ReadEmailPage from "../pages/Emails/ReadEmailPage.vue";
import ProductsGridPage from "../pages/Ecommerce/ProductsGridPage.vue";
import ProductsListPage from "../pages/Ecommerce/ProductsListPage.vue";
import AddProductPage from "../pages/Ecommerce/AddProductPage.vue";
import ProductDetailsPage from "../pages/Ecommerce/ProductDetailsPage.vue";
import OrdersListPage from "../pages/Ecommerce/OrdersListPage.vue";
import OrderDetailsPage from "../pages/Ecommerce/OrderDetailsPage.vue";
import ShoppingCartPage from "../pages/Ecommerce/ShoppingCartPage.vue";
import CheckoutPage from "../pages/Ecommerce/CheckoutPage.vue";
import CustomersPage from "../pages/Ecommerce/CustomersPage.vue";
import SellersListPage from "../pages/Ecommerce/SellersListPage.vue";
import ManageReviewsPage from "../pages/Ecommerce/ManageReviewsPage.vue";
import RefundPage from "../pages/Ecommerce/RefundPage.vue";
import InvoiceListPage from "../pages/Ecommerce/InvoiceListPage.vue";
import InvoiceDetailsPage from "../pages/Ecommerce/InvoiceDetailsPage.vue";
import OrderTrackingPage from "../pages/Ecommerce/OrderTrackingPage.vue";
import CoursesListPage from "../pages/ELearning/CoursesListPage.vue";
import CoursesGridPage from "../pages/ELearning/CoursesGridPage.vue";
import CourseDetailsPage from "../pages/ELearning/CourseDetailsPage.vue";
import LessonsPreviewPage from "../pages/ELearning/LessonsPreviewPage.vue";
import EditCoursePage from "../pages/ELearning/EditCoursePage.vue";
import ListViewPage from "../pages/SupportDesk/ListViewPage.vue";
import CardViewPage from "../pages/SupportDesk/CardViewPage.vue";
import ContactsPage from "../pages/SupportDesk/ContactsPage.vue";
import TicketPreviewPage from "../pages/SupportDesk/TicketPreviewPage.vue";
import ProjectsListPage from "../pages/Projects/ProjectsListPage.vue";
import ProjectsGridPage from "../pages/Projects/ProjectsGridPage.vue";
import CreateNewProjectPage from "../pages/Projects/CreateNewProjectPage.vue";
import ProjectDetailsPage from "../pages/Projects/ProjectDetailsPage.vue";
import ToDoListPage from "../pages/Projects/ToDoListPage.vue";
import TeamsPage from "../pages/Projects/TeamsPage.vue";
import KanbanPage from "../pages/KanbanPage.vue";
import EventsGridPage from "../pages/Events/EventsGridPage.vue";
import EventDetailsPage from "../pages/Events/EventDetailsPage.vue";
import TimelinePage from "../pages/Social/TimelinePage.vue";
import AboutPage from "../pages/Social/AboutPage.vue";
import ActivityPage from "../pages/Social/ActivityPage.vue";
import ProfileSettingsPage from "../pages/Social/ProfileSettingsPage.vue";
import StarterPage from "../pages/StarterPage.vue";
import LoginPage from "../pages/Authentication/LoginPage.vue";
import RegisterPage from "../pages/Authentication/RegisterPage.vue";
import ForgotPasswordPage from "../pages/Authentication/ForgotPasswordPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import EmailConfirmationPage from "../pages/Authentication/EmailConfirmationPage.vue";
import UsersListPage from "../pages/Users/UsersListPage.vue";
import AddUserPage from "../pages/Users/AddUserPage.vue";
import PricingPage from "../pages/PricingPage.vue";
import FaqPage from "../pages/FaqPage.vue";
import SwiperSliderPage from "../pages/Miscellaneous/SwiperSliderPage.vue";
import PrivacyPolicyPage from "../pages/Miscellaneous/PrivacyPolicyPage.vue";
import TermsConditionsPage from "../pages/Miscellaneous/TermsConditionsPage.vue";
import FormOverviewPage from "../pages/Forms/FormOverviewPage.vue";
import FormControlPage from "../pages/Forms/FormControlPage.vue";
import FormSelectPage from "../pages/Forms/FormSelectPage.vue";
import FormChecksRadiosPage from "../pages/Forms/FormChecksRadiosPage.vue";
import FormRangePage from "../pages/Forms/FormRangePage.vue";
import FormInputGroupPage from "../pages/Forms/FormInputGroupPage.vue";
import FormFloatingLabelsPage from "../pages/Forms/FormFloatingLabelsPage.vue";
import FormLayoutPage from "../pages/Forms/FormLayoutPage.vue";
import FormValidationPage from "../pages/Forms/FormValidationPage.vue";
import FormWizardPage from "../pages/Forms/FormWizardPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";
import TablesPage from "../pages/TablesPage.vue";
import ChartsPage from "../pages/Charts/ChartsPage.vue";
import MixedChartsPage from "../pages/Charts/MixedChartsPage.vue";
import FlaticonsPage from "../pages/Icons/FlaticonsPage.vue";
import PhosphoriconsPage from "../pages/Icons/PhosphoriconsPage.vue";
import GoogleMapsPage from "../pages/Maps/GoogleMapsPage.vue";
import LeafletMapPage from "../pages/Maps/LeafletMapPage.vue";
import TreePage from "../pages/ExtendedUI/TreePage.vue";
import EditorsPage from "../pages/ExtendedUI/EditorsPage.vue";
import AccordionPage from "../pages/UIElements/AccordionPage.vue";
import AlertsPage from "../pages/UIElements/AlertsPage.vue";
import AvatarsPage from "../pages/UIElements/AvatarsPage.vue";
import BadgesPage from "../pages/UIElements/BadgesPage.vue";
import BreadcrumbPage from "../pages/UIElements/BreadcrumbPage.vue";
import ButtonsPage from "../pages/UIElements/ButtonsPage.vue";
import ButtonGroupPage from "../pages/UIElements/ButtonGroupPage.vue";
import CarouselPage from "../pages/UIElements/CarouselPage.vue";
import CloseButtonPage from "../pages/UIElements/CloseButtonPage.vue";
import ColorBackgroundPage from "../pages/UIElements/ColorBackgroundPage.vue";
import ColoredLinksPage from "../pages/UIElements/ColoredLinksPage.vue";
import CollapsePage from "../pages/UIElements/CollapsePage.vue";
import DropdownsPage from "../pages/UIElements/DropdownsPage.vue";
import DatepickerPage from "../pages/UIElements/DatepickerPage.vue";
import FiguresPage from "../pages/UIElements/FiguresPage.vue";
import IconLinkPage from "../pages/UIElements/IconLinkPage.vue";
import ListGroupPage from "../pages/UIElements/ListGroupPage.vue";
import ModalPage from "../pages/UIElements/ModalPage.vue";
import NavsTabsPage from "../pages/UIElements/NavsTabsPage.vue";
import OffcanvasPage from "../pages/UIElements/OffcanvasPage.vue";
import PaginationPage from "../pages/UIElements/PaginationPage.vue";
import PlaceholdersPage from "../pages/UIElements/PlaceholdersPage.vue";
import PopoversPage from "../pages/UIElements/PopoversPage.vue";
import ProgressPage from "../pages/UIElements/ProgressPage.vue";
import RatioPage from "../pages/UIElements/RatioPage.vue";
import ScrollspyPage from "../pages/UIElements/ScrollspyPage.vue";
import StacksPage from "../pages/UIElements/StacksPage.vue";
import SpinnersPage from "../pages/UIElements/SpinnersPage.vue";
import UITablesPage from "../pages/UIElements/UITablesPage.vue";
import ToastsPage from "../pages/UIElements/ToastsPage.vue";
import UiTimelinePage from "../pages/UIElements/UiTimelinePage.vue";
import TimepickerPage from "../pages/UIElements/TimepickerPage.vue";
import TooltipsPage from "../pages/UIElements/TooltipsPage.vue";
import TypographyPage from "../pages/UIElements/TypographyPage.vue";
import BackgroundPage from "../pages/Utilities/BackgroundPage.vue";
import BordersPage from "../pages/Utilities/BordersPage.vue";
import ColorsPage from "../pages/Utilities/ColorsPage.vue";
import ClearfixPage from "../pages/Utilities/ClearfixPage.vue";
import DisplayPage from "../pages/Utilities/DisplayPage.vue";
import FlexPage from "../pages/Utilities/FlexPage.vue";
import FloatPage from "../pages/Utilities/FloatPage.vue";
import FocusRingPage from "../pages/Utilities/FocusRingPage.vue";
import GridPage from "../pages/Utilities/GridPage.vue";
import GuttersPage from "../pages/Utilities/GuttersPage.vue";
import InteractionsPage from "../pages/Utilities/InteractionsPage.vue";
import LinkPage from "../pages/Utilities/LinkPage.vue";
import ObjectFitPage from "../pages/Utilities/ObjectFitPage.vue";
import OpacityPage from "../pages/Utilities/OpacityPage.vue";
import OverflowPage from "../pages/Utilities/OverflowPage.vue";
import PositionPage from "../pages/Utilities/PositionPage.vue";
import ShadowsPage from "../pages/Utilities/ShadowsPage.vue";
import SizingPage from "../pages/Utilities/SizingPage.vue";
import SpacingPage from "../pages/Utilities/SpacingPage.vue";
import TextPage from "../pages/Utilities/TextPage.vue";
import TextTruncationPage from "../pages/Utilities/TextTruncationPage.vue";
import VerticalAlignmentPage from "../pages/Utilities/VerticalAlignmentPage.vue";
import VerticalRulePage from "../pages/Utilities/VerticalRulePage.vue";
import VisuallyHiddenPage from "../pages/Utilities/VisuallyHiddenPage.vue";
import VisibilityPage from "../pages/Utilities/VisibilityPage.vue";
import ZIndexPage from "../pages/Utilities/ZIndexPage.vue";
import CardsPage from "../pages/Widgets/CardsPage.vue";
import GalleryPage from "../pages/PagesInner/GalleryPage.vue";
import MaintenancePage from "../pages/PagesInner/MaintenancePage.vue";
import NotificationsPage from "../pages/PagesInner/NotificationsPage.vue";
import ConnectedAccountsPage from "../pages/PagesInner/ConnectedAccountsPage.vue";
import ProfilePage from "../pages/PagesInner/ProfilePage.vue";
import SearchResultPage from "../pages/PagesInner/SearchResultPage.vue";
import AccountSettingsPage from "../pages/Settings/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Settings/ChangePasswordPage.vue";
import SocialLinksPage from "../pages/Settings/SocialLinksPage.vue";
import SettingsPrivacyPolicyPage from "../pages/Settings/SettingsPrivacyPolicyPage.vue";
import BlankPage from "../pages/BlankPage.vue";
import LogoutPage from "../pages/LogoutPage.vue";

const routes = [
  {
    path: "/",
    name: "EcommercePage",
    component: EcommercePage,
  },
  {
    path: "/project-management",
    name: "ProjectManagementPage",
    component: ProjectManagementPage,
  },
  {
    path: "/support-desk",
    name: "SupportDeskPage",
    component: SupportDeskPage,
  },
  {
    path: "/lms-courses",
    name: "LMSCoursesPage",
    component: LMSCoursesPage,
  },
  {
    path: "/crm-system",
    name: "CRMSystemPage",
    component: CRMSystemPage,
  },
  {
    path: "/file-manager",
    name: "FileManagerPage",
    component: FileManagerPage,
  },
  {
    path: "/changelog",
    name: "ChangelogPage",
    component: ChangelogPage,
  },
  {
    path: "/calendar",
    name: "CalendarPage",
    component: CalendarPage,
  },
  {
    path: "/chat",
    name: "ChatPage",
    component: ChatPage,
  },
  {
    path: "/chat-group",
    name: "ChatGroupPage",
    component: ChatGroupPage,
  },
  {
    path: "/chat-contact",
    name: "ChatContactPage",
    component: ChatContactPage,
  },
  {
    path: "/leads",
    name: "LeadsPage",
    component: LeadsPage,
  },
  {
    path: "/lead-details",
    name: "LeadDetailsPage",
    component: LeadDetailsPage,
  },
  {
    path: "/crm-contacts",
    name: "ContactsListPage",
    component: ContactsListPage,
  },
  {
    path: "/crm-customers",
    name: "CustomersListPage",
    component: CustomersListPage,
  },
  {
    path: "/emails",
    name: "EmailsPage",
    component: EmailsPage,
  },
  {
    path: "/read-email",
    name: "ReadEmailPage",
    component: ReadEmailPage,
  },
  {
    path: "/products",
    name: "ProductsGridPage",
    component: ProductsGridPage,
  },
  {
    path: "/products-list",
    name: "ProductsListPage",
    component: ProductsListPage,
  },
  {
    path: "/add-product",
    name: "AddProductPage",
    component: AddProductPage,
  },
  {
    path: "/product-details",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/orders",
    name: "OrdersListPage",
    component: OrdersListPage,
  },
  {
    path: "/order-details",
    name: "OrderDetailsPage",
    component: OrderDetailsPage,
  },
  {
    path: "/cart",
    name: "ShoppingCartPage",
    component: ShoppingCartPage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/customers",
    name: "CustomersPage",
    component: CustomersPage,
  },
  {
    path: "/sellers",
    name: "SellersListPage",
    component: SellersListPage,
  },
  {
    path: "/reviews",
    name: "ManageReviewsPage",
    component: ManageReviewsPage,
  },
  {
    path: "/refund",
    name: "RefundPage",
    component: RefundPage,
  },
  {
    path: "/invoice",
    name: "InvoiceListPage",
    component: InvoiceListPage,
  },
  {
    path: "/invoice-details",
    name: "InvoiceDetailsPage",
    component: InvoiceDetailsPage,
  },
  {
    path: "/order-tracking",
    name: "OrderTrackingPage",
    component: OrderTrackingPage,
  },
  {
    path: "/courses-list",
    name: "CoursesListPage",
    component: CoursesListPage,
  },
  {
    path: "/courses-grid",
    name: "CoursesGridPage",
    component: CoursesGridPage,
  },
  {
    path: "/course-details",
    name: "CourseDetailsPage",
    component: CourseDetailsPage,
  },
  {
    path: "/lessons-preview",
    name: "LessonsPreviewPage",
    component: LessonsPreviewPage,
  },
  {
    path: "/edit-course",
    name: "EditCoursePage",
    component: EditCoursePage,
  },
  {
    path: "/support-desk-list",
    name: "ListViewPage",
    component: ListViewPage,
  },
  {
    path: "/support-desk-card",
    name: "CardViewPage",
    component: CardViewPage,
  },
  {
    path: "/contacts",
    name: "ContactsPage",
    component: ContactsPage,
  },
  {
    path: "/ticket-preview",
    name: "TicketPreviewPage",
    component: TicketPreviewPage,
  },
  {
    path: "/projects-list",
    name: "ProjectsListPage",
    component: ProjectsListPage,
  },
  {
    path: "/projects-grid",
    name: "ProjectsGridPage",
    component: ProjectsGridPage,
  },
  {
    path: "/create-new-project",
    name: "CreateNewProjectPage",
    component: CreateNewProjectPage,
  },
  {
    path: "/project-details",
    name: "ProjectDetailsPage",
    component: ProjectDetailsPage,
  },
  {
    path: "/to-do-list",
    name: "ToDoListPage",
    component: ToDoListPage,
  },
  {
    path: "/projects-teams",
    name: "TeamsPage",
    component: TeamsPage,
  },
  {
    path: "/kanban",
    name: "KanbanPage",
    component: KanbanPage,
  },
  {
    path: "/events",
    name: "EventsGridPage",
    component: EventsGridPage,
  },
  {
    path: "/event-details",
    name: "EventDetailsPage",
    component: EventDetailsPage,
  },
  {
    path: "/social-timeline",
    name: "TimelinePage",
    component: TimelinePage,
  },
  {
    path: "/social-about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/social-activity",
    name: "ActivityPage",
    component: ActivityPage,
  },
  {
    path: "/profile-settings",
    name: "ProfileSettingsPage",
    component: ProfileSettingsPage,
  },
  {
    path: "/starter",
    name: "StarterPage",
    component: StarterPage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/forgot-password",
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage,
  },
  {
    path: "/reset-password",
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
  },
  {
    path: "/email-confirmation",
    name: "EmailConfirmationPage",
    component: EmailConfirmationPage,
  },
  {
    path: "/users-list",
    name: "UsersListPage",
    component: UsersListPage,
  },
  {
    path: "/add-user",
    name: "AddUserPage",
    component: AddUserPage,
  },
  {
    path: "/pricing",
    name: "PricingPage",
    component: PricingPage,
  },
  {
    path: "/faq",
    name: "FaqPage",
    component: FaqPage,
  },
  {
    path: "/ui-swiper-slider",
    name: "SwiperSliderPage",
    component: SwiperSliderPage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  {
    path: "/terms-conditions",
    name: "TermsConditionsPage",
    component: TermsConditionsPage,
  },
  {
    path: "/forms-overview",
    name: "FormOverviewPage",
    component: FormOverviewPage,
  },
  {
    path: "/forms-form-control",
    name: "FormControlPage",
    component: FormControlPage,
  },
  {
    path: "/forms-select",
    name: "FormSelectPage",
    component: FormSelectPage,
  },
  {
    path: "/forms-checks-radios",
    name: "FormChecksRadiosPage",
    component: FormChecksRadiosPage,
  },
  {
    path: "/forms-range",
    name: "FormRangePage",
    component: FormRangePage,
  },
  {
    path: "/forms-input-group",
    name: "FormInputGroupPage",
    component: FormInputGroupPage,
  },
  {
    path: "/forms-floating-labels",
    name: "FormFloatingLabelsPage",
    component: FormFloatingLabelsPage,
  },
  {
    path: "/forms-layout",
    name: "FormLayoutPage",
    component: FormLayoutPage,
  },
  {
    path: "/forms-validation",
    name: "FormValidationPage",
    component: FormValidationPage,
  },
  {
    path: "/wizard",
    name: "FormWizardPage",
    component: FormWizardPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
  {
    path: "/tables",
    name: "TablesPage",
    component: TablesPage,
  },
  {
    path: "/charts",
    name: "ChartsPage",
    component: ChartsPage,
  },
  {
    path: "/mixed-charts",
    name: "MixedChartsPage",
    component: MixedChartsPage,
  },
  {
    path: "/flaticons",
    name: "FlaticonsPage",
    component: FlaticonsPage,
  },
  {
    path: "/phosphoricons",
    name: "PhosphoriconsPage",
    component: PhosphoriconsPage,
  },
  {
    path: "/google-maps",
    name: "GoogleMapsPage",
    component: GoogleMapsPage,
  },
  {
    path: "/leaflet-map",
    name: "LeafletMapPage",
    component: LeafletMapPage,
  },
  {
    path: "/ui-tree",
    name: "TreePage",
    component: TreePage,
  },
  {
    path: "/editor",
    name: "EditorsPage",
    component: EditorsPage,
  },
  {
    path: "/ui-accordion",
    name: "AccordionPage",
    component: AccordionPage,
  },
  {
    path: "/ui-alerts",
    name: "AlertsPage",
    component: AlertsPage,
  },
  {
    path: "/ui-avatars",
    name: "AvatarsPage",
    component: AvatarsPage,
  },
  {
    path: "/ui-badges",
    name: "BadgesPage",
    component: BadgesPage,
  },
  {
    path: "/ui-breadcrumb",
    name: "BreadcrumbPage",
    component: BreadcrumbPage,
  },
  {
    path: "/ui-buttons",
    name: "ButtonsPage",
    component: ButtonsPage,
  },
  {
    path: "/ui-button-group",
    name: "ButtonGroupPage",
    component: ButtonGroupPage,
  },
  {
    path: "/ui-carousel",
    name: "CarouselPage",
    component: CarouselPage,
  },
  {
    path: "/ui-close-button",
    name: "CloseButtonPage",
    component: CloseButtonPage,
  },
  {
    path: "/ui-color-background",
    name: "ColorBackgroundPage",
    component: ColorBackgroundPage,
  },
  {
    path: "/ui-colored-links",
    name: "ColoredLinksPage",
    component: ColoredLinksPage,
  },
  {
    path: "/ui-collapse",
    name: "CollapsePage",
    component: CollapsePage,
  },
  {
    path: "/ui-dropdowns",
    name: "DropdownsPage",
    component: DropdownsPage,
  },
  {
    path: "/ui-datepicker",
    name: "DatepickerPage",
    component: DatepickerPage,
  },
  {
    path: "/ui-figures",
    name: "FiguresPage",
    component: FiguresPage,
  },
  {
    path: "/ui-icon-link",
    name: "IconLinkPage",
    component: IconLinkPage,
  },
  {
    path: "/ui-list-group",
    name: "ListGroupPage",
    component: ListGroupPage,
  },
  {
    path: "/ui-modal",
    name: "ModalPage",
    component: ModalPage,
  },
  {
    path: "/ui-navs-tabs",
    name: "NavsTabsPage",
    component: NavsTabsPage,
  },
  {
    path: "/ui-offcanvas",
    name: "OffcanvasPage",
    component: OffcanvasPage,
  },
  {
    path: "/ui-pagination",
    name: "PaginationPage",
    component: PaginationPage,
  },
  {
    path: "/ui-placeholders",
    name: "PlaceholdersPage",
    component: PlaceholdersPage,
  },
  {
    path: "/ui-popovers",
    name: "PopoversPage",
    component: PopoversPage,
  },
  {
    path: "/ui-progress",
    name: "ProgressPage",
    component: ProgressPage,
  },
  {
    path: "/ui-ratio",
    name: "RatioPage",
    component: RatioPage,
  },
  {
    path: "/ui-scrollspy",
    name: "ScrollspyPage",
    component: ScrollspyPage,
  },
  {
    path: "/ui-stacks",
    name: "StacksPage",
    component: StacksPage,
  },
  {
    path: "/ui-spinners",
    name: "SpinnersPage",
    component: SpinnersPage,
  },
  {
    path: "/ui-tables",
    name: "UITablesPage",
    component: UITablesPage,
  },
  {
    path: "/ui-toasts",
    name: "ToastsPage",
    component: ToastsPage,
  },
  {
    path: "/ui-timeline",
    name: "UiTimelinePage",
    component: UiTimelinePage,
  },
  {
    path: "/ui-timepicker",
    name: "TimepickerPage",
    component: TimepickerPage,
  },
  {
    path: "/ui-tooltips",
    name: "TooltipsPage",
    component: TooltipsPage,
  },
  {
    path: "/ui-typography",
    name: "TypographyPage",
    component: TypographyPage,
  },
  {
    path: "/ui-background",
    name: "BackgroundPage",
    component: BackgroundPage,
  },
  {
    path: "/ui-borders",
    name: "BordersPage",
    component: BordersPage,
  },
  {
    path: "/ui-colors",
    name: "ColorsPage",
    component: ColorsPage,
  },
  {
    path: "/ui-clearfix",
    name: "ClearfixPage",
    component: ClearfixPage,
  },
  {
    path: "/ui-display",
    name: "DisplayPage",
    component: DisplayPage,
  },
  {
    path: "/ui-flex",
    name: "FlexPage",
    component: FlexPage,
  },
  {
    path: "/ui-float",
    name: "FloatPage",
    component: FloatPage,
  },
  {
    path: "/ui-focus-ring",
    name: "FocusRingPage",
    component: FocusRingPage,
  },
  {
    path: "/ui-grid",
    name: "GridPage",
    component: GridPage,
  },
  {
    path: "/ui-gutters",
    name: "GuttersPage",
    component: GuttersPage,
  },
  {
    path: "/ui-interactions",
    name: "InteractionsPage",
    component: InteractionsPage,
  },
  {
    path: "/ui-link",
    name: "LinkPage",
    component: LinkPage,
  },
  {
    path: "/ui-object-fit",
    name: "ObjectFitPage",
    component: ObjectFitPage,
  },
  {
    path: "/ui-opacity",
    name: "OpacityPage",
    component: OpacityPage,
  },
  {
    path: "/ui-overflow",
    name: "OverflowPage",
    component: OverflowPage,
  },
  {
    path: "/ui-position",
    name: "PositionPage",
    component: PositionPage,
  },
  {
    path: "/ui-shadows",
    name: "ShadowsPage",
    component: ShadowsPage,
  },
  {
    path: "/ui-sizing",
    name: "SizingPage",
    component: SizingPage,
  },
  {
    path: "/ui-spacing",
    name: "SpacingPage",
    component: SpacingPage,
  },
  {
    path: "/ui-text",
    name: "TextPage",
    component: TextPage,
  },
  {
    path: "/ui-text-truncation",
    name: "TextTruncationPage",
    component: TextTruncationPage,
  },
  {
    path: "/ui-vertical-align",
    name: "VerticalAlignmentPage",
    component: VerticalAlignmentPage,
  },
  {
    path: "/ui-vertical-rule",
    name: "VerticalRulePage",
    component: VerticalRulePage,
  },
  {
    path: "/ui-visually-hidden",
    name: "VisuallyHiddenPage",
    component: VisuallyHiddenPage,
  },
  {
    path: "/ui-visibility",
    name: "VisibilityPage",
    component: VisibilityPage,
  },
  {
    path: "/ui-z-index",
    name: "ZIndexPage",
    component: ZIndexPage,
  },
  {
    path: "/cards",
    name: "CardsPage",
    component: CardsPage,
  },
  {
    path: "/gallery",
    name: "GalleryPage",
    component: GalleryPage,
  },
  {
    path: "/maintenance",
    name: "MaintenancePage",
    component: MaintenancePage,
  },
  {
    path: "/notifications",
    name: "NotificationsPage",
    component: NotificationsPage,
  },
  {
    path: "/connected-accounts",
    name: "ConnectedAccountsPage",
    component: ConnectedAccountsPage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/search-result",
    name: "SearchResultPage",
    component: SearchResultPage,
  },
  {
    path: "/account-settings",
    name: "AccountSettingsPage",
    component: AccountSettingsPage,
  },
  {
    path: "/settings-change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage,
  },
  {
    path: "/settings-social-links",
    name: "SocialLinksPage",
    component: SocialLinksPage,
  },
  {
    path: "/settings-privacy-policy",
    name: "SettingsPrivacyPolicyPage",
    component: SettingsPrivacyPolicyPage,
  },
  {
    path: "/blank-page",
    name: "BlankPage",
    component: BlankPage,
  },
  {
    path: "/logout",
    name: "LogoutPage",
    component: LogoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;